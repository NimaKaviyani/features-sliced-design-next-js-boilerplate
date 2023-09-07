import React, { ReactNode } from "react";
import { CSSObject, Group, MantineTheme, Text, ThemeIcon, UnstyledButton } from "@mantine/core";

export interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

export default function MainLink({ icon, color, label }: MainLinkProps): ReactNode {
  return (
    <UnstyledButton
      sx={(theme: MantineTheme): CSSObject => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        "&:hover": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
        }
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}
