import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../http/baseUrl";

const initialState = {
    currencies: []
}

export const getCurrencies = createAsyncThunk('currencies', async (payload, thunkAPI) => {
    try {
      await axios.get(`${API_URL}/get-all-current-currencies`)
      .then((res) => {
        thunkAPI.dispatch(currenciesSlice.actions.setCurrencies(res.data))
      })
    } catch (e) {
      console.log(e);
    }
  });

  const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        setCurrencies(state, action) {
            state.currencies = action.payload;
        }
    }
  })

  export const currentCurrenciesReducer = currenciesSlice.reducer;