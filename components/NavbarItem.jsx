import React from "react";

const NavbarItem = ({ title }) => {
  return (
    <button
      className="mx-4 font-medium md:my-0 my-4 md:text-base text-lg"
      style={{
        color: "#363C46",
      }}
    >
      {title}
    </button>
  );
};

export default NavbarItem;
