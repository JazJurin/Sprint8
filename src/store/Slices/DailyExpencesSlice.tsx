import { createSlice } from "@reduxjs/toolkit";
import DailyExpences from "../../components/DailyExpences";

export const DailyExpencesSlice = createSlice({
    name: "DailyExpences",
    initialState: {DailyExpences},
    reducers: {
        addExpence: (state, action) => 
            state.DailyExpences = action.payload
    }
})

export const { addExpence } = DailyExpencesSlice.actions;
export default DailyExpencesSlice.reducer;