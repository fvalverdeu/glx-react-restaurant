import { SHOPPING_CART_ACTIONS } from "./actions";

const initialState = {
  step1: {
    plan: "",
    account: "",
  },
  step2: {
    termsConditions: false,
    offers: false,
  },
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOPPING_CART_ACTIONS.SET_STEP_1:
      return {
        ...state,
        step1: action.payload,
      };

    case SHOPPING_CART_ACTIONS.SET_STEP_2:
      return {
        ...state,
        step2: action.payload,
      };

    default:
      return {...state};
  }
};

export default shoppingCartReducer;
