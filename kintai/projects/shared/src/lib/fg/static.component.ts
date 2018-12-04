import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'static',
  template: `
    <div>
      <mat-form-field>
        <input placeholder="{{to.label}}" matInput [formControl]="formControl" readonly>
      </mat-form-field>
    </div>
  `,
  styles: []
})
export class StaticComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
