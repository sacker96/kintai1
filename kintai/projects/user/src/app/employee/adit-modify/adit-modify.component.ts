import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';
import { AditRepository } from 'projects/shared/src/lib/infra/aditRepository';
import { TimeOnlyPipe } from 'projects/shared/src/lib/pipe/time-only.pipe';

@Component({
  selector: 'app-adit-modify',
  templateUrl: './adit-modify.component.html',
  styles: []
})
export class AditModifyComponent implements OnInit {
  @ViewChild('action1Template')
  action1Template: TemplateRef<any>;
  @ViewChild('action2Template')
  action2Template: TemplateRef<any>;

  filter = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AditModifyFilterFields
  };

  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AditModelFields
  };

  columns: any;
  rows: any;

  constructor(
    private procResultService: ProcResultService,
    private aditRepository: AditRepository
  ) {}

  async ngOnInit() {
    this.filter.model = {
      date: moment()
    };
    this.columns = [
      { prop: 'type', name: '打刻区分' },
      { prop: 'aditAt', name: '時刻', pipe: new TimeOnlyPipe('ja') },
      { prop: 'method', name: '打刻方法' },
      { prop: 'notice', name: '打刻備考等' },
      { prop: 'action', name: '修正', cellTemplate: this.action1Template },
      { prop: 'action', name: '削除', cellTemplate: this.action2Template }
    ];
    this.rows = await this.getAditByDate(moment());
  }

  submit() {
    this.procResultService.filter(this.filter.form.valid, async () =>
      this.rows = await this.getAditByDate(moment(this.filter.model.date))
    );
  }

  submit2() {
    this.vm.model = {};
  }

  modify(row: any) {
    console.log(row);
    this.vm.model = row;
  }

  remove(row: any) {
    console.log(row);
    this.vm.model = row;
  }

  getAditByDate(day: moment.Moment) {
    const date = day.format('Y/M/DD');
    return this.aditRepository.findByDate({ date: date });
  }
}

const AditModifyFilterFields = [
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: '指定日',
      required: false
    }
  }
];

const AditModelFields = [
  {
    key: 'aditAt',
    type: 'time',
    templateOptions: {
      label: '時刻',
      required: false
    }
  },
  {
    key: 'notice',
    type: 'textarea',
    templateOptions: {
      label: '備考',
      required: false,
      rows: '2'
    }
  }
];
