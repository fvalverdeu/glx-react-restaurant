export const PORTAL_ACTIONS = {
  GET_ALL_PRODUCT: "[PORTAL] GET_ALL_PRODUCT",
  CART_GET_TOTAL_QUANTITY: "[PORTAL] CART_GET_TOTAL_QUANTITY",
  CART_ADD: "[PORTAL] CART_ADD" ,
  CART_REMOVE: "[PORTAL] CART_REMOVE",
  CART_UPDATE_QUANTITY: "[PORTAL] CART_UPDATE_QUANTITY N",
  CART_INCREASE_QUANTITY: "[PORTAL] CART_INCREASE_QUANTITY 1",
  CART_DECREASE_QUANTITY: "[PORTAL] CART_DECREASE_QUANTITY 1",
};

const getAllProduct = (payload) => ({
  type: PORTAL_ACTIONS.GET_ALL_PRODUCT,
  payload,
});
const cartAdd = (payload) => ({
  type: PORTAL_ACTIONS.CART_ADD,
  payload,
});

const cartRemove = (payload) => ({
  type: PORTAL_ACTIONS.CART_REMOVE,
  payload,
});

const cartUpdateQuantity = (payload) => ({
  type: PORTAL_ACTIONS.CART_UPDATE_QUANTITY,
  payload,
});

const cartIncreaseQuantity = (payload) => ({
  type: PORTAL_ACTIONS.CART_INCREASE_QUANTITY,
  payload,
});

const cartDecreaseQuantity = (payload) => ({
  type: PORTAL_ACTIONS.CART_DECREASE_QUANTITY,
  payload,
});

const PortalActions = {
  getAllProduct,
  cartAdd,
  cartUpdateQuantity,
  cartRemove,
  cartIncreaseQuantity,
  cartDecreaseQuantity
};


export default PortalActions;