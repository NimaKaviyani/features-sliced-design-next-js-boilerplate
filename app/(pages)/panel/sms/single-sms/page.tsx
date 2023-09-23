"use client";
import React, { ReactNode } from "react";
import { Grid, Divider } from "@mantine/core";
import GetUserInformation from "@/features/get-user-information";
import UserInformation from "@/widgets/panel/ui/user-information";

const SingleSms = (): ReactNode => {
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
    </Grid>
  );
};

export default SingleSms;
