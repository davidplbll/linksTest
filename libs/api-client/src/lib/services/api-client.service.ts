import { Injectable } from '@angular/core';
import { EnvironmentService } from '@mo-links/utils';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorControlService } from './error-control.service';
@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(
    private http: HttpClient,
    private environ: EnvironmentService,
    private errorControlService: ErrorControlService
  ) {}
  generateHeaders() {
    const token = localStorage.getItem('token-acces') || '';
    return {
      headers: new HttpHeaders({
        Token: `${token}`,
        Accept: 'charset=utf-8',
        'Content-Type': 'application/json',
      }),
    };
  }

  /**
   * @template T
   * @param {string} path
   * @returns {Observable<T>}
   * @memberof ApiClientService
   */
  get<T>(path: string, error?: string): Observable<T> {
    return this.http
      .get<any>(
        `${this.environ.environment?.urlApi}/${path}`,
        this.generateHeaders()
      )
      .pipe(catchError(this.errorControlService.handdleError(error)));
  }

  /**
   * @template T
   * @param {string} path
   * @param {*} data
   * @returns {Observable<T>}
   * @memberof ApiClientService
   */
  post<T>(path: string, data: any, error?: string): Observable<T> {
    return this.http
      .post<any>(
        `${this.environ.environment?.urlApi}/${path}`,
        data,
        this.generateHeaders()
      )
      .pipe(catchError(this.errorControlService.handdleError(error)));
  }

  /**
   * @template T
   * @param {string} path
   * @returns {Observable<T>}
   * @memberof ApiClientService
   */
  delete<T>(path: string, error?: string): Observable<T> {
    return this.http
      .delete<any>(
        `${this.environ.environment?.urlApi}/${path}`,
        this.generateHeaders()
      )
      .pipe(catchError(this.errorControlService.handdleError(error)));
  }
}
