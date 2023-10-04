import React from "react";
import BadgeGroup from "../badge_group/badge_group";
import MacbookMockUp from "../../assets/macmock.png";
import Dashboard from "../../assets/macbook.png";
import SmallMacbookMockUp from "../../assets/Macbook Mockup.jpg";

export default function HeroSection() {
  return (
    <div className="Section w-full py-16 gap-y-16 desktop:pt-24 desktop:pb-0 flex-col items-center flex">
      <div className="Container self-stretch flex-col justify-center items-center space-y-8 flex desktop:space-y-12">
        <div className="flex justify-center">
          <div className="Content self-stretch w-[85%] flex-col justify-center items-center space-y-8 flex">
            <div className="HeadingAndSupportingText flex-col justify-center items-center space-y-4 flex">
              <div className="HeadingAndBadge flex-col justify-center items-center flex">
                <BadgeGroup />
                <div className="Heading self-stretch text-center text-gray-900 text-2xl font-600 mt-4 leading-10 desktop:text-4xl desktop:mt-4 desktop:mb-2 desktop:leading-[4.5rem]">
                  Beautiful analytics to grow smarter
                </div>
              </div>
              <div className="SupportingText self-stretch text-center text-gray-500 text-md font-normal leading-7 mt-4 desktop:text-lg desktop:leading-[1.875rem]">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </div>
            </div>
          </div>
        </div>
        <div className="Actions self-stretch flex-col justify-center items-start gap-y-3 flex tablet:flex-row tablet:gap-y-0 tablet:gap-x-3">
          <div className="Button self-stretch rounded-lg justify-start items-start inline-flex cursor-pointer tablet:order-last">
            <div className="ButtonBase grow shrink basis-0 h-12 px-5 py-3 bg-violet-500 rounded-lg shadow border border border border border-violet-500 justify-center items-center gap-2 flex">
              <div className="Text text-white text-base font-600 leading-normal">
                Sign up
              </div>
            </div>
          </div>
          <div className="Button self-stretch rounded-lg justify-start cursor-pointer items-start inline-flex">
            <div className="ButtonBase grow shrink basis-0 h-12 px-5 py-3 bg-white rounded-lg shadow border border border border border-gray-300 justify-center items-center space-x-2 flex">
              <div className="PlayCircle relative">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 8L16.5 12L10.5 16V8Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="Text text-slate-700 text-base font-600 leading-normal">
                Demo
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Blank flex flex-col items-center w-full relative">
        <div className="top-0 left-0 w-full hidden tablet:block desktop:h-[750px] tablet:h-[450px] ipad:h-[600px]">
          <div className="w-full h-full relative">
            <img
              src={MacbookMockUp}
              className="w-full h-full absolute left-[50%] translate-x-[-50%] -z-1"
            />
            <img
              src={Dashboard}
              className="w-[82.5%] h-[90%] absolute left-[52%] translate-x-[-52%] top-[2%]"
            />
          </div>
        </div>
        <div className="tablet:hidden">
          <img src={SmallMacbookMockUp} />
        </div>
        <div className="BlankText hidden desktop:block absolute h-[15%] w-full top-[85%] bg-white">
          <div className="Text w-full h-full text-center text-gray-500 text-base font-500 leading-normal mb-8 justify-end flex-col flex">
            Join 4,000+ companies already growing
          </div>
        </div>
      </div>
    </div>
  );
}
