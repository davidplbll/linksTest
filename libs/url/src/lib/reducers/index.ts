import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as urlUserReducer from './url-user.reducer';

export const selectFeature = createFeatureSelector<urlUserReducer.State>(
  urlUserReducer.urlUserFeatureKey
);

export const selectList = createSelector(selectFeature, urlUserReducer.getList);
export const selectLoading = createSelector(
  selectFeature,
  urlUserReducer.getLoading
);
export const selectError = createSelector(
  selectFeature,
  urlUserReducer.getError
);
