import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    videos: [],
    openBar: false,
    searchQuery: ""
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
        },
        toggleSearch: (state, action) => {
            state.searchQuery = action.payload
        }

    },
})


export const { toggleOpenBar, toggleClose, toggleSearch } = youtubeSlice.actions

export default youtubeSlice.reducer