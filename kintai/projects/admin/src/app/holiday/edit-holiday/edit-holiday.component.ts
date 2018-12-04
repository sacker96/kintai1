import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HolidayRepository } from 'projects/shared/src/lib/infra/holidayRepository';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styles: []
})
export class EditHolidayComponent implements OnInit {
  @ViewChild('editTemplate')
  editTemplate: TemplateRef<any>;
  columns: any;
  rows: Array<any>;

  constructor(private holidayRepository: HolidayRepository) { }

  async ngOnInit() {
    this.columns = [
      { prop: 'holiday_type', name: '休暇タイプ' },
      { prop: 'paid_type', name: '消化量' },
      { prop: 'range', name: '休暇範囲' },
      { prop: 'name', name: '休暇名' },
      { prop: 'compensatory', name: '有効期限' },
      { prop: 'edit', name: '編集', cellTemplate: this.editTemplate },
    ];
    this.rows = await this.getHolidayList();
  }

  getHolidayList() {
    return this.holidayRepository.find({});
  }

}
