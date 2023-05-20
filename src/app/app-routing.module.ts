import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'stepper',
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./todo-declarative/todo-declarative.module').then(
        (module) => module.TodoDeclarativeModule,
      ),
  },
  {
    path: 'stepper',
    loadChildren: () =>
      import(
        './material-horizontal-stepper/material-horizontal-stepper.module'
      ).then((module) => module.MaterialHorizontalStepperModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
