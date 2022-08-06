import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  x: -512,
  y: -512,
  size: 0,
  size_half: 0,
  style_img: {
    transform: `translate(50vw,50vh)`,
  },
  status: "idle",
};

export const player_slice = createSlice({
  name: "player",
  initialState,
  reducers: {
    set_x: (state, action) => {
      state.x = action.payload;
    },
    set_y: (state, action) => {
      state.y = action.payload;
    },
    set_size: (state, action) => {
      state.size = action.payload;
    },
    set_size_half: (state, action) => {
      state.size_half = action.payload;
    },
    set_style_img: (state, action) => {
      state.style_img = action.payload;
    },
  },
});

export const { set_x, set_y, set_size, set_size_half, set_style_img } =
  player_slice.actions;

export const select_all = (state) => {
  return state.player;
};

export const select_style_img = (state) => {
  return state.player.style_img;
};

export default player_slice.reducer;
