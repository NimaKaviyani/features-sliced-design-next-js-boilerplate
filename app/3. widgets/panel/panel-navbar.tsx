import React, { ReactNode } from "react";
import { Navbar, ScrollArea } from "@mantine/core";
import { MainLinks } from "@entities/sidebar/main-links";

const PanelNavbar = (): ReactNode => {
  return (
    <>
      <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </>
  );
};

export default PanelNavbar;
