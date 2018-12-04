import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'staff',
  template: `
    <mat-form-field style="width:100%;">
      <input type="text" placeholder="スタッフ名" aria-label="スタッフ名" matInput [formControl]="formControl" [formlyAttributes]="field" [matAutocomplete]="auto">
      <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
        <mat-option *ngFor="let option of staffList" [value]="option">
          {{option}}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `,
  styles: []
})
export class StaffComponent extends FieldType implements OnInit {
  staffList = [];

  constructor() {
    super();
  }

  ngOnInit() {}
}
