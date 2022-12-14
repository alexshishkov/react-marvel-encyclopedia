import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDataHeroes } from 'types/types';
import { API_KEY, url } from 'api/api';
import axios from 'axios';
import { addError, addHeroes } from 'store';

export const fetchHeroes = createAsyncThunk('heroes/feathHeroes', async function (_, { dispatch }) {
  await axios
    .get(url, {
      params: {
        apikey: API_KEY,
        limit: 100,
      },
    })
    .then((result) => {
      const data: IDataHeroes[] = result.data.data.results;
      const heroesArr = data.map(({ id, name, description, thumbnail: { path, extension } }) => {
        return { id, name, description, path, extension };
      });
      if (heroesArr.length === 0) {
        dispatch(addError(true));
      } else {
        dispatch(addHeroes(heroesArr));
        dispatch(addError(false));
      }
    });
});

export const fetchHero = createAsyncThunk(
  'heroes/feathHero',
  async function (hero: string, { dispatch }) {
    await axios
      .get(`${url}?nameStartsWith=${hero}`, {
        params: {
          apikey: API_KEY,
          limit: 100,
        },
      })
      .then((result) => {
        const data: IDataHeroes[] = result.data.data.results;
        const heroesArr = data.map(({ id, name, description, thumbnail: { path, extension } }) => {
          return { id, name, description, path, extension };
        });
        if (heroesArr.length === 0) {
          dispatch(addError(true));
        } else {
          dispatch(addHeroes(heroesArr));
          dispatch(addError(false));
        }
      });
  }
);
