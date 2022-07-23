import { PORTAL_ACTIONS } from "./actions";

const initialState = {
  products: [], // { id, name, description, price, image }
  cart: [], // { id, name, description, price, image, quantity }
  cartNumber: 0
};

const portalReducer = (state = initialState, action) => {
  switch (action.type) {
    case PORTAL_ACTIONS.GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case PORTAL_ACTIONS.GET_NUMBER_CART:
      return {
        ...state.cartNumber
      };

    case PORTAL_ACTIONS.CART_ADD:
      // Find item in products
      const item = state.products.find((product) => product.id === action.payload.id);

      // Verify if item is in cart
      const isInCart = state.cart.find((itemCart) => itemCart.id === action.payload.id);

      return { 
        ...state, 
        cart: isInCart ? 
          state.cart.map(
            (item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ) : [...state.cart, { ...item, quantity: 1 }] 
      };

    case PORTAL_ACTIONS.CART_REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id )
      };

    case PORTAL_ACTIONS.CART_UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(
          (item) => item.id === action.payload.id ? { ...item, quantity: +action.payload.quantity } : item
          )
      };

    default:
      return {...state};

  }
};

export default portalReducer;
