import { configureStore } from "@reduxjs/toolkit";
import { authUserReducer } from "./authUser";
import {authAdministrationReducer} from './authAdministration';
import { currentCurrenciesReducer } from "./currentCurrencies";
export default configureStore({
    reducer: {
        authUser: authUserReducer,
        authAdmin: authAdministrationReducer,
        currencies: currentCurrenciesReducer
    }
})