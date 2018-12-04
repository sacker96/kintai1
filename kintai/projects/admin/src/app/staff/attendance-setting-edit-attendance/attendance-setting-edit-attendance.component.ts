import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-attendance-setting-edit-attendance',
  templateUrl: './attendance-setting-edit-attendance.component.html',
  styles: []
})
export class AttendanceSettingEditAttendanceComponent implements OnInit {
  vm1 = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AttendanceSettingEditAttendanceModelFields
  };

  vm2 = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AttendanceSettingEditAttendanceFormatModelFields
  }

  configs: Config[];

  constructor(
    private procResultService: ProcResultService,
    private configRepository: ConfigRepository
  ) {}

  async ngOnInit() {
    this.configs = await this.configRepository.find({});
    this.configs.forEach(v => {
      if (this.vm1.form.controls[v.name]) {
        this.vm1.form.controls[v.name].setValue(v.val1);
      }
      if (this.vm2.form.controls[v.name]) {
        this.vm2.form.controls[v.name].setValue(v.val1);
      }
    });
  }

  submit() {
    this.procResultService.proc(this.vm1.form.valid && this.vm2.form.valid, () => {
      const configs1 = Object.keys(this.vm1.form.value).map(key => {
        let val = this.vm1.form.value[key];
        if (val == null) {
          val = '';
        }
        return new Config({
          readType: 'config',
          name: key,
          val1: val
        });
      });
      const configs2 = Object.keys(this.vm2.form.value).map(key => {
        let val = this.vm2.form.value[key];
        if (val == null) {
          val = '';
        }
        return new Config({
          readType: 'config',
          name: key,
          val1: val
        });
      });
      const configs = configs1.concat(configs2);
      return this.configRepository.save(configs);
    });
  }
}

const AttendanceSettingEditAttendanceModelFields = [
  {
    key: 'work_time',
    type: 'radio',
    templateOptions: {
      label: '実労働時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'over_time',
    type: 'radio',
    templateOptions: {
      label: '実残業時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'weekday_work_time',
    type: 'radio',
    templateOptions: {
      label: '平日労働時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'weekday_over_time',
    type: 'radio',
    templateOptions: {
      label: '平日残業時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'weekday_night_time',
    type: 'radio',
    templateOptions: {
      label: '平日深夜時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'holiday_work_time',
    type: 'radio',
    templateOptions: {
      label: '休日労働時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'holiday_over_time',
    type: 'radio',
    templateOptions: {
      label: '休日残業時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'holiday_night_time',
    type: 'radio',
    templateOptions: {
      label: '休日深夜時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'deemed_time',
    type: 'radio',
    templateOptions: {
      label: 'みなし残業時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'deemed_over_time',
    type: 'radio',
    templateOptions: {
      label: 'みなし外残業時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'approved_over_time',
    type: 'radio',
    templateOptions: {
      label: '承認済残業時間',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'work_days',
    type: 'radio',
    templateOptions: {
      label: '実働日数',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'weekday_work_days',
    type: 'radio',
    templateOptions: {
      label: '平日出勤日数',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'holiday_work_days',
    type: 'radio',
    templateOptions: {
      label: '休日出勤日数',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'absence_days',
    type: 'radio',
    templateOptions: {
      label: '欠勤日数',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'late_days',
    type: 'radio',
    templateOptions: {
      label: '遅刻回数',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'leave_days',
    type: 'radio',
    templateOptions: {
      label: '早退回数',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  },
  {
    key: 'holiday_remainder_list',
    type: 'radio',
    templateOptions: {
      label: '現時点休暇残日数',
      required: false,
      options: [
        {
          label: '表示',
          value: '表示'
        },
        {
          label: '非表示',
          value: '非表示'
        }
      ]
    }
  }
];

const AttendanceSettingEditAttendanceFormatModelFields = [
  {
    key: 'format1',
    type: 'select',
    templateOptions: {
      label: '項目1',
      placeholder: '項目1',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format2',
    type: 'select',
    templateOptions: {
      label: '項目2',
      placeholder: '項目2',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format3',
    type: 'select',
    templateOptions: {
      label: '項目3',
      placeholder: '項目3',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format4',
    type: 'select',
    templateOptions: {
      label: '項目4',
      placeholder: '項目4',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format5',
    type: 'select',
    templateOptions: {
      label: '項目5',
      placeholder: '項目5',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format6',
    type: 'select',
    templateOptions: {
      label: '項目6',
      placeholder: '項目6',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format7',
    type: 'select',
    templateOptions: {
      label: '項目7',
      placeholder: '項目7',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format8',
    type: 'select',
    templateOptions: {
      label: '項目8',
      placeholder: '項目8',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format9',
    type: 'select',
    templateOptions: {
      label: '項目9',
      placeholder: '項目9',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  },
  {
    key: 'format10',
    type: 'select',
    templateOptions: {
      label: '項目10',
      placeholder: '項目10',
      required: false,
      options: [
        { label: '(非表示)', value: '(非表示)' },
        { label: 'シフト開始', value: 'シフト開始' },
        { label: 'シフト終了', value: 'シフト終了' },
        { label: '実働出勤', value: '実働出勤' },
        { label: '実働退勤', value: '実働退勤' },
        { label: '労働時間', value: '労働時間' },
        { label: 'シフト外労働時間', value: 'シフト外労働時間' },
        { label: '残業時間', value: '残業時間' },
        { label: '深夜時間', value: '深夜時間' },
        { label: '休憩時間', value: '休憩時間' },
        { label: '有休時間', value: '有休時間' },
        { label: '勤怠状況', value: '勤怠状況' },
        { label: '打刻詳細', value: '打刻詳細' },
        { label: '承認済残業時間', value: '承認済残業時間' }
      ]
    }
  }
];
