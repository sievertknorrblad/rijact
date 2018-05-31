import { api } from '../utils';

const requestItemStart = id => ({
    type: 'REQUEST_ITEM_START',
    payload: id,
  })
  
  const requestItemSuccess = item => ({
    type: 'REQUEST_ITEM_SUCCESS',
    payload: item,
  })
  
  const requestItemFailure = (id, err) => ({
    type: 'REQUEST_ITEM_FAILURE',
    payload: {
        id,
        err,
    },
  })

  const requestItemsIdsStart = () => ({
    type: 'REQUEST_ITEM_IDS_START',
  });

  const requestItemsIdsSuccess = itemIds => ({
    type: 'REQUEST_ITEM_IDS_SUCCESS',
    payload: itemIds,
  });
  
  const requestItemsIdsFailure = err => ({
    type: 'REQUEST_ITEM_IDS_FAIL',
    payload: err,
  });

  const toggleTheme = () => ({
    type: 'TOGGLE_THEME',
  });

  const updateItemsToShow = value => ({
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

  export { requestItemStart, requestItemSuccess, requestItemsIdsFailure, requestItemsIdsStart, requestItemsIdsSuccess, requestItemFailure, toggleTheme, updateItemsToShow };