import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-over-work-applied-settings',
  templateUrl: './over-work-applied-settings.component.html',
  styles: []
})
export class OverWorkAppliedSettingsComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: OverWorkAppliedModelFields
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

const OverWorkAppliedModelFields = [
  {
    key: 'logic',
    type: 'select',
    templateOptions: {
      label: '自動退出条件',
      placeholder: '自動退出条件',
      required: false,
      options: [
        {
          label: '指定時刻に',
          value: '指定時刻に'
        },
        {
          label: '出勤打刻から数えて、一定時間経過後に',
          value: '出勤打刻から数えて、一定時間経過後に'
        }
      ]
    }
  },
  {
    key: 'time',
    type: 'time',
    templateOptions: {
      label: '対象時間',
      required: false
    }
  },
  {
    key: 'leave_after_adit_priority',
    type: 'select',
    templateOptions: {
      label: '自動退出後の打刻',
      placeholder: '自動退出後の打刻',
      required: false,
      options: [
        {
          label: '承認を必須とする',
          value: '承認を必須とする'
        },
        {
          label: '手動での打刻を優先適応',
          value: '手動での打刻を優先適応'
        },
        {
          label: '手動での打刻はできない',
          value: '手動での打刻はできない'
        }
      ]
    }
  }
];
