export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case "CART_ADD_ITEM":
          const item = action.payload
          const existItem = state.cartItems.find()
      case "CART_REMOVE_ITEM":
        return { loading: false, cartItems: action.payload };
      default:
        return state;
    }
  };
  