"use client";
import { ReactNode } from "react";
import { Center, Box } from "@mantine/core";
import LoginForm from "@widgets/login/ui/login-form";
import { loginLanguage } from "@shared/i18n/locales/fa";

export default function Login(): ReactNode {
  return (
    <Center maw={400} mih={500} mx="auto">
      <Box w={400}>
        <h1 className="mb-5 text-center">{loginLanguage.title}</h1>
        <Box>
          <LoginForm />
        </Box>
      </Box>
    </Center>
  );
}
