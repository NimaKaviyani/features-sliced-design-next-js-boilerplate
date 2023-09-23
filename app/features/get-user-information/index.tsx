"use client";
import { ReactNode } from "react";
import { useForm } from "@mantine/form";
import { smsLanguage } from "@shared/i18n/locales/fa";
import { Button, Checkbox, Select, Group, TextInput, Grid } from "@mantine/core";

const GetUserInformation = (): ReactNode => {
  const phoneRegex = /^09[0-9]{9}$/;
  const form = useForm({
    initialValues: { phoneNumber: "", id: "" },
    // functions will be used to validate values at corresponding key
    validate: {
      id:value => value.length > 0 ? null : smsLanguage.singleSms.idValidate,
      phoneNumber: value =>
        value.length > 0
          ? phoneRegex.test(value)
            ? null
            : smsLanguage.singleSms.phoneNumberValidate
          : smsLanguage.singleSms.phoneNumberEmpty
    }
  });
  return (
    <Grid>
      <form className="flex flex-row" onSubmit={form.onSubmit(e => console.log(e))}>
        <Grid.Col span={5}>
          <Select placeholder={smsLanguage.singleSms.Id} data={["ads", "otp"]} {...form.getInputProps("id")} />
        </Grid.Col>
        <Grid.Col span={5}>
          <TextInput
            withAsterisk
            placeholder={smsLanguage.singleSms.phoneNumber}
            {...form.getInputProps("phoneNumber")}
          />
        </Grid.Col>
        <Grid.Col span={2}>
          <Group>
            <Button type="submit">{smsLanguage.singleSms.search}</Button>
          </Group>
        </Grid.Col>
      </form>
    </Grid>
  );
};

export default GetUserInformation;

