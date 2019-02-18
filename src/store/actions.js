const FETCH_ARTWORK_LIST_PENDING = "FETCH_ARTWORK_LIST_PENDING";
const FETCH_ARTWORK_LIST_SUCCESS = "FETCH_ARTWORK_LIST_SUCCESS";
const FETCH_ARTWORK_LIST_FAILURE = "FETCH_ARTWORK_LIST_FAILURE";
const FETCH_PROJECT_LIST_PENDING = "FETCH_PROJECT_LIST_PENDING";
const FETCH_PROJECT_LIST_SUCCESS = "FETCH_PROJECT_LIST_SUCCESS";
const FETCH_PROJECT_LIST_FAILURE = "FETCH_PROJECT_LIST_FAILURE";
const ALL_ARTWORK_LOADED = "ALL_ARTWORK_LOADED";
const INIT_SCREEN_WIDTH = "INIT_SCREEN_WIDTH";
const SET_ACTIVE_PROJECT = "SET_ACTIVE_PROJECT";
import contenfulClient from "../contentful/client";
import artworkMockResponse from "../mockResponse/ArtworkList_local";
import projectMockResponse from "../mockResponse/project_local";

const promisedArtworkMockResponse = new Promise((resolve, reject) => {
  resolve(artworkMockResponse);
});

const promisedProjectMockResponse = new Promise((resolve, reject) => {
  resolve(projectMockResponse);
});

const fetchArtworkList = (options = {}) => {
  const { offlineMode } = options;
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_ARTWORK_LIST_PENDING,
      offlineMode: offlineMode ? true : false
    });
    const query = offlineMode
      ? promisedArtworkMockResponse
      : contenfulClient.getEntries({
          content_type: "artwork",
          order: "-fields.displayOrder"
        });
    query
      .then(response => {
        dispatch({
          type: FETCH_ARTWORK_LIST_SUCCESS,
          payload: { response },
          offlineMode: offlineMode ? true : false
        });
      })
      .catch(error => {
        console.log("ERROR FETCHING PROJECTS:", error);
        dispatch({ type: FETCH_ARTWORK_LIST_FAILURE, payload: { error } });
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
      ? promisedProjectMockResponse
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

const setAllArtworkLoaded = (isLoaded = true) => {
  return { type: ALL_ARTWORK_LOADED, payload: isLoaded };
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
  FETCH_ARTWORK_LIST_PENDING,
  FETCH_ARTWORK_LIST_SUCCESS,
  FETCH_ARTWORK_LIST_FAILURE,
  FETCH_PROJECT_LIST_PENDING,
  FETCH_PROJECT_LIST_SUCCESS,
  FETCH_PROJECT_LIST_FAILURE,
  ALL_ARTWORK_LOADED,
  INIT_SCREEN_WIDTH,
  SET_ACTIVE_PROJECT,
  fetchArtworkList,
  fetchProjectList,
  setAllArtworkLoaded,
  initialiseApp
};
