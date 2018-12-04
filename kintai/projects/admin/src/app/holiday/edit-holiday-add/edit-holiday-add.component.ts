import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';
import { Holiday } from 'core/entity/holiday';
import { Router } from '@angular/router';
import { HolidayRepository } from 'projects/shared/src/lib/infra/holidayRepository';

@Component({
  selector: 'app-edit-holiday-add',
  templateUrl: './edit-holiday-add.component.html',
  styles: []
})
export class EditHolidayAddComponent implements OnInit {
  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: EditHolidayAddModelFields
  };

  constructor(
    private procResultService: ProcResultService,
    private holidayRepository: HolidayRepository,
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.vm.form.controls['paid_type'].valueChanges.subscribe(result => {
        this.vm.form.controls['range'].setValue(result);
      });
    });
  }

  submit() {
    this.procResultService.proc(this.vm.form.valid, () =>
      this.saveHoliday(new Holiday(this.vm.model)).then(result => {
        this.router.navigate(['/holiday/edit-holiday']);
        return result;
      })
    );
  }

  async getHoliday(id: string) {
    return this.holidayRepository.findOne(id);
  }

  async saveHoliday(item: Holiday): Promise<boolean> {
    return this.holidayRepository.upsert(item);
  }
}

const EditHolidayAddModelFields = [
  {
    key: 'holiday_type',
    type: 'select',
    templateOptions: {
      label: '休暇タイプ',
      placeholder: '休暇タイプ',
      required: true,
      options: [
        {
          label: '有休',
          value: '有休'
        },
        {
          label: '代休',
          value: '代休'
        },
        {
          label: '振休',
          value: '振休'
        },
        {
          label: 'リフレッシュ',
          value: 'リフレッシュ'
        }
      ]
    }
  },
  {
    key: 'paid_type',
    type: 'select',
    templateOptions: {
      label: '消化量',
      placeholder: '消化量',
      required: true,
      options: [
        {
          label: '0日',
          value: '0日'
        },
        {
          label: '0.1日',
          value: '0.1日'
        },
        {
          label: '0.2日',
          value: '0.2日'
        },
        {
          label: '0.25日',
          value: '0.25日'
        },
        {
          label: '0.3日',
          value: '0.3日'
        },
        {
          label: '0.4日',
          value: '0.4日'
        },
        {
          label: '0.5日',
          value: '0.5日'
        },
        {
          label: '0.6日',
          value: '0.6日'
        },
        {
          label: '0.75日',
          value: '0.75日'
        },
        {
          label: '0.7日',
          value: '0.7日'
        },
        {
          label: '0.8日',
          value: '0.8日'
        },
        {
          label: '0.9日',
          value: '0.9日'
        },
        {
          label: '全休(1日)',
          value: '全休(1日)'
        },
        {
          label: '時間休',
          value: '時間休'
        }
      ]
    }
  },
  {
    key: 'range',
    type: 'static',
    templateOptions: {
      label: '休暇範囲',
      required: false
    }
  },
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      label: '休暇名',
      required: true
    }
  },
  {
    key: 'compensatory',
    type: 'compensatory',
    templateOptions: {
      label: '有効期限',
      required: false
    }
  }
];
