import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  template: `
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar -->
    <div class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">
        <li [class.active]="page1.isActive"><a routerLink="/home" routerLinkActive #page1="routerLinkActive"><i class="fa icon-home"></i> <span>Dashboard</span></a></li>
        <li [class.active]="page2.isActive"><a routerLink="/employee/attendance" routerLinkActive #page2="routerLinkActive"><i class="fa fa-angle-right"></i> 出勤簿</a></li>
        <li [class.active]="page3.isActive"><a routerLink="/employee/adit-modify" routerLinkActive #page3="routerLinkActive"><i class="fa fa-angle-right"></i> 打刻修正</a></li>
        <li class="treeview">
          <a href="#"><i class="fa fa-angle-right"></i> 申請 <span class="pull-right-container"><i class="fa fa-angle-left pull-right"></i></span></a>
          <ul class="treeview-menu">
            <li [class.active]="page4.isActive"><a routerLink="/employee/holiday" routerLinkActive #page4="routerLinkActive"><i class="fa fa-angle-right"></i> 休暇申請</a></li>
            <li [class.active]="page5.isActive"><a routerLink="/employee/over-work" routerLinkActive #page5="routerLinkActive"><i class="fa fa-angle-right"></i> 残業申請</a></li>
            <li [class.active]="page6.isActive"><a routerLink="/employee/holidayworking" routerLinkActive #page6="routerLinkActive"><i class="fa fa-angle-right"></i> 休日出勤申請</a></li>
          </ul>
        </li>
        <li [class.active]="page7.isActive"><a routerLink="/employee/edit-info" routerLinkActive #page7="routerLinkActive"><i class="fa fa-angle-right"></i> スタッフ情報</a></li>
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
