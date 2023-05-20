import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1-form',
  templateUrl: './step1-form.component.html',
  styleUrls: ['./step1-form.component.scss'],
})
export class Step1FormComponent implements OnInit {
  @Input()
  stepOneForm!: FormGroup;

  ngOnInit(): void {
    this.stepOneForm.addControl('firstNameControl', new FormControl());
  }
}
