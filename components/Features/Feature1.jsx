import React from "react";
import Feature from "../Feature";
import { Key, LanguageOutlined, Lock } from "@mui/icons-material";

const Feature1 = () => {
  return (
    <Feature>
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col items-center my-12">
          <LanguageOutlined className="text-5xl text-purple-900 bg-purple-200 p-3  rounded-full" />
          <p className="font-medium text-base mt-4">Globally Accepted</p>
          <p className="text-center font-medium text-slate-600 text-base mt-2 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="flex flex-col items-center my-12">
          <Key className="text-5xl text-purple-900 bg-purple-200 p-3  rounded-full" />
          <p className="font-medium text-base mt-4">Biometric Integrated</p>
          <p className="text-center font-medium text-slate-600 text-base mt-2 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <div className="flex flex-col items-center my-12">
          <Lock className="text-5xl text-purple-900 bg-purple-200 p-3  rounded-full" />
          <p className="font-medium text-base mt-4">Fully Secured</p>
          <p className="text-center font-medium text-slate-600 text-base mt-2 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </Feature>
  );
};

export default Feature1;
