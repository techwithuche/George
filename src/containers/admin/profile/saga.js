import {
  takeLatest,
  take,
  call,
  fork,
  put,
  select,
  cancel,
} from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'connected-next-router';
import Api from '../../../utils/Api';
import { makeSelectOne } from './selectors';
import { makeSelectToken, makeSelectUser } from '../../../Others/App/selectors';
import { enqueueSnackbar } from '../../../Others/App/actions';
import * as types from './constants';
import * as actions from './actions';

function* loadCategory(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      'blog/category',
      actions.loadCategorySuccess,
      actions.loadCategoryFailure,
      token,
    ),
  );
  const successWatcher = yield fork(redirectSuccess);
  yield take([LOCATION_CHANGE, types.LOAD_CATEGORY_FAILURE]);
  yield cancel(successWatcher);
}

function* loadAll(action) {
  const token = yield select(makeSelectToken());
  let query = '';
  let sort = '';

  if (action.payload) {
    Object.keys(action.payload).map(each => {
      query = `${query}&${each}=${action.payload[each]}`;
      return null;
    });
  }

  if (action.payload.sort) {
    sort = `&sort=${action.payload.sort}`;
  }
  yield call(
    Api.get(
      `blog/auth?${query}&${sort}`,
      actions.loadAllSuccess,
      actions.loadAllFailure,
      token,
    ),
  );
}

function* loadOne(action) {
  const token = yield select(makeSelectToken());
  const user = yield select(makeSelectUser());
  console.log(user)
  yield call(
    Api.get(
      `user/profile`,
      actions.loadOneSuccess,
      actions.loadOneFailure,
      user,
      token,
    ),
  );
}

function* loadUsers(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      'user?filter_author=true',
      actions.loadUserSuccess,
      actions.loadUserFailure,
      token,
    ),
  );
}

function* redirectOnSuccess() {
  yield take(types.ADD_EDIT_SUCCESS);
  yield put(push('/'));
}

function* redirectSuccess() {
  yield take(types.LOAD_CATEGORY_SUCCESS);
  yield put(push('/admin'));
}

export const validate = data => {
  const errors = {};
  if (!data.name) errors.name = 'Name field is required!!';
  if (!data.email) errors.email = 'Email field is required!!';
  if (!data.bio) errors.bio = 'Bio field is required!!';
  if (!data.avatar) errors.avatar = 'Avatar field is required!!';
  return { errors, isValid: !Object.keys(errors).length };
};

function* addEdit() {
  const successWatcher = yield fork(redirectOnSuccess);
  const token = yield select(makeSelectToken());
  const data = yield select(makeSelectOne());
  const errors = validate(data);
  if (errors.isValid) {
    yield fork(
      Api.post(
        'user/profile',
      actions.addEditSuccess,
      actions.addEditFailure,
      data,
      token
      ),
    );
    yield take([LOCATION_CHANGE, types.ADD_EDIT_FAILURE]);
    yield cancel(successWatcher);
  } else {
    yield put(actions.setErrorValue(errors.errors));
  }
}


function* addEditSuccessFunc(action) {
  const snackbarData = {
    message: action.payload.msg || 'Update success!!',
    options: {
      variant: 'success',
    },
  };
  yield put(enqueueSnackbar(snackbarData));
}

function* addEditFailureFunc(action) {
  const defaultError = {
    message: action.payload.msg || 'something went wrong',
    options: {
      variant: 'warning',
    },
  };

  yield put(enqueueSnackbar(defaultError));
}
function* deleteBlog(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.delete(
      `blog/${action.payload}`,
      actions.deleteOneSuccess,
      actions.deleteOneFailure,
      token,
    ),
  );
}
function* deleteSuccessFunc(action) {
  const snackbarData = {
    message: action.payload.msg || 'Blog delete success!!',
    options: {
      variant: 'success',
    },
  };
  yield put(enqueueSnackbar(snackbarData));
}

function* deleteFailureFunc(action) {
  const snackbarData = {
    message: action.payload.msg || 'Something went wrong while deleting!!',
    options: {
      variant: 'warning',
    },
  };
  yield put(enqueueSnackbar(snackbarData));
}

function* setErrorFunc() {
  const snackbarData = {
    message: 'Please fill all required fields!!',
    options: {
      variant: 'warning',
    },
  };
  yield put(enqueueSnackbar(snackbarData));
}

export default function* defaultSaga() {
  yield takeLatest(types.LOAD_ALL_REQUEST, loadAll);
  yield takeLatest(types.LOAD_ONE_REQUEST, loadOne);
  yield takeLatest(types.LOAD_USERS_REQUEST, loadUsers);
  yield takeLatest(types.ADD_EDIT_REQUEST, addEdit);
  yield takeLatest(types.ADD_EDIT_FAILURE, addEditFailureFunc);
  yield takeLatest(types.ADD_EDIT_SUCCESS, addEditSuccessFunc);
  yield takeLatest(types.SET_ERROR_VALUE, setErrorFunc);
  yield takeLatest(types.LOAD_CATEGORY_REQUEST, loadCategory);
  yield takeLatest(types.LOAD_CATEGORY_SUCCESS, deleteSuccessFunc);
  yield takeLatest(types.LOAD_CATEGORY_FAILURE, deleteFailureFunc);
  yield takeLatest(types.DELETE_ONE_REQUEST, deleteBlog);
  yield takeLatest(types.DELETE_ONE_SUCCESS, deleteSuccessFunc);
  yield takeLatest(types.DELETE_ONE_FAILURE, deleteFailureFunc);
}
