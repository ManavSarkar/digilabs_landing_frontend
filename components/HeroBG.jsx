import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";

const HeroBG = () => {
  return (
    <div>
      <div id="mesh" className="mt-24 lg:w-1/2 w-full mx-auto">
        <div className="flex flex-col items-center mx-4">
          <p className="text-md text-purple-900 m-4 md:mt-8 font-medium">
            Seamless experience
          </p>
          <p className="m-4 font-medium text-slate-900 text-6xl md:text-7xl text-center">
            Unleashing the Next Generation of Card Solutions
          </p>
          <p className="m-4 mx-28 text-slate-500 text-xl text-center">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <button className="bg-purple-900 text-white flex text-2xl p-4 rounded-lg px-6 w-full md:w-fit items-center justify-center">
            <p>Unlock your Card</p>
            <ArrowRightAlt className="ml-2 text-white mt-1" />
          </button>
        </div>
      </div>
      <p className="text-center m-4 text-slate-500 font-medium">
        *No credit card required
      </p>
    </div>
  );
};

export default HeroBG;
