import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AditManageComponent } from './adit-manage/adit-manage.component';
import { DownAttendanceComponent } from './down-attendance/down-attendance.component';
import { ExcelSettingUpdateComponent } from './excel-setting-update/excel-setting-update.component';
import { DownWorkComponent } from './down-work/down-work.component';
import { RawAditComponent } from './raw-adit/raw-adit.component';
import { WorkStateShowComponent } from './work-state-show/work-state-show.component';
import { AditManageDetailComponent } from './adit-manage-detail/adit-manage-detail.component';
import { ApplovedComponent } from './apploved/apploved.component';
import { NotLeaveComponent } from './not-leave/not-leave.component';
import { OverWorkTableShowComponent } from './over-work-table-show/over-work-table-show.component';
import { AgreementThirtysixTableShowComponent } from './agreement-thirtysix-table-show/agreement-thirtysix-table-show.component';
import { ShortRestComponent } from './short-rest/short-rest.component';
import { ClosingComponent } from './closing/closing.component';
import { AditManageSettingComponent } from './adit-manage-setting/adit-manage-setting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adit-manage',
    pathMatch: 'full'
  },
  { path: 'adit-manage', component: AditManageComponent},
  { path: 'down-attendance', component: DownAttendanceComponent},
  { path: 'excel-setting-update', component: ExcelSettingUpdateComponent},
  { path: 'down-work', component: DownWorkComponent},
  { path: 'raw-adit', component: RawAditComponent},
  { path: 'work-state-show', component: WorkStateShowComponent},
  { path: 'adit-manage-detail', component: AditManageDetailComponent},
  { path: 'apploved', component: ApplovedComponent},
  { path: 'not-leave', component: NotLeaveComponent},
  { path: 'over-work-table-show', component: OverWorkTableShowComponent},
  { path: 'agreement-thirtysix-table-show', component: AgreementThirtysixTableShowComponent},
  { path: 'short-rest', component: ShortRestComponent},
  { path: 'closing', component: ClosingComponent},
  { path: 'adit-manage-setting', component: AditManageSettingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
