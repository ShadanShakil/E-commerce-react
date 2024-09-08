import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/project-1---learning.appspot.com/o/logo.png?alt=media&token=428ebe38-9113-4ebe-b50e-f33b3953b682"
          alt=""
          className="h-12"
        />
        <p className="font-bold text-inherit">Draggers</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <NavLink color="foreground" to={"/"}>
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink to={"/categories"} aria-current="page" color="secondary">
            Categories
          </NavLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NavLink color="foreground" to={"/products"}>
            All Products
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="team_settings">
              <NavLink to={"/"} className="text-black font-semibold">
                Home
              </NavLink>
            </DropdownItem>
            <DropdownItem key="analytics">
              <NavLink to={"/categories"} className="text-black font-semibold">
                Categories{" "}
              </NavLink>
            </DropdownItem>
            <DropdownItem key="system">
              <NavLink to={"/products"} className="text-black font-semibold">
                All Products{" "}
              </NavLink>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
