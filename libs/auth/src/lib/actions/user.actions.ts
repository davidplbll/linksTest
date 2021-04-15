import { createAction, props } from '@ngrx/store';
import { User, UserLogin, UserRegister } from '../interfaces/user';
export enum UserActions {
  Login = '[User] Login',
  LoginSuccess = '[User] Login Success',
  LoginFailure = '[User] Login Failure',
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load User Success',
  LoadUserFailure = '[User] Load User Failure',
  RegisterUser = '[User] RegisterUser',
  RegisterUserSuccess = '[User] RegisterUser Success',
  RegisterUserFailure = '[User] RegisterUser Failure',
}

export const loadUser = createAction(UserActions.LoadUser);

export const loadUserSuccess = createAction(
  UserActions.LoadUserSuccess,
  props<User>()
);

export const loadUserFailure = createAction(
  UserActions.LoadUserFailure,
  props<{ error: any }>()
);
export const Login = createAction(UserActions.Login, props<UserLogin>());

export const LoginSuccess = createAction(
  UserActions.LoginSuccess,
  props<{ token: string }>()
);

export const LoginFailure = createAction(
  UserActions.LoginFailure,
  props<{ error: any }>()
);

export const RegisterUser = createAction(
  UserActions.RegisterUser,
  props<UserRegister>()
);

export const RegisterUserSuccess = createAction(
  UserActions.RegisterUserSuccess,
  props<User>()
);

export const RegisterUserFailure = createAction(
  UserActions.RegisterUserFailure,
  props<{ error: any }>()
);
