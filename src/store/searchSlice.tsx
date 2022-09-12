import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type SortDirection = 'ASC' | 'DESC'

export interface SearchStateType {
    searchTitle: string
    pizzasCategoryCode: number
    sortCode: number
    sortDirection: SortDirection
    currentPage: number

}

const initialState: SearchStateType = {
    searchTitle: '',
    pizzasCategoryCode: 0,
    sortCode: 0,
    sortDirection: "ASC",
    currentPage: 1
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
        },
        toggleSortDirection(state) {
            if (state.sortDirection === 'ASC') {
                state.sortDirection = 'DESC'
            } else state.sortDirection = 'ASC'
        },
        changeCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        }
    }
})


export const {
    updateSearchTitle,
    updateSortPizzasCategoryCode,
    updateSortCode,
    toggleSortDirection,
    changeCurrentPage
} = searchSlice.actions
export default searchSlice.reducer