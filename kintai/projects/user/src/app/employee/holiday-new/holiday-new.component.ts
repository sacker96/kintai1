import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';
import { Holiday } from 'core/entity/holiday';
import { HolidayRepository } from 'projects/shared/src/lib/infra/holidayRepository';
import { HolidayAppried } from 'core/entity/holidayAppried';
import { HolidayAppriedRepository } from 'projects/shared/src/lib/infra/holidayAppriedRepository';

@Component({
  selector: 'app-holiday-new',
  templateUrl: './holiday-new.component.html',
  styles: []
})
export class HolidayNewComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EmployeeHolidayModelFields
  };

  constructor(
    private router: Router,
    private procResultService: ProcResultService,
    private holidayAppriedRepository: HolidayAppriedRepository,
    private holidayRepository: HolidayRepository
  ) {
    this.holidayRepository.find({}).then(result => {
      console.log(result);
      let a = this.vm.fields.find(v => v.key === 'holiday_id');
      if(a){
        a.templateOptions;
      }
    });
  }

  ngOnInit() {}

  submit() {
    this.procResultService
      .proc(this.vm.form.valid, () =>
        this.saveHolidayAppried(new HolidayAppried(this.vm.model))
      )
      .then((result: any) => {
        this.vm.model = {};
        this.router.navigate(['/employee/holiday']);
      });
  }

  saveHolidayAppried(item: HolidayAppried): Promise<boolean> {
    return this.holidayAppriedRepository.create(item);
  }
}

const EmployeeHolidayModelFields = [
  {
    key: 'holiday_id',
    type: 'select',
    templateOptions: {
      label: '休暇名',
      required: true
    }
  },
  {
    key: 'date',
    type: 'date',
    templateOptions: {
      label: '休暇希望日',
      required: false
    }
  },
  {
    key: 'messsage',
    type: 'textarea',
    templateOptions: {
      label: '休暇理由',
      required: false,
      rows: '3'
    }
  }
];
