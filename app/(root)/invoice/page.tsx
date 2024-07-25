'use client'
import React from "react";
import ProductsTable from "./components/ProductsTable";
import { columns } from "./components/columns";
import AddressDetails from "./components/AddressDetails";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
const InvoicePage = () => {

  const { productDetails,shippingPlaceOfDelivery,shippingPlaceOfSupply } = useAppSelector(state => state.formValues)
  let totalTax = 0;
  let totalBill = 0;
  const formattedProducts = productDetails.map((product) => {

    const netProductAmount =
      product.productUnitPrice * product.productQuantity -
      product.productDiscount;
    const productTax =
      shippingPlaceOfSupply === shippingPlaceOfDelivery
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
            shippingPlaceOfSupply === shippingPlaceOfDelivery
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
                const totalShippingAmount = netShippingAmount + totalShippingTax;
                totalTax = totalTax + totalProductTax + totalShippingTax;
                totalBill += totalProductAmount + totalShippingAmount;
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

 
  return (
    <div className="relative flex flex-col gap-5 py-5  items-center print:h-screen print:py-0 print:bg-white min-h-[calc(100vh-5rem)]  bg-neutral-900">
      <Button
        variant={"outline"}
        className="self-center print:hidden"
        onClick={() => globalThis.print()}
      >
        <Printer className="mr-2" />
        Print
      </Button>
      <div className=" flex flex-col gap-5 print:h-screen  px-10 py-5 border min-h-[1024px] max-w-[50rem] min-w-[768px]  rounded-md bg-white">
        <AddressDetails />
        <hr />
        <div className="">
          <ProductsTable
            totalTax={totalTax}
            data={formattedProducts}
            columns={columns}
            totalBill={totalBill}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
