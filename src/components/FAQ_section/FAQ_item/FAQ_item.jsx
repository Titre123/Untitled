import React from "react";

export default function FAQItem(props) {
    return (
        <div className={`FaqItem flex justify-between w-full items-center gap-6 pt-6 ${props.className} flex`}>
            <div className="Content self-stretch justify-start items-start gap-2 flex">
                <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
                <div className="Text self-stretch text-gray-900 text-[18px] font-medium leading-7">{props.question}</div>
                <div className="SupportingText self-stretch text-gray-500 text-[16px] font-normal leading-normal">{props.answer}</div>
                </div>
            </div>
            <div className="IconWrap pt-0.5 flex-col justify-start items-start cursor-pointer inline-flex" open={false}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}