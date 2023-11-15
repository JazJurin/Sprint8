import { createSlice } from "@reduxjs/toolkit";

export interface VariationSlice {
    Variation: number;
  }
  
  const initialState: VariationSlice = {
    Variation: 0,
  };
export const VariationSlice = createSlice({
  name: "Variation",
  initialState,
  reducers: {
    addVariation: (state, action) => (state.Variation = action.payload),
  },
});

export const { addVariation } = VariationSlice.actions;
export default VariationSlice.reducer;
