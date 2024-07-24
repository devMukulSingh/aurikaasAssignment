import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import { formProps } from '../../page';



const BillingState = ({ form }: formProps) => {
  return (
    <FormField
      name="billingState"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Billing state</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default BillingState