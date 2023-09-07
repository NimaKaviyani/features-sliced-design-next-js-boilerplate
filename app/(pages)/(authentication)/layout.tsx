"use client";
import React, { ReactNode } from "react";
import { Container, Grid, ActionIcon, useMantineColorScheme, Box, MantineTheme, CSSObject } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { globalLanguage } from "@shared/i18n/locales/fa";

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <main>
      <Container fluid>
        <Grid className="min-h-screen flex-col">
          <Grid.Col span={12}>
            <Box className="h-16 flex items-center justify-end">
              <ActionIcon
                variant="outline"
                color={dark ? "yellow" : "blue"}
                onClick={(): unknown => toggleColorScheme()}
                title="Toggle color scheme"
                className="me-3"
              >
                {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
              </ActionIcon>
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
