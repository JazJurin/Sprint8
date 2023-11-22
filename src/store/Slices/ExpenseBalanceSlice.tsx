import { createSlice } from "@reduxjs/toolkit";

export interface ExpenseBalanceSlice {
  ExpenseBalance: number;
}

const initialState: ExpenseBalanceSlice = {
  ExpenseBalance: 0,
};

export const ExpenseBalanceSlice = createSlice({
  name: "ExpenseBalance",
  initialState,
  reducers: {
      addBalance: (state, action) => {
        return { ...state, ExpenseBalance: action.payload };
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { addBalance } = ExpenseBalanceSlice.actions;
export default ExpenseBalanceSlice.reducer;
