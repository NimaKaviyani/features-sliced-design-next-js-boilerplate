import React, { ReactNode } from "react";
import { Navbar, ScrollArea } from "@mantine/core";
import SidebarLinks from "@entities/sidebar/ui/sidebar-links";
import UserSidebar from "@entities/user/ui/user-sidebar";
// import SidebarBrand from "@entities/sidebar/ui/sidebar-brand";

const PanelNavbar = (): ReactNode => {
  return (
    <>
      {/*<Navbar.Section mt="xs">
        <SidebarBrand />
      </Navbar.Section>*/}
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
