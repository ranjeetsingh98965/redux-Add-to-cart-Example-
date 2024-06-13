import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const {addToCart, removeFromCart} = CartSlice.actions;

// export const selectCount = (state) => state.cart.value;

export default CartSlice.reducer;
