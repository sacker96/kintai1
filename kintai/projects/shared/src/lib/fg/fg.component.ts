import { Component, OnInit, Input, Output } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fg',
  templateUrl: './fg.component.html',
  styleUrls: ['./fg.component.scss']
})
export class FgComponent implements OnInit {
  @Input() model: any;
  @Input() fields: FormlyFieldConfig[];
  @Input() form: FormGroup;

  options: FormlyFormOptions = {};

  constructor() {}

  ngOnInit() {}
}
