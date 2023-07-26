import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../http/baseUrl.js";
import $api from "../http/httpUsers.js";

const initialState = {
  isAuthUser: false,
  user: {},
  status: "loading",
}

export const login = createAsyncThunk('user-auth/login', async (payload, thunkAPI) => {
    try {
      const { email, password } = payload;
      const response = await $api.post('/login-user',{email, password});
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });
export const registration = createAsyncThunk('user-auth/registration', async (payload, thunkAPI) => {
    try {
      const { email, password, firstName, lastName } = payload;
      const response = await $api.post('/register-user',{email, password, firstName, lastName});
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });

  export const checkAuth = createAsyncThunk('user-auth/checkAuth ', async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/refresh-user`,{withCredentials: true})
      console.log('response auth',response);
      if(response.data.message == 'Validation error') {
        console.log('response auth not work');
        return thunkAPI.dispatch(authUserSlice.actions.setAuth(false));
      }
      console.log('maybie work');
      thunkAPI.dispatch(authUserSlice.actions.setAuth(true));
      if(response.data.accessToke) {
      localStorage.setItem('token', response.data.accessToken);
      }
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });

const authUserSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
      setAuth(state, action) {
        state.isAuthUser = action.payload;
      },
    },
    extraReducers: {
      [login.pending]: (state) => {
        state.status = "loading";
        state.isAuthUser = false;
        state.user = {};
      },
      [login.fulfilled]: (state, action) => {
        state.status = "loaded";
        state.isAuthUser = true;
        state.user = action.payload;
      },
      [login.rejected]: (state) => {
        state.status = "error";
        state.isAuthUser = false;
        state.user = {};
      },
      [registration.pending]: (state) => {
        state.status = "loading";
        state.isAuthUser = false;
        state.user = {};
      },
      [registration.fulfilled]: (state, action) => {
        state.status = "loaded";
        state.isAuthUser = true;
        state.user = action.payload;
      },
      [registration.rejected]: (state) => {
        state.status = "error";
        state.isAuthUser = false;
        state.user = {};
      },
      // [checkAuth.pending]: (state) => {
      //   state.status = "loading";
      //   state.isAuthUser = false;
      //   state.user = {};
      // },
      // [checkAuth.fulfilled]: (state, action) => {
      //   state.status = "loaded";
      //   state.isAuthUser = true;
      //   state.user = action.payload;
      // },
      // [checkAuth.rejected]: (state) => {
      //   state.status = "error";
      //   state.isAuthUser = false;
      //   state.user = {};
      // },
    },
  });

  export const authUserReducer = authUserSlice.reducer;