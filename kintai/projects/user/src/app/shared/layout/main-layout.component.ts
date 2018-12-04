import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  template: `
  <app-header></app-header>
  <app-navi></app-navi>
  <div class="content-wrapper">
    <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>
  `,
  styles: []
})
export class MainLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
