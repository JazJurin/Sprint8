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

// eslint-disable-next-line react-refresh/only-export-components
export const { setDailyExpenses, setYesterdayExpenses } = DailyExpensesSlice.actions;
export default DailyExpensesSlice.reducer;
