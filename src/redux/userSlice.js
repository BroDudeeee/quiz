import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  score: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usernameAction: (state, action) => {
      state.username = action.payload;
    },

    increaseScore: (state, action) => {
      state.score += action.payload;
    },
    restart: (state) => {
      state.score = 0;
    },
  },
});

export const { usernameAction, increaseScore, restart } = userSlice.actions;
export default userSlice.reducer;
