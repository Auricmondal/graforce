"use client";

import React from "react";
import SectionWrapper from "@/wrappers/SectionWrapper";
import LegalSection from "@/components/utils/legalUtils/LegalSection";
import SmartLink from "@/components/utils/legalUtils/SmartLink";
import CardWrapper from "@/wrappers/CardWrapper";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";

const PrivacyPolicy = () => {
  return (
    <SectionWrapper
      className="h-full flex flex-col gap-2"
      sectionClassName="bg-cst-neutral-1"
    >
      {/* Header */}
      <div className="bg-cst-neutral-5 text-white px-2 md:px-16 pb-16 md:pb-24 rounded-lg h-[50vh] pt-10 flex flex-col justify-end">
        <div className="text-center">
          <h1 className="text-[32px] md:text-5xl lg:text-6xl xl:text-8xl font-bold mt-8">
            <AnimatedHeader>Privacy Policy</AnimatedHeader>
          </h1>
        </div>
      </div>

      {/* Content */}
      <CardWrapper
        className="py-12 px-2 md:px-8 lg:px-6 flex flex-col gap-8"
        variant="custom"
      >
        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Diam justo risus phasellus
            lectus. Nisi sed rutrum lectus venenatis mollis velit. Diam sed
            felis vivamus ultricies. Aliquam cras non ac quis dui morbi. In sit
            id placerat nibh senectus. Dictum ac risus amet facilisi magna
            mattis sit risus. Augue magna tellus nisi enim.{" "}
            <SmartLink type="mail" value="demo@abc.com" />
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Rutros rhoncus tellcilkubet
            tristique mollit cursus ac ut einn. Et libis hendrcit placemt non
            slliquam tellgat. Cchellsilir semior pretiousea eleifend mare
            placerat. rutcillubus euiler diam ut rutcillutest rhanulis vitut.
            Rutros tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil. Ut
            veniam viribus aliquam leo ad rutcilluam tellgat venhist
            rutcilluvelii tellgat ivinhet vitluam tellgat ut molest. Diam
            tellquam rutcil ulicis. Eleifend lacus magna id cursus id commodo
            tellat portaiclar tellat augue elit vivadum tellgiat. ut tellgat
            rutcilluwest rutmos viganiu mas placeat tellgat inru. Call:{" "}
            <SmartLink type="phone" value="+1234567890" />
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Rutros rhoncus tellcilkubet
            tristique mollit cursus ac ut einn. Et libis hendrcit placemt non
            slliquam tellgat. Cchellsilir semior pretiousea eleifend mare
            placerat. rutcillubus euiler diam ut rutcillutest rhanulis vitut.
            Rutros tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil. Ut
            veniam viribus aliquam leo ad rutcilluam tellgat venhist
            rutcilluvelii tellgat ivinhet vitluam tellgat ut molest. Diam
            tellquam rutcil ulicis. Eleifend lacus magna id cursus id commodo
            tellat portaiclar tellat augue elit vivadum tellgiat. ut tellgat
            rutcilluwest rutmos viganiu mas placeat tellgat inru. Visit:{" "}
            <SmartLink type="link" value="https://www.google.com" />
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Rutros rhoncus tellcilkubet
            tristique mollit cursus ac ut einn. Et libis hendrcit placemt non
            slliquam tellgat. Cchellsilir semior pretiousea eleifend mare
            placerat. rutcillubus euiler diam ut rutcillutest rhanulis vitut.
            Rutros tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil. Ut
            veniam viribus aliquam leo ad rutcilluam tellgat venhist
            rutcilluvelii tellgat ivinhet vitluam tellgat ut molest. Diam
            tellquam rutcil ulicis. Eleifend lacus magna id cursus id commodo
            tellat portaiclar tellat augue elit vivadum tellgiat. ut tellgat
            rutcilluwest rutmos viganiu mas placeat tellgat inru. Dia tellquam
            ninoim tellluam cursus.
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            rutium conse tellcilkubet tristique mollit cursus ac ut einn Rutros
            tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil. Ut veniam
            viribus aliquam leo ad rutcilluam tellgat venhist rutcilluvelii
            tellgat ivinhet vitluam tellgat ut molest. Diam tellquam rutcil
            ulicis. Eleifend lacus magna id cursus id commodo tellat portaiclar
            tellat augue elit vivadum tellgiat. ut tellgat rutcilluwest rutmos
            viganiu mas placeat tellgat inru. Dia tellquam ninoim tellluam
            cursus aet que tellcilluvel tellat massa ad vgetu ullamco tellgat in
            tellcit consectetur dans tenellokut tellgat a tellwedit bibendum
            enim tellicnu lorem millinia elit tellcilmmill tellgat irincelit.
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Rutros rhoncus tellcilkubet
            tristique mollit cursus ac ut einn. Et libis hendrcit placemt non
            slliquam tellgat. Cchellsilir semior pretiousea eleifend mare
            placerat. rutcillubus euiler diam ut rutcillutest rhanulis vitut.
            Rutros tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil. Ut
            veniam viribus aliquam leo ad rutcilluam tellgat venhist
            rutcilluvelii tellgat ivinhet vitluam tellgat ut molest. Diam
            tellquam rutcil ulicis. Eleifend lacus magna id cursus id commodo
            tellat portaiclar tellat augue elit vivadum tellgiat. ut tellgat
            rutcilluwest rutmos viganiu mas placeat tellgat inru. Dia tellquam
            ninoim tellluam cursus.
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p>
            Lorem ipsum dolor sit amet consectetur. Cham quis nam pharetra
            tellus. Nisi sed rutrum non nulla venenatis mollis vitae. Diam amet
            leo vitae eleifend netus tempor quis neque ut quis his lacinia elit
            sed et pharetra non tempor lorem ipsum.
          </p>
        </LegalSection>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default PrivacyPolicy;
