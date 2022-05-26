import { configureStore, createSlice } from '@reduxjs/toolkit'

const dataSearchTMDB = createSlice({
    name: "dataSearchTMDB",
    initialState: {
        favorite: [],
    },
    reducers: {
        addFavoriteSearch: (state, action) => {
            console.log(action);
            !state.favorite.includes(action.payload) && state.favorite.push(action.payload);
        },
        RemoveFavoriteSearch: (state, action) => {
            console.log(action);
            console.log(state);
        },
    },
})

export const { addFavoriteSearch } = dataSearchTMDB.actions

export const store = configureStore({
    reducer: {
        dataSearchTMDB: dataSearchTMDB.reducer
    },
})
