import { configureStore, createSlice } from '@reduxjs/toolkit'

const dataTMDB = createSlice({
    name: "dataTMDB",
    initialState: {
        dataSearch: {},
    },
    reducers: {
        logDataSearch: (state, action) => {
            state.data = {}
        },
    },
})

export const { logDataSearch } = dataTMDB.actions

export const store = configureStore({
    reducer: {
        dataTMDB: dataTMDB.reducer
    },
})