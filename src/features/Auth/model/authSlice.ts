import { createSlice } from "@reduxjs/toolkit";
import { sessionExpired } from "@/shared/api/sessionEvents.ts";

interface AuthState {
  isAuthenticated: boolean;
  isAuthChecked: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isAuthChecked: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.isAuthenticated = true;
      state.isAuthChecked = true;
    },

    loggedOut: (state) => {
      state.isAuthenticated = false;
      state.isAuthChecked = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sessionExpired, (state) => {
      state.isAuthenticated = false;
      state.isAuthChecked = true;
    });
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;

export const authReducer = authSlice.reducer;
