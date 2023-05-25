import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatLineModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const routes: Routes = [];

@NgModule({
  declarations: [HasPermissionDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatLineModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [HasPermissionDirective],
})
export class PermissionCustomDirectiveModule {}
