import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../redux/slices/CartSlices';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
