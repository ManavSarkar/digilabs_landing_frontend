import React from "react";

const Achievements = () => {
  const achievementData = [
    {
      title: "2 Million",
      tag: "Customers",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      title: "1K",
      tag: "Downloads",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      title: "$73 Million",
      tag: "Transaction",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      title: "2.0",
      tag: "Latest Version",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];
  const AchievementItem = ({ itemData }) => {
    return (
      <div className="flex flex-col items-center my-8 mx-8">
        <p className="font-medium text-purple-950 text-4xl mt-2">
          {itemData.title}
        </p>
        <p className="font-medium text-lg mt-4">{itemData.tag}</p>
        <p className="text-slate-500 text-md max-w-64 text-center  mt-2">
          {itemData.description}
        </p>
      </div>
    );
  };
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center justify-center">
        {achievementData.map((item, index) => {
          return <AchievementItem itemData={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Achievements;
