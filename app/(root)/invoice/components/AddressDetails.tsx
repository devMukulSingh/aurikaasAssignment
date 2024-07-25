"use client";

import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";

const AddressDetails = () => {
  const {
    billingCity,
    billingName,
    billingPincode,
    billingState,
    invoiceDate,
    invoiceDetails,
    invoiceNo,
    sellerCity,
    sellerGST,
    sellerName,
    sellerPan,
    sellerPincode,
    sellerSignature,
    sellerState,
    shippingCity,
    shippingName,
    shippingPinCode,
    shippingPlaceOfDelivery,
    shippingPlaceOfSupply,
    shippingState,
    orderDate,
    orderNo
  } = useAppSelector((state) => state.formValues);
  return (
    <div className="flex flex-col min-h-1/2 whitespace-nowrap ">

      <div className="flex justify-between">
        <Image
          height={200}
          width={200}
          src="/next.svg"
          alt="logo"
          className="object-contain"
        />
        <div className="flex flex-col items-end ">
          <h1 className="text-lg font-bold whitespace-nowrap">
            Tax Invoice/Bill of Supply/ Cash Memo
          </h1>
          <h1 className="">(Original for Recipient)</h1>
        </div>
      </div>

      {/* /////////////Sellerdetails/////////////////// */}
      <div className=" grid grid-cols-2 gap-x-5 gap-y-2 auto-rows-min mt-10">
        <div className="">
          <h1 className="font-bold">Sold By:</h1>
          <h1>{sellerName}</h1>
          <h1>{sellerCity}</h1>
          <h1>
            {sellerCity}, {sellerState}
          </h1>
          <div className="mt-5">
            <h1 className="">
              <span className="font-bold">PAN No: </span>
              {sellerPan}
            </h1>
            <h1>
              <span className="font-bold">GST Registration No:</span>
              {sellerGST}
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <h1 className="font-bold">Billing Address:</h1>
          <h1>{billingName}</h1>
          <h1>{billingCity}</h1>
          <h1>
            {billingCity}, {billingState}
          </h1>
          <h1>
            <span className="font-bold">State/UT Code:</span>
            {billingPincode}
          </h1>
        </div>

        {/* //////////////////////////////// */}

        <div className="flex flex-col justify-end">
          <h1>
            <span className="font-bold"> Order Number:</span>
            {orderNo}
          </h1>
          <h1>
            <span className="font-bold"> Order Date:</span>
            {orderDate}
          </h1>
        </div>

        <div className="flex flex-col items-end">
          <h1 className="font-bold">Shipping Address:</h1>
          <h1>{shippingName}</h1>
          <h1>{shippingCity}</h1>
          <h1>
            {shippingCity}, {shippingState},{shippingPinCode}
          </h1>
          <h1>
            <span className="font-bold">State/UT Code:</span>
            29
          </h1>
          <h1>
            <span className="font-bold">Place of supply:</span>
            {shippingPlaceOfSupply}
          </h1>
          <h1>
            <span className="font-bold">Place of delivery:</span>
            {shippingPlaceOfDelivery}
          </h1>

          <div className="mt-auto">
            <h1>
              <span className="font-bold">Invoice Number:</span>
              {invoiceNo}
            </h1>
            <h1>
              <span className="font-bold">Invoice Details:</span>
              {invoiceDetails}
            </h1>
            <h1>
              <span className="font-bold">Invoice Date:</span>
              {invoiceDate}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
