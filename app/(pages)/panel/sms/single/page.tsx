"use client";
import React, { ReactNode } from "react";
import { Grid, Divider } from "@mantine/core";
import GetUserInformation from "@/features/get-user-information";
import UserInformation from "@/widgets/panel/ui/sms/user-information";
import SingleSmsWidget from "@/widgets/panel/ui/sms/single-sms";
import { useGetInformation } from "@/shared/state-management/single-sms";

const SingleSms = (): ReactNode => {
  const userInfo = useGetInformation(state => state);

  return (
    <Grid>
      <Grid.Col>
        <h1>صندوق ارسال پیامک تک</h1>
        <Divider my="sm" />
      </Grid.Col>
      <Grid.Col>
        <GetUserInformation />
      </Grid.Col>
      <Grid.Col>
        <UserInformation />
      </Grid.Col>
      {userInfo.phoneNumber && userInfo.id ? (
        <Grid.Col>
          <SingleSmsWidget />
        </Grid.Col>
      ) : null}
    </Grid>
  );
};

export default SingleSms;
