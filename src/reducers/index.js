import { combineReducers } from 'redux';

const stringifyErr = err => err.toString();

const itemsToShowReducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_ITEMS_TO_SHOW':
      return action.payload;
    default:
      return state;
  }
};

const isDarkThemeReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return !state;
    default:
      return state;
  }
}

const dataItemIdsInitialState = { ids: [], isLoading: false, error: null };
const itemIdsReducer = (state = dataItemIdsInitialState, action) => {
  switch (action.type) {
    case 'REQUEST_ITEM_IDS_START':
      return { ...state, isLoading: true };
    case 'REQUEST_ITEM_IDS_SUCCESS':
      return { ids: action.payload, isLoading: false, error: null };
    case 'REQUEST_ITEM_IDS_FAILURE':
      return {
        ids: {},
        isLoading: false,
        error: stringifyErr(action.payload),
      };
    default:
      return state;
  }
};
const oneItemInitialState = { item: {}, isLoading: false, error: null };
const itemsReducerInitialState = {};
const itemsReducer = (state = itemsReducerInitialState, action) => {
  switch (action.type) {
    case 'REQUEST_ITEM_START':
      return {
        ...state,
        [action.payload]: { ...oneItemInitialState, isLoading: true },
      };
    case 'REQUEST_ITEM_SUCCESS':
      return {
        ...state,
        [action.payload.id]: {
          item: action.payload,
          isLoading: false,
          error: null,
        },
      };
    case 'REQUEST_ITEM_FAILURE':
      return {
        item: {},
        isLoading: false,
        error: stringifyErr(action.payload),
      };
    default:
      return state;
  }
};


const dataReducer = combineReducers({
  itemIds: itemIdsReducer,
  items: itemsReducer
})

const uiReducer = combineReducers({
  value: itemsToShowReducer,
  isDarkTheme: isDarkThemeReducer,
})

const rootReducer = combineReducers({
  ui: uiReducer,
  data: dataReducer,
});


// const fetchItem = id => {
//   store.dispatch(requestItemStart());
//   api.getItem(id)
//     .then(item => {
//       store.dispatch(requestItemSuccess(item));
//     })
//     .catch(err => {
//       store.dispatch(requestItemFailure(err));
//     });
// };

// const BASE_URL = "https://hacker-news.firebaseio.com";
// const fetchJson = url => fetch(url).then(res => res.json());

// const api = {
//   getItem: id => fetchJson(`${BASE_URL}/v0/item/${id}.json`),
// }

// fetchItem(17132058)

export default rootReducer;