import { Component } from '@angular/core';
import { ScopeService } from '../../../permission-custom-directive/services/scope.service';
import { Observable } from 'rxjs';
import { Roles } from '../../../permission-custom-directive/permission';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  scope$: Observable<Roles> = this.scopeService.scope$;
  constructor(public scopeService: ScopeService) {}
}
