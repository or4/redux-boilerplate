import React from 'react';

import styles from './Counter.module.css';
import { CounterDecrementButton } from './CounterDecrementButton';
import { CounterIncrementAmount } from './CounterIncrementAmount';
import { CounterIncrementButton } from './CounterIncrementButton';
import { CounterView } from './CounterView';

export function Counter() {
  console.log('Counter');
  return (
    <div>
      <div className={styles.row}>
        <CounterDecrementButton />
        <CounterView />
        <CounterIncrementButton />
      </div>
      <div className={styles.row}>
        <CounterIncrementAmount />
      </div>
    </div>
  );
}
