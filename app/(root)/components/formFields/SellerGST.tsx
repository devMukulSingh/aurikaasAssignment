import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import { formProps } from '../../page';


const SellerGST = ({ form }: formProps) => {
  return (
    <FormField
      name="sellerGST"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Seller GST</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SellerGST