import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeHolidayGiveComponent } from './employee-holiday-give/employee-holiday-give.component';
import { EmployeeHolidayGiveUseComponent } from './employee-holiday-give-use/employee-holiday-give-use.component';
import { EmployeeHolidayGiveLogComponent } from './employee-holiday-give-log/employee-holiday-give-log.component';
import { EditHolidayComponent } from './edit-holiday/edit-holiday.component';
import { EditHolidayAddComponent } from './edit-holiday-add/edit-holiday-add.component';
import { EditHolidayAliasComponent } from './edit-holiday-alias/edit-holiday-alias.component';
import { EditHolidayTimeSettingComponent } from './edit-holiday-time-setting/edit-holiday-time-setting.component';
import { AutoPaidHolidaySettingComponent } from './auto-paid-holiday-setting/auto-paid-holiday-setting.component';
import { EmployeeHolidayAppliedComponent } from './employee-holiday-applied/employee-holiday-applied.component';
import { EmployeeHolidayAppliedDetailComponent } from './employee-holiday-applied-detail/employee-holiday-applied-detail.component';
import { EmployeeHolidayworkingAppliedComponent } from './employee-holidayworking-applied/employee-holidayworking-applied.component';
import { EmployeeHolidayworkingAppliedDetailComponent } from './employee-holidayworking-applied-detail/employee-holidayworking-applied-detail.component';
import { EmployeeOverWorkAppliedComponent } from './employee-over-work-applied/employee-over-work-applied.component';
import { EmployeeOverWorkAppliedDetailComponent } from './employee-over-work-applied-detail/employee-over-work-applied-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee-holiday-give',
    pathMatch: 'full'
  },
  { path: 'employee-holiday-give', component: EmployeeHolidayGiveComponent},
  { path: 'employee-holiday-give-use', component: EmployeeHolidayGiveUseComponent},
  { path: 'employee-holiday-give-log', component: EmployeeHolidayGiveLogComponent},
  { path: 'edit-holiday', component: EditHolidayComponent},
  { path: 'edit-holiday-add/:id', component: EditHolidayAddComponent},
  { path: 'edit-holiday-alias', component: EditHolidayAliasComponent},
  { path: 'edit-holiday-time-setting', component: EditHolidayTimeSettingComponent},
  { path: 'auto-paid-holiday-setting', component: AutoPaidHolidaySettingComponent},
  { path: 'employee-holiday-applied', component: EmployeeHolidayAppliedComponent},
  { path: 'employee-holiday-applied-detail', component: EmployeeHolidayAppliedDetailComponent},
  { path: 'employee-holidayworking-applied', component: EmployeeHolidayworkingAppliedComponent},
  { path: 'employee-holidayworking-applied-detail', component: EmployeeHolidayworkingAppliedDetailComponent},
  { path: 'employee-over-work-applied', component: EmployeeOverWorkAppliedComponent},
  { path: 'employee-over-work-applied-detail', component: EmployeeOverWorkAppliedDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRoutingModule { }
