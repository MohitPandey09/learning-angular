import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step2-form',
  templateUrl: './step2-form.component.html',
  styleUrls: ['./step2-form.component.scss'],
})
export class Step2FormComponent implements OnInit {
  @Input()
  stepTwoForm!: FormGroup;

  ngOnInit(): void {
    this.stepTwoForm.addControl('secondControl', new FormControl());
  }
}
