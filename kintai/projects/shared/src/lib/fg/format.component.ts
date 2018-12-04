import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'format',
  template: `
  `,
  styles: []
})
export class FormatComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
