import React from "react";
import Feature from "../Feature";
import ImageSpending from "@/assets/ImageSpending.png";
import ImageSpendingNumbers from "@/assets/ImageSpendingNumbers.png";
import Image from "next/image";
const Feature2 = () => {
  return (
    <Feature>
      <div className="flex flex-wrap items-center justify-center">
        <Image src={ImageSpending} alt="ImageSpending" className="m-2" />
        <Image src={ImageSpendingNumbers} alt="ImageSpending" className="m-2" />
      </div>
    </Feature>
  );
};

export default Feature2;
