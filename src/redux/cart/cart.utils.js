export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItems) =>
      cartItems.id === cartItemsToAdd.id
        ? { ...cartItems, quantity: cartItems.quantity + 1 }
        : cartItems
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemsRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
