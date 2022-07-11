import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import styles from './List.module.css';
import { addListItem } from './redux/reducers';

export function ListAddItem() {
  const dispatch = useAppDispatch();

  console.log('ListAddItem');

  return (
    <>
      <button className={styles.button} onClick={() => dispatch(addListItem())}>
        Add Item
      </button>
    </>
  );
}
