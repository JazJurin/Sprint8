import { createSlice } from "@reduxjs/toolkit";
  
  const initialState = {
    labels: [],
    datasets: [
      {
        label: "expenses",
        data: []
      }
    ]
  };
export const GraphDataSlice = createSlice({
  name: "GraphData",
  initialState,
  reducers: {
    setGraphData: (state, action) => {
      return action.payload;
    }
  }
});

export const { setGraphData } = GraphDataSlice.actions;
export default GraphDataSlice.reducer;