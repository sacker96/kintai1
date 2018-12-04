import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { OptionalSortComponent } from './optional-sort/optional-sort.component';
import { MypageSettingEditMypageComponent } from './mypage-setting-edit-mypage/mypage-setting-edit-mypage.component';
import { AttendanceSettingEditAttendanceComponent } from './attendance-setting-edit-attendance/attendance-setting-edit-attendance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adit-manage',
    pathMatch: 'full'
  },
  { path: 'employee', component: EmployeeComponent},
  { path: 'new-employee/:id', component: NewEmployeeComponent},
  { path: 'optional-sort', component: OptionalSortComponent},
  { path: 'mypage-setting-edit-mypage', component: MypageSettingEditMypageComponent},
  { path: 'attendance-setting-edit-attendance', component: AttendanceSettingEditAttendanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
