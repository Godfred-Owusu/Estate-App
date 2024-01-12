import React from "react";
import { Avatar, Menu } from "@mantine/core";
import "@mantine/core/styles.css";
const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={200}>
      <Menu.Target>
        <Avatar src={user} alt="person's avator" radius="xl" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item> Favorites</Menu.Item>
        <Menu.Item> Bookings</Menu.Item>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
