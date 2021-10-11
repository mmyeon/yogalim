import { configureStore, createSlice } from "@reduxjs/toolkit";

const painScore = createSlice({
  name: "painScoreReducer",
  initialState: {
    before: 0,
    after: 0,
  },
  reducers: {
    updateBeforeScore: (state, action) => {
      state.before = action.payload;
    },

    updateAfterScore: (state, action) => {
      state.after = action.payload;
    },
  },
});

export const { updateBeforeScore, updateAfterScore } = painScore.actions;
const store = configureStore({ reducer: painScore.reducer });

export default store;
