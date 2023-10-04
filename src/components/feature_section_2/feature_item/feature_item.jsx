import React from "react";
import LearnMore from "../learn_more/learn_more";

export default function FeatureText(props) {
    return (
        <div className="flex flex-col gap-4 desktop:gap-5">
            <div className="FeatureText self-stretch flex-col justify-start items-center gap-4 flex desktop:gap-5 desktop:basis-[180px]">
                <div className="FeaturedIcon p-2 bg-purple-100 rounded-[50%] border-8 border-purple-50 justify-center items-center inline-flex">
                    <div className="Mail w-6 h-6 relative flex-col justify-start items-start flex">
                        {props.icon}
                    </div>
                </div>
                <div className="TextAndSupportingText self-stretch flex-col justify-start items-center gap-1 flex">
                    <div className="Text self-stretch text-center text-gray-900 text-md font-500 leading-7">{props.text}</div>
                    <div className="SupportingText self-stretch text-center text-gray-500 text-base font-400 leading-normal">{props.supportingText}</div>
                </div>
            </div>
            <div className="Button justify-start self-center inline-flex">
                    <LearnMore />
                </div>
        </div>
    )
}