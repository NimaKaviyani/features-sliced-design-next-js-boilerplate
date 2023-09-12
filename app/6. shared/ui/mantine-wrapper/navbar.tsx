import { ReactNode } from "react";
import { Navbar as MantineNavbar } from "@mantine/core";
import { NavbarProps } from "@mantine/core/lib/AppShell/Navbar/Navbar";

const Header = (props : NavbarProps ): ReactNode => {
  return (
    <>
      <MantineNavbar {...props}>{props.children}</MantineNavbar>
    </>
  );
};

export default Header;
