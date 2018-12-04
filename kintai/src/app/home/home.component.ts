import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { getAccountList } from 'core/usecase/master/getAccountList';
import { Account } from 'core/entity/account';
import { AccountRepository } from 'projects/shared/src/lib/infra/accountRepository';
import { DateOnlyPipe } from 'projects/shared/src/lib/pipe/date-only.pipe';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('linkTemplate')
  linkTemplate: TemplateRef<any>;
  columns: any;
  rows: any;

  userNum = {
    有料: 0,
    無料: 0
  };

  constructor(
    private router: Router,
    private accountRepository: AccountRepository
  ) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(async (event: NavigationEnd) => {
        this.rows = await getAccountList(this.accountRepository);
        this.userNum = {
          有料: this.rows.filter((val: Account) => val.status === '有料').length,
          無料: this.rows.filter((val: Account) => val.status === '無料').length
        };
      });
  }

  async ngOnInit() {
    this.columns = [
      { prop: 'created', name: '登録日', pipe: new DateOnlyPipe('ja') },
      { prop: 'systemId', name: 'システムID', cellTemplate: this.linkTemplate },
      { prop: 'company', name: '会社名' },
      { prop: 'name', name: '担当者名' },
      { prop: 'busho', name: '部署名' },
      { prop: 'zip', name: '郵便番号' },
      { prop: 'address', name: '住所' },
      { prop: 'address2', name: '住所（ビル名）' },
      { prop: 'tel', name: '電話番号' },
      { prop: 'email', name: 'メールアドレス' },
      { prop: 'num', name: '初回利用数' },
      { prop: 'staff', name: '営業担当者' },
      { prop: 'remarks', name: '備考' },
      { prop: 'status', name: 'ステータス' }
    ];
  }

  // .pipe(takeUntil(this.destroy$))
  private destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
