import { createSlice } from '@reduxjs/toolkit';

export interface DailyExpensesSlice {
  DailyExpenses: number;
  YesterdayExpenses: number;
}

const initialState: DailyExpensesSlice = {
  DailyExpenses: 0,
  YesterdayExpenses: 0,
};

export const DailyExpensesSlice = createSlice({
  name: 'DailyExpenses',
  initialState,
  reducers: {
    setDailyExpenses: (state, action) => {
      state.DailyExpenses = action.payload;
    },
    setYesterdayExpenses: (state, action) => {
      state.YesterdayExpenses = action.payload;
    },
  },
});

export const { setDailyExpenses, setYesterdayExpenses } = DailyExpensesSlice.actions;
export default DailyExpensesSlice.reducer;
