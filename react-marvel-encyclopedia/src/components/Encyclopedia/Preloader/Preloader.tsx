import React from 'react';
import c from './Preloader.module.css';

const Preloader = () => {
  return (
    <div data-testid="preloader" className={c.wrapper}>
      <div className={c.preloader}></div>
    </div>
  );
};

export default Preloader;
