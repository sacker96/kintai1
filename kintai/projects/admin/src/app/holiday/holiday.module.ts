import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HolidayRoutingModule } from './holiday-routing.module';
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
import { SharedModule } from 'projects/shared/src/lib/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, HolidayRoutingModule, SharedModule],
  declarations: [
    EmployeeHolidayGiveComponent,
    EmployeeHolidayGiveUseComponent,
    EmployeeHolidayGiveLogComponent,
    EditHolidayComponent,
    EditHolidayAddComponent,
    EditHolidayAliasComponent,
    EditHolidayTimeSettingComponent,
    AutoPaidHolidaySettingComponent,
    EmployeeHolidayAppliedComponent,
    EmployeeHolidayAppliedDetailComponent,
    EmployeeHolidayworkingAppliedComponent,
    EmployeeHolidayworkingAppliedDetailComponent,
    EmployeeOverWorkAppliedComponent,
    EmployeeOverWorkAppliedDetailComponent
  ]
})
export class HolidayModule {}
