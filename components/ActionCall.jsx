import {
  CreditCard,
  Headphones,
  HeadphonesOutlined,
} from "@mui/icons-material";
import React from "react";

const ActionCall = () => {
  return (
    <div className="flex flex-col items-center my-24">
      <p className="font-medium md:max-w-lg text-4xl mx-4 text-center">
        Unlock Limitless Possibilities with Our New Card Solutions
      </p>
      <div className="flex md:flex-row flex-col justify-center w-full my-8">
        <button className="md:text-sm text-xl text-white bg-purple-900 p-2 px-4 rounded-md mx-1 my-2 ">
          Unlock your card
          <CreditCard className="ml-2" />
        </button>
        <button className="md:text-sm text-xl text-slate-600 bg-gray-200 p-2 px-4 rounded-md mx-1 my-2">
          Customer Support
          <HeadphonesOutlined className="ml-2 " />
        </button>
      </div>
    </div>
  );
};

export default ActionCall;
