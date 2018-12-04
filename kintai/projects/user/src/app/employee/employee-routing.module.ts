import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { AditModifyComponent } from './adit-modify/adit-modify.component';
import { HolidayComponent } from './holiday/holiday.component';
import { OverWorkComponent } from './over-work/over-work.component';
import { HolidayworkingComponent } from './holidayworking/holidayworking.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { ManagerMessageComponent } from './manager-message/manager-message.component';
import { ManagerMessageDetailComponent } from './manager-message-detail/manager-message-detail.component';
import { HolidayNewComponent } from './holiday-new/holiday-new.component';
import { HolidayworkingNewComponent } from './holidayworking-new/holidayworking-new.component';
import { OverWorkNewComponent } from './over-work-new/over-work-new.component';
import { EarlyOverWorkNewComponent } from './early-over-work-new/early-over-work-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'attendance',
    pathMatch: 'full'
  },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'adit-modify', component: AditModifyComponent },
  { path: 'holiday', component: HolidayComponent },
  { path: 'over-work', component: OverWorkComponent },
  { path: 'holidayworking', component: HolidayworkingComponent },
  { path: 'holiday-new', component: HolidayNewComponent },
  { path: 'over-work-new', component: OverWorkNewComponent },
  { path: 'early-over-work-new', component: EarlyOverWorkNewComponent },
  { path: 'holidayworking-new', component: HolidayworkingNewComponent },
  { path: 'edit-info', component: EditInfoComponent },
  { path: 'manager-message', component: ManagerMessageComponent },
  { path: 'manager-message-detail', component: ManagerMessageDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
