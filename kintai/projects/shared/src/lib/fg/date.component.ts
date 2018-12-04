import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'date',
  template: `
    <mat-form-field>
      <input matInput [matDatepicker]="picker1" [formControl]="formControl" [formlyAttributes]="field" placeholder="{{to.label}}">
      <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
      <mat-datepicker #picker1></mat-datepicker>
    </mat-form-field>
  `,
  styles: []
})
export class DateComponent extends FieldType {
}
