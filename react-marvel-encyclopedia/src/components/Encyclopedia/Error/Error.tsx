import React from 'react';
import c from './Error.module.css';

const Error = () => {
  return (
    <div data-testid="aboutus" className={c.wrapper}>
      <div className={c.logo}></div>
      <div className={c.text}>Sorry there is no such hero</div>
    </div>
  );
};

export default Error;
