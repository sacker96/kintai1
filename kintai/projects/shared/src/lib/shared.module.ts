import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
// import { FormlyBootstrapModule, FormlyFieldInput } from '@ngx-formly/bootstrap';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatIconModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatAutocompleteModule
} from '@angular/material';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { SharedComponent } from './shared.component';
import { SharedService } from './shared.service';
import { AccountRepository } from './infra/accountRepository';
import { DatatableComponent } from './datatable/datatable.component';
import { FgComponent } from './fg/fg.component';
import { DateComponent } from './fg/date.component';
import { SpecdateComponent } from './fg/specdate.component';
import { DateOnlyPipe } from './pipe/date-only.pipe';
import { StaffComponent } from './fg/staff.component';
import { StaticComponent } from './fg/static.component';
import { timeFormlyType, timeRangeFormlyType } from './fg/time.component';
import { LinkComponent } from './fg/link.component';
import { FormatComponent } from './fg/format.component';
import { FiltertimeComponent } from './fg/filtertime.component';
import { FilterrestComponent } from './fg/filterrest.component';
import { ProcResultComponent } from './proc-result/proc-result.component';
import { EmployeeRepository } from './infra/employeeRepository';
import { TimeOnlyPipe } from './pipe/time-only.pipe';
import { CompensatoryComponent } from './fg/compensatory.component';
import { GroupComponent } from './fg/group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule.forRoot(),
    NgxDatatableModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        timeFormlyType,
        timeRangeFormlyType,
        { name: 'fg-group', component: GroupComponent },
        { name: 'specdate', component: SpecdateComponent },
        { name: 'date', component: DateComponent },
        { name: 'staff', component: StaffComponent },
        { name: 'static', component: StaticComponent },
        { name: 'filtertime', component: FiltertimeComponent },
        { name: 'link', component: LinkComponent },
        { name: 'filterrest', component: FilterrestComponent },
        { name: 'format', component: FormatComponent },
        { name: 'compensatory', component: CompensatoryComponent },
      ]
    })
  ],
  declarations: [
    SharedComponent,
    DatatableComponent,
    FgComponent,
    DateComponent,
    SpecdateComponent,
    DateOnlyPipe,
    StaffComponent,
    StaticComponent,
    LinkComponent,
    FormatComponent,
    FiltertimeComponent,
    FilterrestComponent,
    ProcResultComponent,
    TimeOnlyPipe,
    CompensatoryComponent,
    GroupComponent
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    SharedComponent,
    DatatableComponent,
    FgComponent,
    ProcResultComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService, AccountRepository, EmployeeRepository]
    };
  }
}
