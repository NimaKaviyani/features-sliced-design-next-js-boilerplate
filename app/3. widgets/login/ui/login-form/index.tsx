'use client'
import TextInput from "@shared/ui/mantine-wrapper/text-input";
import CheckBox from "@shared/ui/mantine-wrapper/checkbox";
import { loginLanguage } from "@shared/i18n/locales/fa";
import Group from "@shared/ui/mantine-wrapper/Group";
import Button from "@shared/ui/mantine-wrapper/button";
import { useForm } from "@mantine/form";
import { ReactNode } from "react";


const LoginForm = (): ReactNode => {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      saveSession: false
    },
    validate: {
      username: value => (value.length !== 0 ? null : loginLanguage.usernameValidation),
      password: value => (value.length !== 0 ? null : loginLanguage.passwordValidation)
    }
  });
  return (
    <form onSubmit={form.onSubmit(values => console.log(values))}>
      <TextInput
        withAsterisk
        label={loginLanguage.username}
        placeholder={loginLanguage.username}
        {...form.getInputProps("username")}
      />
      <TextInput
        mt="md"
        withAsterisk
        label={loginLanguage.password}
        placeholder={loginLanguage.password}
        {...form.getInputProps("password")}
      />
      <CheckBox
        mt="md"
        label={loginLanguage.saveSession}
        {...form.getInputProps("saveSession", { type: "checkbox" })}
      />
      <Group position="right" mt="md">
        <Button type="submit">{loginLanguage.submit}</Button>
      </Group>
    </form>
  );
};

export default LoginForm;
