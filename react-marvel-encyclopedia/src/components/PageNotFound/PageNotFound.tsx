import React from 'react';
import { Link } from 'react-router-dom';
import style from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div data-testid="pagenotfound" className={style.wrapper}>
      <Link to="/Encyclopedia" className={style.text}>
        Это ошибка, браток ...
      </Link>
    </div>
  );
};

export default PageNotFound;
