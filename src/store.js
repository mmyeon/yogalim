import { configureStore, createSlice } from "@reduxjs/toolkit";

const painScore = createSlice({
  name: "painScoreReducer",
  initialState: {
    before: 0,
    after: 0,
  },
  reducers: {},
});

const store = configureStore({ reducer: painScore.reducer });
export default store;
