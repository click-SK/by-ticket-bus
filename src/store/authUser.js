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
      if(response.data.message == 'Password not found' || response.data.message ==  'User not found') {
        return {message: 'Login error'};
      }
      thunkAPI.dispatch(authUserSlice.actions.setAuth(true));
      thunkAPI.dispatch(authUserSlice.actions.setUser(response.data));
      console.log('redux work');
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });
export const registration = createAsyncThunk('user-auth/registration', async (payload, thunkAPI) => {
    try {
      const { email, password, firstName, lastName, phone, birthday } = payload;
      const response = await $api.post('/register-user',{email, password, firstName, lastName, phone, birthday});
      if(response.data.message == 'Email already exists') {
        return {message: response.data.message};
      }
      console.log('work after error');
      thunkAPI.dispatch(authUserSlice.actions.setAuth(true));
      thunkAPI.dispatch(authUserSlice.actions.setUser(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });

  export const checkAuthUser = createAsyncThunk('user-auth/checkAuth ', async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/refresh-user`,{withCredentials: true})
      console.log('response auth user',response);
      if(response.data.message == 'Validation error') {
        console.log('response auth not work');
        return thunkAPI.dispatch(authUserSlice.actions.setAuth(false));
      }
      console.log('maybie work');
      thunkAPI.dispatch(authUserSlice.actions.setAuth(true));
      thunkAPI.dispatch(authUserSlice.actions.setUser(response.data));
      if(response.data.accessToke) {
      localStorage.setItem('bus-u-t', response.data.accessToken);
      }
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });
  export const logout = createAsyncThunk('user-auth/logout ', async (payload, thunkAPI) => {
    try {
      const response = await $api.post('/logout-user');
      localStorage.removeItem('bus-u-t',payload.accessToken)
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
      setUser(state, action) {
        state.user = action.payload;
      },
    },
    extraReducers: {
      [logout.pending]: (state) => {
        state.status = "loading";
        state.isAuthUser = false;
        state.user = {};
      },
      [logout.fulfilled]: (state, action) => {
        state.status = "loaded";
        state.isAuthUser = false;
        state.user = action.payload;
      },
      [logout.rejected]: (state) => {
        state.status = "error";
        state.isAuthUser = false;
        state.user = {};
      },
    },
  });

  export const authUserReducer = authUserSlice.reducer;