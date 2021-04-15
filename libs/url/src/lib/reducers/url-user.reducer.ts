import { Action, createReducer, on } from '@ngrx/store';
import { UrlUser } from './../intefaces';
import * as UrlActions from '../actions';
export const urlUserFeatureKey = 'urlUser';

export interface State {
  list: UrlUser[];
  loading: boolean;
  error: any;
}

export const initialState: State = {
  error: null,
  list: [],
  loading: false,
};

export const urlReducer = createReducer(
  initialState,
  on(UrlActions.loadUrlUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(UrlActions.loadUrlUserSuccess, (state, props) => ({
    ...state,
    ...props,
    loading: false,
  })),
  on(UrlActions.loadUrlUserFailure, (state, error) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UrlActions.createUrlUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(UrlActions.createUrlUserSuccess, (state, url) => ({
    ...state,
    list: [url, ...state.list],
    loading: false,
  })),
  on(UrlActions.createUrlUserFailure, (state, error) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UrlActions.deleteUrlUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(UrlActions.deleteUrlUserSuccess, (state, props) => ({
    ...state,
    list: state.list.filter((url) => url.id !== props.id),
    loading: false,
  })),
  on(UrlActions.deleteUrlUserFailure, (state, error) => ({
    ...state,
    error,
    loading: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return urlReducer(state, action);
}

export const getList = (state: State) => state.list;
export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
