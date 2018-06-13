import { combineReducers } from "redux";
import { default as itemsIds } from "./itemsIds";
import { default as items } from "./items";
import { mapObj, augmentSelectorWith } from "../../utils";
export const ns = "data";
const root = state => state[ns];

export const selectors = {
    root,
};

export const rawReducer = combineReducers({
  ...itemsIds.reducer,
  ...items.reducer
});
const reducer = {
  [ns]: rawReducer
}
export default {
  ns,
  selectors,
  reducer,
  rawReducer,
  items: {
      ...items,
      selectors: mapObj(items.selectors, augmentSelectorWith(root)),
  },
  itemsIds: {
      ...itemsIds,
      selectors: mapObj(itemsIds.selectors, augmentSelectorWith(root))
  }
};