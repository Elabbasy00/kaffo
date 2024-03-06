"use client";
import Box from "@mui/joy/Box";
import React from "react";

import {
  Button,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  styled,
} from "@mui/joy";
import { MdMenu } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import ActiveLink from "../active-link/ActiveLink";

const Header = styled(Sheet)(({ theme }) => ({
  gap: 1,
  border: "none",
  display: "flex",
  flexDirection: "row",
  borderColor: theme.palette.divider,
  borderWidth: "0px 0px thin",
  borderStyle: "solid",
  backgroundColor: theme.palette.primary.solidBg,
  color: "#fffff",
  padding: 10,
  justifyContent: "space-between",
  alignItems: "center",
  gridColumn: "1 / -1",
  position: "relative",
  top: 0,
  left: 0,
  overflow: "hidden",
  zIndex: 1100,
  width: "100%",
}));

const Logo = styled(Image)(({ theme }) => ({
  width: 100,
  height: 60,
  [theme.breakpoints.down("md")]: {
    width: 60,
    height: 40,
  },
}));

function Navbar() {
  return (
    <Header as="header" className="Header" sx={{ px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: { md: 1, xs: 1 },
        }}
      >
        <Link href="/">
          <Logo src="/logo/Logo.svg" width={100} height={60} alt="Kaffo Logo" />
        </Link>
      </Box>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          flexDirection: "row",
          gap: 6,
          alignItems: "center",
          justifyContent: "center",
          // flexGrow: 1,
        }}
      >
        <ActiveLink href="/" name="الرئيسية" />
        <ActiveLink href="/about-us" name="من نحن" />
        <ActiveLink href="/services" name="خدماتنا" />
        <ActiveLink href="/public" name="اتصل بنا" />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            flexDirection: "row",
            gap: 3,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Dropdown>
            <MenuButton size="sm" color="neutral" variant="solid">
              <MdMenu />
            </MenuButton>
            <Menu sx={{ zIndex: "200000" }} color="neutral" variant="soft">
              <MenuItem component={Link} href="/">
                الـرئـيـسـيـة
              </MenuItem>
              <MenuItem component={Link} href="/about-us">
                مـن نـحـن
              </MenuItem>
              <MenuItem component={Link} href="/services">
                خـدمـاتـنـا
              </MenuItem>
              <MenuItem component={Link} href="/contact-us">
                اتـصـل بـنـا
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
      </Box>
    </Header>
  );
}

export default Navbar;
