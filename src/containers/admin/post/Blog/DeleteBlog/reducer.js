/*
 *
 * BlogManagePage reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  
  one: {
    title: '',
  slug_url: '',
  category: [],
  published_on: '',
  is_popular: false,
  instagram:'',
  twitter: '',
  name: '',
  tag: [],
  thumbnail: '',
  images:[],
  email: '',
  author: '',
  avatar: '',
  description: '',
  },
  loading: false,
  errors: { title: '', slug_url: '', description: '' },
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_ONE_VALUE:
        draft.one[action.payload.key] = action.payload.value;
        draft.errors[action.payload.key] = '';
        break;
      case types.CLEAR_ONE:
        draft.one = initialState.one;
        break;
      case types.SET_QUERY_VALUE:
        draft.query[action.payload.key] = action.payload.value;
        break;
      case types.CLEAR_QUERY:
        draft.query = initialState.query;
        break; 
      case types.LOAD_ONE_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_ONE_SUCCESS:
        draft.loading = false;
        draft.one = action.payload.data;
        break;
      case types.LOAD_ONE_FAILURE:
        draft.loading = false;
        break;
      case types.CLEAR_ERRORS:
        draft.errors = initialState.errors;
        break;
      case types.SET_ERROR_VALUE:
        draft.errors = action.payload;
        break;
      case types.ADD_EDIT_FAILURE:
        draft.errors = action.payload.errors;
        break;
    }
  });

export default reducer;
