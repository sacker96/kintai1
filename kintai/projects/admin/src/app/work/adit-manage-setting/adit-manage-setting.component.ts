import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-adit-manage-setting',
  templateUrl: './adit-manage-setting.component.html',
  styles: []
})
export class AditManageSettingComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AditManageSettingModelFields
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

const AditManageSettingModelFields = [
  {
    key: 'holiday_type',
    type: 'radio',
    templateOptions: {
      label: '休日区分 (平日・公休日・法休日を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'vacation_type',
    type: 'radio',
    templateOptions: {
      label: '休暇区分 (休暇を取得している日にマークを表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'lateleave_type',
    type: 'radio',
    templateOptions: {
      label: '遅早区分 (欠勤・遅刻・早退の情報を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'attendance_status',
    type: 'radio',
    templateOptions: {
      label:
        '勤怠状況 (「休暇区分」と「遅早区分」の内容が統合されて表示されます。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'working_resting',
    type: 'radio',
    templateOptions: {
      label:
        '出勤状況 (未出勤・勤務中・休憩中・退勤済のいずれかを表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'start_upd',
    type: 'radio',
    templateOptions: {
      label: '出勤時刻 (スタッフが出勤打刻した時刻を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'end_upd',
    type: 'radio',
    templateOptions: {
      label: '退勤時刻 (スタッフが退勤打刻した時刻を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'work',
    type: 'radio',
    templateOptions: {
      label: '労働時間 (その日の労働時間を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'over',
    type: 'radio',
    templateOptions: {
      label: '残業時間 (その日の残業時間を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'shift_over',
    type: 'radio',
    templateOptions: {
      label: 'シフト外労働時間 (シフトの時間から外れた労働時間を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'night',
    type: 'radio',
    templateOptions: {
      label: '深夜時間 (深夜時間帯の労働時間を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'rest_upd',
    type: 'radio',
    templateOptions: {
      label: '休憩時間(その日の休憩時間を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'prior_night_rest',
    type: 'radio',
    templateOptions: {
      label:
        '深夜休憩優先(休憩を深夜勤務から引くためのチェックボックスを表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'shift_upd',
    type: 'radio',
    templateOptions: {
      label: 'シフト (シフト開始時刻と終了時刻を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'appling',
    type: 'radio',
    templateOptions: {
      label:
        '修正依頼 (打刻修正申請がある場合にマークが表示されるようにします。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'paid_time',
    type: 'radio',
    templateOptions: {
      label: '有休時間 (有給休暇により時給が発生する時間を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'substitute_time',
    type: 'radio',
    templateOptions: {
      label: '振休時間 (振替休日を利用して休んだ時間を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'compensatory_time',
    type: 'radio',
    templateOptions: {
      label: '代休時間 (代休を利用して休んだ時間を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'special_time',
    type: 'radio',
    templateOptions: {
      label: '特休時間 (予め設定された特休を利用して休んだ時間を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'non_paid_time',
    type: 'radio',
    templateOptions: {
      label:
        '有休以外の休暇 (振休時間・代休時間・特休時間の合計を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'cancel_late',
    type: 'radio',
    templateOptions: {
      label: '遅刻取消 (遅刻を強制的に取り消すチェックボックスを表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'cancel_leave',
    type: 'radio',
    templateOptions: {
      label: '早退取消 (早退を強制的に取り消すチェックボックスを表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'cancel_absence',
    type: 'radio',
    templateOptions: {
      label: '欠勤取消 (欠勤を強制的に取り消すチェックボックスを表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'today_salary',
    type: 'radio',
    templateOptions: {
      label: '概算給与 (労働時間から算出されるその日の概算給与を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'transportation',
    type: 'radio',
    templateOptions: {
      label: '交通費 (日ごとの交通費が設定できる欄を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'manager_comment',
    type: 'radio',
    templateOptions: {
      label: '管理者備考 (自由に入力できるメモ欄を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'manager_comment2',
    type: 'radio',
    templateOptions: {
      label: '管理者備考2(自由に入力できるメモ欄を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'manager_comment3',
    type: 'radio',
    templateOptions: {
      label: '管理者備考3(自由に入力できるメモ欄を表示します。（編集可）)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'staff_comment',
    type: 'radio',
    templateOptions: {
      label:
        'スタッフ備考 (スタッフが申請した出退勤に入力された備考欄を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'adit_comment',
    type: 'radio',
    templateOptions: {
      label: '打刻備考(スタッフが打刻に付与した備考を改行区切りで表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'adit_apply_count',
    type: 'radio',
    templateOptions: {
      label:
        '打刻修正数 (打刻修正申請と管理者による打刻修正の合計件数を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'over_work_comment',
    type: 'radio',
    templateOptions: {
      label: '残業理由 (残業申請時に入力された残業理由を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'late_comment',
    type: 'radio',
    templateOptions: {
      label: '遅刻理由 (遅刻申請時に入力された遅刻理由を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'lock',
    type: 'radio',
    templateOptions: {
      label:
        'ロック (出勤簿での編集を確定させるチェックボックスを表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'edited',
    type: 'radio',
    templateOptions: {
      label: '出勤簿での編集 (出勤簿での編集の有無を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'employee_code',
    type: 'radio',
    templateOptions: {
      label: 'スタッフコード (スタッフコードを表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'shift_groups',
    type: 'radio',
    templateOptions: {
      label:
        'シフトグループ名 (当該日に作成されているシフトのグループ名を表示します。)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  },
  {
    key: 'adit_count',
    type: 'radio',
    templateOptions: {
      label: '打刻回数 (打刻が行われた回数を表示します)',
      required: false,
      options: [
        {
          label: '表示する',
          value: '表示する'
        },
        {
          label: '表示しない',
          value: '表示しない'
        }
      ]
    }
  }
];
