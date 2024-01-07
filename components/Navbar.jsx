"use client";
import React, { useState } from "react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import NavbarItem from "./NavbarItem";
import LoginIcon from "@mui/icons-material/Login";
import { ArrowDropDownOutlined, Close, Menu } from "@mui/icons-material";
const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <div className="w-full ">
      <hr
        style={{
          color: "#E6E7E9",
        }}
      />
      <div className="hidden md:flex flex-row justify-evenly my-2 ">
        <div id="logo" className="h-12  flex flex-col justify-center">
          <Image src={Logo} alt="Logo" className="m-auto" />
        </div>
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
        <div id="login">
          <button className="flex px-4 py-2 mt-1 bg-purple-100 rounded-xl">
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
      </div>
      <div className="md:hidden mx-8 my-4">
        <div className=" flex flex-row justify-between">
          <div id="logo" className="h-12  flex flex-col justify-center">
            <Image src={Logo} alt="Logo" className="m-auto" />
          </div>
          <div className="flex flex-row">
            <div id="login">
              <button className="flex px-4 py-2 mt-1 bg-purple-100 rounded-xl">
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
