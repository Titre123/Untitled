import React from "react";
import {Revaeal} from "../../pages/animation";

export default function CtaSection() {
  return (
    <div className="bg-gray-50">
      <Revaeal delay={0.5} children={<div className="CtaSection py-16 w-full flex-col justify-start items-start gap-12 inline-flex">
        <div className="Container self-stretch px-4 flex-col justify-start items-start gap-8 flex">
          <div className="Content self-stretch flex-col justify-start items-center gap-8 flex ipad:gap-10">
            <div className="HeadingAndSupportingText self-stretch flex-col justify-start items-center gap-4 flex ipad:gap-5">
              <div className="Heading self-stretch text-center text-gray-900 text-xl font-semibold leading-9 ipad:text-2xl ipad:leading-10">
                Start your free trial
              </div>
              <div className="SupportingText self-stretch text-center text-gray-500 text-md font-normal leading-7 ipad:leading-loose ipad:text-lg">
                Join over 4,000+ startups already growing with Untitled.
              </div>
            </div>
            <div className="Actions self-stretch flex-col justify-start items-start gap-3 flex ipad:flex-row ipad:justify-center">
              <div className="Button self-stretch rounded-lg justify-start items-start order-last cursor-pointer inline-flex">
                <button className="ButtonBase grow shrink basis-0 px-5 py-3 bg-violet-500 rounded-lg shadow border border border border border-violet-500 justify-center items-center gap-2 flex">
                  <span className="Text text-white text-base font-600 leading-normal">
                    Get started
                  </span>
                </button>
              </div>
              <div className="Button self-stretch rounded-lg justify-start items-start cursor-pointer inline-flex">
                <button className="ButtonBase grow shrink basis-0 px-5 py-3 bg-white rounded-lg shadow border border border border border-gray-300 justify-center items-center gap-2 flex">
                  <span className="Text text-slate-700 text-base font-600 leading-normal">
                    Learn more
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>} />
    </div>
  );
}
