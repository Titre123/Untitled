import React from "react";

export default function LearnMore() {
    return (
        <div className="ButtonBase justify-center items-center cursor-pointer gap-2 flex">
            <div className="Text text-violet-700 text-base font-600 leading-normal">Learn more</div>
            <div className="ArrowRight w-5 h-5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16663 9.99984H15.8333M15.8333 9.99984L9.99996 4.1665M15.8333 9.99984L9.99996 15.8332" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </div>
    )
}