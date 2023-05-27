import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  score: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },

    increaseScore: (state, action) => {
      state.score += action.payload;
    },
  },
});

export const { setUsername, increaseScore } = userSlice.actions;
export default userSlice.reducer;
