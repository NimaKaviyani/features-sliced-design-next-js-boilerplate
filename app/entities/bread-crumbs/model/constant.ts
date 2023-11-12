import { panel } from "@shared/constants/routes";
import { BreadCrumb } from "./type";
import { sidebarLanguage } from "@shared/i18n/locales/fa";
export const page: BreadCrumb = {
  sms: { label: sidebarLanguage.sms.label, href: panel.sms },
  panel: { label: sidebarLanguage.panel, href: panel.panel },
  dashboard: { label: sidebarLanguage.dashboard, href: panel.dashboard },
  subscriber: { label: sidebarLanguage.subscribe.label, href: panel.subscriber },
  bulk: { label: sidebarLanguage.sms.bulk, href: panel.bulk },
  single: { label: sidebarLanguage.sms.single, href: panel.single },
  management: { label: sidebarLanguage.subscribe.management, href: panel.management }
};
