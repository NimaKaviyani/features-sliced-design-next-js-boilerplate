import React, { ReactNode } from "react";
import { Textarea } from "@mantine/core";
import { smsLanguage } from "@shared/i18n/locales/fa";

const TextArea = (): ReactNode => {
  return <Textarea error="" placeholder={smsLanguage.sendSms.textAreaPlaceholder} />;
};

export default TextArea;
