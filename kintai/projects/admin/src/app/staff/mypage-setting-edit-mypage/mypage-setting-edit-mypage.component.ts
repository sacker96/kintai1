import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConfigRepository } from 'projects/shared/src/lib/infra/configRepository';
import { Config } from 'core/entity/config';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-mypage-setting-edit-mypage',
  templateUrl: './mypage-setting-edit-mypage.component.html',
  styles: []
})
export class MypageSettingEditMypageComponent implements OnInit {
  vm1 = {
    form: new FormGroup({}),
    model: {} as any,
    fields: MypageSettingEditMypageMobileModelFields
  };
  vm2 = {
    form: new FormGroup({}),
    model: {} as any,
    fields: MypageSettingEditMypagePcModelFields
  };

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

const MypageSettingEditMypageMobileModelFields = [
  {
    key: 'm_menu_1',
    type: 'radio',
    templateOptions: {
      label: '出勤簿',
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
    key: 'm_menu_3',
    type: 'radio',
    templateOptions: {
      label: '打刻修正',
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
    key: 'm_menu_6',
    type: 'radio',
    templateOptions: {
      label: '休暇申請',
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
    key: 'm_menu_14',
    type: 'radio',
    templateOptions: {
      label: '休日出勤申請',
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
    key: 'm_menu_7',
    type: 'radio',
    templateOptions: {
      label: '残業申請',
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
    key: 'm_menu_13',
    type: 'radio',
    templateOptions: {
      label: '早出残業申請',
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
    key: 'm_menu_10',
    type: 'radio',
    templateOptions: {
      label: 'メールアドレス変更',
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

const MypageSettingEditMypagePcModelFields = [
  {
    key: 'pc_menu_1',
    type: 'radio',
    templateOptions: {
      label: '出勤簿',
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
    key: 'pc_menu_3',
    type: 'radio',
    templateOptions: {
      label: '打刻修正',
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
    key: 'pc_menu_5',
    type: 'radio',
    templateOptions: {
      label: '休暇申請',
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
    key: 'pc_menu_13',
    type: 'radio',
    templateOptions: {
      label: '休日出勤申請',
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
    key: 'pc_menu_6',
    type: 'radio',
    templateOptions: {
      label: '残業申請',
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
    key: 'pc_menu_12',
    type: 'radio',
    templateOptions: {
      label: '早出残業申請',
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
    key: 'pc_menu_7',
    type: 'radio',
    templateOptions: {
      label: 'スタッフ設定',
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
    key: 'pc_menu_9',
    type: 'radio',
    templateOptions: {
      label: 'パスワード設定',
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
    key: 'pc_menu_10',
    type: 'radio',
    templateOptions: {
      label: 'メールアドレス変更',
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
