import React from "react";

export default function BadgeGroup() {
    return (
        <div className="BadgeGroup w-content h-[30px] pl-1 pr-2 py-1 bg-purple-50 rounded-2xl justify-start items-center gap-2 inline-flex">
            <div className="Badge justify-start items-start flex">
                <div className="BadgeBase px-2 py-0.5 bg-white rounded-2xl justify-center items-center flex">
                <div className="Text text-center text-violet-700 text-sm font-500 leading-none desktop:text-xsm">New feature</div>
                </div>
            </div>
            <a className="Content justify-start items-center gap-1 flex" href="">
                <div className="Message text-violet-700 text-sm font-500 leading-none desktop:text-xsm">Check out the team dashboard</div>
                <div className="ArrowRight w-4 h-4 relative">
                <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M3.33333 8.00004H12.6667M12.6667 8.00004L8 3.33337M12.6667 8.00004L8 12.6667"
                        stroke="#9E77ED"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.3333"
                    />
                    </svg>
                </div>
            </a>
        </div>
    )
}