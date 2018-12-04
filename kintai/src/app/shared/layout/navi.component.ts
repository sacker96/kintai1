import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  template: `
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar -->
    <div class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">
        <li [class.active]="page1.isActive"><a routerLink="/home" routerLinkActive #page1="routerLinkActive"><i class="fa icon-home"></i> マスター管理画面TOP</a></li>
        <li [class.active]="page2.isActive"><a routerLink="/account/_" routerLinkActive #page2="routerLinkActive"><i class="fa icon-home"></i> クライアント登録</a></li>
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
