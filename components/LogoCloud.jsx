import React from "react";
import Image from "next/image";
import AngelListLogo from "@/assets/AngelListLogo.png";
import BehanceLogo from "@/assets/BehanceLogo.png";
import DribbbleLogo from "@/assets/DribbbleLogo.png";
import KinstaLogo from "@/assets/KinstaLogo.png";
import LottieLogo from "@/assets/LottieLogo.png";
import MiroLogo from "@/assets/MiroLogo.png";
import NuxtLogo from "@/assets/NuxtLogo.png";
import WiseLogo from "@/assets/WiseLogo.png";
const LogoCloud = () => {
  return (
    <div className="flex flex-wrap m-4 my-12 justify-center">
      <Image src={NuxtLogo} alt="NuxtLogo" className="m-4" />
      <Image src={MiroLogo} alt="MiroLogo" className="m-4" />
      <Image src={LottieLogo} alt="LottieLogo" className="m-4" />
      <Image src={WiseLogo} alt="WiseLogo" className="m-4" />
      <Image src={DribbbleLogo} alt="DribbbleLogo" className="m-4" />
      <Image src={KinstaLogo} alt="KinstaLogo" className="m-4" />
      <Image src={AngelListLogo} alt="AngelListLogo" className="m-4" />
      <Image src={BehanceLogo} alt="BehanceLogo" className="m-4" />
    </div>
  );
};

export default LogoCloud;
