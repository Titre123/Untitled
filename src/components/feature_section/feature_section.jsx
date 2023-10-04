import React from "react";
import FeatureText from "./feature_text/feature_text";
import {Revaeal} from "../../pages/animation";

export default function FeatureSection() {
    return (
        <div className="FeaturesSection py-16 bg-white flex-col justify-center w-full items-center gap-16 inline-flex border border-t-gray-200 border-b-0 border-l-0 border-r-0 desktop:py-24">
            <div className="Container self-stretch px-4 flex-col justify-start items-start gap-8 flex">
                <div className="Content self-stretch flex-col justify-start items-center gap-12 flex">
                <div className="HeadingAndSupportingText self-center max-w-[768px] flex-col justify-start gap-4 items-center flex desktop:gap-5">
                    <div className="HeadingAndSubheading self-stretch flex-col justify-start items-start gap-3 flex">
                        <div className="Subheading self-stretch text-center text-violet-700 text-xsm font-semibold leading-tight desktop:text-base">Features</div>
                        <div className="Heading self-stretch text-center text-gray-900 text-xl font-600 leading-9 desktop:text-2xl desktop:leading-[2.75rem]">Analytics that feels like it’s from the future</div>
                    </div>
                    <div className="SupportingText self-center text-center w-[75%] text-gray-500 text-md font-400 leading-7 desktop:text-lg desktop:leading-[1.875rem]">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</div>
                </div>
                </div>
            </div>
            <div className="Container px-8 flex-col justify-start items-center gap-16 flex">
                <div className="Content ipad:grid ipad:grid-cols-3 flex flex-col max-w-[70%] justify-center gap-y-10 ipad:gap-y-16 ipad:max-w-[100%] ipad: gap-x-8">
                    <Revaeal delay={0.25} children={<FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>} text="Share team inboxes" supportingText="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
                    />} />
                    <Revaeal delay={0.5} children={<FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>} text="Deliver instant answers" supportingText="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
                    />} />
                    <Revaeal delay={0.75} children={<FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 20V10M12 20V4M6 20V14" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>} text="Manage your team with reports" supportingText="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." 
                    />} />
                    <Revaeal delay={1} children={<FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        } text="Connect with customers" supportingText="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
                    />} />
                    <Revaeal delay={1.25} children={<FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        } text="Connect the tools you already use" supportingText="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
                    />} />
                    <Revaeal delay={1.5} children={<FeatureText icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#7F56D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        } text="Our people make the difference" supportingText="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
                    />} />
                </div>
            </div>
        </div>
    )
}