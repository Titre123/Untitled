import React from "react";

export default function FooterLink(props) {
    return (
        <a className="FooterLink justify-start items-center gap-2 inline-flex" href="">
            <div className="Button justify-start items-start flex">
              <div className="ButtonBase justify-center items-center gap-2 flex">
                <div className="Text text-gray-500 text-[16px] font-semibold leading-normal">{props.linkName}</div>
              </div>
            </div>
        </a>
    )
}