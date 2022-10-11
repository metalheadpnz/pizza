import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type SortDirection = 'ASC' | 'DESC'
export type setFiltersAC = {
    sortDirection: SortDirection,
    currentPage: number,
    sortCode: number,
    pizzasCategoryCode: number
    // state.sortDirection = action.payload.sortDirection
    // state.currentPage = action.payload.currentPage
    // state.sortCode = action.payload.sortCode
    // state.pizzasCategoryCode = action.payload.pizzasCategoryCode
}

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
        },
        setFilters(state, action: PayloadAction<setFiltersAC>) {
            state.sortDirection = action.payload.sortDirection
            state.currentPage = action.payload.currentPage
            state.sortCode = action.payload.sortCode
            state.pizzasCategoryCode = action.payload.pizzasCategoryCode
        }
    }
})


export const {
    updateSearchTitle,
    updateSortPizzasCategoryCode,
    updateSortCode,
    toggleSortDirection,
    changeCurrentPage,
    setFilters
} = searchSlice.actions
export default searchSlice.reducer