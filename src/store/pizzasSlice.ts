import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {pizzaType} from "../App";

type InitialStateType = {
    pizzas: pizzaType[]
}

const initialState: InitialStateType = {
    pizzas: []
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas(state, action: PayloadAction<pizzaType[]>) {
            state.pizzas = action.payload
        }
    }
})

export const {setPizzas} = pizzasSlice.actions
export default pizzasSlice.reducer