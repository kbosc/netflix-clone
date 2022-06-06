import { configureStore, createSlice } from '@reduxjs/toolkit'

const dataSearchTMDB = createSlice({
    name: "dataSearchTMDB",
    initialState: {
        favorite: [],
    },
    reducers: {
        addFavoriteSearch: (state, action) => {
            !state.favorite.includes(action.payload) && state.favorite.push(action.payload);
        },
        removeFavoriteSearch: (state, action) => {
            state.favorite.splice(state.favorite.indexOf(action.payload), 1)
        },
    },
})

export const { addFavoriteSearch, removeFavoriteSearch } = dataSearchTMDB.actions

export const store = configureStore({
    reducer: {
        dataSearchTMDB: dataSearchTMDB.reducer
    },
})
