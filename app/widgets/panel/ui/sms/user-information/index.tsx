import { smsLanguage } from "@/shared/i18n/locales/fa";
import { Grid } from "@mantine/core";
import React from "react";

const UserInformation = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.nameContact}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.idContact}: {}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.smsIdLabel}: {}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.customer}: {}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.sendPriority}: {}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.inquiryState}: {}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.providerName}: {}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.sendingChannel}: {}
      </Grid.Col>
    </Grid>
  );
};

export default UserInformation;

