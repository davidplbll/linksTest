import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AlertsService } from '@mo-links/utils';
import {
  UserActions,
  LoginFailure,
  Login,
  LoginSuccess,
  loadUserFailure,
  loadUserSuccess,
  RegisterUserSuccess,
  RegisterUserFailure,
} from '../actions';
import { AuthService } from '../services';
@Injectable()
export class UserEffects {
  Login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.Login),
      switchMap((action) =>
        this.authService.login(action).pipe(
          map((data) => LoginSuccess(data)),
          catchError((err) => of(LoginFailure(err)))
        )
      )
    )
  );
  LoadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.LoadUser),
      switchMap(() =>
        this.authService.userInfo().pipe(
          map((data) => loadUserSuccess(data)),
          catchError((err) => of(loadUserFailure(err)))
        )
      )
    )
  );

  RegisterUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.RegisterUser),
      switchMap((action: any) =>
        this.authService.createUser(action).pipe(
          map((data) => RegisterUserSuccess({ ...data, ...action })),
          catchError((err) => of(RegisterUserFailure(err)))
        )
      )
    )
  );
  RegisterUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.RegisterUserSuccess),
      tap(() =>
        this.alertsService.Messagesuccess('USUARIO REGISTADO CON EXITO')
      ),
      map((action) => Login(action))
    )
  );
  LoginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.LoginSuccess),
        tap((action: any) => {
          localStorage.setItem('token-acces', action.token);
          this.router.navigate(['']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private alertsService: AlertsService,
    private router: Router
  ) {}
}
