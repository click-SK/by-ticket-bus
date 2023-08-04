import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const currentLang = createAsyncThunk("data/currentLang", async () => {
  const lag = window.localStorage.getItem("bus-language");
  return lag;
});

const initialState = {
  language: null,
  status: "loading",
};

const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(currentLang.pending, (state) => {
        state.status = "loading";
      })
      .addCase(currentLang.fulfilled, (state, action) => {
        state.status = "loaded";
        state.language = action.payload;
      })
      .addCase(currentLang.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const languageReducer = languageSlice.reducer;
