import { createSlice } from '@reduxjs/toolkit';

const busSeatsSlice = createSlice({
    name: 'busSeats',
    initialState:{
        curentSeats:[],
    },
    reducers:{
        updateCurentSeats: (state, action) => {
            state.curentSeats = action.payload
        }
    }
});

export const { updateCurentSeats } = busSeatsSlice.actions;
export default busSeatsSlice.reducer;
