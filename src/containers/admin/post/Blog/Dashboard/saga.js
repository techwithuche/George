import { takeLatest, call, select } from 'redux-saga/effects';
import Api from '../../../../../utils/Api';
import { makeSelectToken } from '../../../../../Others/App/selectors';
import * as types from './constants';
import * as actions from './actions';


function* loadEntertainmentList(action) {
  let query = '';
  if (action.payload) {
    Object.keys(action.payload).map(each => {
      query = `${query}&${each}=${action.payload[each]}`;
    });
  }
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/dashboard?${query}`,
      actions.loadEntertainmentListSuccess,
      actions.loadEntertainmentListFailure,
      token,
    ),
  );
}



export default function* defaultSaga() {
  yield takeLatest(types.LOAD_ENTERTAINMENT_LIST_REQUEST, loadEntertainmentList);
}
