import { configureStore } from "@reduxjs/toolkit";
import { authUserReducer } from "./authUser";
import {authAdministrationReducer} from './authAdministration';
import { currentCurrenciesReducer } from "./currentCurrencies";
import { languageReducer } from "./language";
import { bookingReducer } from "./bookingData";
import busSeatsReducer from "./busSeatsSlice";
export default configureStore({
    reducer: {
        authUser: authUserReducer,
        authAdmin: authAdministrationReducer,
        currencies: currentCurrenciesReducer,
        lang: languageReducer,
        booking: bookingReducer,
        busSeats: busSeatsReducer
    }
})