import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorkRoutingModule } from './work-routing.module';
import { AditManageComponent } from './adit-manage/adit-manage.component';
import { DownAttendanceComponent } from './down-attendance/down-attendance.component';
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
import { ExcelSettingUpdateComponent } from './excel-setting-update/excel-setting-update.component';
import { SharedModule } from 'projects/shared/src/lib/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, WorkRoutingModule, SharedModule],
  declarations: [
    AditManageComponent,
    DownAttendanceComponent,
    DownWorkComponent,
    RawAditComponent,
    WorkStateShowComponent,
    AditManageDetailComponent,
    ApplovedComponent,
    NotLeaveComponent,
    OverWorkTableShowComponent,
    AgreementThirtysixTableShowComponent,
    ShortRestComponent,
    ClosingComponent,
    AditManageSettingComponent,
    ExcelSettingUpdateComponent
  ]
})
export class WorkModule {}
