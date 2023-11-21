import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  labels: [],
  datasets: [
    {
      label: "expenses",
      data: [],
    },
  ],
};
export const GraphDataSlice = createSlice({
  name: "GraphData",
  initialState,
  reducers: {
    setGraphData: (_state, action) => {
      return action.payload;
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { setGraphData } = GraphDataSlice.actions;
export default GraphDataSlice.reducer;
