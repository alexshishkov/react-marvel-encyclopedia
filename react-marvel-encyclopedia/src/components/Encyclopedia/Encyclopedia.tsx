import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import style from './Encyclopedia.module.css';
import Preloader from './Preloader/Preloader';
import Pagination from './Pagination/Pagination';
import Error from './Error/Error';
import { addCurrentPage, addHeroesPerPage, addSearchValue } from 'store';
import { IHeroes } from 'types/types';
import Modal from './Modal/Modal';
import { useTypedSelector } from 'store/hooks/useTypedSelector';
import { useHeroesDispatch } from 'store/hooks/hooks';
import { fetchHero, fetchHeroes } from 'store/thunks/thunks';

const Encyclopedia = () => {
  const dispatch = useHeroesDispatch();
  const state = useTypedSelector((state) => state.rootReducer.data);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(state.currentPage);
  const [modalActive, setModalActive] = useState(false);

  const heroesPerPage = state.heroesPerPagePayload;
  let currentHeroes: IHeroes[];
  let numberOfPages;

  if (heroesPerPage !== 0) {
    const lastheroesIndex = currentPage * heroesPerPage;
    const firsteroesIndex = lastheroesIndex - heroesPerPage;
    currentHeroes = state.heroes.slice(firsteroesIndex, lastheroesIndex);
    numberOfPages = Math.ceil(state.heroes.length / heroesPerPage);
  } else {
    currentHeroes = [];
    numberOfPages = 0;
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(addHeroesPerPage(heroesPerPage));
    dispatch(addCurrentPage(currentPage));
  }, [currentPage, dispatch, heroesPerPage]);

  useEffect(() => {
    async function fetchData() {
      await setIsFetch(true);
      await dispatch(fetchHeroes());
      await setIsFetch(false);
    }
    if (state.searchValue === '') {
      fetchData();
    }
  }, [dispatch, state.searchValue]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.searchValue) {
      await setIsFetch(true);
      await dispatch(fetchHero(state.searchValue!));
      await setIsFetch(false);
    } else await dispatch(fetchHeroes());
    await setCurrentPage(1);
  }

  function setActive(value: boolean) {
    setModalActive(value);
  }

  return (
    <div data-testid="encyclopedia" className={style.wrapper}>
      <Modal active={modalActive} setActive={setActive} />
      <div className={style.logo}></div>
      <form data-testid="form" className={style.search__bar} onSubmit={handleSubmit}>
        <input
          data-testid="search"
          className={style.search}
          value={state.searchValue}
          onChange={(event) => dispatch(addSearchValue(event.target.value))}
          type="text"
          placeholder="search"
        />
        <input className={style.search__img} type="submit" value="" />
      </form>
      {!isFetch && !state.error && (
        <Pagination currentPage={currentPage} paginate={paginate} numberOfPages={numberOfPages} />
      )}
      <div className={style.cards}>
        {isFetch ? (
          <Preloader />
        ) : state.error ? (
          <Error />
        ) : (
          <Card heroes={currentHeroes} setActive={setActive} />
        )}
      </div>
    </div>
  );
};

export default Encyclopedia;
