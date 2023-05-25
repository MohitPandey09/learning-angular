import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {
  AdminPermission,
  ManagerPermission,
  Roles,
  StaffPermission,
} from '../permission';
import { ScopeService } from '../services/scope.service';

@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDirective implements OnInit {
  @Input()
  hasPermission!: string;

  scope!: string;
  canShow = false;

  constructor(
    private scopeService: ScopeService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  ngOnInit(): void {
    this.scopeService.scope$.subscribe((changedScope: Roles) => {
      this.scope = changedScope;
      this.checkPermissions();
    });
  }

  /**
   * to check permissions for particular user
   */
  checkPermissions(): void {
    switch (this.scope) {
      case Roles.ADMIN:
        this.canShow = AdminPermission.includes(this.hasPermission);
        this.showElement(this.canShow);
        break;
      case Roles.MANAGER:
        this.canShow = ManagerPermission.includes(this.hasPermission);
        this.showElement(this.canShow);
        break;
      case Roles.STAFF:
        this.canShow = StaffPermission.includes(this.hasPermission);
        this.showElement(this.canShow);
        break;
      default:
        this.showElement(this.canShow);
        break;
    }
  }

  /**
   * to create/clear view element
   * @param canShow
   */
  showElement(canShow: boolean): void {
    this.viewContainer.clear();
    if (canShow) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
