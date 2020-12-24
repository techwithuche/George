import produce from 'immer';
import * as types from './constants';

export const initialState = {
 
  entertainmentList: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },
  loading: false,
  
};

/* eslint-disable default-case, no-param-reassign */
const blogPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_ONE_VALUE:
        draft.one[action.payload.key] = action.payload.value;
        break;
      case types.CLEAR_ONE:
        draft.one = initialState.one;
        break;
      case types.SET_PAGES_VALUE:
        draft.blogList[action.payload.key] = action.payload.value;
        break;
      case types.SET_QUERY_VALUE:
        draft.query[action.payload.key] = action.payload.value;
        break;
      case types.SET_SIZE_VALUE:
        draft.blogList.size = action.payload;
        draft.blogList.page = 1;
        break;
        case types.LOAD_ENTERTAINMENT_LIST_REQUEST:
        draft.loading = true;
        break;
        case types.LOAD_ENTERTAINMENT_LIST_SUCCESS:
          draft.entertainmentList = action.payload;
          draft.loading = false;
          break;
        case types.LOAD_ENTERTAINMENT_LIST_FAILURE:
          draft.loading = false;
          break;
      
      case types.CLEAR_DATA:
        draft.blogList.data = initialState.blogList.data;
        draft.blogList.page = initialState.blogList.page;
        draft.blogList.size = initialState.blogList.size;
        draft.blogList.totaldata = initialState.blogList.totaldata;
        break;
    }
  });

export default blogPageReducer;
