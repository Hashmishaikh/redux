import { ActionContent } from "../Container/ActionContent";
const initialState = {
  products: [],
};

export const ProductData = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionContent.SET_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const ProductSelect = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionContent.SELECTED_PRODUCT:
      return { ...state, ...payload };
      case ActionContent.REMOVE_PRODUCT:
          return {};
    default:
      return state;
  }
};
