import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step2FormComponent } from './components/step2-form/step2-form.component';
import { Step1FormComponent } from './components/step1-form/step1-form.component';
import { StepsContainerComponent } from './components/steps-container/steps-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: StepsContainerComponent,
  },
];

@NgModule({
  declarations: [
    Step2FormComponent,
    Step1FormComponent,
    StepsContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
  ],
})
export class MaterialHorizontalStepperModule {}
