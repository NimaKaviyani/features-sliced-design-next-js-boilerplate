import { IconUsersPlus, IconLayoutDashboard, IconMail } from "@tabler/icons-react";
import { sidebarLanguage } from "@shared/i18n/locales/fa";
export const data = [
  {
    icon: IconLayoutDashboard,
    link: "/panel/dashboard",
    label: sidebarLanguage.dashboard
  },
  {
    icon: IconUsersPlus,
    label: sidebarLanguage.subscribe.label,
    initiallyOpened: true,
    subMenus: [{ label: sidebarLanguage.subscribe.management, link: "/panel/subscriber/management" }]
  },
  {
    icon: IconMail,
    label: sidebarLanguage.sms.label,
    initiallyOpened: true,
    subMenus: [
      { label: sidebarLanguage.sms.single, link: "/panel/sms/single" },
      { label: sidebarLanguage.sms.bulk, link: "/panel/sms/bulk" }
    ]
  }
];
