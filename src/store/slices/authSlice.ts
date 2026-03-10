import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  userName: string;
  email: string;
}

const initialState: AuthState = {
  isAuth: false,
  userName: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userName: string; email: string }>
    ) => {
      state.isAuth = true;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isAuth = false;
      state.userName = "";
      state.email = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;