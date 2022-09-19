import React from "react";
import { ScrollArea, Navbar, Box, Button } from "@mantine/core";

//User
import { IconChevronRight, IconChevronLeft, IconLogout } from "@tabler/icons";
import { UnstyledButton, Group, Avatar, Text, useMantineTheme } from "@mantine/core";

// MainLink
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconMessages,
  IconDatabase,
} from "@tabler/icons";
import { ThemeIcon } from "@mantine/core";

// Brand
import { ActionIcon, Image } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

import { useTheme } from "lib";

function Brand() {
  const { colorscheme, setColorscheme } = useTheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      })}>
      <Group position="apart">
        <Image
          height={40}
          width={80}
          radius="md"
          src={colorscheme === "dark" ? "logo-dark.png" : "logo-light.png"}
          alt="brand logo"
        />

        <ActionIcon
          variant="default"
          onClick={() => setColorscheme(colorscheme === "dark" ? "light" : "dark")}
          size={30}>
          {colorscheme === "dark" ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Box>
  );
}

function User() {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      }}>
      <UnstyledButton
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }}>
        <Group>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Amy Horsefighter
            </Text>
            <Text color="dimmed" size="xs">
              ahorsefighter@gmail.com
            </Text>
          </Box>
        </Group>
      </UnstyledButton>
      <Button
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
        }}
        color="orange">
        <IconLogout /> Logout
      </Button>
    </Box>
  );
}

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

function MainLink({ icon, color, label }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}>
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconGitPullRequest size={16} />, color: "blue", label: "Pull Requests" },
  { icon: <IconAlertCircle size={16} />, color: "teal", label: "Open Issues" },
  { icon: <IconMessages size={16} />, color: "violet", label: "Discussions" },
  { icon: <IconDatabase size={16} />, color: "grape", label: "Databases" },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

const code = `
import { Navbar, ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
      </Navbar.Section>

      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}
`;

export function DashboardA() {
  return (
    <Navbar height={800} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        <Box py="md">
          <MainLinks />
          <MainLinks />
          <MainLinks />
          <MainLinks />
        </Box>
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}

export function Dashboard() {
  return (
    <Navbar height={800} p="xs" width={{ base: 250 }}>
      <Navbar.Section mt="xs">
        <Brand />
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
