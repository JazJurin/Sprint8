import { createSlice } from "@reduxjs/toolkit";
import Percentage from "../../components/Percentage";

export const PercentageSlice = createSlice({
    name: "Percentage",
    initialState: {Percentage},
    reducers: {
        addPercentage: (state, action) => 
            state.Percentage = action.payload
    }
})

export const { addPercentage } = PercentageSlice.actions;
export default PercentageSlice.reducer;