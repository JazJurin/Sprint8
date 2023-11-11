import { createSlice } from "@reduxjs/toolkit";
import GraphData from "../../components/GraphData";

export const GraphDataSlice = createSlice({
    name: "GraphData",
    initialState: {GraphData},
    reducers: {
        addGraph: (state, action) => 
            state.GraphData = action.payload
    }
})

export const { addGraph } = GraphDataSlice.actions;
export default GraphDataSlice.reducer;