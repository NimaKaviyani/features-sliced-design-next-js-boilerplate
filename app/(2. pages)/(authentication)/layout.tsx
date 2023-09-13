import React, { ReactNode } from "react";
import { MantineTheme, CSSObject } from "@shared/model/index";
import { globalLanguage } from "@shared/i18n/locales/fa";
import ToggleColor from "@shared/ui/toggle-color";
import Container from "@shared/ui/mantine-wrapper/container";
import Grid from "@shared/ui/mantine-wrapper/grid";
import Col from "@shared/ui/mantine-wrapper/col";
import Box from "@shared/ui/mantine-wrapper/box";


const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <main>
      <Container fluid>
        <Grid className="min-h-screen flex-col">
          <Col span={12}>
            <Box className="h-16 flex items-center justify-end">
              <ToggleColor />
            </Box>
          </Col>
          <Col span={12}>{children}</Col>
          <Col span={12} className="mt-auto">
            <Box
              className="h-16 flex items-center justify-center"
              sx={(theme: MantineTheme): CSSObject => ({
                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : ""
              })}
            >
              {globalLanguage.copyright}
            </Box>
          </Col>
        </Grid>
      </Container>
    </main>
  );
};

export default Layout;

