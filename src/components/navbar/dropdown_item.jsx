import React from "react";

export default function DropdownItem(props) {
  return (
    <div className="NavMenuItem w-[286px] h-[72px] p-3 rounded-lg justify-start items-start gap-4 inline-flex">
      <div className="FeaturedIcon w-12 h-12 p-3 bg-purple-100 rounded-3xl justify-center items-center flex">
        {props.icon}
      </div>
      <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
        <div className="Text self-stretch text-gray-900 text-[16px] font-semibold leading-normal">
          {props.text}
        </div>
        <div className="TheLatestIndustryNewsUpdatesAndInfo self-stretch text-gray-500 text-[14px] font-normal leading-tight">
          {props.latest}
        </div>
      </div>
    </div>
  );
}
