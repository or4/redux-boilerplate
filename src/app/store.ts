import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/redux/reducers';
import listReducer from '../features/list/redux/reducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
  },
  devTools: true,
});
