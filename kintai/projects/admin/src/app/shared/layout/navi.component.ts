import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  template: `
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar -->
    <div class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">

        <li [class.active]="pageTop.isActive"><a routerLink="/home" routerLinkActive #pageTop="routerLinkActive"><i class="fa icon-home"></i> <span>Dashboard</span></a></li>

        <li class="treeview">
          <a href="#"><i class="fa icon-action-redo"></i> <span>出勤管理</span><span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
          <ul class="treeview-menu">
            <li class="treeview">
              <a href="#"><i class="fa icon-layers"></i> データ出力<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li [class.active]="page1.isActive"><a routerLink="/work/adit-manage" routerLinkActive #page1="routerLinkActive"><i class="fa fa-angle-right"></i> 出勤簿一覧</a></li>
                <li [class.active]="page2.isActive"><a routerLink="/work/down-attendance" routerLinkActive #page2="routerLinkActive"><i class="fa fa-angle-right"></i> 出勤簿一括ダウンロード</a></li>
                <li [class.active]="page3.isActive"><a routerLink="/work/down-work" routerLinkActive #page3="routerLinkActive"><i class="fa fa-angle-right"></i> 勤務データダウンロード</a></li>
                <li [class.active]="page4.isActive"><a routerLink="/work/raw-adit" routerLinkActive #page4="routerLinkActive"><i class="fa fa-angle-right"></i> 打刻データ表示</a></li>
                <li [class.active]="page5.isActive"><a routerLink="/work/work-state-show" routerLinkActive #page5="routerLinkActive"><i class="fa fa-angle-right"></i> 勤務状況表示</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#"><i class="fa icon-layers"></i> 承認<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li [class.active]="page6.isActive"><a routerLink="/work/apploved" routerLinkActive #page6="routerLinkActive"><i class="fa fa-angle-right"></i> 未承認打刻一覧</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#"><i class="fa icon-layers"></i> エラー一覧<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li [class.active]="page7.isActive"><a routerLink="/work/not-leave" routerLinkActive #page7="routerLinkActive"><i class="fa fa-angle-right"></i> 打刻エラー一覧</a></li>
                <li [class.active]="page8.isActive"><a routerLink="/work/over-work-table-show" routerLinkActive #page8="routerLinkActive"><i class="fa fa-angle-right"></i> 残業一覧</a></li>
                <li [class.active]="page9.isActive"><a routerLink="/work/agreement-thirtysix-table-show" routerLinkActive #page9="routerLinkActive"><i class="fa fa-angle-right"></i> 36協定超過一覧</a></li>
                <li [class.active]="page10.isActive"><a routerLink="/work/short-rest" routerLinkActive #page10="routerLinkActive"><i class="fa fa-angle-right"></i> 休憩不足一覧</a></li>
              </ul>
            <li [class.active]="page11.isActive">
              <a routerLink="/work/closing" routerLinkActive #page11="routerLinkActive"><i class="fa fa-angle-right"></i> 締め処理</a>
            </li>
            <li [class.active]="page12.isActive">
              <a routerLink="/work/adit-manage-setting" routerLinkActive #page12="routerLinkActive"><i class="fa fa-angle-right"></i> 出勤簿項目設定</a>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa fa-flag-o"></i> 休暇・申請管理<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
          <ul class="treeview-menu">
            <li class="treeview">
              <a href="#"><i class="fa icon-layers"></i> 休暇管理<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li [class.active]="page13.isActive"><a routerLink="/holiday/employee-holiday-give" routerLinkActive #page13="routerLinkActive"><i class="fa fa-angle-right"></i> 休暇付与</a></li>
                <li [class.active]="page14.isActive"><a routerLink="/holiday/employee-holiday-give-use" routerLinkActive #page14="routerLinkActive"><i class="fa fa-angle-right"></i> 休暇使用</a></li>
                <li [class.active]="page15.isActive"><a routerLink="/holiday/employee-holiday-give-log" routerLinkActive #page15="routerLinkActive"><i class="fa fa-angle-right"></i> 休暇履歴閲覧/編集</a></li>
                <li [class.active]="page16.isActive"><a routerLink="/holiday/edit-holiday" routerLinkActive #page16="routerLinkActive"><i class="fa fa-angle-right"></i> 休暇タイプ設定</a></li>
                <li [class.active]="page17.isActive"><a routerLink="/holiday/edit-holiday-alias" routerLinkActive #page17="routerLinkActive"><i class="fa fa-angle-right"></i> 特別休暇名の登録</a></li>
                <li [class.active]="page18.isActive"><a routerLink="/holiday/edit-holiday-time-setting" routerLinkActive #page18="routerLinkActive"><i class="fa fa-angle-right"></i> 時間休の消化量算出設定</a></li>
                <li [class.active]="page19.isActive"><a routerLink="/holiday/auto-paid-holiday-setting" routerLinkActive #page19="routerLinkActive"><i class="fa fa-angle-right"></i> 有給自動付与</a></li>
              </ul>
            </li>
            <li [class.active]="page20.isActive">
              <a routerLink="/holiday/employee-holiday-applied" routerLinkActive #page20="routerLinkActive"><i class="fa fa-angle-right"></i> 休暇申請一覧</a>
            </li>
            <li [class.active]="page21.isActive">
              <a routerLink="/holiday/employee-holidayworking-applied" routerLinkActive #page21="routerLinkActive"><i class="fa fa-angle-right"></i> 休日出勤申請一覧</a>
            </li>
            <li [class.active]="page22.isActive">
              <a routerLink="/holiday/employee-over-work-applied" routerLinkActive #page22="routerLinkActive"><i class="fa fa-angle-right"></i> 残業申請一覧</a>
            </li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa fa-user-o"></i> スタッフ管理<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
          <ul class="treeview-menu">
            <li [class.active]="page24.isActive"><a routerLink="/staff/employee" routerLinkActive #page24="routerLinkActive"><i class="fa fa-angle-right"></i> スタッフ一覧</a></li>
            <li [class.active]="page25.isActive"><a routerLink="/staff/optional-sort" routerLinkActive #page25="routerLinkActive"><i class="fa fa-angle-right"></i> スタッフ並び順設定</a></li>
            <li class="treeview">
              <a href="#"><i class="fa icon-layers"></i> マイページ設定<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li [class.active]="page26.isActive"><a routerLink="/staff/mypage-setting-edit-mypage" routerLinkActive #page26="routerLinkActive"><i class="fa fa-angle-right"></i> マイページ表示機能設定</a></li>
                <li [class.active]="page27.isActive"><a routerLink="/staff/attendance-setting-edit-attendance" routerLinkActive #page27="routerLinkActive"><i class="fa fa-angle-right"></i> 出勤簿項目編集<br>（PCマイページ）</a></li>
              </ul>
            </li>
          </ul>
        </li>

        <li class="header">基本情報</li>

        <li class="treeview">
          <a href="#"><i class="fa icon-note"></i> 各種設定<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
          <ul class="treeview-menu">
            <li [class.active]="page28.isActive"><a routerLink="/config/confirm-each-settings" routerLinkActive #page28="routerLinkActive"><i class="fa fa-angle-right"></i>初期設定一覧</a></li>
            <li [class.active]="page29.isActive"><a routerLink="/config/edit-request-alert" routerLinkActive #page29="routerLinkActive"><i class="fa fa-angle-right"></i>打刻修正依頼メール設定</a></li>
            <li [class.active]="page30.isActive" *ngIf="false"><a routerLink="/config/holiday-setting" routerLinkActive #page30="routerLinkActive"><i class="fa fa-angle-right"></i>休日設定</a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa fa-table"></i> 就業規則設定<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
          <ul class="treeview-menu">
            <li [class.active]="page31.isActive"><a routerLink="/config/over-work" routerLinkActive #page31="routerLinkActive"><i class="fa fa-angle-right"></i>所定時間・残業・深夜設定</a></li>
            <li [class.active]="page32.isActive"><a routerLink="/config/agreement-thirtysix" routerLinkActive #page32="routerLinkActive"><i class="fa fa-angle-right"></i>36協定超過設定</a></li>
            <li [class.active]="page33.isActive"><a routerLink="/config/auto-rest" routerLinkActive #page33="routerLinkActive"><i class="fa fa-angle-right"></i>自動休憩設定</a></li>
            <li [class.active]="page34.isActive"><a routerLink="/config/over-work-applied-settings" routerLinkActive #page34="routerLinkActive"><i class="fa fa-angle-right"></i>自動退出設定</a></li>
            <!--<li [class.active]="page35.isActive"><a routerLink="/config/over-work-applied-settings-early" routerLinkActive #page35="routerLinkActive"><i class="fa fa-angle-right"></i>早出限度設定</a></li>-->
            <li [class.active]="page36.isActive"><a routerLink="/config/anytime-setting" routerLinkActive #page36="routerLinkActive"><i class="fa fa-angle-right"></i>労働時間の抽出設定</a></li>
          </ul>
        </li>

        <li [class.active]="page37.isActive">
          <a routerLink="/config/edit-function-sight" routerLinkActive #page37="routerLinkActive"><i class="fa icon-layers"></i> オプション設定</a>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa icon-layers"></i> 一括登録<span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
          <ul class="treeview-menu">
            <li [class.active]="page38.isActive"><a routerLink="/config/employee-import" routerLinkActive #page38="routerLinkActive"><i class="fa fa-angle-right"></i>スタッフ情報</a></li>
            <li [class.active]="page39.isActive"><a routerLink="/config/adit-import" routerLinkActive #page39="routerLinkActive"><i class="fa fa-angle-right"></i>打刻情報</a></li>
            <li [class.active]="page40.isActive"><a routerLink="/config/holiday-import" routerLinkActive #page40="routerLinkActive"><i class="fa fa-angle-right"></i>休暇情報</a></li>
          </ul>
        </li>

      </ul>
    </div>
    <!-- /.sidebar -->
  </aside>
  `,
  styles: []
})
export class NaviComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
