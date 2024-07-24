import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { formProps } from '../../page';



const OrderDate = ({ form }: formProps) => {
  return (
    <FormField
      name="orderDate"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Order date</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default OrderDate