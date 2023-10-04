import React from "react";
import LogoMark from "../social_proof/logo_mark/logo_mark";
import Avatar from "../../assets/Avatar (4).jpg";
import { SlideAnimation } from "../../pages/animation";

export default function QuoteSection() {
  return (
    <div className="QuoteAndAttribution flex-col justify-start items-center gap-8 inline-flex py-16 desktop:py-4">
      <SlideAnimation children={<LogoMark
        icon={
          <svg
            viewBox="0 0 30 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-[28px] desktop:w-[30px]"
          >
            <rect
              x="0.75"
              y="19.2"
              width="9.59998"
              height="9.59999"
              fill="#039855"
            />
            <rect
              x="29.55"
              y="28.8"
              width="9.6"
              height="9.59999"
              transform="rotate(180 29.55 28.8)"
              fill="#027A48"
            />
            <path
              d="M10.35 19.2L19.95 9.59998V19.2L10.35 28.7999V19.2Z"
              fill="#A6F4C5"
            />
            <path
              d="M19.95 28.7999L10.35 38.3999L10.35 28.7999L19.95 19.1999L19.95 28.7999Z"
              fill="#6CE9A6"
            />
            <path
              d="M0.75 19.2L19.95 0V9.59999L10.35 19.2H0.75Z"
              fill="#32D583"
            />
            <path
              d="M29.55 28.8L10.35 48L10.35 38.4L19.95 28.8L29.55 28.8Z"
              fill="#12B76A"
            />
          </svg>
        }
        companyName="Sisyphus"
      />} delay={0.5}/>
      <SlideAnimation children={<p className="Quote self-stretch text-center text-gray-900 text-xl font-medium leading-9 desktop:text-3xl desktop:leading-[3.75rem]">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </p>} delay={0.5} />
      <SlideAnimation children={<div className="AvatarAndText self-stretch h-[136px] flex-col justify-start items-center gap-4 flex">
        <img className="Avatar w-16 h-16 rounded-[200px]" src={Avatar} />
        <div className="TextAndSupportingText self-stretch h-14 flex-col justify-start items-start gap-1 flex">
          <div className="Text self-stretch text-center text-gray-900 text-[18px] font-medium leading-7">
            Candice Wu
          </div>
          <div className="SupportingText self-stretch text-center text-gray-500 text-[16px] font-normal leading-normal">
            Product Manager, Sisyphus
          </div>
        </div>
      </div>} delay={0.5}/>
    </div>
  );
}
