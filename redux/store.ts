import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
