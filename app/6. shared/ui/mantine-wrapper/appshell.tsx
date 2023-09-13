"use client";
import { ReactNode } from "react";
import { AppShell as MantineAppShell } from "@mantine/core";
import { AppShellProps } from "@mantine/core/lib/AppShell/AppShell";

const AppShell = ({ children }: AppShellProps): ReactNode => {
  return (
    <>
      <MantineAppShell>{children}</MantineAppShell>
    </>
  );
};

export default AppShell;
