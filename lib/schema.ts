import { z } from "zod";

export const invoiceSchema = z.object({
    sellerName: z.string().trim().min(1,{
        message:"Seller name is required"
    }),
    sellerCity: z.string().trim().min(1, {
        message: "Seller city is required"
    }),
    sellerPan: z.string().trim().min(1, {
        message: "Seller pan is required"
    }),
    sellerGST: z.string().trim().min(1, {
        message: "Seller GST is required"
    }),
    sellerState: z.string().trim().min(1, {
        message: "Seller state is required"
    }),
    sellerPincode: z.coerce.number().min(1, {
        message: "Seller pincode is required"
    }),
    sellerPlaceOfSupply: z.string().trim().min(1, {
        message: 'Seller place of supply is required'
    }),
    sellerSignature :z.string().min(1,{
        message:"Signature is required"
    }),
    billingName: z.string().trim().min(1,{
        message:'Billing name is required'
    }),
    billingCity: z.string().trim().min(1, {
        message: 'Billing city is required'
    }),
     billingState: z.string().trim().min(1, {
         message: 'Billing state is required'
     }),
    billingStateCode: z.coerce.number().min(1, {
        message: 'Billing state code is required'
    }),
    billingPincode: z.coerce.number().min(1, {
        message: 'Billing pincode is required'
    }),
    invoiceDate: z.string().trim().min(1, {
        message: 'Invoice date is required'
    }),
    invoiceNo: z.coerce.number().min(1, {
        message: 'Invoice no is required'
    }),
    invoiceDetails: z.string().trim().min(1, {
        message: 'Invoice details is required'
    }),
    orderNo:z.coerce.number().min(1,{
        message:"Order no is required"
    }),
    orderDate: z.string().trim().min(1, {
        message: "Order no is required"
    }),
    shippingName: z.string().trim().min(1, {
        message: 'Shipping name is required'
    }),
    shippingState: z.string().trim().min(1, {
        message: 'Shipping state is required'
    }),
    shippingStateCode: z.coerce.number().min(1, {
        message: 'Shipping state code is required'
    }),
    shippingCity: z.string().trim().min(1, {
        message: 'Shipping city is required'
    }),
    shippingPinCode: z.coerce.number().min(1, {
        message: 'Shipping PinCode is required'
    }),
    shippingPlaceOfDelivery: z.string().trim().min(1, {
        message: 'Shipping place of delivery is required'
    }),
    shippingPlaceOfSupply: z.string().trim().min(1, {
        message: 'Shipping place of delivery is required'
    }),
    productDetails : z.object({
        siNo: z.coerce.number(),
        productDescription:z.string().trim(),
        productUnitPrice: z.coerce.number(),
        productQuantity: z.coerce.number(),
        productDiscount: z.coerce.number(),
    }).array()

})  