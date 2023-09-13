"use client";
import { ReactNode } from "react";
import { TextInput as MantineTextInput } from "@mantine/core";
import { TextInputProps } from "@mantine/core/lib/TextInput/TextInput";

const TextInput = ({ children }: TextInputProps): ReactNode => {
  return (
    <>
      <MantineTextInput>{children}</MantineTextInput>
    </>
  );
};

export default TextInput;

