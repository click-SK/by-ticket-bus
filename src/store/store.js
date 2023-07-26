import { configureStore } from "@reduxjs/toolkit";
import { authUserReducer } from "./authUser";

export default configureStore({
    reducer: {
        authUser: authUserReducer,
    }
})