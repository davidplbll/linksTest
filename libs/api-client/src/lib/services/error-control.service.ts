import { Injectable } from '@angular/core';
import { AlertsService } from '@mo-links/utils';
import { throwError, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ErrorControlService {
  constructor(private alertsService: AlertsService) {}
  handdleError(error: string) {
    return (err) => {
      if (err?.error?.text.search('name') > -1) {
        try {
          const data = err?.error?.text
            .replace('name', '')
            .replace(/[\r\n]/g, '')
            .replace(/[\r ]/g, '')
            .split(',');
          data.pop();
          const newreponse: any = JSON.parse(
            `${data.join(',')}${data[0][0] === '[' ? ']' : '}'}`
          );
          return of(newreponse);
        } catch (error) {
          return throwError(err);
        }
      }
      if (error) {
        this.alertsService.MessageError(error);
      }
      return throwError(err);
    };
  }
}
