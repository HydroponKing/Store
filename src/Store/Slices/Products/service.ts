import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { api } from "../../../Services/Api";

export const getProductsThunk = createAsyncThunk('product/get', async () => {
    return await api.getAllProducts()
})

export const Builder = (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase( getProductsThunk.pending, (state) => {
        state.isLoading = true
    }).addCase(getProductsThunk.rejected, (state, action) => {
        state.error =  action.error
        state.isLoading = false
    }).addCase(getProductsThunk.fulfilled, (state, action)=> {
        state.products = action.payload.products
        state.isLoading = false
    })
}