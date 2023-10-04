import React from "react";
import { useDispatch } from "react-redux";
import { AriaUnexpanded } from "../redux/actions/landing_actions";
import Navbar from "../components/navbar/navbar";
import HeroSection from "../components/hero_section/hero_section";
import SocialProof from "../components/social_proof/social_proof";
import FeatureSection from "../components/feature_section/feature_section";
import QuoteSection from "../components/quote_section/quote_section";
import SecondFeatureSection from "../components/feature_section_2/feature_section";
import FAQSection from "../components/FAQ_section/FAQ_section";
import MetricsSection from "../components/metric_section/metric_section";
import CtaSection from "../components/CTA_section/CTA_section";
import {Revaeal, TopAnimation} from "./animation";
import FooterSection from "../components/footer_section/footer_section";

export default function Homepage(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="container mx-auto max-w-desktop px-4">
        <Navbar />
      </div>
      <div
        className="container mx-auto max-w-desktop px-4"
        onClick={() => dispatch(AriaUnexpanded())}
      >
        <main>
          <TopAnimation children={<HeroSection />} delay={0.5}/>
          <Revaeal children={<SocialProof />} delay={0.5}/>
          <Revaeal children={<FeatureSection />} delay={0.5} />
        </main>
      </div>
      <div className="bg-gray-50" onClick={() => dispatch(AriaUnexpanded())}>
        <div className="container mx-auto max-w-desktop px-4">
        <Revaeal children={<QuoteSection />} delay={0.35}/>
        </div>
      </div>
      <div
        className="container mx-auto max-w-desktop px-4"
        onClick={() => dispatch(AriaUnexpanded())}
      >
        <SecondFeatureSection />
        <FAQSection />
        <Revaeal children={<MetricsSection />} delay={0.5}/>
      </div>
      <div className="bg-gray-50">
        <div
          className="container mx-auto max-w-desktop px-4"
          onClick={() => dispatch(AriaUnexpanded())}
        >
          <CtaSection />
        </div>
      </div>
      <div
        className="container mx-auto max-w-desktop px-4"
        onClick={() => dispatch(AriaUnexpanded())}
      >
        <FooterSection />
      </div>
    </>
  );
}
