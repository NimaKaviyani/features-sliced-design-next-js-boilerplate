import React from "react";
import Link from "next/link";
import { Text, useMantineColorScheme, useMantineTheme, rem } from "@mantine/core";
export const SubmenuItems = (props: {
  index: number;
  subMenuItem: { link: string; label: string };
}): React.ReactNode => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Text
      style={{
        fontWeight: 500,
        display: "block",
        textDecoration: "none",
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        paddingLeft: rem(31),
        marginLeft: rem(30),
        fontSize: theme.fontSizes.sm,
        color: colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
        borderRight: `${rem(1)} solid ${colorScheme === "dark" ? theme.colors.dark : theme.colors.gray[3]}`,
        "&:hover": {
          backgroundColor: colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
          color: colorScheme === "dark" ? theme.white : theme.black
        }
      }}
      key={props.index}
      onClick={(event): void => event.preventDefault()}
    >
      <Link href={props.subMenuItem.link}>{props.subMenuItem.label}</Link>
    </Text>
  );
};
