import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
  <div id="extr-page">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AuthLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
