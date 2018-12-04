import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-auto-paid-holiday-setting',
  templateUrl: './auto-paid-holiday-setting.component.html',
  styles: []
})
export class AutoPaidHolidaySettingComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AutoPaidHolidaySettingModelFields
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

const AutoPaidHolidaySettingModelFields = [
  {
    key: 'use',
    type: 'radio',
    templateOptions: {
      label: '有休自動付与',
      required: false,
      options: [
        {
          label: '利用しない',
          value: '利用しない'
        },
        {
          label: '利用する',
          value: '利用する'
        }
      ]
    }
  }
];
