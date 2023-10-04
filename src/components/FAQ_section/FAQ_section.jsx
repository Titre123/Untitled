import React from "react";
import FAQItem from "./FAQ_item/FAQ_item";
import Avatar1 from '../../assets/Avatar (3).jpg';
import Avatar2 from '../../assets/Avatar (2).jpg';
import Avatar3 from '../../assets/Avatar (1).jpg';

export default function FAQSection(props) {
    return (
        <div className="FaqSection py-16 w-full flex-col justify-start items-center gap-12 gap-16 inline-flex border-t-2 desktop:py-24">
            <div className="Container self-stretch px-4 flex-col justify-start items-start gap-8 flex">
                <div className="Content self-stretch flex-col justify-start items-center gap-12 flex">
                <div className="HeadingAndSupportingText self-stretch] flex-col justify-start items-center gap-4 flex">
                    <div className="Heading self-stretch text-center text-gray-900 text-xl font-600 leading-9 desktop:text-[2.25rem] desktop:leading-[2.75rem]">Frequently asked questions</div>
                    <div className="SupportingText self-stretch text-center text-gray-500 text-md font-400 leading-7 desktop:text-lg desktop:leading-[1.875rem]">Everything you need to know about the product and billing.</div>
                </div>
                </div>
            </div>
            <div className="Container self-stretch px-4 flex-col justify-start items-start flex">
                <div className="Content self-stretch flex-col justify-start items-start gap-8 flex">
                    <FAQItem question="Is there a free trial available?" className="border-0"/>
                    <FAQItem question="Can I change my plan later?" className="border-t-2"/>
                    <FAQItem question="What is your cancellation policy?" className="border-t-2"/>
                    <FAQItem question="Can other info be added to an invoice?" className="border-t-2"/>
                    <FAQItem question="How does billing work?" className="border-t-2"/>
                    <FAQItem question="How do I change my account email?" className="border-t-2"/>
                </div>
            </div>
            <div className="Container self-stretch px-4 flex-col justify-start items-start gap-8 flex">
                <div className="Content self-stretch px-5 py-8 bg-gray-50 rounded-2xl flex-col justify-start items-center gap-6 flex desktop:flex-8">
                <div className="AvatarGroup w-[120px] h-14 relative">
                    <img className="Avatar w-12 h-12 left-0 top-[8px] absolute rounded-[200px] border border border border border-white" src={Avatar1} />
                    <img className="Avatar w-12 h-12 left-[72px] top-[8px] absolute rounded-[200px] border border border border border-white" src={Avatar2} />
                    <img className="Avatar w-14 h-14 left-[32px] top-0 absolute rounded-[200px] border border border border border-white" src={Avatar3}/>
                </div>
                <div className="HeadingAndSupportingText self-stretch flex-col justify-start items-center gap-2 flex">
                    <div className="Heading self-stretch text-center text-gray-900 text-[20px] font-medium leading-loose">Still have questions?</div>
                    <div className="SupportingText self-stretch text-center text-gray-500 text-[16px] font-normal leading-normal desktop:text-md">Can’t find the answer you’re looking for? Please chat to our friendly team.</div>
                </div>
                <div className="Actions justify-start items-start gap-3 inline-flex desktop:gap-4">
                    <div className="Button rounded-lg justify-start items-start flex">
                    <div className="ButtonBase px-[18px] py-2.5 bg-violet-500 rounded-lg shadow border border border border border-violet-500 justify-center items-center flex">
                        <div className="Text text-white text-[16px] font-semibold leading-normal">Get in touch</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}