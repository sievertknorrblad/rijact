export { default as api } from './api';

export const mapObj = (obj, fn) => Object.keys(obj).reduce(
    (state, itemKey) => ({ ...state, [itemKey]: fn(obj[itemKey]) }),
    {}
  )
  
export const augmentSelectorWith = parentSelector => selector => {
    return (state, ...restArgs) => selector(parentSelector(state), ...restArgs);
}
