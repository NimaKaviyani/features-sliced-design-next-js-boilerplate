"use client";
import React, { ReactNode } from "react";
import ToggleColor from "@shared/ui/toggle-color";
import { globalLanguage } from "@shared/i18n/locales/fa";
import { Container, Grid, Box, MantineTheme, CSSObject } from "@mantine/core";
const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <main>
      <Container fluid>
        <Grid className="min-h-screen flex-col">
          <Grid.Col span={12}>
            <Box className="h-16 flex items-center justify-end">
              <ToggleColor />
            </Box>
          </Grid.Col>
          <Grid.Col span={12}>{children}</Grid.Col>
          <Grid.Col span={12} className="mt-auto">
            <Box
              component="footer"
              className="h-16 flex items-center justify-center"
              sx={(theme: MantineTheme): CSSObject => ({
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : ""
              })}
            >
              {globalLanguage.copyright}
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
};

export default Layout;
