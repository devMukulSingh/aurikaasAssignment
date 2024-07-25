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
        sellerSignature: "",
        billingName: "",
        billingCity:"",
        billingPincode:0,
        billingState:"",
        billingStateCode:0,
        invoiceDate:"",
        invoiceDetails:"",
        invoiceNo:0,
        shippingCity:"",
        shippingName:"",
        shippingPinCode:0,
        shippingPlaceOfDelivery:"",
        shippingState:"",
        shippingStateCode:0,
        orderNo:0,
        orderDate:"",
        shippingPlaceOfSupply:"",
        productDetails:[
            {
                productDescription:'',
                productDiscount:0,
                productQuantity:0,
                productUnitPrice:0,
                siNo:1,
            }
        ],
        
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

