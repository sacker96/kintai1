import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AttendanceComponent } from './attendance/attendance.component';
import { AditModifyComponent } from './adit-modify/adit-modify.component';
import { HolidayComponent } from './holiday/holiday.component';
import { OverWorkComponent } from './over-work/over-work.component';
import { HolidayworkingComponent } from './holidayworking/holidayworking.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { ManagerMessageComponent } from './manager-message/manager-message.component';
import { ManagerMessageDetailComponent } from './manager-message-detail/manager-message-detail.component';
import { SharedModule } from 'projects/shared/src/lib/shared.module';
import { HolidayNewComponent } from './holiday-new/holiday-new.component';
import { OverWorkNewComponent } from './over-work-new/over-work-new.component';
import { EarlyOverWorkNewComponent } from './early-over-work-new/early-over-work-new.component';
import { HolidayworkingNewComponent } from './holidayworking-new/holidayworking-new.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    AttendanceComponent,
    AditModifyComponent,
    HolidayComponent,
    OverWorkComponent,
    HolidayworkingComponent,
    EditInfoComponent,
    ManagerMessageComponent,
    ManagerMessageDetailComponent,
    HolidayNewComponent,
    OverWorkNewComponent,
    EarlyOverWorkNewComponent,
    HolidayworkingNewComponent
  ]
})
export class EmployeeModule {}
