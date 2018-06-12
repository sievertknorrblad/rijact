import { combineReducers } from "redux";
import { default as itemsIds } from "./itemsIds";
import { default as items } from "./items";
import { mergeObjects, augmentSelectors } from "../../utils";
export const ns = "data";
export const shape = mergeObjects([itemsIds.shape, items.shape]);
export const defaultState = mergeObjects([
  itemsIds.defaultState,
  items.defaultState
]);
const root = state => (state ? state[ns] : defaultState);

export const selectors = {
    root,
    ...augmentSelectors(root, itemsIds.ns, itemsIds.selectors),
    ...augmentSelectors(root, items.ns, items.selectors)
};

export const actions = mergeObjects([itemsIds.actions, items.actions]);
export const rawReducer = combineReducers({
  ...itemsIds.reducer,
  ...items.reducer
});
const reducer = {
  [ns]: rawReducer
}
export default {
  ns,
  shape,
  defaultState,
  selectors,
  actions,
  reducer
};