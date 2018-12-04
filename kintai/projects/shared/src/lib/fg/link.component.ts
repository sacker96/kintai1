import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'link',
  template: `
    <p>
      {{to.label}}
    </p>
  `,
  styles: []
})
export class LinkComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
