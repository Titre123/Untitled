import React from "react";
import DropdownItem from "../dropdown_item";

export default function ResourcesDropdown(props) {
  return (
    <div
      className="w-full absolute z-10 hidden bg-white shadow justify-center items-start desktop:inline-flex left-0 top-[86.6px]"
      aria-hidden={props.hidden}
      id="ResourceMenu"
    >
      <div className="Container px-8 justify-start items-start gap-8 flex">
        <div className="Content self-stretch pt-8 pb-10 justify-start items-start gap-6 flex">
          <div className="Section flex-col justify-start items-start gap-3 inline-flex">
            <DropdownItem
              text="Blog"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5Z"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              latest="The latest industry news."
            />
            <DropdownItem
              text="Customer stories"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              latest="Learn how our customers."
            />
            <DropdownItem
              text="Video tutorials"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 8L16 12L10 16V8Z"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              latest="New features and techniques."
            />
            <DropdownItem
              text="Documentation"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9M13 2L20 9M13 2V9H20"
                    stroke="#7F56D9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              latest="All the boring stuff."
            />
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
