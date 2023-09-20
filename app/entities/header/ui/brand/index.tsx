import React, { ReactNode } from "react";
import { Box, Group } from "@mantine/core";
import Logo from "@shared/ui/logo";

const Brand = (): ReactNode => {
  return (
    <Box>
      <Group position="apart">
        <Logo />
      </Group>
    </Box>
  );
};

export default Brand;
