import { combineReducers } from '@reduxjs/toolkit';
import { store } from 'store';
import { heroSlice } from './heroSlice';

export const rootReducer = combineReducers({ data: heroSlice.reducer });

export type RootState = ReturnType<typeof store.getState>;
