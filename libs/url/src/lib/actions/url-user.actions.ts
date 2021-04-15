import { UrlUser } from './../intefaces';
import { createAction, props } from '@ngrx/store';

export enum UrlActions {
  LoadUrlUser = '[UrlUser] Load UrlUsers',
  LoadUrlUserSucces = '[UrlUser] Load UrlUsers Succes',
  LoadUrlUserFailure = '[UrlUser] Load UrlUsers Failure',
  //
  CreateUrlUser = '[UrlUser] Create UrlUsers',
  CreateUrlUserSucces = '[UrlUser] Create UrlUsers Succes',
  CreateUrlUserFailure = '[UrlUser] Create UrlUsers Failure',

  //
  DeleteUrlUser = '[UrlUser] Delete UrlUsers',
  DeleteUrlUserSucces = '[UrlUser] Delete UrlUsers Succes',
  DeleteUrlUserFailure = '[UrlUser] Delete UrlUsers Failure',
}

export const loadUrlUser = createAction(UrlActions.LoadUrlUser);
export const loadUrlUserSuccess = createAction(
  UrlActions.LoadUrlUserSucces,
  props<{ list: UrlUser[] }>()
);
export const loadUrlUserFailure = createAction(
  UrlActions.LoadUrlUserFailure,
  props<any>()
);
export const createUrlUser = createAction(
  UrlActions.CreateUrlUser,
  props<UrlUser>()
);
export const createUrlUserSuccess = createAction(
  UrlActions.CreateUrlUserSucces,
  props<UrlUser>()
);
export const createUrlUserFailure = createAction(
  UrlActions.CreateUrlUserFailure,
  props<any>()
);
export const deleteUrlUser = createAction(
  UrlActions.DeleteUrlUser,
  props<{ id: string }>()
);
export const deleteUrlUserSuccess = createAction(
  UrlActions.DeleteUrlUserSucces,
  props<UrlUser>()
);
export const deleteUrlUserFailure = createAction(
  UrlActions.DeleteUrlUserFailure,
  props<any>()
);
