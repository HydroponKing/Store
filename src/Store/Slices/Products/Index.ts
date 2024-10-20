import { createSlice } from "@reduxjs/toolkit";
import { Builder } from "./service";
import { TProduct } from "../../../Services/Types/Components";

const initialState = {
    products: [] as TProduct[],
    isLoading: false,
    error: null,
}


export const productSlice = createSlice({
    name: 'products',
    initialState : initialState,
    selectors: {
        getProductsState : (state) =>  state.products
    },
    reducers:{
        
    },
    extraReducers: Builder
})

export const {getProductsState} = productSlice.selectors
export const {} = productSlice.actions
export default productSlice.reducer