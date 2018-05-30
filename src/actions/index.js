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

  const requestItemIdsStart = () => ({
    type: 'REQUEST_ITEM_IDS_START',
  });
  const requestItemIdsSuccess = itemIds => ({
    type: 'REQUEST_ITEM_IDS_SUCCESS',
    payload: itemIds,
  });
  const requestItemIdsFailure = err => ({
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

  export { requestItemStart, requestItemSuccess, requestItemIdsFailure, requestItemIdsStart, requestItemIdsSuccess, requestItemFailure, toggleTheme, updateItemsToShow };