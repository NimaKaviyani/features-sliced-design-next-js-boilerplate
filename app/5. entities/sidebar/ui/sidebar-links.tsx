import React, { ReactNode } from "react";
import { IconGitPullRequest, IconAlertCircle, IconMessages, IconDatabase } from "@tabler/icons-react";
import MainLink from "@shared/ui/main-link";

const data = [
  { icon: <IconGitPullRequest size="1rem" />, color: "blue", label: "Pull Requests" },
  { icon: <IconAlertCircle size="1rem" />, color: "teal", label: "Open Issues" },
  { icon: <IconMessages size="1rem" />, color: "violet", label: "Discussions" },
  { icon: <IconDatabase size="1rem" />, color: "grape", label: "Databases" }
];

export default function SidebarLinks(): ReactNode {
  return (
    <div>
      {data.map(link => (
        <MainLink {...link} key={link.label} />
      ))}
    </div>
  );
}
