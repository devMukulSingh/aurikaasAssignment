"use client";
import { ColumnDef } from "@tanstack/react-table";

export type ProductTable = {
  siNo: number;
  productQty: number;
  shipping: {
    totalAmount: number;
    description: string;
    netAmount: number;
    unitPrice: number;
    tax: {
      taxRate: number;
      taxType: string;
      taxAmount: number;
    }[];
  };
  product: {
    totalAmount: number;
    description: string;
    netAmount: number;
    unitPrice: number;
    tax: {
      taxRate: number;
      taxType: string;
      taxAmount: number;
    }[];
  };
};

export const columns: ColumnDef<ProductTable>[] = [
  {
    accessorKey: "siNo",
    header: "SI. No",
    size: 20,
  },
  {
    size: 600,
    header: "Description",
    id: "description",
    cell: ({ row }) => (
      <div className="flex flex-col">
        {row.original.product.description} <br /> <br />
        Shipping Charges
      </div>
    ),
  },
  {
    header: "Unit Price",
    size: 50,
    id: "unitPrice",
    cell: ({ row }) => (
      <>
        ₹{row.original.product.unitPrice}
        <br />
        <br />₹{row.original.shipping.unitPrice}
      </>
    ),
  },
  {
    accessorKey: "productQty",
    header: "Qty",
    size: 50,
  },
  {
    header: "Net Amount",
    cell: ({ row }) => (
      <>
        ₹{row.original.product.netAmount}
        <br />
        <br />₹{row.original.shipping.netAmount}
      </>
    ),
    size: 50,
  },
  {
    header: "Tax Rate",
    size: 50,

    cell: ({ row }) => (
      <>
        {row.original.product.tax.map((t) => (
          <>
            {t.taxRate}%
            <br />{" "}
          </>
        ))}
        <br />
        <br />
        {row.original.shipping.tax.map((t) => (
          <>
            {t.taxRate}%
            <br />
          </>
        ))}
      </>
    ),
  },
  {
    cell: ({ row }) => (
      <>
        {row.original.product.tax.map((t) => (
          <>
            {t.taxType}
            <br />
          </>
        ))}
        <br />
        <br />

        {row.original.shipping.tax.map((t) => (
          <>
            {t.taxType}
            <br />
          </>
        ))}
      </>
    ),
    header: "Tax type",
    size: 100,
  },
  {
    cell: ({ row }) => (
      <>
        {row.original.product.tax.map((t) => (
          <>
            ₹{t.taxAmount} <br />
          </>
        ))}
        <br />
        <br />

        {row.original.shipping.tax.map((t) => (
          <>
            ₹{t.taxAmount}
            <br />
          </>
        ))}
      </>
    ),
    header: "Tax Amount",
  },
  {
    size:100,
    header: "Total Amount",
    cell: ({ row }) => (
      <>
        ₹{row.original.product.totalAmount}
        <br />
        <br />₹{row.original.shipping.totalAmount}
      </>
    ),
  },
];
