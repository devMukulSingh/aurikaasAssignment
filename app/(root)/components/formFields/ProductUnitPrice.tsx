import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { IproductDetailsFields } from '../../page';



const ProductUnitPrice = ({ form, index }: IproductDetailsFields) => {
  return (
    <FormField
      name={`productDetails.${index}.productUnitPrice`}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product unit price</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProductUnitPrice