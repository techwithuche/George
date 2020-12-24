import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the BlogManagePage state domain
 */

const selectDomain = state => state.blogManagePage || initialState;


export const makeSelectOne = () =>
  createSelector(
    selectDomain,
    state => state.one,
  );
export const makeSelectCategory = () =>
  createSelector(
    selectDomain,
    state => state.category,
  );
export const makeSelectLoading = () =>
  createSelector(
    selectDomain,
    state => state.loading,
  );

export const makeSelectErrors = () =>
  createSelector(
    selectDomain,
    state => state.errors,
  );

export const makeSelectUser = () =>
  createSelector(
    selectDomain,
    state => state.user,
  );
