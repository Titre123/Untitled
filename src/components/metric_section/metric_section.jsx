import React from "react";
import MetricItem from "./metric_item/metric_item";
import Image from "../../assets/Image.jpg";

export default function MetricsSection() {
  return (
    <div className="MetricsSection w-full py-16 bg-white flex-col justify-start items-center gap-12 inline-flex">
      <div className="Container self-stretch px-4 flex-col justify-start items-start gap-8 flex">
        <div className="Content self-stretch flex-col justify-start items-start gap-12 flex">
          <div className="HeadingAndSupportingText self-stretch flex-col justify-start items-start gap-4 flex ipad:gap-5">
            <div className="HeadingAndSubheading self-stretch flex-col justify-start items-start gap-3 flex">
              <div className="Subheading self-stretch text-violet-700 text-[14px] font-semibold leading-tight ipad:text-base">
                Launch faster
              </div>
              <div className="Heading self-stretch text-gray-900 text-[30px] font-semibold leading-9 ipad:text-[36px]">
                Build something great
              </div>
            </div>
            <div className="SupportingText self-stretch text-gray-500 text-[18px] font-normal leading-7">
              We’ve done all the heavy lifting so you don’t have to — get all
              the data you need to launch and grow your business faster.
            </div>
          </div>
        </div>
      </div>
      <div className="ipad:flex ipad:gap-16 items-center ipad:h-[25rem] ipad:w-full px-8">
        <div className="Container self-center px-4 flex-col gap-y-12 justify-between items-start flex ipad:h-[75%]">
          <div className="Content self-stretch flex-col justify-start items-start gap-8 flex ipad:grid ipad:grid-cols-2">
            <MetricItem
              number="4,000+"
              text="Global customers"
              supportingText="We’ve helped over 4,000 amazing global companies."
            />
            <MetricItem
              number="600%"
              text="Return on investment"
              supportingText="Our customers have reported an average of ~600% ROI."
            />
            <MetricItem
              number="10k"
              text="Global downloads"
              supportingText="Our app has been downloaded over 10k times."
            />
            <MetricItem
              number="200+"
              text="5-star reviews"
              supportingText="We’re proud of our 5-star rating with over 200 reviews."
            />
          </div>
          <img className="Image w-full h-[240px] ipad:hidden" src={Image} />
        </div>
        <div className="Container self-stretch w-[40%] h-[100%] flex-col justify-start items-start flex">
          <img
            className="Image w-full h-[100%] hidden ipad:block"
            src={Image}
          />
        </div>
      </div>
    </div>
  );
}
