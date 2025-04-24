import { createSlice } from "@reduxjs/toolkit";
import { InitialsState } from "./types";

const initialState: InitialsState = {
  onboardingCompleted: false,
};

const initialsSlice = createSlice({
  name: "initials",
  initialState,
  reducers: {
    setOnboardingCompleted: (state, action) => {
      state.onboardingCompleted = action.payload;
    },
  },
});

export const { setOnboardingCompleted } = initialsSlice.actions;
export default initialsSlice.reducer;
