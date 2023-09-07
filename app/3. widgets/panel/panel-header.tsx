import React, { ReactNode } from "react";
import { Group } from "@mantine/core";
import ToggleColor from "@shared/ui/toggle-color";
import Brand from "@entities/header/ui/brand";

const PanelHeader = (): ReactNode => {
  return (
    <Group sx={{ height: "100%" }} px={20} position="apart">
      <Brand />
      <ToggleColor />
    </Group>
  );
};

export default PanelHeader;
