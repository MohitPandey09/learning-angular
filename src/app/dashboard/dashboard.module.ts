import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { PermissionCustomDirectiveModule } from '../permission-custom-directive/permission-custom-directive.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'todo',
        loadChildren: () =>
          import('../todo-declarative/todo-declarative.module').then(
            (module) => module.TodoDeclarativeModule,
          ),
      },
      {
        path: 'stepper',
        loadChildren: () =>
          import(
            '../material-horizontal-stepper/material-horizontal-stepper.module'
          ).then((module) => module.MaterialHorizontalStepperModule),
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    PermissionCustomDirectiveModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ],
})
export class DashboardModule {}
