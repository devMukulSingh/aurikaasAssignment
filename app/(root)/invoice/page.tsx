'use client'
import React from "react";
import ProductsTable from "./components/ProductsTable";
import { columns } from "./components/columns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "@/lib/schema";
import AddressDetails from "./components/AddressDetails";
import { useAppSelector } from "@/redux/hooks";

const InvoicePage = () => {

  const { productDetails,sellerPlaceOfSupply,shippingPlaceOfDelivery } = useAppSelector(state => state.formValues)
  
  const formattedProducts = productDetails.map((product) => {

    const netProductAmount =
      product.productUnitPrice * product.productQuantity -
      product.productDiscount;
    const productTax =
      sellerPlaceOfSupply === shippingPlaceOfDelivery
        ? [
            {
              taxRate: 8,
              taxType: "CGST",
              taxAmount: (netProductAmount * 8) / 100,
            },
            {
              taxRate: 8,
              taxType: "SGST",
              taxAmount: (netProductAmount * 8) / 100,
            },
          ]
        : [
            {
              taxRate: 18,
              taxType: "IGST",
              taxAmount: (netProductAmount * 18) / 100,
            },
          ];
        const totalProductTax = productTax.reduce( (prev,curr) => prev+curr.taxAmount,0)
        const totalProductAmount = netProductAmount + totalProductTax;

        const netShippingAmount = 30 * product.productQuantity;

          const shippingTax =
            sellerPlaceOfSupply === shippingPlaceOfDelivery
              ? [
                  {
                    taxRate: 8,
                    taxType: "CGST",
                    taxAmount: (netShippingAmount * 8) / 100,
                  },
                  {
                    taxRate: 8,
                    taxType: "SGST",
                    taxAmount: (netShippingAmount * 8) / 100,
                  },
                ]
              : [
                  {
                    taxRate: 18,
                    taxType: "IGST",
                    taxAmount: (netShippingAmount * 18) / 100,
                  },
                ];
                const totalShippingTax = shippingTax.reduce( (prev,curr) => prev+curr.taxAmount , 0);
                const totalShippingAmount = netShippingAmount + totalShippingTax
    return {
      siNo: product.siNo,
      productQty: product.productQuantity,
      shipping: {
        description: "Shipping charges",
        totalAmount: totalShippingAmount,
        netAmount: netShippingAmount,
        unitPrice: 30,
        tax: shippingTax,
      },
      product: {
        description: product.productDescription,
        netAmount: netProductAmount,
        unitPrice: product.productUnitPrice,
        tax: productTax,
        totalAmount: totalProductAmount,
      },
    };
  });

  // const data = [
  //   {
  //     siNo: 1,
  //     qty: 1,
  //     shipping: {
  //       description: "asdasd",
  //       totalAmount: 11,
  //       netAmount: 1,
  //       unitPrice: 11,
  //       tax: [
  //         {
  //           taxRate: 2.5,
  //           taxType: "CGST",
  //           taxAmount: 100,
  //         },
  //         {
  //           taxRate: 2.5,
  //           taxType: "SGST",
  //           taxAmount: 100,
  //         },
  //       ],
  //     },
  //     product: {
  //       totalAmount: 11,
  //       description: "asdasd",
  //       netAmount: 1,
  //       unitPrice: 11,
  //       tax: [
  //         {
  //           taxRate: 2.5,
  //           taxType: "CGST",
  //           taxAmount: 100,
  //         },
  //         {
  //           taxRate: 2.5,
  //           taxType: "SGST",
  //           taxAmount: 100,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     siNo:2,
  //     qty: 11,
  //     shipping: {
  //       description: "asdasd",
  //       totalAmount: 11,
  //       netAmount: 1,
  //       unitPrice: 11,
  //       tax: [
  //         {
  //           taxRate: 2.5,
  //           taxType: "CGST",
  //           taxAmount: 100,
  //         },
  //         {
  //           taxRate: 2.5,
  //           taxType: "SGST",
  //           taxAmount: 100,
  //         },
  //       ],
  //     },
  //     product: {
  //       totalAmount: 11,
  //       description: "asdasd",
  //       netAmount: 1,
  //       unitPrice: 11,
  //       tax: [
  //         {
  //           taxRate: 2.5,
  //           taxType: "CGST",
  //           taxAmount: 100,
  //         },
  //         {
  //           taxRate: 2.5,
  //           taxType: "SGST",
  //           taxAmount: 100,
  //         },
  //       ],
  //     },
  //   },
  // ];
  return (
    <div className="flex flex-col py-5 items-center print:h-screen print:py-0 print:bg-white min-h-[calc(100vh-5rem)]  bg-neutral-900">
      <div className="aspect-[768/1024] flex flex-col gap-5  px-10 py-5 border min-h-[1024px] min-w-[768px]  rounded-md bg-white">
        <AddressDetails />
        <hr />
        <div className="">
          <ProductsTable data={formattedProducts} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
