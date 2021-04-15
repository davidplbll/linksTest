import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as userReducer from './user.reducer';

export const selectFeature = createFeatureSelector<userReducer.State>(
  userReducer.userFeatureKey
);

export const selectUser = createSelector(
  selectFeature,
  (state: userReducer.State) => state.user
);
export const selectLoading = createSelector(
  selectFeature,
  (state: userReducer.State) => state.loading
);
export const selectError = createSelector(
  selectFeature,
  (state: userReducer.State) => state.error
);
