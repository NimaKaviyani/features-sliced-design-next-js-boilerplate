"use client";
import { ReactNode } from "react";
import { Header as MantineHeader } from "@mantine/core";
import { HeaderProps } from "@mantine/core/lib/AppShell/Header/Header";

const Header = (props : HeaderProps ): ReactNode => {
  return (
    <>
      <MantineHeader {...props}>{props.children}</MantineHeader>
    </>
  );
};

export default Header;
