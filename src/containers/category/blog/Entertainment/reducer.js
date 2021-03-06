import produce from 'immer';
import * as types from './constants';

export const initialState = {
  blog: {},
  loading: false,
  info: [],
  infoIsLoading: false,
  relatedBlogs: [],
  relatedBlogsIsLoading: false,
  recentBlogs: [],
  recentBlogsIsLoading: false,
  archives: [],
  archiveLoading: false,
  blogByAuthor: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },
  blogList: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },
  blogByTag: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },
  entertainmentList: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },
  healthList: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },

  lifestyleList: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },

  fashionList: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },

  travelList: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },
  blogDate: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },
  dateLoading: false,
  query: { size: 12, page: 1 },
  category: [],
  popularpost: [],
  categoryTitle: '',
  blogs: [],
  catLoading: false,
  entertainmentLoading: false,
  popularpostLoading: false,
  healthLoading: false,
  travelLoading: false,
  fashionLoading: false,
  lifestyleLoading: false,

  blogOfCat: {
    data: [],
    page: 1,
    size: 12,
    totaldata: 0,
  },
  loadingBlogOfCat: true,
};

/* eslint-disable default-case, no-param-reassign */
const blogPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOAD_BLOG_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_BLOG_SUCCESS:
        draft.loading = false;
        draft.blog = action.payload.data;
        break;
      case types.LOAD_BLOG_FAILURE:
        draft.loading = false;
        break;
      case types.LOAD_RELATED_BLOGS_REQUEST:
        draft.relatedBlogsIsLoading = true;
        break;
      case types.LOAD_RELATED_BLOGS_SUCCESS:
        draft.relatedBlogsIsLoading = false;
        draft.relatedBlogs = action.payload.data;
        break;
      case types.LOAD_RELATED_BLOGS_FAILURE:
        draft.relatedBlogsIsLoading = false;
        break;
      case types.LOAD_RECENT_BLOGS_REQUEST:
        draft.recentBlogsIsLoading = true;
        break;
      case types.LOAD_RECENT_BLOGS_SUCCESS:
        draft.recentBlogsIsLoading = false;
        draft.recentBlogs = action.payload.data;
        break;
      case types.LOAD_RECENT_BLOGS_FAILURE:
        draft.recentBlogsIsLoading = false;
        break;
      case types.SET_ONE_VALUE:
        draft.one[action.payload.key] = action.payload.value;
        break;
      case types.LOAD_ARCHIVES_REQUEST:
        draft.archiveLoading = true;
        break;
      case types.LOAD_ARCHIVES_SUCCESS:
        draft.archiveLoading = false;
        draft.archives = action.payload.data;
        break;
      case types.LOAD_ARCHIVES_FAILURE:
        draft.archiveLoading = false;
        break;
        case types.LOAD_INFO_REQUEST:
          draft.infoIsLoading = true;
          break;
        case types.LOAD_INFO_SUCCESS:
          draft.infoIsLoading = false;
          draft.info = action.payload.data;
          break;
        case types.LOAD_INFO_FAILURE:
          draft.infoIsLoading = false;
          break;
      case types.CLEAR_ONE:
        draft.one = initialState.one;
        break;
      case types.LOAD_BLOG_LIST_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_BLOG_DATE_REQUEST:
        draft.dateLoading = true;
        break;
      case types.LOAD_BLOG_DATE_SUCCESS:
        draft.dateLoading = false;
        draft.blogDate = action.payload;
        break;
      case types.LOAD_BLOG_DATE_FAILURE:
        draft.dateLoading = false;
        break;
      case types.LOAD_BLOG_LIST_SUCCESS:
        draft.blogList = action.payload;
        draft.loading = false;
        break;
      case types.LOAD_BLOG_LIST_FAILURE:
        draft.loading = false;
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
      case types.LOAD_BLOG_BY_AUTHOR_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_BLOG_BY_AUTHOR_SUCCESS:
        draft.blogByAuthor = action.payload;
        draft.loading = false;
        break;
      case types.LOAD_BLOG_BY_AUTHOR_FAILURE:
        draft.loading = false;
        break;
        case types.LOAD_FASHION_LIST_REQUEST:
        draft.loading = true;
        break;
        case types.LOAD_FASHION_LIST_SUCCESS:
          draft.fashionList = action.payload;
          draft.loading = false;
          break;
        case types.LOAD_FASHION_LIST_FAILURE:
          draft.loading = false;
          break;
        case types.LOAD_TRAVEL_LIST_REQUEST:
        draft.loading = true;
        break;
        case types.LOAD_TRAVEL_LIST_SUCCESS:
          draft.travelList = action.payload;
          draft.loading = false;
          break;
        case types.LOAD_TRAVEL_LIST_FAILURE:
          draft.loading = false;
          break;
        case types.LOAD_LIFESTYLE_LIST_REQUEST:
        draft.loading = true;
        break;
        case types.LOAD_LIFESTYLE_LIST_SUCCESS:
          draft.lifestyleList = action.payload;
          draft.loading = false;
          break;
        case types.LOAD_LIFESTYLE_LIST_FAILURE:
          draft.loading = false;
          break;
        case types.LOAD_POPULARPOST_REQUEST:
          draft.popularpostLoading = true;
          break;
        case types.LOAD_POPULARPOST_SUCCESS:
          draft.popularpost = action.payload.data;
          draft.popularpostLoading = false;
          break;
        case types.LOAD_POPULARPOST_FAILURE:
          draft.popularpostLoading = false;
          break;
          case types.LOAD_HEALTH_LIST_REQUEST:
            draft.loading = true;
            break;
            case types.LOAD_HEALTH_LIST_SUCCESS:
              draft.healthList = action.payload;
              draft.loading = false;
              break;
            case types.LOAD_HEALTH_LIST_FAILURE:
              draft.loading = false;
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
      case types.LOAD_BLOG_BY_TAG_REQUEST:
        draft.loading = true;
        break;
      case types.LOAD_BLOG_BY_TAG_SUCCESS:
        draft.blogByTag = action.payload;
        draft.loading = false;
        break;
      case types.LOAD_BLOG_BY_TAG_FAILURE:
        draft.loading = false;
        break;
      case types.LOAD_CATEGORY_REQUEST:
        draft.catLoading = true;
        break;
      case types.LOAD_CATEGORY_SUCCESS:
        draft.category = action.payload.data;
        draft.catLoading = false;
        break;
      case types.LOAD_CATEGORY_FAILURE:
        draft.catLoading = false;
        break;
      case types.LOAD_BLOG_OF_CAT_FAILURE:
        draft.loadingBlogOfCat = false;
        break;
      case types.LOAD_BLOG_OF_CAT_REQUEST:
        draft.categoryTitle = '';
        draft.loadingBlogOfCat = true;
        draft.blogOfCat = initialState.blogOfCat;
        break;
      case types.LOAD_BLOG_OF_CAT_SUCCESS:
        draft.categoryTitle = action.payload.msg;
        draft.blogOfCat = action.payload;
        draft.loadingBlogOfCat = false;
        break;
      case types.CLEAR_BLOG:
        draft.blogOfCat = initialState.blogOfCat;
        draft.loadingBlogOfCat = true;
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
