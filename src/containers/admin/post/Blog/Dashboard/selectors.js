import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDomain = state => state.blogPage || initialState;


  export const makeSelectEntertainmentList = () =>
  createSelector(
    selectDomain,
    state => state.entertainmentList,
  );

  export const makeSelectLoading = () =>
  createSelector(
    selectDomain,
    state => state.loading,
  );

export const makeSelectEntertainmentLoading = () =>
  createSelector(
    selectDomain,
    state => state.entertainmentLoading,
  );

 
