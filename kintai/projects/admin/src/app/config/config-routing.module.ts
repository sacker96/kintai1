import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HolidayImportComponent } from './holiday-import/holiday-import.component';
import { AditImportComponent } from './adit-import/adit-import.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adit-manage',
    pathMatch: 'full'
  },
  { path: 'confirm-each-settings', component: ConfirmEachSettingsComponent},
  { path: 'edit-request-alert', component: EditRequestAlertComponent},
  { path: 'holiday-setting', component: HolidaySettingComponent},
  { path: 'over-work', component: OverWorkComponent},
  { path: 'agreement-thirtysix', component: AgreementThirtysixComponent},
  { path: 'auto-rest', component: AutoRestComponent},
  { path: 'auto-rest-history-list', component: AutoRestHistoryListComponent},
  { path: 'over-work-applied-settings', component: OverWorkAppliedSettingsComponent},
  { path: 'over-work-applied-settings-early', component: OverWorkAppliedSettingsEarlyComponent},
  { path: 'anytime-setting', component: AnytimeSettingComponent},
  { path: 'edit-function-sight', component: EditFunctionSightComponent},
  { path: 'employee-import', component: EmployeeImportComponent},
  { path: 'holiday-import', component: HolidayImportComponent},
  { path: 'adit-import', component: AditImportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
