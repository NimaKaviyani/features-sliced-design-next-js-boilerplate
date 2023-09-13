"use client";
import { ReactNode } from "react";
import { Checkbox as MantineCheckbox} from "@mantine/core";
import { CheckboxProps } from "@mantine/core/lib/Checkbox/Checkbox";

const Checkbox = ({ children }: CheckboxProps): ReactNode => {
  return (
    <>
      <MantineCheckbox>{children}</MantineCheckbox>
    </>
  );
};

export default Checkbox;
