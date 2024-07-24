import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import { formProps } from '../../page';


const ShippingState = ({ form }: formProps) => {
  return (
    <FormField
      name="shippingState"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Shipping state</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ShippingState