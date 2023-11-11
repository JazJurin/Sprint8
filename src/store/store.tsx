import { configureStore } from "@reduxjs/toolkit";
import DailyExpencesSlice from "./Slices/DailyExpencesSlice";
import ExpencesBalanceSlice from "./Slices/ExpenceBalanceSlice";
import GraphDataSlice from "./Slices/GraphDataSlice";
import PercentageSlice from "./Slices/PercentageSlice";

export const store = configureStore({
    reducer: {
        DailyExpences: DailyExpencesSlice.reducer,
        ExpencesBalance: ExpencesBalanceSlice.reducer,
        GraphData: GraphDataSlice.reducer,
        Percentage: PercentageSlice.reducer        
    }
})