import React from 'react';
import { useDispatch } from 'react-redux';
import { addHeroInfo, store } from 'store';
import { IHeroes } from 'types/types';
import c from './Card.module.css';

type AppDispatch = typeof store.dispatch;

const useCounterDispatch = () => useDispatch<AppDispatch>();

interface Props {
  heroes: IHeroes[];
  setActive: (value: boolean) => void;
}

const Card = (props: Props): React.ReactElement => {
  const dispatch = useCounterDispatch();
  return (
    <React.Fragment>
      {props.heroes.map((el: IHeroes) => {
        return (
          <div
            data-testid="card"
            key={el.id}
            className={c.card}
            onClick={() => {
              props.setActive(true);
              const heroInfo = {
                name: el.name,
                description: el.description,
                path: el.path + '/portrait_fantastic.' + el.extension,
              };
              dispatch(addHeroInfo(heroInfo));
            }}
          >
            <img
              className={c.card__img}
              src={el.path + '/portrait_fantastic.' + el.extension}
              alt="img"
            />
            <div className={c.name}>{el.name}</div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
