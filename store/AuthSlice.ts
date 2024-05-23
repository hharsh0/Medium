import { auth, provider } from "@/firebase";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import Cookies from "js-cookie";


interface AuthState{
    isLoggedIn: boolean,
    token: string,
    error: string | null,
}

const initialState: AuthState = {
  isLoggedIn: !!Cookies.get("token"),
  token: "",
  error: null,
};

// Async action creator for login
export const login = createAsyncThunk<
  UserCredential | undefined,
  void,
  { rejectValue: string }
>("auth/login", async (_, thunkAPI) => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    if(result.user){
        Cookies.set("token", result.user.accessToken)
    }
    return result;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Async action creator for logout
export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const auth = getAuth();
      await signOut(auth);
      Cookies.remove("token");
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<UserCredential | undefined>) => {
          state.isLoggedIn = true;
          state.token = action.payload?.user.uid || "";
          state.error = null;
        }
      )
      .addCase(
        login.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoggedIn = false;
          state.token = "";
          state.error = action.payload || "Login failed";
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = "";
        state.error = null;
      })
      .addCase(
        logout.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.error = action.payload || "Logout failed";
        }
      );
  },
});

export default authSlice.reducer;
