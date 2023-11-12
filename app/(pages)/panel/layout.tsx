"use client";
import React, { ReactNode } from "react";
import PanelHeader from "@widgets/panel/ui/panel-header";
import PanelSidebar from "@widgets/panel/ui/panel-sidebar";
import BreadCrumb from "@entities/bread-crumbs/ui/breadCrumb";
import {
  AppShell,
  AppShellNavbar,
  AppShellHeader,
  AppShellMain,
  Container,
  Card,
  useMantineColorScheme
} from "@mantine/core";

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: false } }}
      padding="md"
      className={`panel${" " + colorScheme}`}
    >
      <AppShellHeader>
        <PanelHeader />
      </AppShellHeader>
      <AppShellNavbar>
        <PanelSidebar />
      </AppShellNavbar>
      <AppShellMain>
        <Container fluid>
          <BreadCrumb />
          <Card h="650" shadow="sm" padding="lg" radius="md" withBorder>
            {children}
          </Card>
        </Container>
      </AppShellMain>
    </AppShell>
  );
};
export default Layout;
