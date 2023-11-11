import { createSlice } from "@reduxjs/toolkit";
import ExpenceBalance from "../../components/ExpenceBalance";

export const ExpencesBalanceSlice = createSlice({
    name: "ExpenceBalance",
    initialState: {ExpenceBalance},
    reducers: {
        addBalance: (state, action) => 
            state.ExpenceBalance = action.payload
    }
})

export const { addBalance } = ExpencesBalanceSlice.actions;
export default ExpencesBalanceSlice.reducer;