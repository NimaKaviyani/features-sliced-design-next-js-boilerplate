"use client";
import React, { ReactNode } from "react";
import { AppShell, Navbar, Header, MantineTheme, CSSObject, Grid } from "@mantine/core";
import PanelNavbar from "@widgets/panel/panel-navbar";
import PanelHeader from "@widgets/panel/panel-header";

const Layout = (): ReactNode => {
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
      {/* Your application here */}
      <Grid>
        <Grid.Col span={4}>Column 1</Grid.Col>
        <Grid.Col span={4}>Column 2</Grid.Col>
        <Grid.Col span={4}>Column 3</Grid.Col>
      </Grid>
    </AppShell>
  );
};

export default Layout;
