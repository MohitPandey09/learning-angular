import { Component } from '@angular/core';
import { Roles } from '../../../permission-custom-directive/permission';
import { $enum } from 'ts-enum-util';
import { ScopeService } from '../../../permission-custom-directive/services/scope.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scopeValues: Roles[] = $enum(Roles).getValues();
  scope$: Observable<Roles> = this.scopeService.scope$;

  constructor(private scopeService: ScopeService) {}

  /**
   * to set scope state
   * @param scope
   */
  setScope(scope: Roles): void {
    this.scopeService.setScope(scope);
  }
}
