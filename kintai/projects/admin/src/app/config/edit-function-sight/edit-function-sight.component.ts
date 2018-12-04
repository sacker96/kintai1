import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-edit-function-sight',
  templateUrl: './edit-function-sight.component.html',
  styles: []
})
export class EditFunctionSightComponent implements OnInit {
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

const OptionModelFields = [
  {
    key: 'day_begin_round_unit',
    type: 'select',
    templateOptions: {
      label: '出勤時刻のまるめ単位',
      placeholder: '出勤時刻のまるめ単位',
      required: false,
      options: [
        {
          label: '1',
          value: '1'
        },
        {
          label: '5',
          value: '5'
        },
        {
          label: '10',
          value: '10'
        },
        {
          label: '15',
          value: '15'
        },
        {
          label: '30',
          value: '30'
        },
        {
          label: '60',
          value: '60'
        }
      ]
    }
  },
  {
    key: 'day_end_round_unit',
    type: 'select',
    templateOptions: {
      label: '退勤時刻のまるめ単位',
      placeholder: '退勤時刻のまるめ単位',
      required: false,
      options: [
        {
          label: '1',
          value: '1'
        },
        {
          label: '5',
          value: '5'
        },
        {
          label: '10',
          value: '10'
        },
        {
          label: '15',
          value: '15'
        },
        {
          label: '30',
          value: '30'
        },
        {
          label: '60',
          value: '60'
        }
      ]
    }
  },
  {
    key: 'day_round_unit',
    type: 'select',
    templateOptions: {
      label: '合計勤務時間のまるめ',
      placeholder: '合計勤務時間のまるめ',
      required: false,
      options: [
        {
          label: '1',
          value: '1'
        },
        {
          label: '5',
          value: '5'
        },
        {
          label: '10',
          value: '10'
        },
        {
          label: '15',
          value: '15'
        },
        {
          label: '30',
          value: '30'
        },
        {
          label: '60',
          value: '60'
        }
      ]
    }
  },
  {
    key: 'start_year',
    type: 'date',
    templateOptions: {
      label: '適用開始日',
      required: false
    }
  },
  {
    key: 'csv_decimal_cast',
    type: 'radio',
    templateOptions: {
      label: 'CSVダウンロード項目値の計算方法 ',
      required: false,
      options: [
        {
          label: '四捨五入',
          value: '四捨五入'
        },
        {
          label: '切上',
          value: '切上'
        },
        {
          label: '切捨',
          value: '切捨'
        }
      ]
    }
  },
  {
    key: 'csv_to_ym',
    type: 'radio',
    templateOptions: {
      label: '出勤簿一括DL　複数か月分同時出力する ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'display_defacto_on_attendance',
    type: 'radio',
    templateOptions: {
      label: '出勤簿画面にてみなし勤務日（略称）を確認する',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'mypage_late_canceling',
    type: 'radio',
    templateOptions: {
      label: '遅刻理由承認時の処遇 ',
      required: false,
      options: [
        {
          label: '遅刻非表示',
          value: '遅刻非表示'
        },
        {
          label: '遅刻時間取消',
          value: '遅刻時間取消'
        },
        {
          label: '理由確認のみ',
          value: '理由確認のみ'
        },
        {
          label: '遅刻取消',
          value: '遅刻取消'
        }
      ]
    }
  },
  {
    key: 'shift_just_adit_late',
    type: 'radio',
    templateOptions: {
      label: 'シフト開始時間丁度の打刻は遅刻とみなす ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_insert_admin_only',
    type: 'radio',
    templateOptions: {
      label: '出入詳細でグループ管理者は承認処理のみ可能にする ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_group_changable',
    type: 'radio',
    templateOptions: {
      label: 'グループ掛け持ち者の移動後の出勤打刻 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'cannot_close_unprocessed',
    type: 'radio',
    templateOptions: {
      label: '対応漏れがある日の締め禁止 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'over_work_display_apply_sum',
    type: 'radio',
    templateOptions: {
      label: '残業申請の申請時間計',
      required: false
    }
  },
  {
    key: 'holidayworking_apply',
    type: 'radio',
    templateOptions: {
      label: '休日出勤時に自動付与する休暇 ',
      required: false,
      options: [
        {
          label: 'しない',
          value: 'しない'
        },
        {
          label: '代休',
          value: '代休'
        },
        {
          label: '振休',
          value: '振休'
        }
      ]
    }
  },
  {
    key: 'block_holiday_holiday_apply',
    type: 'radio',
    templateOptions: {
      label: '休日も休暇申請が可能 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'holiday_log_check_paid',
    type: 'radio',
    templateOptions: {
      label: '有休残日数不足の場合の休暇使用を不可にする',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'holiday_log_check_compensatory',
    type: 'radio',
    templateOptions: {
      label: '代休残日数不足の場合の休暇使用を不可にする ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'holiday_log_check_substitute',
    type: 'radio',
    templateOptions: {
      label: '振休残日数不足の場合の休暇使用を不可にする ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'holiday_log_check_special',
    type: 'radio',
    templateOptions: {
      label: 'リフレッシュ残日数不足の場合の休暇使用を不可にする ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'substitute_must_needs_holiday',
    type: 'radio',
    templateOptions: {
      label: '休日出勤申請で振休取得時の休暇日指定 ',
      required: false,
      options: [
        {
          label: '任意',
          value: '任意'
        },
        {
          label: '必須',
          value: '必須'
        }
      ]
    }
  },
  {
    key: 'holiday_work_unselectable_nan',
    type: 'radio',
    templateOptions: {
      label: '休日出勤申請で「（休日出勤申請のみ）」を表示 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'overwork_apply_use_start',
    type: 'radio',
    templateOptions: {
      label: '残業申請に残業開始時刻を利用',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'mypage_overwork_to',
    type: 'radio',
    templateOptions: {
      label: '残業申請に期間指定を行う ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'training',
    type: 'radio',
    templateOptions: {
      label: '研修期間の設定 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'mailaddress_manage',
    type: 'radio',
    templateOptions: {
      label: '管理者がメールアドレスを管理する ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'password_manage',
    type: 'radio',
    templateOptions: {
      label: '管理者がパスワードを管理する ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'retirement_procedure',
    type: 'radio',
    templateOptions: {
      label: '退職権限 ',
      required: false,
      options: [
        {
          label: '管理者全員',
          value: '管理者全員'
        },
        {
          label: '全権限管理者のみ',
          value: '全権限管理者のみ'
        }
      ]
    }
  },
  {
    key: 'delete_employee_force_by_client',
    type: 'radio',
    templateOptions: {
      label: 'スタッフの[完全消去]ボタンの表示',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'delete_idm_when_retire',
    type: 'radio',
    templateOptions: {
      label: '退職時にカード・指静脈情報を削除 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'anytime_setting',
    type: 'radio',
    templateOptions: {
      label: '『労働時間の抽出設定』メニューを利用する ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'option_change_by_group_manager',
    type: 'radio',
    templateOptions: {
      label: '打刻情報の一括登録機能',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'download_by_utf8',
    type: 'radio',
    templateOptions: {
      label: 'ダウンロード文字コード ',
      required: false,
      options: [
        {
          label: 'UTF-8',
          value: 'UTF-8'
        },
        {
          label: 'SJIS',
          value: 'SJIS'
        }
      ]
    }
  },
  {
    key: 'display_daily_errors',
    type: 'radio',
    templateOptions: {
      label: '打刻エラーの表示 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'top_alert_with_mail',
    type: 'radio',
    templateOptions: {
      label: '「TOP新着状況」のメール通知 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_unmatch_error',
    type: 'radio',
    templateOptions: {
      label: '打刻漏れ・打刻間違い★ ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'adit_shiftin_and_absence',
    type: 'radio',
    templateOptions: {
      label: 'シフトはあるが未打刻★ ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_holiday_work',
    type: 'radio',
    templateOptions: {
      label: '休暇を取得した日の出勤★ ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_holidayworking_work',
    type: 'radio',
    templateOptions: {
      label: '申請なしの休日出勤★ ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_overwork_error',
    type: 'radio',
    templateOptions: {
      label: '申請なしの残業★ ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: '深夜のみ',
          value: '深夜のみ'
        }
      ]
    }
  },
  {
    key: 'adit_noshift_work',
    type: 'radio',
    templateOptions: {
      label: 'シフトのない日の出勤★ ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_outof_shift_work',
    type: 'radio',
    templateOptions: {
      label: 'シフトと被らない時間の労働★',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_long_rest',
    type: 'radio',
    templateOptions: {
      label: '休憩時間の超過★ ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_late_or_leave_error',
    type: 'radio',
    templateOptions: {
      label: '遅刻、早退をエラーとする★',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'top_over_agreement_thirtysix',
    type: 'radio',
    templateOptions: {
      label: '36協定の超過★ ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_not_apply',
    type: 'radio',
    templateOptions: {
      label: '未承認打刻★ ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'newcommer_shift',
    type: 'radio',
    templateOptions: {
      label: '未承認のシフト申請★',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'newcommer_holiday',
    type: 'radio',
    templateOptions: {
      label: '未承認の休暇申請★ ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'newcommer_holidayworking',
    type: 'radio',
    templateOptions: {
      label: '未承認の休日出勤申請★ ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'newcommer_overwork',
    type: 'radio',
    templateOptions: {
      label: '未承認の残業申請★',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'inform_from_admin',
    type: 'radio',
    templateOptions: {
      label: '「全権限管理者からのお知らせ」欄を利用する ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'top_link_stamped',
    type: 'radio',
    templateOptions: {
      label: 'Web打刻画面へのリンクを表示 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'stamped_not_needs_password',
    type: 'radio',
    templateOptions: {
      label: 'Web打刻時にパスワード入力を行わなくても打刻可能とする',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'top_link_todays_work_state',
    type: 'radio',
    templateOptions: {
      label: '本日の勤務状況へのリンクを表示 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'group_manager_dounloadable',
    type: 'radio',
    templateOptions: {
      label: 'すべての管理者で「アプリダウンロード」ボタンを表示する ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'pc_my_page',
    type: 'radio',
    templateOptions: {
      label: 'PCマイページ ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: '',
    type: 'link',
    templateOptions: {
      label: 'PCマイページ出勤簿項目の編集 ',
      required: false
    }
  },
  {
    key: '',
    type: 'link',
    templateOptions: {
      label: 'PCマイページのIPアドレス制限 ',
      required: false
    }
  },
  {
    key: 'my_page_adit_method',
    type: 'radio',
    templateOptions: {
      label: '各種マイページでの打刻時・Web打刻時の区分判別',
      required: false,
      options: [
        {
          label: '自動判別',
          value: '自動判別'
        },
        {
          label: '選択',
          value: '選択'
        },
        {
          label: '退勤のみ選択',
          value: '退勤のみ選択'
        }
      ]
    }
  },
  {
    key: 'my_page_stamp',
    type: 'radio',
    templateOptions: {
      label: 'PCマイページの打刻機能 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'pcmypage_display_current_status',
    type: 'radio',
    templateOptions: {
      label: 'PCマイページ打刻画面の勤務状況表示 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'adit_send_requestmail',
    type: 'radio',
    templateOptions: {
      label: '打刻修正申請の通知機能 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'mypage_mailtoboss_selectable_other_group',
    type: 'radio',
    templateOptions: {
      label: '「上長にメール」でサブグループ管理者の選択可否 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'mypage_adit',
    type: 'radio',
    templateOptions: {
      label: '[モバイルマイページ - 通常打刻]管理者による打刻承認を必須とする',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'gps_adit',
    type: 'radio',
    templateOptions: {
      label: '[モバイルマイページ - GPS打刻]管理者による打刻承認を必須とする',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: '位置情報が取得できなかった場合のみ',
          value: '位置情報が取得できなかった場合のみ'
        }
      ]
    }
  },
  {
    key: 'mypage_adit_by_servertime',
    type: 'radio',
    templateOptions: {
      label: '[モバイルマイページ - 打刻]打刻を必ず日本時間で行う',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'pcmypage_adit_needs_approve',
    type: 'radio',
    templateOptions: {
      label: '[PCマイページ - 打刻]管理者による打刻承認を必須とする',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'mypage_salary',
    type: 'radio',
    templateOptions: {
      label: '[モバイルマイページ - TOP]概算給与表示',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'mypage_late_apply',
    type: 'radio',
    templateOptions: {
      label: '遅刻理由の申請機能 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'mypage_attendance_holiday_detail',
    type: 'radio',
    templateOptions: {
      label: '出勤簿の休暇残日数表示 ',
      required: false,
      options: [
        {
          label: 'シンプル',
          value: 'シンプル'
        },
        {
          label: '詳細',
          value: '詳細'
        }
      ]
    }
  },
  {
    key: 'past_date_shift_confirm',
    type: 'radio',
    templateOptions: {
      label: '過去日へのシフト申請時の警告表示 ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'holiday_needs_reason',
    type: 'radio',
    templateOptions: {
      label: '休暇申請の理由を必須とする ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'holiday_working_needs_reason',
    type: 'radio',
    templateOptions: {
      label: '休日出勤申請の理由を必須とする ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'over_work_needs_reason',
    type: 'radio',
    templateOptions: {
      label: '残業申請の理由を必須とする ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'over_work_early_needs_reason',
    type: 'radio',
    templateOptions: {
      label: '早出残業申請の理由を必須とする ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'adit_modify_needs_reason',
    type: 'radio',
    templateOptions: {
      label: '打刻修正申請の備考を必須とする',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'shift_pattern_request_needs_reason',
    type: 'radio',
    templateOptions: {
      label: 'シフト申請の備考を必須とする',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'mypage_pc_otp',
    type: 'radio',
    templateOptions: {
      label: '[PCマイページ]ワンタイムパスワードの利用',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'mypage_mobile_otp',
    type: 'radio',
    templateOptions: {
      label: '[モバイルマイページ]ワンタイムパスワードの利用',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'manager_employee_connect',
    type: 'radio',
    templateOptions: {
      label: '管理者とスタッフを紐付ける ',
      required: false,
      options: [
        {
          label: 'ON',
          value: 'ON'
        },
        {
          label: 'OFF',
          value: 'OFF'
        }
      ]
    }
  },
  {
    key: 'replay_to_managers',
    type: 'radio',
    templateOptions: {
      label: 'ジョブカンメールのグループ管理者宛て返信機',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'inform_work',
    type: 'radio',
    templateOptions: {
      label: '『出勤状況メール通知先設定』メニューを利用する ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'holiday_time_base',
    type: 'radio',
    templateOptions: {
      label: '休暇取得時の「休暇時間」の根拠（全日休暇のみに適用）',
      required: false,
      options: [
        {
          label: '時間休の消化量算出設定',
          value: '時間休の消化量算出設定'
        },
        {
          label: 'シフトから算出',
          value: 'シフトから算出'
        }
      ]
    }
  },
  {
    key: 'merge_work_paidholiday',
    type: 'radio',
    templateOptions: {
      label: '[有休]を労働時間に加算 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'overwork_with_paidholiday',
    type: 'radio',
    templateOptions: {
      label: '[有休]を残業時間に考慮 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'merge_work_compensatory',
    type: 'radio',
    templateOptions: {
      label: '[代休]を労働時間に加算 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'overwork_with_compensatory',
    type: 'radio',
    templateOptions: {
      label: '[代休]を残業時間に考慮 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'merge_work_substitute',
    type: 'radio',
    templateOptions: {
      label: '[振休]を労働時間に加算',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'overwork_with_substitute',
    type: 'radio',
    templateOptions: {
      label: '[振休]を残業時間に考慮 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'merge_work_special',
    type: 'radio',
    templateOptions: {
      label: '[リフレッシュ]を労働時間に加算 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  },
  {
    key: 'overwork_with_special',
    type: 'radio',
    templateOptions: {
      label: '[リフレッシュ]を残業時間に考慮 ',
      required: false,
      options: [
        {
          label: 'OFF',
          value: 'OFF'
        },
        {
          label: 'ON',
          value: 'ON'
        }
      ]
    }
  }
];
