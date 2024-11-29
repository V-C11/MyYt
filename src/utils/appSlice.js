import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOppen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOppen = !state.isMenuOppen;
    },
    closeMenu : (state) => {
      state.isMenuOppen = true
    }
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
