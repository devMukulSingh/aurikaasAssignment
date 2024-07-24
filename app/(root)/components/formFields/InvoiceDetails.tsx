import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import { formProps } from '../../page';

type Props = {
  form: UseFormReturn<FieldValues, any, undefined>;
};

const InvoiceDetails = ({ form }: formProps) => {
  return (
    <FormField
      name="invoiceDetails"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Invoice details</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InvoiceDetails