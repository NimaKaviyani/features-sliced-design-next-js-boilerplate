import { Grid } from "@mantine/core";
import React, { ReactNode } from "react";
import { smsLanguage } from "@/shared/i18n/locales/fa";
import { useGetInformation } from "@/shared/state-management/single-sms-store";

const UserInformation = (): ReactNode => {
  const userInfo = useGetInformation(state => state);
  const checker = userInfo.phoneNumber && userInfo.id;
  const fakeData ={
    sendingChannel:"سرور پراکسی شماره ۱",
    sendPriority : "بالا",
    providerName : "آتیه داده پرداز",
    inquiryState : "در حال ارسال",
    nameContact : "محمد کریمی",
    smsIdLabel : "اطلاع رسانی سامانه آگاه",
    customer : "سامانه آگاه",
    idContact: "198346",
  }
  return (
    <Grid>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.nameContact}:  {checker ? fakeData.nameContact : null}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.idContact}: {checker ? fakeData.idContact : null}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.smsIdLabel}: {checker ? fakeData.smsIdLabel : null}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.customer}: {checker ?fakeData.customer : null}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.sendPriority}: {checker ? fakeData.sendPriority : null}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.inquiryState}: {checker ? fakeData.inquiryState : null}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.providerName}: {checker ? fakeData.providerName : null}
      </Grid.Col>
      <Grid.Col span={3}>
        {smsLanguage.userInfo.sendingChannel}: {checker ? fakeData.sendingChannel : null}
      </Grid.Col>
    </Grid>
  );
};

export default UserInformation;
