import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const currentLang = createAsyncThunk("data/currentLang", async (_, thunkAPI) => {
  const lag = window.localStorage.getItem("bus-language");
  thunkAPI.dispatch(languageSlice.actions.setLanguageReducer(lag));
  return lag;
});

const initialState = {
  language: window.localStorage.getItem("bus-language"),
  status: "loading",
};

const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguageReducer(state, action) {
      state.language = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(currentLang.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(currentLang.fulfilled, (state, action) => {
  //       state.status = "loaded";
  //       state.language = action.payload;
  //     })
  //     .addCase(currentLang.rejected, (state) => {
  //       state.status = "error";
  //     });
  // },
});

export const {setLanguageReducer} = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
