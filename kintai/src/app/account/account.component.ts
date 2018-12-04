import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Account } from 'core/entity/account';
import { getAccount } from 'core/usecase/master/getAccount';
import { AccountRepository } from 'projects/shared/src/lib/infra/accountRepository';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  form = new FormGroup({});
  model: any = {};
  fields = accountModelFields;

  constructor(
    private procResultService: ProcResultService,
    private accountRepository: AccountRepository,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe(async params => {
      if (params['id'] === '_') {
        this.model = {
          status: '有料'
        };
        let conf = this.fields.find(val => val.key==='password');
        conf && conf.templateOptions ? conf.templateOptions.required = true : '';
      } else {
        this.model = await getAccount(this.accountRepository, params['id']);
        let conf = this.fields.find(val => val.key==='password');
        conf && conf.templateOptions ? conf.templateOptions.required = false : '';
      }
    });
  }

  // .pipe(takeUntil(this.destroy$))
  private destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  submit() {
    this.procResultService.proc(this.form.valid, () =>
      this.saveAccount(new Account(this.model)).then(result => {
        this.router.navigate(['/home']);
        return result;
      })
    );
  }

  async saveAccount(item: Account): Promise<boolean> {
    return this.accountRepository.upsert(item);
  }
}

const accountModelFields: FormlyFieldConfig[] = [
  {
    key: 'systemId',
    type: 'input',
    templateOptions: {
      label: 'システムID',
      required: true
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      label: 'パスワード',
      required: true,
      type: 'password'
    }
  },
  {
    key: 'company',
    type: 'input',
    templateOptions: {
      label: '会社名',
      required: true
    }
  },
  {
    key: 'busho',
    type: 'input',
    templateOptions: {
      label: '部署名',
      required: false
    }
  },
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: '担当者名',
      required: true
    }
  },
  {
    key: 'zip',
    type: 'input',
    templateOptions: {
      label: '郵便番号',
      required: true
    }
  },
  {
    key: 'address',
    type: 'input',
    templateOptions: {
      label: '住所',
      required: true
    }
  },
  {
    key: 'address2',
    type: 'input',
    templateOptions: {
      label: '住所（ビル名）',
      required: true
    }
  },
  {
    key: 'tel',
    type: 'input',
    templateOptions: {
      label: '電話番号',
      required: true
    }
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'メールアドレス',
      required: true
    }
  },
  {
    key: 'staff',
    type: 'input',
    templateOptions: {
      label: '営業担当者',
      required: false
    }
  },
  {
    key: 'remarks',
    type: 'textarea',
    templateOptions: {
      label: '備考',
      required: false
    }
  },
  {
    key: 'accountId',
    type: 'input',
    templateOptions: {
      label: 'アカウントID',
      required: false
    }
  },
  {
    key: 'status',
    type: 'radio',
    templateOptions: {
      label: 'ステータス',
      required: true,
      options: [
        {
          label: '有料',
          value: '有料'
        },
        {
          label: '無料',
          value: '無料'
        },
        {
          label: 'ログイン不可',
          value: 'ログイン不可'
        }
      ]
    }
  }
];
