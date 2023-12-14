import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;