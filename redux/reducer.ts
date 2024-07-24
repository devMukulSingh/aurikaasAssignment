import { IinitialState } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";


const initialState:IinitialState = {
    formValues : {
        sellerName: "",
        sellerCity: "",
        sellerPan: "",
        sellerGST: "",
        sellerState: "",
        sellerPincode: 0,
        sellerPlaceOfSupply: "",
        sellerSignature: "",
        billingName: "",
        billingCity:"",
        billingPincode:0,
        billingState:"",
        invoiceDate:"",
        invoiceDetails:"",
        invoiceNo:0,
        shippingCity:"",
        shippingName:"",
        shippingPinCode:0,
        shippingPlaceOfDelivery:"",
        shippingState:"",

    }
}


export const slice = createSlice({
    name:'rootSlice',
    initialState,
    reducers: {
        setFormValues : (state,action) => {
            state.formValues = action.payload
        }
    }
});


export default slice.reducer;

export const { setFormValues } = slice.actions;
