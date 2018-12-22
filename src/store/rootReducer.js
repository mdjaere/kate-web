import {
  FETCH_PAINTING_LIST_PENDING,
  FETCH_PAINTING_LIST_SUCCESS,
  FETCH_PAINTING_LIST_FAILURE,
  FETCH_PROJECT_LIST_PENDING,
  FETCH_PROJECT_LIST_SUCCESS,
  FETCH_PROJECT_LIST_FAILURE,
  ALL_PAINTINGS_LOADED,
  INIT_SCREEN_WIDTH
} from "./actions";

const defaultState = {
  paintingList: null,
  projectList: null,
  screenWidth: 1024,
  allPaintingsLoaded: false
};

const rootReducer = (state, action) => {
  state = state || defaultState;
  switch (action.type) {
    case FETCH_PAINTING_LIST_SUCCESS:
      return Object.assign({}, state, {
        paintingList: action.payload.response.items
      });
    case FETCH_PROJECT_LIST_SUCCESS:
      return Object.assign({}, state, {
        projectList: action.payload.response.items
      });
    case INIT_SCREEN_WIDTH:
      return Object.assign({}, state, {
        screenWidth: action.payload.screenWidth
      });
    case ALL_PAINTINGS_LOADED:
      return Object.assign({}, state, {allPaintingsLoaded: action.payload})
    default:
      return state;
  }
};

export default rootReducer;
