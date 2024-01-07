import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";

const Feature = ({ children }) => {
  return (
    <div className="mx-16 my-36 flex flex-col items-center">
      <p className="text-4xl lg:w-1/3 lg:mx-0 mx-12 text-slate-950 font-medium my-8 text-center">
        Elevating Card Programs with Cutting-Edge Technology
      </p>
      <p className="text-slate-500 lg:w-1/3 lg:mx-0 mx-12 text-center">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>

      <p className="text-base font-medium my-10 text-purple-900">
        Compare all Pro features <ArrowRightAlt />
      </p>
      <div>{children}</div>
    </div>
  );
};

export default Feature;
