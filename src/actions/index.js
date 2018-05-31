import { api } from '../utils';

export const requestItemStart = id => ({
    type: 'REQUEST_ITEM_START',
    payload: id,
  })
  
export const requestItemSuccess = item => ({
  type: 'REQUEST_ITEM_SUCCESS',
  payload: item,
})

export const requestItemFailure = (id, err) => ({
  type: 'REQUEST_ITEM_FAILURE',
  payload: {
      id,
      err,
  },
})

export const requestItemsIdsStart = () => ({
  type: 'REQUEST_ITEM_IDS_START',
});

export const requestItemsIdsSuccess = itemIds => ({
  type: 'REQUEST_ITEM_IDS_SUCCESS',
  payload: itemIds,
});

export const requestItemsIdsFailure = err => ({
  type: 'REQUEST_ITEM_IDS_FAIL',
  payload: err,
});

export const toggleTheme = () => ({
  type: 'TOGGLE_THEME',
});

export const updateItemsToShow = value => ({
  type: 'UPDATE_ITEMS_TO_SHOW',
  payload: value,
});

export const fetchItemsIds = () => dispatch => {
  dispatch(requestItemsIdsStart());
  api
    .getItemsIds()
    .then(itemsIds => {
      dispatch(requestItemsIdsSuccess(itemsIds));
    })
    .catch(err => {
      dispatch(requestItemsIdsFailure(err));
    });
};

export const fetchItem = id => dispatch => {
  dispatch(requestItemStart(id));
  api
    .getItem(id)
    .then(item => {
      dispatch(requestItemSuccess(item));
    })
    .catch(err => {
      dispatch(requestItemFailure(id, err));
    });
};