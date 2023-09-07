import React, { ReactNode } from "react";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

const ToggleColor = (): ReactNode => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={(): unknown => toggleColorScheme()}
      title="Toggle color scheme"
      className="me-3"
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
};

export default ToggleColor;
