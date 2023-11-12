import React, { ReactNode } from "react";
import ToggleColor from "@shared/ui/toggle-color";
import { globalLanguage } from "@shared/i18n/locales/fa";
import { Container, Grid, Box, GridCol } from "@mantine/core";
const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <main className="authentication">
      <Container fluid>
        <Grid className="authentication-layout">
          <GridCol span={12}>
            <Box className="color-toggle">
              <ToggleColor />
            </Box>
          </GridCol>
          <GridCol span={12}>{children}</GridCol>
          <GridCol span={12}>
            <Box component="footer" className="footer">
              {globalLanguage.copyright}
            </Box>
          </GridCol>
        </Grid>
      </Container>
    </main>
  );
};

export default Layout;
