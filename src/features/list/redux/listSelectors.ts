import { RootState } from '../../../app/types';
import { createSelector } from '@reduxjs/toolkit';

export const selectList = (state: RootState) => {
  console.log('select list');
  return state.list.values;
};

export const selectFilter = (state: RootState) => {
  console.log('select filter');
  return state.list.filter;
};

export const selectFiltered = createSelector(
  selectList,
  selectFilter,
  (list, filter) => {
    console.log('Calculate filtered');
    if (filter === '') {
      return list;
    }

    return list.filter((item) => {
      return item.value.includes(filter);
    });
  },
  {
    // New in 4.1: Pass options through to the built-in `defaultMemoize` function
    memoizeOptions: {
      equalityCheck: (a, b) => a === b,
      maxSize: 10,
      resultEqualityCheck: (a, b) => a === b,
    },
  }
);
