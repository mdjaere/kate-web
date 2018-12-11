const FETCH_PAINTING_LIST_PENDING = "FETCH_PAINTING_LIST_PENDING";
const FETCH_PAINTING_LIST_SUCCESS = "FETCH_PAINTING_LIST_SUCCESS";
const FETCH_PAINTING_LIST_FAILURE = "FETCH_PAINTING_LIST_FAILURE";
const FETCH_PROJECT_LIST_PENDING = "FETCH_PROJECT_LIST_PENDING";
const FETCH_PROJECT_LIST_SUCCESS = "FETCH_PROJECT_LIST_SUCCESS";
const FETCH_PROJECT_LIST_FAILURE = "FETCH_PROJECT_LIST_FAILURE";
import contenfulClient from "../contentful/client";
import paintingMockResponse from "../mockResponse/painting_local";
import projectMockResponse from "../mockResponse/project_local";

const promisedPaintingContent = new Promise((resolve, reject) => {
  resolve(paintingMockResponse);
});

const promisedProjectContent = new Promise((resolve, reject) => {
  resolve(projectMockResponse);
});


const fetchPaintingList = (options = {}) => {
  const { offlineMode } = options;
  return (dispatch, getState) => {
    dispatch({ type: FETCH_PAINTING_LIST_PENDING });
    const query = offlineMode
      ? promisedPaintingContent
      : contenfulClient.getEntries({
          content_type: "artwork"
        });
    query
      .then(response => {
        dispatch({
          type: FETCH_PAINTING_LIST_SUCCESS,
          payload: { response },
          offlineMode: offlineMode ? true : false
        });
      })
      .catch(error => {
        dispatch({ type: FETCH_PAINTING_LIST_FAILURE, payload: { error } });
      });
  };
};

const fetchProjectList = (options = {}) => {
  const { offlineMode } = options;
  return (dispatch, getState) => {
    dispatch({ type: FETCH_PROJECT_LIST_PENDING });
    const query = offlineMode
      ? promisedProjectContent
      : contenfulClient.getEntries({
          content_type: "project"
        });
    query
      .then(response => {
        dispatch({
          type: FETCH_PROJECT_LIST_SUCCESS,
          payload: { response },
          offlineMode: offlineMode ? true : false
        });
      })
      .catch(error => {
        dispatch({ type: FETCH_PROJECT_LIST_FAILURE, payload: { error } });
      });
  };
};

export {
  FETCH_PAINTING_LIST_PENDING,
  FETCH_PAINTING_LIST_SUCCESS,
  FETCH_PAINTING_LIST_FAILURE,
  FETCH_PROJECT_LIST_PENDING,
  FETCH_PROJECT_LIST_SUCCESS,
  FETCH_PROJECT_LIST_FAILURE,
  fetchPaintingList,
  fetchProjectList
};
