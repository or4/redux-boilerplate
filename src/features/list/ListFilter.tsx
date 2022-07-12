import React from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import styles from './List.module.css';
import { selectFilter } from './redux/listSelectors';
import { setFilter } from './redux/actions';

export function ListFilter() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  console.log('ListAddItem');

  return (
    <>
      <input
        className={styles.textbox}
        aria-label="Set filter"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </>
  );
}
