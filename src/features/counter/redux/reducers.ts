import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../../app/types';
import { selectCount } from './counterSelectors';
import { incrementAsync } from './thunks';
import { CounterState } from '../types';

export const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

const increment = (state: Draft<CounterState>) => {
  state.value += 1;
};
const decrement = (state: Draft<CounterState>) => {
  state.value -= 1;
};
const incrementByAmount = (state: Draft<CounterState>, action: PayloadAction<number>) => {
  state.value += action.payload;
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment,
    decrement,
    incrementByAmount,
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      // dispatch(incrementByAmountAction(amount));
    }
  };

export default slice.reducer;
