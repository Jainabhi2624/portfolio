import React from "react";
import * as FontAwsomeIcons from "react-icons/fa";

const Button = ({ content, icon, bgColor, type }) => {
  const CustomIcon = FontAwsomeIcons[icon];
  return (
    <button
      className=" text-textGray font-roboto mr-2 flex flex-row items-center justify-between rounded-md px-9 py-4 text-xl font-bold md:px-5 md:py-2 md:text-2xl lg:px-9 lg:py-4"
      style={{
        backgroundColor: bgColor,
      }}
      type={type ? type : ""}
    >
      {content}{" "}
      {icon ? (
        <span className="ml-2">
          <CustomIcon />
        </span>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
