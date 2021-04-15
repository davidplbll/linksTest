import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
  UrlActions,
  createUrlUserFailure,
  createUrlUserSuccess,
  loadUrlUserFailure,
  loadUrlUserSuccess,
  deleteUrlUserFailure,
  deleteUrlUserSuccess,
} from '../actions';
import { UrlUserService } from '../servicies';
@Injectable()
export class UrlUserEffects {
  loadUrlUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UrlActions.LoadUrlUser),
      switchMap(() =>
        this.urlUserService.getUrlList().pipe(
          map((repose) => {
            console.log('repose ', repose);
            return loadUrlUserSuccess({ list: repose });
          }),
          catchError((err) => {
            console.log('err ', err);
            return of(loadUrlUserFailure(err));
          })
        )
      )
    )
  );
  createUrlUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UrlActions.CreateUrlUser),
      switchMap((data: any) =>
        this.urlUserService.createUrl(data).pipe(
          map((respose) => createUrlUserSuccess({ ...data, ...respose })),
          catchError((err) => {
            console.log('err ', err);
            return of(createUrlUserFailure(err));
          })
        )
      )
    )
  );

  deleteUrlUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UrlActions.DeleteUrlUser),
      switchMap((data: any) =>
        this.urlUserService.deleteUrl(data?.id).pipe(
          map((respose) => deleteUrlUserSuccess(data)),
          catchError((err) => of(deleteUrlUserFailure(err)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private urlUserService: UrlUserService
  ) {}
}
