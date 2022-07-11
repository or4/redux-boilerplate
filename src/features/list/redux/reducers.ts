import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListState } from '../types';

export const initialState: ListState = {
  values: [{ value: 'Happy day' }],
  filter: '',
};

export const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addListItem: (state) => {
      state.values.push({ value: `Hello #${state.values.length}` });
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { addListItem, setFilter } = slice.actions;

export default slice.reducer;
