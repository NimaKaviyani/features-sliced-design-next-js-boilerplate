"use client";
import { ReactElement } from "react";
import { Center, Box, TextInput, Checkbox, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { loginLanguage } from "@shared/i18n/locales/fa";

export default function Login(): ReactElement {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      saveSession: false
    },
    validate: {
      username: value => (value.length === 0 ? null : loginLanguage.usernameValidation),
      password: value => (value.length === 0 ? null : loginLanguage.passwordValidation)
    }
  });
  return (
    <Center maw={400} mih={500} mx="auto">
      <Box w={400}>
        <h1 className="mb-5 text-center">{loginLanguage.title}</h1>
        <Box>
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
        </Box>
      </Box>
    </Center>
  );
}
