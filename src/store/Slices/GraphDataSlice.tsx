import { createSlice } from "@reduxjs/toolkit";
export interface GraphDataSlice {
    GraphData: number;
  }
  
  const initialState: GraphDataSlice = {
    GraphData: 0,
  };
export const GraphDataSlice = createSlice({
    name: "GraphData",
    initialState,
    reducers: {
        addGraph: (state, action) => 
            state.GraphData = action.payload
    }
})

export const { addGraph } = GraphDataSlice.actions;
export default GraphDataSlice.reducer;