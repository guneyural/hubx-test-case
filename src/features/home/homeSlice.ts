import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HomeState } from "./types";

export const fetchWelcomeMessage = createAsyncThunk(
  "home/fetchWelcomeMessage",
  async () => {
    const response = await fetch("https://example.com/api/welcome");
    const data = await response.json();
    return data.message;
  }
);

const initialState: HomeState = {
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWelcomeMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWelcomeMessage.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchWelcomeMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default homeSlice.reducer;
