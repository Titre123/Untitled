import React from "react";

export default function LogoMark(props) {
  return (
    <div className={`flex items-center gap-1 ${props.className}`}>
      {props.icon}
      <p className="text-black font-700 text-[1rem] desktop:text-[1.5rem]">
        {props.companyName}
      </p>
    </div>
  );
}
