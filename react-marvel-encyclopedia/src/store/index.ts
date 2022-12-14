import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slices';
import { heroSlice } from './slices/heroSlice';

export const {
  addSearchValue,
  addHeroes,
  addHeroesPerPage,
  addCurrentPage,
  addHeroInfo,
  addError,
} = heroSlice.actions;

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});
