import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import styles from './Counter.module.css';
import { decrement } from './redux/actions';

export function CounterDecrementButton() {
  const dispatch = useAppDispatch();

  return (
    <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())}>
      -
    </button>
  );
}
