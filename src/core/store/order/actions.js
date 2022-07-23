export const SHOPPING_CART_ACTIONS = {
  SET_STEP_1: "[SHOPPING_CART] SET STEP 1",
  SET_STEP_2: "[SHOPPING_CART] SET STEP 2",
};

const setStep1 = (payload) => ({
  type: SHOPPING_CART_ACTIONS.SET_STEP_1,
  payload,
});
const setStep2 = (payload) => ({
  type: SHOPPING_CART_ACTIONS.SET_STEP_2,
  payload,
});

const ShoppingCartActions = {
  setStep1,
  setStep2,
};


export default ShoppingCartActions;