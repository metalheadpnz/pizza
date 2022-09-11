import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface InitialState {
    isLoading: boolean
}

const initialState: InitialState = {
    isLoading: true
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        }
    }
})

export const {setLoadingStatus} = appSlice.actions
export default appSlice.reducer