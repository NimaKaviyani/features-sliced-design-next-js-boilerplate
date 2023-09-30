import React, { ReactNode } from "react";
import { modals } from "@mantine/modals";
import { Text, Button } from "@mantine/core";
import { smsLanguage } from "@shared/i18n/locales/fa";
import { useTag,useGetInformation,useTextSMS } from "@/shared/state-management/single-sms";

const Reject = (): ReactNode => {
    const clearTags = useTag(state => state.clear);
    const clearTextSMS = useTextSMS(state => state.clear);
    const clearInformation = useGetInformation(state => state.clear);

    const clearSingleSMS = () => {
        clearTags();
        clearTextSMS();
        clearInformation;
      }
  const openModal = (): void =>
    modals.openConfirmModal({
      title: smsLanguage.sendSms.cancelTitleModal,
      children: <Text size="sm">{smsLanguage.sendSms.messageCancelModal}</Text>,
      centered: true,
      labels: { confirm: "بله", cancel: "خیر" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => clearSingleSMS()
    });
  return (
    <Button
      w={100}
      color="red"
      onClick={(): void => {
        openModal();
      }}
    >
      {smsLanguage.sendSms.reject}
    </Button>
  );
};

export default Reject;
