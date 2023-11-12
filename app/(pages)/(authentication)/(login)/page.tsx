import { ReactNode } from "react";
import { Center, Box } from "@mantine/core";
import LoginForm from "@widgets/login/ui/login-form";
import { loginLanguage } from "@shared/i18n/locales/fa";

export default function Login(): ReactNode {
  return (
    <Center className="authentication-login">
      <Box className="authentication-login-box">
        <h1>{loginLanguage.title}</h1>
        <Box>
          <LoginForm />
        </Box>
      </Box>
    </Center>
  );
}
