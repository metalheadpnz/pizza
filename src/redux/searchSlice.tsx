import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type SearchStateType =  {
    searchTitle: string
    sortPizzasCategoryCode: number
}

const initialState: SearchStateType = {
    searchTitle: '',
    sortPizzasCategoryCode: 0
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchTitle: (state, action: PayloadAction<string>) => {
            state.searchTitle = action.payload
        },
        updateSortPizzasCategoryCode: (state, action: PayloadAction<number>) => {
            state.sortPizzasCategoryCode = action.payload
        }

    }
})


export const {updateSearchTitle,updateSortPizzasCategoryCode} = searchSlice.actions
export default searchSlice.reducer