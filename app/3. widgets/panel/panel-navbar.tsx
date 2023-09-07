import React, { ReactNode } from "react";
import { Navbar, ScrollArea } from "@mantine/core";
import SidebarLinks from "@entities/sidebar-links";
import { UserSidebar } from "@entities/user-sidebar";

const PanelNavbar = (): ReactNode => {
  return (
    <>
      <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <SidebarLinks />
      </Navbar.Section>
      <Navbar.Section>
        <UserSidebar />
      </Navbar.Section>
    </>
  );
};

export default PanelNavbar;
