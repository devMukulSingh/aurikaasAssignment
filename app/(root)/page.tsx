'use client'
import { invoiceSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import SellerName from "./components/formFields/SellerName";
import { Form } from "@/components/ui/form";
import SellerCity from "./components/formFields/SellerCity";
import SellerState from "./components/formFields/SellerState";
import SellerPin from "./components/formFields/SellerPin";
import SellerPan from "./components/formFields/SellerPan";
import SellerGST from "./components/formFields/SellerGST";
import SellerPlaceOfSupply from "./components/formFields/SellerPlaceOfSuppply";
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
import { useAppDispatch } from "@/redux/hooks";
import { setFormValues } from "@/redux/reducer";

export type TformValues = z.infer<typeof invoiceSchema>

export type formProps = {
  form: UseFormReturn<TformValues, any, undefined>;
};

export default function Home() {
  const router = useRouter()
  const form = useForm<TformValues>({
    resolver: zodResolver(invoiceSchema),
  });
  const dispatch = useAppDispatch();
  const onSubmit = (data: TformValues) => {
    dispatch(setFormValues(data));
    router.push('/invoice')
  };
  return (
    <main className="flex justify-center items-center gap-5 flex-col py-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 border px-5 py-10 shadow-lg rounded-md"
        >
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-4">
            <div className="lg:col-span-3 md:col-span-2 col-span-1">
              <hr />
              <h1 className="text-center font-semibold text-xl">
                Seller Details
              </h1>
              <hr />
            </div>
            <SellerName form={form} />
            <SellerCity form={form} />
            <SellerState form={form} />
            <SellerPin form={form} />
            <SellerPan form={form} />
            <SellerGST form={form} />
            <SellerPlaceOfSupply form={form} />
            <SellerSignature form={form} />

            <div className="lg:col-span-3 md:col-span-2 col-span-1 space-y-2">
              <hr />
              <h1 className="text-center font-semibold text-xl">
                Billing Details
              </h1>
              <hr />
            </div>
            <BillingName form={form} />
            <BillingCity form={form} />
            <BillingState form={form} />
            <BillingPincode form={form} />

            <div className="lg:col-span-3 md:col-span-2 col-span-1 space-y-2">
              <hr />
              <h1 className="text-center font-semibold text-xl">
                Shipping details
              </h1>
              <hr />
            </div>

            <ShippingName form={form} />
            <ShippingCity form={form} />
            <ShippingState form={form} />
            <ShippingPinCode form={form} />
            <ShippingPlaceOfDelivery form={form} />
            <div className="lg:col-span-3 md:col-span-2 col-span-1 space-y-2">
              <hr />
              <h1 className="text-center font-semibold text-xl">
                Invoice details
              </h1>
              <hr />
            </div>
            <InvoiceDate form={form} />
            <InvoiceNo form={form} />
            <InvoiceDetails form={form} />
          </div>
          <Button type="submit" className="flex">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
