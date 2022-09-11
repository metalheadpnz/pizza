import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type SearchStateType = {
    searchTitle: string
    pizzasCategoryCode: number
    sortCode: number

}

const initialState: SearchStateType = {
    searchTitle: '',
    pizzasCategoryCode: 0,
    sortCode: 0
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchTitle(state, action: PayloadAction<string>) {
            state.searchTitle = action.payload
        },
        updateSortPizzasCategoryCode(state, action: PayloadAction<number>) {
            state.pizzasCategoryCode = action.payload
        },
        updateSortCode(state, action: PayloadAction<number>) {
            state.sortCode = action.payload
        }
    }
})


export const {updateSearchTitle, updateSortPizzasCategoryCode, updateSortCode} = searchSlice.actions
export default searchSlice.reducer