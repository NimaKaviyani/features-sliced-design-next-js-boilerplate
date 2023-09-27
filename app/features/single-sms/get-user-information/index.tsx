"use client";
import { ReactNode } from "react";
import { useForm } from "@mantine/form";
import { smsLanguage } from "@shared/i18n/locales/fa";
import { Button, Select, Group, TextInput, Grid } from "@mantine/core";

const GetUserInformation = (): ReactNode => {
  const phoneRegex = /^09[0-9]{9}$/;
  const form = useForm({
    initialValues: { phoneNumber: "", id: "" },
    // functions will be used to validate values at corresponding key
    validate: {
      id: value => (value.length > 0 ? null : smsLanguage.searchSms.idValidate),
      phoneNumber: value =>
        value.length > 0
          ? phoneRegex.test(value)
            ? null
            : smsLanguage.searchSms.phoneNumberValidate
          : smsLanguage.searchSms.phoneNumberEmpty
    }
  });
  return (
    <form onSubmit={form.onSubmit(e => console.log(e))}>
      <Grid>
        <Grid.Col span={5}>
          <Select placeholder={smsLanguage.searchSms.id} data={["ads", "otp"]} {...form.getInputProps("id")} />
        </Grid.Col>
        <Grid.Col span={5}>
          <TextInput
            withAsterisk
            placeholder={smsLanguage.searchSms.phoneNumber}
            {...form.getInputProps("phoneNumber")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <Group>
            <Button type="submit">{smsLanguage.searchSms.search}</Button>
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  );
};

export default GetUserInformation;
