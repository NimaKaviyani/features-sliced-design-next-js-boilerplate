"use client";
import { ReactNode, useState } from "react";
import { Group, Box, Collapse, ThemeIcon, Text, MantineTheme, CSSObject, UnstyledButton, rem } from "@mantine/core";
import { IconChevronLeft, IconCalendarStats } from "@tabler/icons-react";

interface LinksGroupProps {
  icon: React.FC;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps): ReactNode {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = (hasLinks ? links : []).map(link => (
    <Text<"a">
      component="a"
      sx={(theme: MantineTheme): CSSObject => ({
        fontWeight: 500,
        display: "block",
        textDecoration: "none",
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        paddingLeft: rem(31),
        marginLeft: rem(30),
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
        borderLeft: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,

        "&:hover": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
          color: theme.colorScheme === "dark" ? theme.white : theme.black
        }
      })}
      href={link.link}
      key={link.label}
      onClick={(event): void => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={(): void => setOpened(o => !o)}
        sx={(theme: MantineTheme): CSSObject => ({
          fontWeight: 500,
          display: "block",
          width: "100%",
          padding: `${theme.spacing.xs} ${theme.spacing.md}`,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          fontSize: theme.fontSizes.sm,

          "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.white : theme.black
          }
        })}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ThemeIcon variant="light" size={30}>
              <Icon />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronLeft
              className="transition-transform	"
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened ? "rotate(-90deg)" : "none"
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
const mockdata = {
  label: "Releases",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" }
  ]
};

export function NavbarLinksGroup(): ReactNode {
  return (
    <Box
      sx={(theme: MantineTheme): CSSObject => ({
        minHeight: rem(220),
        padding: theme.spacing.md,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
      })}
    >
      <LinksGroup {...mockdata} />
    </Box>
  );
}
