import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user';
import * as UserActions from '../actions/user.actions';
export const userFeatureKey = 'user';

export interface State {
  user: User;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  error: null,
  loading: false,
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.Login, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserActions.LoginSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(UserActions.LoginFailure, (state, error) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UserActions.loadUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(UserActions.loadUserSuccess, (state, user) => ({
    ...state,
    user,
    loading: false,
  })),
  on(UserActions.loadUserFailure, (state, error) => ({
    ...state,
    loading: false,
    error,
  })),
  on(UserActions.RegisterUser, (state) => ({
    ...state,
    loading: true,
    user: null,
  })),
  on(UserActions.RegisterUserSuccess, (state, user) => ({
    ...state,
    loading: true,
    user,
  })),
  on(UserActions.RegisterUserFailure, (state, error) => ({
    ...state,
    loading: true,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
