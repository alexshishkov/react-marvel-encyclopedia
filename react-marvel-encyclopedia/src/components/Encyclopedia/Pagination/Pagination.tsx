import classNames from 'classnames';
import React from 'react';
import styled from './Pagination.module.css';

interface Props {
  paginate(number: number): unknown;
  numberOfPages: number;
  currentPage: number;
}

const Pagination = (props: Props) => {
  const { numberOfPages, currentPage, paginate } = props;
  const pageNubers: number[] = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageNubers.push(i);
  }
  return (
    <div className={styled.wrapper}>
      <div
        className={classNames(styled.arrow, styled.arrow__left)}
        onClick={() => {
          const number = currentPage - 1;
          number > 0 && paginate(number);
        }}
      ></div>
      <div className={styled.buttons__wrapper}>
        {pageNubers.map((number) => {
          return (
            <div
              key={number}
              className={
                number === currentPage
                  ? classNames(styled.active__button, styled.button)
                  : styled.button
              }
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </div>
          );
        })}
      </div>
      <div
        className={styled.arrow}
        onClick={() => {
          const number = currentPage + 1;
          number <= numberOfPages && props.paginate(number);
        }}
      ></div>
    </div>
  );
};

export default Pagination;
