import {
  Directive,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Roles, View } from '../permission';
import { ScopeService } from '../services/scope.service';
import { PermissionService } from '../services/permission/permission.service';

@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDirective implements OnInit {
  @Input()
  hasPermission!: string;

  @Input()
  hasPermissionView!: View;

  private permissionsService: PermissionService = inject(PermissionService);
  private scopeService: ScopeService = inject(ScopeService);
  private templateRef: TemplateRef<unknown> = inject(TemplateRef);
  private viewContainer: ViewContainerRef = inject(ViewContainerRef);

  ngOnInit(): void {
    this.scopeService.scope$.subscribe((scope: Roles) => {
      this.checkPermissions(scope);
    });
  }

  /**
   * to check permissions for particular user
   */
  checkPermissions(scope: Roles): void {
    this.permissionsService
      .getPermission(scope, this.hasPermissionView, this.hasPermission)
      .subscribe((show: boolean) => this.showElement(show));
  }

  /**
   * to create/clear view element
   * @param show
   */
  showElement(show: boolean): void {
    this.viewContainer.clear();
    if (show) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
