import React from "react";
import FeatureText from "./feature_item/feature_item";
import iphoneMockup from "../../assets/Iphone mockup.png";
import iphoneMockupMobile from '../../assets/Iphone mockup mobile.png';
import dashboard from "../../assets/dashboard.jpeg";

export default function SecondFeatureSection() {
    return (
        <div className="FeaturesSection w-full py-16 bg-white flex-col justify-start items-center gap-12 inline-flex desktop:py-24">
            <div className="Container self-stretch px-4 flex-col justify-start items-start gap-8 flex">
                <div className="Content self-stretch flex-col justify-start items-center gap-12 flex">
                <div className="HeadingAndSupportingText self-center max-w-[768px] flex-col justify-start items-center gap-4 flex">
                    <div className="HeadingAndBadge self-stretch flex-col justify-start items-center gap-4 flex">
                    <div className="Badge justify-start items-start inline-flex">
                        <div className="BadgeBase px-2.5 py-0.5 bg-purple-50 rounded-2xl justify-center items-center flex">
                        <div className="Text text-center text-violet-700 text-[14px] font-medium leading-tight">Features</div>
                        </div>
                    </div>
                    <div className="Heading self-stretch text-center text-gray-900 text-[30px] font-600 leading-9 desktop:text-2xl desktop:leading-[44px]">Cutting-edge features for advanced analytics</div>
                    </div>
                    <div className="SupportingText self-stretch text-center text-gray-500 text-md font-400 leading-7 desktop:text-lg desktop:leading-[30px]">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</div>
                </div>
                </div>
            </div>
            <div className="relative w-full">
                <div className="mx-auto w-[80%] h-full">
                    <img src={dashboard} className="hidden mx-auto desktop:block h-full"/>
                </div>
                <img src={iphoneMockup} className="hidden desktop:block absolute top-[20%] left-[-0%] h-[40.08375rem] w-[20rem]"/>
                {/* <svg width="375" height="266" viewBox="0 0 375 266" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 desktop:hidden">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M120.711 365.505C36.2027 339.441 -21.9557 261.128 -22.9904 172.115C-23.9143 92.6275 41.8897 34.2328 116.561 8.49241C182.318 -14.1753 250.416 10.2249 297.639 61.5884C359.826 129.228 428.061 217.428 381.765 296.951C331.476 383.335 215.774 394.825 120.711 365.505Z" fill="#F9FAFB"/>
                </svg> */}
                <img src={iphoneMockupMobile} className="desktop:hidden mx-auto" />
            </div>
            <div className="Container px-4 flex-col justify-start items-center gap-16 flex desktop:mt-16">
                <div className="Content ipad:grid ipad:grid-cols-3 flex flex-col max-w-[70%] justify-center gap-y-10 ipad:gap-y-16 ipad:max-w-[100%] ipad: gap-x-8">
                    <FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>} text="Share team inboxes" supportingText="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop." />
                    <FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>} text="Deliver instant answers" supportingText="An all-in-one customer service platform that helps you balance everything your customers need to be happy." />
                    <FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 20V10M12 20V4M6 20V14" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>} text="Manage your team with reports" supportingText="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." />
            </div>
        </div>
    </div>
    )
}