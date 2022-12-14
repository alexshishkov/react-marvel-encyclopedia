import React from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import style from './Modal.module.css';
import { store } from 'store';
import classNames from 'classnames';

interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
}

type RootState = ReturnType<typeof store.getState>;

const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;

const Modal = (props: Props): React.ReactElement => {
  const { active, setActive } = props;
  const state = useCounterSelector((state) => state.rootReducer.data);

  return (
    <div
      data-testid="modal"
      className={classNames(style.modal, active && style.active__modal)}
      onClick={() => setActive(false)}
    >
      <div className={active ? style.modal__content_wrapper : style.none}>
        <div data-testid="close" className={style.close} onClick={() => setActive(false)}></div>
        <div
          data-testid="modal__content"
          className={
            active
              ? classNames(
                  style.modal__content_active,
                  !state.heroInfo.description && style.modal__content_column
                )
              : style.modal__content
          }
          onClick={(e) => e.stopPropagation()}
        >
          <img className={style.content__img} src={state.heroInfo.path} alt="img" />
          <div>
            <div className={style.content__name}>{state.heroInfo.name}</div>
            <div className={state.heroInfo.description ? style.content__text : style.none}>
              {state.heroInfo.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
