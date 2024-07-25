"use client";
import { invoiceSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import SellerName from "./components/formFields/SellerName";
import { Form } from "@/components/ui/form";
import SellerCity from "./components/formFields/SellerCity";
import SellerState from "./components/formFields/SellerState";
import SellerPin from "./components/formFields/SellerPin";
import SellerPan from "./components/formFields/SellerPan";
import SellerGST from "./components/formFields/SellerGST";
import SellerPlaceOfSupply from "./components/formFields/ShippingPlaceOfSuppply";
import BillingName from "./components/formFields/BillingName";
import BillingCity from "./components/formFields/BIllingCity";
import BillingState from "./components/formFields/BillingState";
import BillingPincode from "./components/formFields/BillingPincode";
import ShippingName from "./components/formFields/ShippingName";
import ShippingCity from "./components/formFields/ShippingCity";
import ShippingState from "./components/formFields/ShippingState";
import ShippingPinCode from "./components/formFields/ShippingPinCode";
import ShippingPlaceOfDelivery from "./components/formFields/ShippingPlaceOfDelivery";
import { Button } from "@/components/ui/button";
import InvoiceDate from "./components/formFields/InvoiceDate";
import InvoiceNo from "./components/formFields/InvoiceNo";
import InvoiceDetails from "./components/formFields/InvoiceDetails";
import SellerSignature from "./components/formFields/SellerSignature";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setFormValues } from "@/redux/reducer";
import OrderNo from "./components/formFields/OrderNo";
import OrderDate from "./components/formFields/OrderDate";
import ShippingPlaceOfSuppply from "./components/formFields/ShippingPlaceOfSuppply";
import BillingStateCode from "./components/formFields/BillingStateCode";
import ShippingStateCode from "./components/formFields/ShippingStateCode";
import ProductDescription from "./components/formFields/ProductDescription";
import ProductUnitPrice from "./components/formFields/ProductUnitPrice";
import ProductQuantity from "./components/formFields/ProductQuantity";
import ProductDiscount from "./components/formFields/ProductDiscount";
import { PlusCircle, X } from "lucide-react";
import toast from "react-hot-toast";

export type TformValues = z.infer<typeof invoiceSchema>;

export type formProps = {
  form: UseFormReturn<TformValues, any, undefined>;
};

export interface IproductDetailsFields extends formProps {
  index: number;
}

export default function Home() {
  const { formValues } = useAppSelector((state) => state);

  const router = useRouter();
  const form = useForm<TformValues>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: formValues,
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "productDetails",
  });
  const dispatch = useAppDispatch();
  const onSubmit = (data: TformValues) => {
    dispatch(setFormValues(data));
    router.push("/invoice");
  };
  const handleAddMore = () => {
    if (fields.length > 9) {
      toast.error("Maximum 10 products allowed");
      return;
    }
    append({
      productDescription: "",
      productDiscount: 0,
      productQuantity: 0,
      productUnitPrice: 0,
      siNo: fields.length + 1,
    });
  };
  console.log(form.formState.errors);

  return (
    <main className="flex justify-center items-center gap-5 flex-col py-10 bg-slate-900">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 border px-5 py-10 shadow-lg rounded-md bg-slate-100 "
        >
          <div className="  ">
            <div className="">
              <hr />
              <h1 className="text-center font-semibold text-lg sm:text-xl">
                Seller Details
              </h1>
              <hr />
            </div>
            <div className="grid lg:grid-cols-3 gap-x-5 gap-y-4 sm:grid-cols-2 grid-cols-1  ">
              <SellerName form={form} />
              <SellerCity form={form} />
              <SellerState form={form} />
              <SellerPin form={form} />
              <SellerPan form={form} />
              <SellerGST form={form} />
              <SellerSignature form={form} />
            </div>

            <div className="col-span-3 space-y-2">
              <hr />
              <h1 className="text-center font-semibold text-lg sm:text-xl">
                Billing Details
              </h1>
              <hr />
            </div>
            <div className="grid lg:grid-cols-3 gap-x-5 gap-y-4 sm:grid-cols-2  grid-cols-1 ">
              <BillingName form={form} />
              <BillingCity form={form} />
              <BillingState form={form} />
              <BillingPincode form={form} />
              <BillingStateCode form={form} />
            </div>
            <div className="col-span-3 space-y-2">
              <hr />
              <h1 className="text-center font-semibold text-lg sm:text-xl">
                Shipping details
              </h1>
              <hr />
            </div>

            <div className="grid lg:grid-cols-3 gap-x-5 gap-y-4 sm:grid-cols-2  grid-cols-1  ">
              <ShippingName form={form} />
              <ShippingCity form={form} />
              <ShippingState form={form} />
              <ShippingPinCode form={form} />
              <ShippingPlaceOfDelivery form={form} />
              <ShippingPlaceOfSuppply form={form} />
              <ShippingStateCode form={form} />
            </div>

            <div className="col-span-3 space-y-2">
              <hr />
              <h1 className="text-center font-semibold text-lg sm:text-xl">
                Invoice details
              </h1>
              <hr />
            </div>
            <div className="grid lg:grid-cols-3 gap-x-5 gap-y-4 sm:grid-cols-2  grid-cols-1  ">
              <InvoiceDate form={form} />
              <InvoiceNo form={form} />
              <InvoiceDetails form={form} />
              <OrderNo form={form} />
              <OrderDate form={form} />
            </div>

            <div className="col-span-3 space-y-2">
              <hr />
              <h1 className="text-center font-semibold text-lg sm:text-xl">
                Product details
              </h1>
              <hr />
            </div>
            <div className="relative col-span-3 flex flex-col space-y-5 max-h-[30rem] border overflow-auto p-5">
              {fields.map((item, index) => (
                <div className="flex flex-col gap-5">
                  <Button
                    disabled={fields.length < 2}
                    type="button"
                    variant={"destructive"}
                    size={"icon"}
                    className=" rounded-full self-start p-0 ml-auto"
                    onClick={() => remove(index)}
                  >
                    <X size={15} />
                  </Button>
                  <div
                    className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 "
                    key={item.id}
                  >
                    <ProductDescription form={form} index={index} />

                    <ProductUnitPrice form={form} index={index} />

                    <ProductQuantity form={form} index={index} />
                    <ProductDiscount form={form} index={index} />
                  </div>
                  <hr className="border border-dotted border-neutral-300" />
                </div>
              ))}
              <Button
                className="w-fit"
                variant={"outline"}
                type="button"
                onClick={handleAddMore}
              >
                <PlusCircle className="mr-2" />
                Add more
              </Button>
            </div>
          </div>
          <Button type="submit" className="flex">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
