import React, { ReactNode } from "react";
import { IconUsersPlus, IconLayoutDashboard, IconMail } from "@tabler/icons-react";
import { LinksGroup } from "@shared/ui/menu";
import { sidebarLanguage } from "@shared/i18n/locales/fa";

/* todo: change with real data */
const mockdata = [
  { label: sidebarLanguage.dashboard, icon: IconLayoutDashboard, links: "/panel/dashboard" },
  {
    label: sidebarLanguage.subscribe.label,
    icon: IconUsersPlus,
    initiallyOpened: true,
    subMenus: [{ label: sidebarLanguage.subscribe.management, link: "/panel/subscriber/subscriber-management" }]
  },
  {
    label: sidebarLanguage.sms.label,
    icon: IconMail,
    initiallyOpened: true,
    subMenus: [
      { label: sidebarLanguage.sms.single, link: "/panel/sms/single-sms" },
      { label: sidebarLanguage.sms.bulk, link: "/panel/sms/bulk-sms" }
    ]
  }
];
export default function MenuLists(): ReactNode {
  const links = mockdata.map(item => (
    <LinksGroup icon={item.icon} label={item.label} subMenus={item.subMenus} key={item.label} links={item.links} />
  ));

  return <div>{links}</div>;
}
