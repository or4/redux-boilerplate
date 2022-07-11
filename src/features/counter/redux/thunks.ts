import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from '../api/counterAPI';

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount);
  return response.data;
});
