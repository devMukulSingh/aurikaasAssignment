import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import {  IproductDetailsFields } from '../../page';



const ProductDiscount = ({ form, index }: IproductDetailsFields) => {
  return (
    <FormField
      name={`productDetails.${index}.productDiscount`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product discount</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProductDiscount