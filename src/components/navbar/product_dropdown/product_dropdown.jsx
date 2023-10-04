import React from "react";
import DropdownItem from "../dropdown_item";

export default function ProductDropdown(props) {
  return (
    <div
      className="FullWidthHeaderNavigationSubMenu w-full absolute z-10 hidden bg-white shadow justify-center items-start desktop:inline-flex left-0 top-[86.6px]"
      aria-hidden={props.hidden}
      id="ProductMenu"
    >
      <div className="Container px-8 justify-start items-start gap-8 flex">
        <div className="Content self-stretch pt-8 pb-10 justify-start items-start gap-6 flex">
          <div className="Section flex-col justify-start items-start gap-3 inline-flex">
            <DropdownItem
              text="Interactive reports"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20V10M18 20V4M6 20V16"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              latest="Learn about your users."
            />
            <DropdownItem
              text="Team dashboard"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 21H16M12 17V21M4 3H20C21.1046 3 22 3.89543 22 5V15C22 16.1046 21.1046 17 20 17H4C2.89543 17 2 16.1046 2 15V5C2 3.89543 2.89543 3 4 3Z"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              latest="Monitor your metrics."
            />
            <DropdownItem
              text="Limitless segmentation"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.2099 15.89C20.5737 17.3945 19.5787 18.7202 18.3118 19.7513C17.0449 20.7824 15.5447 21.4874 13.9424 21.8048C12.34 22.1221 10.6843 22.0421 9.12006 21.5718C7.55578 21.1014 6.13054 20.2551 4.96893 19.1067C3.80733 17.9582 2.94473 16.5428 2.45655 14.9839C1.96837 13.4251 1.86948 11.7705 2.16851 10.1646C2.46755 8.55878 3.15541 7.05063 4.17196 5.77203C5.18851 4.49343 6.5028 3.48332 7.99992 2.83M21.9999 12C21.9999 10.6868 21.7413 9.38642 21.2387 8.17317C20.7362 6.95991 19.9996 5.85752 19.071 4.92893C18.1424 4.00035 17.04 3.26375 15.8267 2.7612C14.6135 2.25866 13.3131 2 11.9999 2V12H21.9999Z"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              latest="Surface hidden trends."
            />
            <div className="NavMenuItem w-[286px] h-[72px] p-3 rounded-lg justify-start items-start gap-4 inline-flex">
              <div className="FeaturedIcon w-12 h-12 p-3 bg-purple-100 rounded-3xl justify-center items-center flex">
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 1L13.5 10.5L8.5 5.5L1 13M23 1H17M23 1V7"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="TextAndBadge self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="Text text-gray-900 text-[16px] font-semibold leading-normal">
                    Group analytics
                  </div>
                  <div className="Badge justify-start items-start flex">
                    <div className="BadgeBase px-2.5 py-0.5 bg-emerald-50 rounded-2xl justify-center items-center flex">
                      <div className="Text text-center text-emerald-700 text-[14px] font-medium leading-tight">
                        New
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SupportingText self-stretch text-gray-500 text-[14px] font-normal leading-tight">
                  Measure B2B account health.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Content grow shrink basis-0 h-[380px] pt-5 pb-8 justify-start items-start gap-6 flex">
          <div className="Section grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <div className="NavMenuItemCard self-stretch p-3 rounded-lg justify-start items-start gap-6 inline-flex">
              <img
                className="Image w-36 h-20 rounded-md"
                src="https://via.placeholder.com/144x80"
              />
              <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="Text self-stretch text-gray-900 text-[16px] font-medium leading-normal">
                  Auto-layout explained
                </div>
                <div className="SupportingText self-stretch text-gray-500 text-[14px] font-normal leading-tight">
                  Jump right in — get an overview of the basics and...
                </div>
              </div>
            </div>
            <div className="NavMenuItemCard self-stretch p-3 rounded-lg justify-start items-start gap-6 inline-flex">
              <img
                className="Image w-36 h-20 rounded-md"
                src="https://via.placeholder.com/144x80"
              />
              <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="Text self-stretch text-gray-900 text-[16px] font-medium leading-normal">
                  Top techniques to level up your product design
                </div>
                <div className="SupportingText self-stretch text-gray-500 text-[14px] font-normal leading-tight">
                  The latest best practices an...
                </div>
              </div>
            </div>
            <div className="NavMenuItemCard self-stretch p-3 rounded-lg justify-start items-start gap-6 inline-flex">
              <img
                className="Image w-36 h-20 rounded-md"
                src="https://via.placeholder.com/144x80"
              />
              <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="Text self-stretch text-gray-900 text-[16px] font-medium leading-normal">
                  Sythesize data like a pro through affinity...
                </div>
                <div className="SupportingText self-stretch text-gray-500 text-[14px] font-normal leading-tight">
                  Synthesis is the mysterious...
                </div>
              </div>
            </div>
          </div>
          <div className="Section grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
            <div className="NavMenuItemCard self-stretch p-3 rounded-lg justify-start items-start gap-6 inline-flex">
              <img
                className="Image w-36 h-20 rounded-md"
                src="https://via.placeholder.com/144x80"
              />
              <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="Text self-stretch text-gray-900 text-[16px] font-medium leading-normal">
                  Streamline your user research process
                </div>
                <div className="SupportingText self-stretch text-gray-500 text-[14px] font-normal leading-tight">
                  As a user research team of...
                </div>
              </div>
            </div>
            <div className="NavMenuItemCard self-stretch p-3 rounded-lg justify-start items-start gap-6 inline-flex">
              <img
                className="Image w-36 h-20 rounded-md"
                src="https://via.placeholder.com/144x80"
              />
              <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="Text self-stretch text-gray-900 text-[16px] font-medium leading-normal">
                  How to embrace inclusivity in UX research
                </div>
                <div className="SupportingText self-stretch text-gray-500 text-[14px] font-normal leading-tight">
                  In user experience research...
                </div>
              </div>
            </div>
            <div className="NavMenuItemCard self-stretch p-3 rounded-lg justify-start items-start gap-6 inline-flex">
              <img
                className="Image w-36 h-20 rounded-md"
                src="https://via.placeholder.com/144x80"
              />
              <div className="TextAndSupportingText grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="Text self-stretch text-gray-900 text-[16px] font-medium leading-normal">
                  The anatomy of great storytelling
                </div>
                <div className="SupportingText self-stretch text-gray-500 text-[14px] font-normal leading-tight">
                  Storytelling is everywhere...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
