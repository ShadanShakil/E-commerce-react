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
import { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {UserContext} from "../context/UserContext"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebaseconfig";

function Header() {

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    await signOut(auth);
  }



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
      {
        user.isLogin ? (
          <div>
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
              src={
                user.isLogin ? user.userInfo.photoUrl : "https://i.pravatar.cc/150?u=a042581f4e29026704d"
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user.userInfo.email}</p>
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
            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      </div>
        )
        :
        (
          <div className="">
      <button onClick={
        () => {navigate("/signin")}
      } className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  login
</span>
</button>
      </div>
        )
      }
      </Navbar>
  );
}

export default Header;
