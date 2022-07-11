import React from 'react';

import { useAppDispatch } from '../../app/hooks';
import styles from './Counter.module.css';
import { increment } from './redux/reducers';

export function CounterIncrementButton() {
  const dispatch = useAppDispatch();
  console.log('CounterIncrementButton');

  return (
    <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())}>
      +
    </button>
  );
}
