"use client";
import { ReactNode } from "react";
import { Button as MantineButton} from "@mantine/core";
import { ButtonProps } from "@mantine/core/lib/Button/Button";

const Button = ({ children }: ButtonProps): ReactNode => {
  return (
    <>
      <MantineButton>{children}</MantineButton>
    </>
  );
};

export default Button;
