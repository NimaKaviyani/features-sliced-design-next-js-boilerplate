"use client";
import React, { ReactNode } from "react";
import PanelHeader from "@widgets/panel/ui/panel-header";
import PanelNavbar from "@widgets/panel/ui/panel-sidebar";
import { AppShell, Container, Navbar, Header, MantineTheme, CSSObject, Card } from "@mantine/core";

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
      <Container my="md" fluid>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          {children}
        </Card>
      </Container>
    </AppShell>
  );
};
export default Layout;
