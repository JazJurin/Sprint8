import { configureStore } from "@reduxjs/toolkit";
import DailyExpencesSlice from "./Slices/DailyExpencesSlice";
import ExpencesBalanceSlice from "./Slices/ExpenceBalanceSlice";
import GraphDataSlice from "./Slices/GraphDataSlice";
import VariationSlice from "./Slices/VariationSlice";

export const store = configureStore({
    reducer: {
        DailyExpences: DailyExpencesSlice,
        ExpencesBalance: ExpencesBalanceSlice,
        GraphData: GraphDataSlice,
        Variation: VariationSlice
    }
    
})