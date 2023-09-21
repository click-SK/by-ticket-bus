import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    RDX_cityFrom: '',
    RDX_cityTo: '',
    RDX_startDate: '',
    RDX_endDate: '',
    RDX_curentPasanger: 0,
    RDX_routeObject: {}
}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBookingData(state, action) {
            const {cityFrom, cityTo, curentPasanger, startDate, endDate, item} = action.payload;
            state.RDX_cityFrom = cityFrom;
            state.RDX_cityTo = cityTo;
            state.RDX_startDate = startDate;
            state.RDX_endDate = endDate;
            state.RDX_curentPasanger = curentPasanger;
            state.RDX_routeObject = item;
        }
    }
})

export const {setBookingData} = bookingSlice.actions;

export const bookingReducer = bookingSlice.reducer;