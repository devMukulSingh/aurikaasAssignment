import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { ChangeEvent } from 'react'
import { formProps, TformValues } from '../../page';
import { ControllerRenderProps } from 'react-hook-form';

const SellerSignature = ({ form }: formProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<TformValues>
  ) => {
    const signatureImg = e?.target?.files?.[0];
    if (signatureImg) {
      const reader = new FileReader();
      reader.onloadend = () => {
        field.onChange(reader.result);
      };
      reader.readAsDataURL(signatureImg);
    }
  };
  return (
    <FormField
      name="sellerSignature"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Seller signature</FormLabel>
          <FormControl>
            <Input  onChange={(e) => handleChange(e,field)} type='file' />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SellerSignature