import { Component, OnInit } from '@angular/core';
import { Alert, AlertType } from '../service/alert.model';
import { ProcResultService } from '../service/proc-result.service';

declare var $: any;

@Component({
  selector: 'proc-result',
  templateUrl: './proc-result.component.html',
  styleUrls: ['./proc-result.component.css']
})
export class ProcResultComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private procResultService: ProcResultService) {}

  ngOnInit() {
    $('#procResultModal').modal({ show: false, backdrop: false });
    this.procResultService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        $('#procResultModal').modal('hide');
        return;
      }

      // add alert to array
      this.alerts.push(alert);
      setTimeout(() => {
        this.removeAlert(alert);
      }, 2000);

      $('#procResultModal').modal('show');
    });
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
    if (this.alerts.length == 0) {
      $('#procResultModal').modal('hide');
      // window.scrollTo(0, 0);
    }
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }
}
