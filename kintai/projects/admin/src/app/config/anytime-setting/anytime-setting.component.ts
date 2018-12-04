import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-anytime-setting',
  templateUrl: './anytime-setting.component.html',
  styles: []
})
export class AnytimeSettingComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AnytimeSettingModelFields
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

const AnytimeSettingModelFields = [
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: '名前',
      required: false
    }
  },
  {
    key: 'start',
    type: 'time',
    templateOptions: {
      label: '開始時刻',
      required: false
    }
  },
  {
    key: 'end',
    type: 'time',
    templateOptions: {
      label: '終了時刻',
      required: false
    }
  },
  {
    key: 'logic',
    type: 'select',
    templateOptions: {
      label: '平日/休日条件',
      placeholder: '平日/休日条件',
      required: false,
      options: [
        {
          label: '平日のみ',
          value: '平日のみ'
        },
        {
          label: '休日のみ',
          value: '休日のみ'
        },
        {
          label: '公休日のみ',
          value: '公休日のみ'
        },
        {
          label: '法定休日のみ',
          value: '法定休日のみ'
        },
        {
          label: '平日および公休日のみ',
          value: '平日および公休日のみ'
        },
        {
          label: '平日および法定休日のみ',
          value: '平日および法定休日のみ'
        },
        {
          label: '休日の前日（平日のみ）',
          value: '休日の前日（平日のみ）'
        }
      ]
    }
  }
];
