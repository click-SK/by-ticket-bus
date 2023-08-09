import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../http/baseUrl";

const initialState = {
    currencies: [],
    currencieValue: 0
}

export const getCurrencies = createAsyncThunk('currencies', async (payload, thunkAPI) => {
    try {
      const currentCur = localStorage.getItem('curentRate');
      await axios.get(`${API_URL}/get-all-current-currencies`)
      .then((res) => {
        thunkAPI.dispatch(currenciesSlice.actions.setCurrencies(res.data))
        const allArray = [...res.data];
        const choseCurrenci = allArray.filter(item => item.currencieName == currentCur);
        thunkAPI.dispatch(currenciesSlice.actions.setCurrenciesValue(choseCurrenci[0].currencieValue))
      })
      // console.log('currentCur',currentCur);
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
        },
        setCurrenciesValue(state, action) {
            state.currencieValue = action.payload;
        }
    }
  })

  export const currentCurrenciesReducer = currenciesSlice.reducer;