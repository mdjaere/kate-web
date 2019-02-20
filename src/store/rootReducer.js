import {
  FETCH_ARTWORK_LIST_PENDING,
  FETCH_ARTWORK_LIST_SUCCESS,
  FETCH_ARTWORK_LIST_FAILURE,
  FETCH_PROJECT_LIST_PENDING,
  FETCH_PROJECT_LIST_SUCCESS,
  FETCH_PROJECT_LIST_FAILURE,
  SET_ARTWORK_TO_LOAD,
  ALL_ARTWORK_LOADED,
  INIT_SCREEN_WIDTH
} from "./actions";

const defaultState = {
  artworkList: null,
  projectList: null,
  screenWidth: 1024,
  artworkToLoad: 5,
  allArtworkLoaded: false
};

const rootReducer = (state, action) => {
  state = state || defaultState;
  switch (action.type) {
    case FETCH_ARTWORK_LIST_SUCCESS:
      return Object.assign({}, state, {
        artworkList: action.payload.response.items
      });
    case FETCH_PROJECT_LIST_SUCCESS:
      return Object.assign({}, state, {
        projectList: action.payload.response.items
      });
    case INIT_SCREEN_WIDTH:
      return Object.assign({}, state, {
        screenWidth: action.payload.screenWidth
      });
    case SET_ARTWORK_TO_LOAD:
      return Object.assign({}, state, { artworkToLoad: action.payload });
    case ALL_ARTWORK_LOADED:
      return Object.assign({}, state, { allArtworkLoaded: action.payload });
    default:
      return state;
  }
};

export default rootReducer;
