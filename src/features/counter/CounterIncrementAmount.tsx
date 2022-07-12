import React, { useState } from 'react';

import { useAppDispatch } from '../../app/hooks';
import styles from './Counter.module.css';
import { incrementIfOdd } from './redux/reducers';
import { incrementByAmount } from './redux/actions';
import { incrementAsync } from './redux/thunks';

export function CounterIncrementAmount() {
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  console.log('CounterIncrementAmount, incrementValue', incrementValue);

  return (
    <>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => {
          const action = dispatch(incrementByAmount(incrementValue));
          console.log('action', action);
        }}
      >
        Add Amount
      </button>
      <button
        className={styles.button}
        onClick={() => {
          const promise = dispatch(incrementAsync(incrementValue));
          console.log('promise', promise);
          // promise.abort();
        }}
      >
        Add Async
      </button>
      <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
        Add If Odd
      </button>
    </>
  );
}
