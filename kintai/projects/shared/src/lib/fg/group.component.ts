import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'fg-group',
  template: `
    <label class="group-label">
      <mat-label *ngIf="to.label">
        {{ to.label }}
        <span *ngIf="to.required" class="mat-form-field-required-marker">*</span>
      </mat-label>
    </label>
    <formly-form
      [fields]="field.fieldGroup"
      [isRoot]="false"
      [model]="field.model"
      [form]="field.formControl"
      [options]="options"
      [ngClass]="field.fieldGroupClassName"
    >
      <ng-content></ng-content>
    </formly-form>
  `,
  styles: []
})
export class GroupComponent extends FieldType {
  constructor() {
    super();
  }
}
