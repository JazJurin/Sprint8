import { createSlice } from '@reduxjs/toolkit'

export interface DailyExpencesSlice {
  DailyExpences: number
}

const initialState: DailyExpencesSlice = {
  DailyExpences: 0,
}

export const DailyExpencesSlice = createSlice({
  name: 'DailyExpences',
  initialState,
    reducers: {
        addExpences: (state, action) => {
            state.DailyExpences = action.payload
      }
  },
})

export const { addExpences } = DailyExpencesSlice.actions
export default DailyExpencesSlice.reducer