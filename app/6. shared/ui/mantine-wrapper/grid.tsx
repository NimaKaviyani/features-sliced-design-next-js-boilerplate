"use client";
import { ReactNode } from "react";
import { Grid as MantineGrid } from "@mantine/core";
import { GridProps } from "@mantine/core/lib/Grid/Grid";

const Grid = ({ children }: GridProps): ReactNode => {
  return (
    <>
      <MantineGrid>{children}</MantineGrid>
    </>
  );
};

export default Grid;
