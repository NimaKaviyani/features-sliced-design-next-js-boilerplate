import { ReactNode, useState } from "react";
import { Group, Box, Collapse, ThemeIcon, Text, MantineTheme, CSSObject, UnstyledButton, rem } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

interface LinksGroupProps {
  icon: React.FC;
  label: string;
  links?: string;
  initiallyOpened?: boolean;
  subMenus?: { label: string; link: string }[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, subMenus }: LinksGroupProps): ReactNode {
  const hasLinks = Array.isArray(subMenus);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = (hasLinks ? subMenus : []).map(subMenu => (
    <Text
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
      key={subMenu.label}
      onClick={(event): void => event.preventDefault()}
    >
      <Link href={subMenu.link}>{subMenu.label}</Link>
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
            <ThemeIcon variant="none" size={30}>
              <Icon />
            </ThemeIcon>
            <Box ml="md">{links ? <Link href={links}>{label}</Link> : label}</Box>
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
