import {
  FETCH_ARTWORK_LIST_PENDING,
  FETCH_ARTWORK_LIST_SUCCESS,
  FETCH_ARTWORK_LIST_FAILURE,
  FETCH_PROJECT_LIST_PENDING,
  FETCH_PROJECT_LIST_SUCCESS,
  FETCH_PROJECT_LIST_FAILURE,
  FETCH_BIO_LIST_PENDING,
  FETCH_BIO_LIST_SUCCESS,
  FETCH_BIO_LIST_FAILURE,
  FETCH_CONTACT_LIST_PENDING,
  FETCH_CONTACT_LIST_SUCCESS,
  FETCH_CONTACT_LIST_FAILURE,
  SET_ARTWORK_TO_LOAD,
  ALL_ARTWORK_LOADED,
  INIT_SCREEN_WIDTH,
  SET_ACTIVE_PROJECT,
} from "./actions";

const defaultState = {
  artworkList: null,
  projectList: null,
  bioList: null,
  contactList: null,
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
    case FETCH_BIO_LIST_SUCCESS:
      const bioList = action.payload.response.items
      const bioListSorted = bioList.sort((a, b) => a.fields.sortOrder - b.fields.sortOrder)
      const bioListForMarkdown = bioListSorted.map(item => {
        const markdown = { ...item }
        // This will fix the lack of line breaks from the default /n, by adding two additional space at the end of each line.
        markdown.fields.text = markdown.fields.text.replaceAll("\n", "  \n")
        return markdown
      })
      return Object.assign({}, state, {
        bioList: bioListForMarkdown
      });
    case FETCH_CONTACT_LIST_SUCCESS:
      const contactList = action.payload.response.items
      const contactListSorted = contactList.sort((a, b) => a.fields.sortOrder - b.fields.sortOrder)
      const contactListForMarkdown = contactListSorted.map(item => {
        const markdown = { ...item }
        // This will fix the lack of line breaks from the default /n, by adding two additional space at the end of each line.
        markdown.fields.text = markdown.fields.text.replaceAll("\n", "  \n")
        return markdown
      })
      return Object.assign({}, state, {
        contactList: contactListForMarkdown
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
