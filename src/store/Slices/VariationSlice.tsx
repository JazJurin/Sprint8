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

// eslint-disable-next-line react-refresh/only-export-components
export const { addVariation } = VariationSlice.actions;
export default VariationSlice.reducer;
