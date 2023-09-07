"use client";
import React, { ReactNode } from "react";
import { AppShell, Navbar, Header, MantineTheme, CSSObject } from "@mantine/core";
import PanelNavbar from "@widgets/panel/panel-navbar";

const Layout = (): ReactNode => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} className="min-h-fit" p="xs">
          <PanelNavbar />
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          {/* Header content */}
        </Header>
      }
      styles={(theme: MantineTheme): Partial<Record<"root" | "body" | "main", CSSObject>> => ({
        main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] }
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
};

export default Layout;
