import React, { ReactNode } from "react";
import { modals } from "@mantine/modals";
import { Text, Button } from "@mantine/core";
import { smsLanguage } from "@shared/i18n/locales/fa";

const Reject = (): ReactNode => {
  const openModal = (): void =>
    modals.openConfirmModal({
      title:smsLanguage.sendSms.cancelTitleModal,
      children: (
        <Text size="sm">
          {smsLanguage.sendSms.messageCancelModal}
        </Text>
      ),
      centered: true,
      labels:{ confirm: "بله", cancel: "خیر" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed")
    });
  return (
    <Button
      w={100}
      color="red"
      onClick={(): void => {openModal()}}
    >
      {smsLanguage.sendSms.reject}
    </Button>
  );
};

export default Reject;

