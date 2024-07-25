import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FieldValues, Form, UseFormReturn } from 'react-hook-form';
import {  IproductDetailsFields } from '../../page';


const ProductDescription = ({ form,index }: IproductDetailsFields) => {
  return (
    <FormField
      name={`productDetails.${index}.productDescription`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product Description</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProductDescription