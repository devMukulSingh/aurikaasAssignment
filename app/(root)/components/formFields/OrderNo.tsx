import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import { formProps } from '../../page';



const OrderNo = ({ form }: formProps) => {
  return (
    <FormField
      name="orderNo"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Order no</FormLabel>
          <FormControl>
            <Input type="number" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default OrderNo