export const cartReducer = (cartState, { type, payload }) => {
    switch (type) {
      case "ADD_TO_CART":
        return {
          ...cartState,
          cart: [...cartState.cart, { ...payload.product, itemCount: 1 }],
        };
      case "REMOVE_FROM_CART":
        return {
          ...cartState,
          cart: cartState.cart.filter((product) => product.id !== payload.id)
        };
  
      case "INCREASE_QUANTITY":
        return {
          ...cartState,
          cart: cartState.cart.map((product) =>
            product.id === payload
              ? { ...product, itemCount: product.itemCount + 1 }
              : product
          )
        };
  
      case "DECREASE_QUANTITY":
        return {
          ...cartState,
          cart: cartState.cart.map((product) =>
            product.id === payload
              ? { ...product, itemCount: product.itemCount - 1 }
              : product
          )
        };
      default:
        return cartState;
    }
  };
  