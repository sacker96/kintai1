import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/shared/src/lib/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <header class="main-header">
  <!-- Logo -->
  <a href="index.html" class="logo blue-bg">
  <!-- mini logo for sidebar mini 50x50 pixels -->
  <span class="logo-mini"><img src="assets/img/logo-n-blue.png" alt=""></span>
  <!-- logo for regular state and mobile devices -->
  <span class="logo-lg"><img src="assets/img/logo.jpg" alt=""></span> </a>

  <!-- Header Navbar -->
  <nav class="navbar blue-bg navbar-static-top">
    <!-- Sidebar toggle button-->
    <ul class="nav navbar-nav pull-left">
      <li><a class="sidebar-toggle" data-toggle="push-menu" href=""></a> </li>
    </ul>
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">

        <!-- User Account  -->
        <li class="dropdown user user-menu p-ph-res"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <img src="assets/img/img1.jpg" class="user-image" alt="User Image"> <span class="hidden-xs">MasterAdmin</span> </a>
          <ul class="dropdown-menu">
            <li class="user-header">
              <div class="pull-left user-img"><img src="assets/img/img1.jpg" class="img-responsive img-circle" alt="User"></div>
              <p class="text-left">MasterAdmin<small>masteradmin@example.com</small> </p>
            </li>
            <li><a (click)="logout()"><i class="fa fa-power-off"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
    window.location.href = '/';
  }
}
