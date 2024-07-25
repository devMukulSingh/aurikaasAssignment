'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useAppSelector } from "@/redux/hooks"
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import Image from "next/image"
import { ProductTable } from "./columns"

import { ToWords } from 'to-words'
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  totalTax: number;
  totalBill:number
}
function ProductsTable<TData, TValue>({
  columns,
  data,
  totalTax,
  totalBill,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { sellerSignature } = useAppSelector((state) => state.formValues);
const toWords = new ToWords({
  converterOptions: {
    currencyOptions: {
      name: "Rupee",
      plural: "Rupees",
      symbol: "₹",
      fractionalUnit: {
        name: "Paisa",
        plural: "Paise",
        symbol: "",
      },
    },
  },
});
  console.log(data);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex flex-col border-2 ">
        <div className="flex justify-between pr-[30px]">
          <h1 className="text-lg font-bold">Total</h1>
          <div className="flex self-end gap-[30px]">
            <h1 className="font-bold">₹{totalBill as number}</h1>
            <h1 className="font-bold">₹{totalTax}</h1>
          </div>
        </div>
        <hr />
        <h1 className="font-bold text-lg">Amount in Words:</h1>
        <h1 className="font-bold text-lg">
          {toWords.convert(totalBill, { currency: true, ignoreDecimal: true })}
        </h1>
        <hr className="w-full text-black" />
        <div className="self-end py-2 px-5">
          <h1 className="font-bold text-lg ">For Varasiddhi:</h1>
          <Image
            className="object-contain"
            src={sellerSignature}
            alt="signature"
            height={100}
            width={100}
          />
          <h1 className="font-bold text-lg">Authorised Signature</h1>
        </div>
      </div>
      <h1 className="text-lg">
        Whether tax is payable under reverse charge - No
      </h1>
    </div>
  );
};

export default ProductsTable