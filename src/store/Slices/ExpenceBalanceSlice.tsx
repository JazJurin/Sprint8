import { createSlice } from "@reduxjs/toolkit";

export interface ExpenceBalanceSlice {
  ExpenceBalance: number;
}

const initialState: ExpenceBalanceSlice = {
  ExpenceBalance: 0,
};

export const ExpenceBalanceSlice = createSlice({
  name: "ExpenceBalance",
  initialState: initialState,
  reducers: {
      addBalance: (state, action) => {
        return { ...state, ExpenceBalance: action.payload };
    },
  },
});

export const { addBalance } = ExpenceBalanceSlice.actions;
export default ExpenceBalanceSlice.reducer;
