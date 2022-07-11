import React from 'react';

import styles from './List.module.css';
import { ListAddItem } from './ListAddItem';
import { ListFilter } from './ListFilter';
import { ListView } from './ListView';

export function List() {
  console.log('List');
  return (
    <div>
      <div className={styles.row}>
        <ListAddItem />
        <ListFilter />
      </div>
      <div className={styles.row}>
        <ListView />
      </div>
    </div>
  );
}
