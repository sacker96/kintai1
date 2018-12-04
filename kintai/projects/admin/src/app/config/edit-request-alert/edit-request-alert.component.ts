import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-edit-request-alert',
  templateUrl: './edit-request-alert.component.html',
  styles: []
})
export class EditRequestAlertComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EditRequestAlertModelFields
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

const EditRequestAlertModelFields = [
  {
    key: 'six_hour_over_rest',
    type: 'radio',
    templateOptions: {
      label: '6時間以上勤務状態で45分未満の休憩の場合',
      required: false,
      options: [
        {
          label: '通知',
          value: '通知'
        },
        {
          label: '非通知',
          value: '非通知'
        }
      ]
    }
  },
  {
    key: 'eight_hour_over_rest',
    type: 'radio',
    templateOptions: {
      label: '8時間以上勤務状態で1時間未満の休憩の場合',
      required: false,
      options: [
        {
          label: '通知',
          value: '通知'
        },
        {
          label: '非通知',
          value: '非通知'
        }
      ]
    }
  },
  {
    key: 'start_minutes_over_work',
    type: 'radio',
    templateOptions: {
      label: '出勤状態で翌日になった場合',
      required: false,
      options: [
        {
          label: '通知',
          value: '通知'
        },
        {
          label: '非通知',
          value: '非通知'
        }
      ]
    }
  },
  {
    key: 'absence_check',
    type: 'radio',
    templateOptions: {
      label:
        'シフトがあるのに打刻がない場合（休暇申請が承認されている場合は除く）',
      required: false,
      options: [
        {
          label: '通知',
          value: '通知'
        },
        {
          label: '非通知',
          value: '非通知'
        }
      ]
    }
  },
  {
    key: 'alert_time',
    type: 'select',
    templateOptions: {
      label: '通知時刻',
      placeholder: '通知時刻',
      required: true,
      options: [
        {
          label: '0時',
          value: '0'
        },
        {
          label: '1時',
          value: '1'
        },
        {
          label: '2時',
          value: '2'
        },
        {
          label: '3時',
          value: '3'
        },
        {
          label: '4時',
          value: '4'
        },
        {
          label: '5時',
          value: '5'
        },
        {
          label: '6時',
          value: '6'
        },
        {
          label: '7時',
          value: '7'
        },
        {
          label: '8時',
          value: '8'
        },
        {
          label: '9時',
          value: '9'
        },
        {
          label: '10時',
          value: '10'
        },
        {
          label: '11時',
          value: '11'
        },
        {
          label: '12時',
          value: '12'
        },
        {
          label: '13時',
          value: '13'
        },
        {
          label: '14時',
          value: '14'
        },
        {
          label: '15時',
          value: '15'
        },
        {
          label: '16時',
          value: '16'
        },
        {
          label: '17時',
          value: '17'
        },
        {
          label: '18時',
          value: '18'
        },
        {
          label: '19時',
          value: '19'
        },
        {
          label: '20時',
          value: '20'
        },
        {
          label: '21時',
          value: '21'
        },
        {
          label: '22時',
          value: '22'
        },
        {
          label: '23時',
          value: '23'
        }
      ]
    }
  }
];
