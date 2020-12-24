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
import Api from '../../../../../utils/Api';
import { makeSelectOne } from './selectors';
import { makeSelectToken } from '../../../../../Others/App/selectors';
import { enqueueSnackbar } from '../../../../../Others/App/actions';
import * as types from './constants';
import * as actions from './actions';



function* redirectOnSuccess() {
  yield take(types.ADD_EDIT_SUCCESS);
  yield put(push('/admin'));
}

export const validate = data => {
  const errors = {};
  if (!data.title) errors.title = 'Title field is required!!';
  if (!data.slug_url) errors.slug_url = 'Slug field is required!!';
  if (!data.description) errors.description = 'Description field is required!!';
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
        'blog/',
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
    message: 'Blog Added Successfully',
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
  yield takeLatest(types.ADD_EDIT_REQUEST, addEdit);
  yield takeLatest(types.ADD_EDIT_FAILURE, addEditFailureFunc);
  yield takeLatest(types.ADD_EDIT_SUCCESS, addEditSuccessFunc);
  yield takeLatest(types.SET_ERROR_VALUE, setErrorFunc);
}
