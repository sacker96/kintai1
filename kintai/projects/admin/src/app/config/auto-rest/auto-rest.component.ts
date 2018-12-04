import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-auto-rest',
  templateUrl: './auto-rest.component.html',
  styles: []
})
export class AutoRestComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AutoRestModelFields
  };

  configs: Config[];

  constructor(
    private procResultService: ProcResultService,
    private configRepository: ConfigRepository
  ) {}

  async ngOnInit() {
    this.configs = await this.configRepository.find({});
    this.configs.forEach(v => {
      if (this.vm.form.controls[v.name]) {
        try {
          const obj = JSON.parse(v.val1);
          this.vm.form.controls[v.name].setValue(obj);
        } catch (e) {
          this.vm.form.controls[v.name].setValue(v.val1);
        }
      }
    });
  }

  submit() {
    this.procResultService.proc(this.vm.form.valid, () => {
      const configs = Object.keys(this.vm.form.value).map(key => {
        let val = this.vm.form.value[key];
        if (typeof val === 'object') {
          val = JSON.stringify(val);
        }
        if (val == null) {
          val = '';
        }
        return new Config({
          readType: 'config',
          name: key,
          val1: val
        });
      });
      return this.configRepository.save(configs);
    });
  }
}

const AutoRestModelFields = [
  {
    key: 'logic',
    type: 'time',
    templateOptions: {
      label: '自動休憩条件',
      required: false
    }
  },
  {
    key: 'rest',
    type: 'time',
    templateOptions: {
      label: '自動休憩時間',
      required: false
    }
  },
  {
    key: 'priority',
    type: 'select',
    templateOptions: {
      label: '優先的に休憩を引く時間',
      placeholder: '優先的に休憩を引く時間',
      required: false,
      options: [
        {
          label: '普通勤務優先',
          value: '普通勤務優先'
        },
        {
          label: '深夜労働優先',
          value: '深夜労働優先'
        }
      ]
    }
  },
  {
    key: 'calc',
    type: 'radio',
    templateOptions: {
      label: '自動休憩と打刻による休憩の計算方法',
      required: false,
      options: [
        {
          label: 'どちらか大きい方を採用',
          value: 'どちらか大きい方を採用'
        },
        {
          label: '合算',
          value: '合算'
        }
      ]
    }
  }
];
