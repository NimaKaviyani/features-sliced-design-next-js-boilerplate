"use client";
import { ReactNode } from "react";
import { Grid as MantineCol } from "@mantine/core";
import { ColProps } from "@mantine/core/lib/Grid/Col/Col";

const Col = ({ children }: ColProps): ReactNode => {
  return (
    <>
      <MantineCol.Col>{children}</MantineCol.Col>
    </>
  );
};

export default Col;
