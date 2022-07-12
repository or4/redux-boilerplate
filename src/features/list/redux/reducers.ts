import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ListState } from '../types';

export const initialState: ListState = {
  values: [{ value: 'Happy day' }],
  filter: '',
};

const addListItem = (state: Draft<ListState>) => {
  state.values.push({ value: `Hello #${state.values.length}` });
};

const setFilter = (state: Draft<ListState>, action: PayloadAction<string>) => {
  state.filter = action.payload;
};

export const slice = createSlice({
  name: 'list',
  initialState,
  reducers: { addListItem, setFilter },
});

export default slice.reducer;
