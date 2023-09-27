"use client";
import React, { ReactNode } from "react";
import { Grid, Button, Text, Group } from "@mantine/core";
import AddTags from "@/features/single-sms/add-tags";
import LabelInput from "@/entities/single-sms/ui/label";
import Tags from "@entities/single-sms/ui/tags";
import TextArea from "@entities/single-sms/ui/textarea";
import { modals } from "@mantine/modals";
import { smsLanguage } from "@shared/i18n/locales/fa";

const SingleSmsWidget = (): ReactNode => {
  const openModal = (value: string): void =>
    modals.openConfirmModal({
      title: value === "send" ? smsLanguage.sendSms.sendTitleModal : smsLanguage.sendSms.cancelTitleModal,
      children: (
        <Text size="sm">
          {value === "send" ? smsLanguage.sendSms.messageConfirmModal : smsLanguage.sendSms.messageCancelModal}
        </Text>
      ),
      labels: value === "send" ? { confirm: "ارسال", cancel: "خیر" } : { confirm: "بله", cancel: "خیر" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => console.log("Confirmed")
    });
  return (
    <form>
      <Grid>
        <Grid.Col xs={12} md={4} lg={3}>
          <LabelInput />
        </Grid.Col>
        <Grid.Col xs={12} md={4} lg={3}>
          <AddTags />
        </Grid.Col>
        <Tags />
        <Grid.Col xs={12}>
          <Grid>
            <Grid.Col xs={12} md={8} lg={6}>
              <TextArea />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col className="flex justify-end items-end" xs={12} md={4} lg={6}>
          <Group>
            <Button w={100} color="red" onClick={(): void => openModal("cancel")}>
              انصراف
            </Button>
            <Button w={100} onClick={(): void => openModal("send")}>
              ارسال
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default SingleSmsWidget;
