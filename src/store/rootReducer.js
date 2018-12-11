import {
  FETCH_PAINTING_LIST_PENDING,
  FETCH_PAINTING_LIST_SUCCESS,
  FETCH_PAINTING_LIST_FAILURE,
  FETCH_PROJECT_LIST_PENDING,
  FETCH_PROJECT_LIST_SUCCESS,
  FETCH_PROJECT_LIST_FAILURE
} from "./actions";

const defaultState = {
  paintingList: [],
  projectlist: []
};

const rootReducer = (state, action) => {
  state = state || defaultState;
  switch (action.type) {
    case FETCH_PAINTING_LIST_SUCCESS:
      return { ...state, paintingList: action.payload.response };
    case FETCH_PROJECT_LIST_SUCCESS:
      return { ...state, projectList: action.payload.response };
    default:
      return state;
  }
};

export default rootReducer;
