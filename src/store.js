import { configureStore, createSlice } from "@reduxjs/toolkit";

const painScore = createSlice({
  name: "painScoreReducer",
  initialState: {
    beforeScore: 0,
    afterScore: 0,
  },
  reducers: {
    updateBeforeScore: (state, action) => {
      state.beforeScore = action.payload;
    },

    updateAfterScore: (state, action) => {
      state.afterScore = action.payload;
    },
  },
});
export const { updateBeforeScore, updateAfterScore } = painScore.actions;

const store = configureStore({ reducer: painScore.reducer });
export default store;
