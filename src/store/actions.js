const FETCH_PAINTING_LIST_PENDING = "FETCH_PAINTING_LIST_PENDING";
const FETCH_PAINTING_LIST_SUCCESS = "FETCH_PAINTING_LIST_SUCCESS";
const FETCH_PAINTING_LIST_FAILURE = "FETCH_PAINTING_LIST_FAILURE";
const FETCH_PROJECT_LIST_PENDING = "FETCH_PROJECT_LIST_PENDING";
const FETCH_PROJECT_LIST_SUCCESS = "FETCH_PROJECT_LIST_SUCCESS";
const FETCH_PROJECT_LIST_FAILURE = "FETCH_PROJECT_LIST_FAILURE";
const ALL_PAINTINGS_LOADED = "ALL_PAINTINGS_LOADED";
const INIT_SCREEN_WIDTH = "INIT_SCREEN_WIDTH";
const SET_ACTIVE_PROJECT = "SET_ACTIVE_PROJECT";
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
    dispatch({
      type: FETCH_PAINTING_LIST_PENDING,
      offlineMode: offlineMode ? true : false
    });
    const query = offlineMode
      ? promisedPaintingContent
      : contenfulClient.getEntries({
          content_type: "artwork",
          order: "-fields.displayOrder"
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
        console.log("ERROR FETCHING PROJECTS:", error);
        dispatch({ type: FETCH_PAINTING_LIST_FAILURE, payload: { error } });
      });
  };
};

const fetchProjectList = (options = {}) => {
  const { offlineMode } = options;
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_PROJECT_LIST_PENDING,
      offlineMode: offlineMode ? true : false
    });
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

const setAllPaintingsLoaded = (isLoaded = true) => {
  return { type: ALL_PAINTINGS_LOADED, payload: isLoaded };
};

const initialiseApp = (options = {}) => {
  return (dispatch, getSTate) => {
    const pixelRatioRaw = window.devicePixelRatio ? window.devicePixelRatio : 1;
    const pixelRatio = Math.round(pixelRatioRaw * 100) / 100;
    const screenWidth = window.screen.width;
    const deviceSpecificImageWidth = pixelRatio * screenWidth;

    dispatch({
      type: INIT_SCREEN_WIDTH,
      payload: { screenWidth: deviceSpecificImageWidth }
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
  ALL_PAINTINGS_LOADED,
  INIT_SCREEN_WIDTH,
  SET_ACTIVE_PROJECT,
  fetchPaintingList,
  fetchProjectList,
  setAllPaintingsLoaded,
  initialiseApp
};
