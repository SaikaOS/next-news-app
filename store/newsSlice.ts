import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    isSearched: false
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
            state.isSearched = true
        },
        setDefaultNews: (state) => {
            state.isSearched = false
        }
    }
})

export const { setText, setDefaultNews } = newsSlice.actions

export default newsSlice.reducer