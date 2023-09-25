import React from 'react'
import { useForm } from "@mantine/form";
import { Autocomplete } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { smsLanguage } from '@/shared/i18n/locales/fa';
const AddTags = () => {
    
  return (
    <Autocomplete
    placeholder={smsLanguage.sendSms.tagLabel}
    data={[]}   
        rightSection={
      <IconPlus
        className='cursor-pointer'
        style={{ display: undefined}}
      />
    }
  />
  )
}

export default AddTags