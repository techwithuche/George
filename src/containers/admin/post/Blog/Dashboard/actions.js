import * as types from './constants';

export const clearData = payload => ({
  type: types.CLEAR_DATA,
  payload,
});

export const setOneValue = payload => ({
  type: types.SET_ONE_VALUE,
  payload,
});

export const clearOne = payload => ({
  type: types.CLEAR_ONE,
  payload,
});

export const setPagesValue = payload => ({
  type: types.SET_PAGES_VALUE,
  payload,
});

export const setSizeValue = payload => ({
  type: types.SET_SIZE_VALUE,
  payload,
});

export const loadEntertainmentListRequest = payload => ({
  type: types.LOAD_ENTERTAINMENT_LIST_REQUEST,
  payload,
});

export const loadEntertainmentListSuccess = payload => ({
  type: types.LOAD_ENTERTAINMENT_LIST_SUCCESS,
  payload,
});

export const loadEntertainmentListFailure = payload => ({
  type: types.LOAD_ENTERTAINMENT_LIST_FAILURE,
  payload,
});

export const clearBlog = () => ({
  type: types.CLEAR_BLOG,
});
