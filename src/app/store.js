import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import player_reducer from '../features/player/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    player: player_reducer,
  },
});
