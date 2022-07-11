import { RootState } from '../../../app/types';

export const selectCount = (state: RootState) => state.counter.value;
