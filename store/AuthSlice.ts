import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean;
  token: string;
  login: (token: string) => void;
  logout: () => void;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: "",
  login: () => {},
  logout: () => {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
