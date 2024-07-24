'use client'
import React from "react";
import ProductsTable from "./components/ProductsTable";
import { columns } from "./components/columns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "@/lib/schema";
import AddressDetails from "./components/AddressDetails";

const InvoicePage = () => {

  
  const data = [
    {
      siNo: 1,
      qty: 1,
      shipping: {
        description: "asdasd",
        totalAmount: 11,
        netAmount: 1,
        unitPrice: 11,
        tax: [
          {
            taxRate: 2.5,
            taxType: "CGST",
            taxAmount: 100,
          },
          {
            taxRate: 2.5,
            taxType: "SGST",
            taxAmount: 100,
          },
        ],
      },
      product: {
        totalAmount: 11,
        description: "asdasd",
        netAmount: 1,
        unitPrice: 11,
        tax: [
          {
            taxRate: 2.5,
            taxType: "CGST",
            taxAmount: 100,
          },
          {
            taxRate: 2.5,
            taxType: "SGST",
            taxAmount: 100,
          },
        ],
      },
    },
    {
      siNo:2,
      qty: 11,
      shipping: {
        description: "asdasd",
        totalAmount: 11,
        netAmount: 1,
        unitPrice: 11,
        tax: [
          {
            taxRate: 2.5,
            taxType: "CGST",
            taxAmount: 100,
          },
          {
            taxRate: 2.5,
            taxType: "SGST",
            taxAmount: 100,
          },
        ],
      },
      product: {
        totalAmount: 11,
        description: "asdasd",
        netAmount: 1,
        unitPrice: 11,
        tax: [
          {
            taxRate: 2.5,
            taxType: "CGST",
            taxAmount: 100,
          },
          {
            taxRate: 2.5,
            taxType: "SGST",
            taxAmount: 100,
          },
        ],
      },
    },
  ];
  return (
    <div className="flex flex-col py-5 items-center print:h-screen print:py-0 print:bg-white min-h-[calc(100vh-5rem)]  bg-neutral-900">
      <div className="aspect-[768/1024] flex flex-col gap-5 text-sm  px-10 py-5 border min-h-[1024px] min-w-[768px]  rounded-md bg-white">
        <AddressDetails/>
        <hr />
        <div className="h-1/2">
          <ProductsTable data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
