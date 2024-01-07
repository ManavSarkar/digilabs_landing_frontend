import React from "react";

const Announcement = ({ message }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-center my-2">
        <div
          id="chip"
          style={{
            backgroundColor: "#f1f1f2",
            color: "#363C46",
          }}
          className="border rounded-3xl w-fit p-1 text-xs"
        >
          Announcement
        </div>
        <div
          style={{
            color: "#121417",
          }}
          id="announcement"
          className="mx-4 font-medium text-sm"
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
