import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'work',
        loadChildren: './work/work.module#WorkModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'holiday',
        loadChildren: './holiday/holiday.module#HolidayModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'staff',
        loadChildren: './staff/staff.module#StaffModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'config',
        loadChildren: './config/config.module#ConfigModule',
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
