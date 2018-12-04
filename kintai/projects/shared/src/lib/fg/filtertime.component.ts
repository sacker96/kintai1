import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'filtertime',
  template: `
    <p>
    </p>
  `,
  styles: []
})
export class FiltertimeComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
