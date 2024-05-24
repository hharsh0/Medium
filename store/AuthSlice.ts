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
    accessToken: string,
    name: string,
    email: string,
    photoURL: string,
    error: string | null,
}

interface User extends UserCredential{
  accessToken: string | null,
}

const initialState: AuthState = {
  isLoggedIn: !!Cookies.get("token"),
  accessToken: "",
  name: "",
  email: "",
  photoURL: "",
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
        Cookies.set("token", (<any>result).user.accessToken, { expires: 7 });
        Cookies.set("name", result.user?.displayName ?? "", { expires: 7 });
        Cookies.set("email", result.user?.email ?? "", { expires: 7 });
        Cookies.set("photoURL", result.user?.photoURL ?? "", { expires: 7 });
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
      Cookies.remove("email");
      Cookies.remove("name");
      Cookies.remove("photoURL");
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
        (state, action: any) => {
          state.isLoggedIn = true;
          state.accessToken = action.payload?.accessToken || "";
          state.error = null;
        }
      )
      .addCase(
        login.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoggedIn = false;
          state.accessToken = "";
          state.name = "";
          state.email = "";
          state.photoURL = "";
          state.error = action.payload || "Login failed";
        }
      )
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.accessToken = "";
        state.name = "";
        state.email = "";
        state.photoURL = "";
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
