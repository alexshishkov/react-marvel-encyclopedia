import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHeroes, IHeroInfo } from 'types/types';

export const heroSlice = createSlice({
  name: 'heroes',
  initialState: {
    searchValue: '',
    heroes: [] as IHeroes[],
    heroesPerPagePayload: 10,
    currentPage: 1,
    heroInfo: {
      name: '',
      path: '',
      description: '',
    },
    error: false,
  },
  reducers: {
    addSearchValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchValue: action.payload,
      };
    },
    addHeroes: (state, action: PayloadAction<IHeroes[]>) => {
      return {
        ...state,
        heroes: action.payload,
      };
    },
    addHeroesPerPage: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        heroesPerPagePayload: action.payload,
      };
    },
    addCurrentPage: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    addHeroInfo: (state, action: PayloadAction<IHeroInfo>) => {
      return {
        ...state,
        heroInfo: action.payload,
      };
    },
    addError: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});
