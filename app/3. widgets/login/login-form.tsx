import { ReactNode } from "react";
import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import { loginLanguage } from "@shared/i18n/locales/fa";
import { useForm } from "@mantine/form";

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
      <Checkbox
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
