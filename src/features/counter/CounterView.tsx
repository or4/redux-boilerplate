import React from 'react';

import { useAppSelector } from '../../app/hooks';
import styles from './Counter.module.css';
import { selectCount } from './redux/counterSelectors';

export function CounterView() {
  const count = useAppSelector(selectCount);
  console.log('CounterView', count);

  return <span className={styles.value}>{count}</span>;
}
