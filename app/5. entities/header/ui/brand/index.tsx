import React, { ReactNode } from "react";
import { Box, CSSObject, Group, MantineTheme } from "@mantine/core";
import Logo from "@shared/ui/logo";

const Brand = (): ReactNode => {
  return (
    <Box
      sx={(theme: MantineTheme): CSSObject => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg
      })}
    >
      <Group position="apart">
        <Logo />
      </Group>
    </Box>
  );
};

export default Brand;
