"use client";

import React from "react";
import SectionWrapper from "@/wrappers/SectionWrapper";
import LegalSection from "@/components/utils/legalUtils/LegalSection";
import SmartLink from "@/components/utils/legalUtils/SmartLink";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[2000px] mx-auto bg-white">
      {/* Header */}
      <div className="bg-[linear-gradient(206.41deg,#0C1731_17.27%,#92ABE5_47.98%,#6E8FDD_65.61%,#102044_91.31%)] text-white py-16">
        <SectionWrapper>
          <div className="max-w-[2000px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mt-8">
              Privacy Policy
            </h1>
          </div>
        </SectionWrapper>
      </div>

      {/* Content */}
      <SectionWrapper>
        <LegalSection title="Some title" >
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. 
            Diam justo risus phasellus lectus. 
            Nisi sed rutrum lectus venenatis mollis velit. 
            Diam sed felis vivamus ultricies. 
            Aliquam cras non ac quis dui morbi. 
            In sit id placerat nibh senectus. 
            Dictum ac risus amet facilisi magna mattis sit risus. 
            Augue magna tellus nisi enim. <SmartLink type="mail" value="demo@abc.com" />
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Rutros rhoncus tellcilkubet
            tristique mollit cursus ac ut einn. Et libis hendrcit placemt non
            slliquam tellgat. Cchellsilir semior pretiousea eleifend mare
            placerat. rutcillubus euiler diam ut rutcillutest rhanulis vitut.
            Rutros tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil.
            Ut veniam viribus aliquam leo ad rutcilluam tellgat venhist
            rutcilluvelii tellgat ivinhet vitluam tellgat ut molest. Diam
            tellquam rutcil ulicis. Eleifend lacus magna id cursus id commodo
            tellat portaiclar tellat augue elit vivadum tellgiat. ut tellgat
            rutcilluwest rutmos viganiu mas placeat tellgat inru. Call : <SmartLink type="phone" value="+1234567890" />
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Rutros rhoncus tellcilkubet
            tristique mollit cursus ac ut einn. Et libis hendrcit placemt non
            slliquam tellgat. Cchellsilir semior pretiousea eleifend mare
            placerat. rutcillubus euiler diam ut rutcillutest rhanulis vitut.
            Rutros tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil.
            Ut veniam viribus aliquam leo ad rutcilluam tellgat venhist
            rutcilluvelii tellgat ivinhet vitluam tellgat ut molest. Diam
            tellquam rutcil ulicis. Eleifend lacus magna id cursus id commodo
            tellat portaiclar tellat augue elit vivadum tellgiat. ut tellgat
            rutcilluwest rutmos viganiu mas placeat tellgat inru. Visit : <SmartLink type="link" value="https://www.google.com" />
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Rutros rhoncus tellcilkubet
            tristique mollit cursus ac ut einn. Et libis hendrcit placemt non
            slliquam tellgat. Cchellsilir semior pretiousea eleifend mare
            placerat. rutcillubus euiler diam ut rutcillutest rhanulis vitut.
            Rutros tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil.
            Ut veniam viribus aliquam leo ad rutcilluam tellgat venhist
            rutcilluvelii tellgat ivinhet vitluam tellgat ut molest. Diam
            tellquam rutcil ulicis. Eleifend lacus magna id cursus id commodo
            tellat portaiclar tellat augue elit vivadum tellgiat. ut tellgat
            rutcilluwest rutmos viganiu mas placeat tellgat inru. Dia
            tellquam ninoim tellluam cursus.
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
            tellcit consectetur dans tenellokut tellgat a tellwedit bibendum enim
            tellicnu lorem millinia elit tellcilmmill tellgat irincelit.
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Rutros rhoncus tellcilkubet
            tristique mollit cursus ac ut einn. Et libis hendrcit placemt non
            slliquam tellgat. Cchellsilir semior pretiousea eleifend mare
            placerat. rutcillubus euiler diam ut rutcillutest rhanulis vitut.
            Rutros tellcarum tellgat vinhuit vult rhancus elit ex iru rutcil.
            Ut veniam viribus aliquam leo ad rutcilluam tellgat venhist
            rutcilluvelii tellgat ivinhet vitluam tellgat ut molest. Diam
            tellquam rutcil ulicis. Eleifend lacus magna id cursus id commodo
            tellat portaiclar tellat augue elit vivadum tellgiat. ut tellgat
            rutcilluwest rutmos viganiu mas placeat tellgat inru. Dia
            tellquam ninoim tellluam cursus.
          </p>
        </LegalSection>

        <LegalSection title="Some title">
          <p>
            Lorem ipsum dolor sit amet consectetur. Cham quis nam pharetra tellus.
            Nisi sed rutrum non nulla venenatis mollis vitae. Diam amet leo vitae
            eleifend netus tempor quis neque ut quis his lacinia elit sed et
            pharetra non tempor lorem ipsum.
          </p>
        </LegalSection>
      </SectionWrapper>
    </div>
  );
};

export default PrivacyPolicy;
