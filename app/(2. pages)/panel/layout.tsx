"use client";
import React, { ReactNode } from "react";
import { AppShell, Navbar, Header, MantineTheme, CSSObject } from "@mantine/core";
import PanelNavbar from "@/3. widgets/panel/ui/panel-navbar";
import PanelHeader from "@/3. widgets/panel/ui/panel-header";

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <PanelHeader />
        </Header>
      }
      navbar={
        <Navbar width={{ base: 300 }} className="min-h-fit" p="xs">
          <PanelNavbar />
        </Navbar>
      }
      styles={(theme: MantineTheme): Partial<Record<"root" | "body" | "main", CSSObject>> => ({
        main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] }
      })}
    >
      {/* todo: add breadcrumb */}
      {children}
    </AppShell>
  );
};

export default Layout;
