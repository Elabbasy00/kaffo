"use client";
import * as React from "react";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";

import Dropdown from "@mui/joy/Dropdown";
import { Avatar, Button, IconButton, MenuButton, Skeleton } from "@mui/joy";
import { signIn, useSession, signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function UserAvatar() {
  const { data, status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <Skeleton animation="wave" variant="circular" width={48} height={48} />
      ) : status === "unauthenticated" ? (
        <Button variant="solid" color="neutral" onClick={() => signIn()}>
          تسجيل الدخول
        </Button>
      ) : (
        <Dropdown>
          <MenuButton
            slots={{ root: IconButton }}
            slotProps={{
              root: {
                variant: "plain",
                color: "primary",
                sx: {
                  ":hover": { backgroundColor: "transparent" },
                },
              },
            }}
          >
            <Avatar variant="soft" color="neutral" sx={{ color: "#FFFFFF" }}>
              {data?.user?.username?.slice(0, 3)}
            </Avatar>
          </MenuButton>

          <Menu sx={{ zIndex: 3000 }} variant="soft">
            <MenuItem>
              <CgProfile />
              الحساب
            </MenuItem>
            <MenuItem onClick={() => signOut({ redirect: false })}>
              <MdLogout />
              تسجيل الخروج
            </MenuItem>
          </Menu>
        </Dropdown>
      )}
    </>
  );
}
