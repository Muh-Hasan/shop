import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from './reducres/productReducers'

const reducer = {
    product: productSlice.reducer
};
const store = configureStore({
  reducer,
});

export default store;
