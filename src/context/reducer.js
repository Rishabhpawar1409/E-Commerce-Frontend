const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id)
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.quantity = parseInt(action.payload.quantity))
            : item.quantity
        )
        // ...state,
        // cart: [...state.cart].map((item) =>
        //   item.id === action.payload.id
        //     ? { ...item, quantity: action.payload.quantity }
        //     : item.quantity
        // )
      };
    default:
      return state;
  }
};
export default CartReducer;
