import { takeLatest, call, select } from 'redux-saga/effects';
import Api from '../../../utils/Api';
import { makeSelectToken } from '../../../Others/App/selectors';
import { enqueueSnackbar } from '../../../Others/App/actions';
import * as types from './constants';
import * as actions from './actions';

function* loadBlog(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/blog/${action.payload}`,
      actions.loadBlogSuccess,
      actions.loadBlogFailure,
      token,
    ),
  );
}

function* loadRecentBlogs() {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/latest`,
      actions.loadRecentBlogsSuccess,
      actions.loadRecentBlogsFailure,
      token,
    ),
  );
}

function* loadRelatedBlogs(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/related/${action.payload}`,
      actions.loadRelatedBlogsSuccess,
      actions.loadRelatedBlogsFailure,
      token,
    ),
  );
}

function* loadArchives(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/blogbytime`,
      actions.loadArchivesSuccess,
      actions.loadArchivesFailure,
      token,
    ),
  );
}


function* loadInfo(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/info/${action.payload}`,
      actions.loadInfoSuccess,
      actions.loadInfoFailure,
      token,
    ),
  );
}

function* loadBlogList(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/entertainment`,
      actions.loadBlogListSuccess,
      actions.loadBlogListFailure,
      token,
    ),
  );
}

function* loadBlogByAuthor(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/blogbyauthor/${action.payload}`,
      actions.loadBlogByAuthorSuccess,
      actions.loadBlogByAuthorFailure,
      token,
    ),
  );
}


function* loadBlogByTag(action) {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/blogbytag/${action.payload}`,
      actions.loadBlogByTagSuccess,
      actions.loadBlogByTagFailure,
      token,
    ),
  );
}

function* loadBlogDate(action) {
  const token = yield select(makeSelectToken());
  let query = '';
  if (action.payload.value) {
    Object.keys(action.payload.value).map(each => {
      query = `${query}&${each}=${action.payload.value[each]}`;
    });
  }
  yield call(
    Api.get(
      `blog/blogbytime/${action.payload.key}?${query}`,
      actions.loadBlogDateSuccess,
      actions.loadBlogDateFailure,
      token,
    ),
  );
}

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
      `blog/entertainment?${query}`,
      actions.loadEntertainmentListSuccess,
      actions.loadEntertainmentListFailure,
      token,
    ),
  );
}


function* loadHealthList(action) {
  let query = '';
  if (action.payload) {
    Object.keys(action.payload).map(each => {
      query = `${query}&${each}=${action.payload[each]}`;
    });
  }
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/health?${query}`,
      actions.loadHealthListSuccess,
      actions.loadHealthListFailure,
      token,
    ),
  );
}


function* loadLifestyleList(action) {
  let query = '';
  if (action.payload) {
    Object.keys(action.payload).map(each => {
      query = `${query}&${each}=${action.payload[each]}`;
    });
  }
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/lifestyle?${query}`,
      actions.loadLifestyleListSuccess,
      actions.loadLifestyleListFailure,
      token,
    ),
  );
}


function* loadFashionList(action) {
  let query = '';
  if (action.payload) {
    Object.keys(action.payload).map(each => {
      query = `${query}&${each}=${action.payload[each]}`;
    });
  }
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/fashion?${query}`,
      actions.loadFashionListSuccess,
      actions.loadFashionListFailure,
      token,
    ),
  );
}



function* loadPopularPost() {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      'blog/popularpost',
      actions.loadPopularPostSuccess,
      actions.loadPopularPostFailure,
      token,
    ),
  );
}
function* loadTravelList(action) {
  let query = '';
  if (action.payload) {
    Object.keys(action.payload).map(each => {
      query = `${query}&${each}=${action.payload[each]}`;
    });
  }
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      `blog/travel?${query}`,
      actions.loadTravelListSuccess,
      actions.loadTravelListFailure,
      token,
    ),
  );
}

function* loadCategory() {
  const token = yield select(makeSelectToken());
  yield call(
    Api.get(
      'blog/category?is_active=true',
      actions.loadCategorySuccess,
      actions.loadCategoryFailure,
      token,
    ),
  );
}

function* loadBlogOfCat(action) {
  const token = yield select(makeSelectToken());
  let query = '';
  if (action.payload.value) {
    Object.keys(action.payload.value).map(each => {
      query = `${query}&${each}=${action.payload.value[each]}`;
    });
  }
  yield call(
    Api.get(
      `blog/blogbycat/${action.payload.key}?${query}`,
      actions.loadBlogOfCatSuccess,
      actions.loadBlogOfCatFailure,
      token,
    ),
  );
}


export default function* defaultSaga() {
  yield takeLatest(types.LOAD_BLOG_REQUEST, loadBlog);
  yield takeLatest(types.LOAD_RECENT_BLOGS_REQUEST, loadRecentBlogs);
  yield takeLatest(types.LOAD_RELATED_BLOGS_REQUEST, loadRelatedBlogs);
  yield takeLatest(types.LOAD_ARCHIVES_REQUEST, loadArchives);
  yield takeLatest(types.LOAD_INFO_REQUEST, loadInfo);
  yield takeLatest(types.LOAD_BLOG_LIST_REQUEST, loadBlogList);
  yield takeLatest(types.LOAD_BLOG_BY_AUTHOR_REQUEST, loadBlogByAuthor);
  yield takeLatest(types.LOAD_BLOG_BY_TAG_REQUEST, loadBlogByTag);
  yield takeLatest(types.LOAD_BLOG_DATE_REQUEST, loadBlogDate);
  yield takeLatest(types.LOAD_CATEGORY_REQUEST, loadCategory);
  yield takeLatest(types.LOAD_ENTERTAINMENT_LIST_REQUEST, loadEntertainmentList);
  yield takeLatest(types.LOAD_POPULARPOST_REQUEST, loadPopularPost);
  yield takeLatest(types.LOAD_HEALTH_LIST_REQUEST, loadHealthList);
  yield takeLatest(types.LOAD_FASHION_LIST_REQUEST, loadFashionList);
  yield takeLatest(types.LOAD_TRAVEL_LIST_REQUEST, loadTravelList);
  yield takeLatest(types.LOAD_LIFESTYLE_LIST_REQUEST, loadLifestyleList);
  yield takeLatest(types.LOAD_BLOG_OF_CAT_REQUEST, loadBlogOfCat);
}
