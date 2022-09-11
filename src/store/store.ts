import {configureStore} from '@reduxjs/toolkit'
import searchSlice from "./searchSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import appSlice from "./appSlice";
import pizzasSlice from "./pizzasSlice";


export const store = configureStore({
    reducer: {
        search: searchSlice,
        appStatus: appSlice,
        pizzas: pizzasSlice
    }
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;