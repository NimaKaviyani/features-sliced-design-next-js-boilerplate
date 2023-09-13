import React, { ReactNode } from "react";
import ToggleColor from "@shared/ui/toggle-color";
import Brand from "@entities/header/ui/brand";
import Group from "@shared/ui/mantine-wrapper/Group";

const PanelHeader = (): ReactNode => {
  return (
    <Group sx={{ height: "100%" }} px={20} position="apart">
      <Brand />
      <ToggleColor />
    </Group>
  );
};

export default PanelHeader;
