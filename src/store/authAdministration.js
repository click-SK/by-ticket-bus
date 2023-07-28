import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../http/baseUrl.js";
import $api from "../http/httpUsers.js";

const initialState = {
  isAdmin: false,
  isOperator: false,
  user: {},
  status: "loading",
}

export const login = createAsyncThunk('admin-auth/login', async (payload, thunkAPI) => {
    try {
      const { login, password } = payload;
      const response = await $api.post('/login-admin',{login, password});
      console.log('response',response);
      if(response.data.user.isAdmin) {
        thunkAPI.dispatch(authAdministrationSlice.actions.setAuthAdmin(true));
      }
      if(response.data.user.isOperator) {
        thunkAPI.dispatch(authAdministrationSlice.actions.setAuthOperator(true));
      }
      thunkAPI.dispatch(authAdministrationSlice.actions.setUser(response.data));
      localStorage.setItem('bus-a-t', response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });
export const registration = createAsyncThunk('admin-auth/registration', async (payload, thunkAPI) => {
    try {
      const { login, password, firstName, lastName } = payload;
      const response = await $api.post('/register-admin',{login, password, firstName, lastName});
      // if(response.data.user.isAdmin) {
      //   thunkAPI.dispatch(authAdministrationSlice.actions.setAuthAdmin(true));
      // }
      // if(response.data.user.isOperator) {
      //   thunkAPI.dispatch(authAdministrationSlice.actions.setAuthOperator(true));
      // }
      // thunkAPI.dispatch(authAdministrationSlice.actions.setUser(response.data));
      // localStorage.setItem('bus-a-t', response.data.accessToken);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });

  export const checkAuthAdministration = createAsyncThunk('admin-auth/checkAuth ', async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/refresh-admin`,{withCredentials: true})
      console.log('response auth',response);
      if(response.data.message == 'Validation error') {
        console.log('response auth not work');
        return thunkAPI.dispatch(authAdministrationSlice.actions.setAuth(false));
      }
      console.log('maybie work');
      if(response.data.user.isAdmin) {
        thunkAPI.dispatch(authAdministrationSlice.actions.setAuthAdmin(true));
      }
      if(response.data.user.isOperator) {
        thunkAPI.dispatch(authAdministrationSlice.actions.setAuthOperator(true));
      }
      thunkAPI.dispatch(authAdministrationSlice.actions.setUser(response.data));
      if(response.data.accessToke) {
      localStorage.setItem('bus-a-t', response.data.accessToken);
      }
      return response.data;
    } catch (e) {
      console.log(e);
    }
  });
  export const logout = createAsyncThunk('admin-auth/logout ', async (payload, thunkAPI) => {
    try {
      const response = await $api.post('/logout-admin');
      localStorage.removeItem('bus-a-t',payload.accessToken);
      thunkAPI.dispatch(authAdministrationSlice.actions.setAuthAdmin(false));
      thunkAPI.dispatch(authAdministrationSlice.actions.setAuthOperator(false));
    } catch (e) {
      console.log(e);
    }
  });

const authAdministrationSlice = createSlice({
    name: "authAdmin",
    initialState,
    reducers: {
      setAuthAdmin(state, action) {
        state.isAdmin = action.payload;
      },
      setAuthOperator(state, action) {
        state.isOperator = action.payload;
      },
      setUser(state, action) {
        state.user = action.payload;
      },
    },
  });

  export const authAdministrationReducer = authAdministrationSlice.reducer;