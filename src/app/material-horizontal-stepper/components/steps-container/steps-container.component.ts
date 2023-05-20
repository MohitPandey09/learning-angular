import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-steps-container',
  templateUrl: './steps-container.component.html',
  styleUrls: ['./steps-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsContainerComponent implements OnInit {
  parentForm!: FormGroup;
  formArray!: FormArray;

  ngOnInit(): void {
    this.parentForm = new FormGroup({
      stepsArray: new FormArray([]),
    });
    this.formArray = this.parentForm.get('stepsArray') as FormArray;
    this.initializeSteps();
  }

  initializeSteps(): void {
    this.formArray.push(new FormGroup({}));
    this.formArray.push(new FormGroup({}));
    console.log(this.formArray);
  }

  saveForm(): void {
    console.log(this.parentForm.getRawValue());
  }
}
