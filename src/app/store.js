import { configureStore } from '@reduxjs/toolkit'
import youtubeSlice from '../features/youtubeSlice';

export const store = configureStore({
    reducer: {
        youtube: youtubeSlice
    },
})