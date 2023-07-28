import { configureStore } from "@reduxjs/toolkit";
import { authUserReducer } from "./authUser";
import {authAdministrationReducer} from './authAdministration';
export default configureStore({
    reducer: {
        authUser: authUserReducer,
        authAdmin: authAdministrationReducer,
    }
})