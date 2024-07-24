import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import { formProps } from '../../page';



const BillingPincode = ({ form }: formProps) => {
  return (
    <FormField
      name="billingPincode"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Billing pincode</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default BillingPincode