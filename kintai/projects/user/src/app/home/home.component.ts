import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProcResultService } from 'projects/shared/src/lib/service/proc-result.service';
import { AditRepository } from 'projects/shared/src/lib/infra/aditRepository';
import { Adit } from 'core/entity/adit';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentStatus: '' | '未出勤' | '勤務中' | '退室中' = '';
  currentTime = 0;
  processing = false;

  vm = {
    form: new FormGroup({}),
    model: {} as any,
    fields: AditAutoModelFields
  };

  constructor(
    private procResultService: ProcResultService,
    private aditRepository: AditRepository
  ) {}

  async ngOnInit() {
    this.updateCurrentTime();
    this.currentStatus = await this.getCurrentStatus();
  }

  updateCurrentTime() {
    setInterval(() => {
      this.currentTime = new Date().getTime();
    }, 100);
  }

  submit() {
    this.processing = true;
    setTimeout(() => {
      this.processing = false;
    }, 2500);
    this.procResultService.proc(this.vm.form.valid, () =>
      this.saveAdit(new Adit(this.vm.model))
    ).then(async result => {
      this.vm.model = {};
      this.currentStatus = await this.getCurrentStatus();
    });
  }

  async getCurrentStatus(): Promise<'' | '未出勤' | '勤務中' | '退室中'> {
    const list = await this.getAditToday();
    if (list.length === 0){
      return '未出勤';
    }
    if (list.length % 2 === 1){
      return '勤務中';
    }
    if (list.length % 2 === 0){
      return '退室中';
    }
    return '';
  }

  getAditToday() {
    const today = moment().format('Y-M-DD');
    return this.aditRepository.findByDate({date: today});
  }

  saveAdit(item: Adit): Promise<boolean> {
    return this.aditRepository.create(item);
  }
}

const AditAutoModelFields = [
  {
    key: 'notice',
    type: 'textarea',
    templateOptions: {
      placeholder: 'コメントを追加する場合はこちらから',
      rows: '2',
      required: false
    }
  }
];
