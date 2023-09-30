import React, { ReactNode, useEffect, useState } from "react";
import { modals } from "@mantine/modals";
import { Text, Button } from "@mantine/core";
import { smsLanguage } from "@shared/i18n/locales/fa";
import { useTextSMS } from "@/shared/state-management/single-sms";

const Send = (): ReactNode => {
  const [text, setText] = useState("");
  const textSms = useTextSMS(state => state.textSMS);
  const setTextSMS = useTextSMS(state => state.setTextSMS);

  const openModal = (): void =>
    modals.openConfirmModal({
      title: smsLanguage.sendSms.sendTitleModal,
      children: <Text size="sm">{smsLanguage.sendSms.messageConfirmModal}</Text>,
      centered: true,
      labels: { confirm: "ارسال", cancel: "خیر" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed")
    });
  const handleClick = (): void => {
    if (text.length === 0) {
      setTextSMS({ error: true, message: "متن ارسال خود را وارد کنید!" });
      return;
    }
    openModal();
  };
  useEffect(() => {
    console.log({ text: textSms.value });
    setText(textSms.value ?? "");
  }, [textSms]);
  return (
    <Button w={100} onClick={handleClick}>
      {smsLanguage.sendSms.send}
    </Button>
  );
};

export default Send;
