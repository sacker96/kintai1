import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfirmEachSettingsComponent } from './confirm-each-settings/confirm-each-settings.component';
import { EditRequestAlertComponent } from './edit-request-alert/edit-request-alert.component';
import { HolidaySettingComponent } from './holiday-setting/holiday-setting.component';
import { OverWorkComponent } from './over-work/over-work.component';
import { AgreementThirtysixComponent } from './agreement-thirtysix/agreement-thirtysix.component';
import { AutoRestComponent } from './auto-rest/auto-rest.component';
import { AutoRestHistoryListComponent } from './auto-rest-history-list/auto-rest-history-list.component';
import { OverWorkAppliedSettingsComponent } from './over-work-applied-settings/over-work-applied-settings.component';
import { OverWorkAppliedSettingsEarlyComponent } from './over-work-applied-settings-early/over-work-applied-settings-early.component';
import { AnytimeSettingComponent } from './anytime-setting/anytime-setting.component';
import { EditFunctionSightComponent } from './edit-function-sight/edit-function-sight.component';
import { EmployeeImportComponent } from './employee-import/employee-import.component';
import { AditImportComponent } from './adit-import/adit-import.component';
import { HolidayImportComponent } from './holiday-import/holiday-import.component';
import { SharedModule } from 'projects/shared/src/lib/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, ConfigRoutingModule, SharedModule],
  declarations: [
    ConfirmEachSettingsComponent,
    EditRequestAlertComponent,
    HolidaySettingComponent,
    OverWorkComponent,
    AgreementThirtysixComponent,
    AutoRestComponent,
    AutoRestHistoryListComponent,
    OverWorkAppliedSettingsComponent,
    OverWorkAppliedSettingsEarlyComponent,
    AnytimeSettingComponent,
    EditFunctionSightComponent,
    EmployeeImportComponent,
    AditImportComponent,
    HolidayImportComponent
  ]
})
export class ConfigModule {}
