import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItems: (state, actions) => {
      state.items.push(actions.payload);
    },

    removeItems: (state) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
})


export const {addItems,removeItems,clearCart} = cartslice.actions
export default cartslice.reducer;
