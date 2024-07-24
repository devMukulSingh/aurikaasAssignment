import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import { formProps } from '../../page';



const SellerPan = ({ form }: formProps) => {
  return (
    <FormField
      name="sellerPan"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Seller PAN</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SellerPan