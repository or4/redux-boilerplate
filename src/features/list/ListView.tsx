import React from 'react';

import { useAppSelector } from '../../app/hooks';
import styles from './List.module.css';
import { selectFiltered } from './redux/listSelectors';

export function ListView() {
  const list = useAppSelector(selectFiltered);
  console.log('ListView');

  const components = list.map((item, index) => (
    <div key={index} className={styles.value}>
      {item.value}
    </div>
  ));

  return <div className={styles.container}>{components}</div>;
}
