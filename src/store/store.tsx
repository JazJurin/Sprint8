import { configureStore } from "@reduxjs/toolkit";
import DailyExpensesSlice from "./Slices/DailyExpensesSlice";
import ExpensesBalanceSlice from "./Slices/ExpenseBalanceSlice";
import GraphDataSlice from "./Slices/GraphDataSlice";
import VariationSlice from "./Slices/VariationSlice";

export const store = configureStore({
  reducer: {
    DailyExpenses: DailyExpensesSlice,
    ExpensesBalance: ExpensesBalanceSlice,
    GraphData: GraphDataSlice,
    Variation: VariationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
