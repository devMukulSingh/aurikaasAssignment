import Image from 'next/image';
import React from 'react'

const AddressDetails = () => {
  return (
    <div className="h-1/2 whitespace-nowrap  grid grid-cols-2 gap-5">
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

      {/* //////////////////////////////// */}
      <div className="">
        <h1 className="font-bold">Sold By:</h1>
        <h1>Varasiddhi</h1>
        <h1>75, 3rd Cross Lalbagh</h1>
        <h1>Bengaluru, Karnataka</h1>
        <div className="mt-5">
          <h1 className="">
            <span className="font-bold">PAN No: </span>
            AA CFASDADASD
          </h1>
          <h1>
            <span className="font-bold">GST Registration No:</span>
            28AAaSDASDASD
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <h1 className="font-bold">Billing Address:</h1>
        <h1>Madhu B</h1>
        <h1>Euro Fins</h1>
        <h1>Bangaluru, Karnataka</h1>
        <h1>
          <span className="font-bold">State/UT Code:</span>
          29
        </h1>
      </div>

      {/* //////////////////////////////// */}

      <div className="flex flex-col justify-end">
        <h1>
          <span className="font-bold"> Order Number</span>
          123123123123
        </h1>
        <h1>
          <span className="font-bold"> Order Date</span>
          12.12.2222
        </h1>
      </div>

      <div className="flex flex-col items-end">
        <h1 className="font-bold">Shipping Address:</h1>
        <h1>Madhu B</h1>
        <h1>Madhu B</h1>
        <h1>Eurofins It</h1>
        <h1>Bengaluru, Karnataka,12121</h1>
        <h1>
          <span className="font-bold">State/UT Code:</span>
          Karnataka
        </h1>
        <h1>
          <span className="font-bold">Place of supply:</span>
          Karnataka
        </h1>
        <h1>
          <span className="font-bold">Place of delivery:</span>
          Karnataka
        </h1>

        <div className="mt-auto">
          <h1>
            <span className="font-bold">Invoice Number:</span>
            IN-761
          </h1>
          <h1>
            <span className="font-bold">Invoice Details:</span>
            FASDASDASD
          </h1>
          <h1>
            <span className="font-bold">Invoice Date:</span>
            12.12.4555
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AddressDetails