import React, { ReactNode } from "react";
import { Navbar, ScrollArea } from "@mantine/core";
import SidebarLinks from "@entities/sidebar/ui/menu-lists";
import UserSidebar from "@entities/user/ui/user-sidebar";

const PanelNavbar = (): ReactNode => {
  return (
    <>
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
