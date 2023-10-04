import React from "react";


export default function FeatureText(props) {
    return (
        <div className="FeatureText grow shrink basis-0 flex-col justify-start items-center gap-5 inline-flex">
            <div className="FeaturedIcon p-2 bg-purple-100 rounded-[50%] border-8 border-purple-50 justify-center items-center inline-flex">
            <div className="Mail w-6 h-6 relative flex-col justify-start items-start flex">
                {props.icon}
            </div>
            </div>
            <div className="TextAndSupportingText self-stretch flex-col justify-start items-center gap-2 flex">
            <div className="Text self-stretch text-center text-gray-900 text-md font-500 leading-loose">{props.text}</div>
            <div className="SupportingText self-stretch text-center text-gray-500 text-base font-normal leading-normal">{props.supportingText}</div>
            </div>
        </div>
    )
}