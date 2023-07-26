import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as AuthUserService from '../services/AuthUserService.js';
import { API_URL } from "../http/baseUrl.js";
import $api from "../http/httpUsers.js";

export const login = createAsyncThunk('user-auth/login', async (payload, thunkAPI) => {
    try {
      const { email, password } = payload;
      const response = await $api.post('/login-user',{email, password});
      console.log('response',response);
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
      console.log('response',response);
      localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });

const initialState = {
    isAuthUser: false,
    user: {},
    status: "loading",
}

const authUserSlice = createSlice({
    name: "auth",
    initialState,
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
    },
  });

  export const authUserReducer = authUserSlice.reducer;