import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {
    productList: async (state, action) => {
      try {
        const { data } = await axios.get("/api/products");
        console.log(data);
        state.push(data)
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { productList } = productSlice.actions;
