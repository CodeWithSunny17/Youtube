import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    videos: [],
    openBar: false,
}

export const youtubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
        toggleOpenBar: (state) => {
            state.openBar = !state.openBar
        },
        toggleClose: (state) => {
            state.openBar = false
        }

    },
})


export const { toggleOpenBar, toggleClose } = youtubeSlice.actions

export default youtubeSlice.reducer