import React, { ReactNode } from "react";
import { IconUsersPlus, IconLayoutDashboard } from "@tabler/icons-react";
import { LinksGroup } from "@shared/ui/menu";

/* todo: change with real data */
const mockdata = [
  { label: "داشبورد", icon: IconLayoutDashboard, links: "/panel/dashboard" },
  {
    label: "مشترکین",
    icon: IconUsersPlus,
    initiallyOpened: true,
    subMenus: [{ label: "مدیریت مشترکین", link: "/panel/subscriber" }]
  }
];
export default function MenuLists(): ReactNode {
  const links = mockdata.map(item => (
    <LinksGroup icon={item.icon} label={item.label} subMenus={item.subMenus} key={item.label} links={item.links} />
  ));

  return <div>{links}</div>;
}
