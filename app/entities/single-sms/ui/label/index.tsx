import React, { ReactNode } from "react";
import { TextInput } from "@mantine/core";
import { smsLanguage } from "@/shared/i18n/locales/fa";

const LabelInput = (): ReactNode => {
  return <TextInput withAsterisk placeholder={smsLanguage.sendSms.title} />;
};

export default LabelInput;
