import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @Input()
  rows: any;
  @Input()
  columns: any;
  @Input()
  rowHeight: any = 'auto';

  messages = {
    emptyMessage: '表示データがありません。',
    totalMessage: '件'
  };

  constructor() {

  }

  ngOnInit() {}
}
