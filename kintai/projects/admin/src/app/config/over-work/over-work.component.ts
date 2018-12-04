import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-over-work',
  templateUrl: './over-work.component.html',
  styles: []
})
export class OverWorkComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: OptionModelFields
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
        } catch(e) {
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

const OptionModelFields = [
  {
    key: 'agreed_type',
    type: 'select',
    templateOptions: {
      label: '所定労働時間',
      placeholder: '所定労働時間',
      required: false,
      options: [
        {
          label: '日計算',
          value: '日計算'
        },
        {
          label: '週計算',
          value: '週計算'
        },
        {
          label: '月計算',
          value: '月計算'
        },
        {
          label: '年計算',
          value: '年計算'
        }
      ]
    }
  },
  {
    key: 'agreed_day',
    type: 'timerange',
    templateOptions: {
      label: '1日につき',
      required: false
    }
  },
  {
    key: 'logic_type',
    type: 'select',
    templateOptions: {
      label: '残業手当／時間',
      placeholder: '残業手当／時間',
      required: false,
      options: [
        {
          label: '日計算',
          value: '日計算'
        },
        {
          label: '日計算（曜日毎）',
          value: '日計算（曜日毎）'
        },
        {
          label: '日または週(多い方)',
          value: '日または週(多い方)'
        },
        {
          label: '時刻指定',
          value: '時刻指定'
        },
        {
          label: '週計算',
          value: '週計算'
        },
        {
          label: '月計算',
          value: '月計算'
        },
        {
          label: '月計算(フレックス)',
          value: '月計算(フレックス)'
        },
        {
          label: '年計算',
          value: '年計算'
        },
        {
          label: '年計算(フレックス)',
          value: '年計算(フレックス)'
        },
        {
          label: '申請',
          value: '申請'
        }
      ]
    }
  },
  {
    key: 'overwork_rate',
    type: 'input',
    templateOptions: {
      label: '割増',
      required: false
    }
  },
  {
    key: 'night_rate',
    type: 'input',
    templateOptions: {
      label: '深夜手当／時間',
      required: false
    }
  },
  {
    key: 'night_start',
    type: 'time',
    templateOptions: {
      label: '深夜対象（開始）',
      required: false
    }
  },
  {
    key: 'night_end',
    type: 'time',
    templateOptions: {
      label: '深夜対象（終了）',
      required: false
    }
  }
];
