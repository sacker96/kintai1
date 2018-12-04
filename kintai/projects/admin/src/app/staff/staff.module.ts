import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StaffRoutingModule } from './staff-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { OptionalSortComponent } from './optional-sort/optional-sort.component';
import { MypageSettingEditMypageComponent } from './mypage-setting-edit-mypage/mypage-setting-edit-mypage.component';
import { AttendanceSettingEditAttendanceComponent } from './attendance-setting-edit-attendance/attendance-setting-edit-attendance.component';
import { SharedModule } from 'projects/shared/src/lib/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, StaffRoutingModule, SharedModule],
  declarations: [
    EmployeeComponent,
    NewEmployeeComponent,
    OptionalSortComponent,
    MypageSettingEditMypageComponent,
    AttendanceSettingEditAttendanceComponent
  ]
})
export class StaffModule {}
