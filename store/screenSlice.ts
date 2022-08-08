import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    screen: 'science'
}

export const screenSlice = createSlice({
    name: 'screen',
    initialState,
    reducers: {
        setScreen: (state, action:PayloadAction<any, any>) => {
            state.screen = action.payload
        }
    }
})

export const { setScreen } = screenSlice.actions

export default screenSlice.reducer