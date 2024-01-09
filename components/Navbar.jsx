"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import LoginIcon from "@mui/icons-material/Login";
import {
  ArrowDropDownOutlined,
  Close,
  LogoutOutlined,
  Menu,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const loginBtnPressed = () => {
    if (loggedIn) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.refresh();
    }
    router.push("/login");
  };

  const logoBtnPressed = () => {
    if (loggedIn) {
      router.push("/dashboard");
      return;
    }
    router.push("/");
  };
  useEffect(() => {
    // get token from local storage
    const token = localStorage.getItem("token");
    // if token is not null
    if (token) {
      // set logged in to true
      setLoggedIn(true);
    }
  }, []);
  const navbarLogoElement = () => {
    return (
      <div
        onClick={logoBtnPressed}
        id="logo"
        className="h-12  flex flex-col justify-center"
      >
        {loggedIn ? (
          <p
            className="my-auto text-lg font-semibold mr-2"
            style={{
              color: "#5a6475",
            }}
          >
            Welcome, {JSON.parse(localStorage.getItem("user"))["name"]}
          </p>
        ) : (
          <Image src={Logo} alt="Logo" className="m-auto" />
        )}
      </div>
    );
  };
  const loginBtnElement = () => {
    return loggedIn ? (
      <div id="login">
        <button
          onClick={loginBtnPressed}
          className="flex px-4 py-2 mt-1 bg-purple-100 rounded-xl"
        >
          <p
            className="my-auto text-sm mr-2"
            style={{
              color: "#5a6475",
            }}
          >
            Logout
          </p>
          <LogoutOutlined
            style={{
              color: "#5a6475",
            }}
          />
        </button>
      </div>
    ) : (
      <div id="login">
        <button
          onClick={loginBtnPressed}
          className="flex px-4 py-2 mt-1 bg-purple-100 rounded-xl"
        >
          <p
            className="my-auto text-sm mr-2"
            style={{
              color: "#5a6475",
            }}
          >
            Login
          </p>
          <LoginIcon
            style={{
              color: "#5a6475",
            }}
          />
        </button>
      </div>
    );
  };
  return (
    <div className="w-full ">
      <hr
        style={{
          color: "#E6E7E9",
        }}
      />
      <div className="hover:cursor-pointer hidden md:flex flex-row justify-evenly my-2 ">
        {navbarLogoElement()}
        <div id="items" className="flex justify-center">
          <div className="flex justify-center">
            <NavbarItem title="Card Access" />

            <ArrowDropDownOutlined className=" my-auto -ml-3" />
          </div>
          <NavbarItem title="Banking" />
          <NavbarItem title="Processing" />
          <NavbarItem title="About" />
          <NavbarItem title="Career" />
          <NavbarItem title="Contact" />
        </div>
        {loginBtnElement()}
      </div>

      <div className="md:hidden mx-8 my-4">
        <div className="hover:cursor-pointer  flex flex-row justify-between">
          {navbarLogoElement()}
          <div className="flex flex-row">
            {loginBtnElement()}
            <button
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {
                setMenuMobile(!menuMobile);
              }}
            >
              {menuMobile !== true ? (
                <Menu className="ml-4 text-3xl" />
              ) : (
                <Close className="ml-4 text-3xl" />
              )}

              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>

        <div
          className={menuMobile === true ? "flex flex-col" : "hidden"}
          id="mobile-menu"
        >
          <div className="flex justify-center">
            <NavbarItem title="Card Access" />

            <ArrowDropDownOutlined className=" my-auto -ml-3" />
          </div>
          <NavbarItem title="Banking" />
          <NavbarItem title="Processing" />
          <NavbarItem title="About" />
          <NavbarItem title="Career" />
          <NavbarItem title="Contact" />
        </div>
      </div>
      <hr
        style={{
          color: "#E6E7E9",
        }}
      />
    </div>
  );
};

export default Navbar;
