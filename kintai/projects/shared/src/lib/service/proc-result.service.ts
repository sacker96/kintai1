import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alert, AlertType } from './alert.model';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProcResultService {
  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  filter(valid: boolean, func: () => Promise<any>): Promise<any> {
    if (!valid) {
      this.warn('フォームの内容にエラーがあります。');
      throw new Error('Not valid');
    }
    this.info('データ取得中');
    return func()
      .then((result: any) => {
        if(result === false){
          throw new Error('データエラー');
        }
        this.clear();
      })
      .catch(() => {
        this.clear();
        this.error('エラーが発生しました。');
      });
  }

  proc(valid: boolean, func: () => Promise<any>): Promise<any> {
    if (!valid) {
      this.warn('フォームの内容にエラーがあります。');
      throw new Error('Not valid');
    }
    this.info('送信中');
    return func()
      .then((result: any) => {
        if(result === false){
          throw new Error('データエラー');
        }
        this.clear();
        this.success('保存しました。');
      })
      .catch((e) => {
        this.clear();
        this.error('エラーが発生しました。');
      });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Success, message, keepAfterRouteChange);
  }

  error(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Error, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Info, message, keepAfterRouteChange);
  }

  warn(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Warning, message, keepAfterRouteChange);
  }

  alert(type: AlertType, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{ type: type, message: message });
  }

  clear() {
    // clear alerts
    this.subject.next();
  }
}
