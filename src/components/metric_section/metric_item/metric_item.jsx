import React from "react";

export default function MetricItem(props) {
  return (
    <div className="MetricItem self-stretch flex-col justify-start items-center gap-5 flex">
      <div className="NumberAndText self-stretch flex-col justify-start items-center gap-3 flex">
        <div className="Number self-stretch text-center text-violet-500 text-3xl font-semibold leading-10">
          {props.number}
        </div>
        <div className="TextAndSupportingText self-stretch flex-col justify-start items-center gap-2 flex">
          <div className="Text self-stretch text-center text-gray-900 text-md font-medium leading-7">
            {props.text}
          </div>
          <div className="SupportingText self-stretch text-center text-gray-500 text-base font-normal leading-normal">
            {props.supportingText}
          </div>
        </div>
      </div>
    </div>
  );
}
