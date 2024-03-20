import React, { useEffect } from "react";
import Layouts from "../layouts/Layouts";
import HeroOne from "../components/sections/HeroOne";
import AboutSection from "../components/sections/About";
import ServicesSection from "../components/sections/Services";
import SkillsOneSection from "../components/sections/SkillsOne";
import SkillsTwo from "../components/sections/SkillsTwo";
import TestimonialSlider from "../components/sliders/Testimonial";
import CallToActionSection from "../components/sections/CallToAction";
import useFetch from "../hooks/useFetch";

import PreLoader from "../layouts/preloader/Index";

const Home1 = () => {
  const [userData, loading] = useFetch();

  if (loading) {
    return <PreLoader />;
  }

  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-1.jpg"}
      rightPanelImg={"/img/person/2.png"}>
      <HeroOne data={userData?.about} />
      <AboutSection data={userData?.about} />
      <ServicesSection services={userData?.services} />
      <SkillsOneSection />
      <SkillsTwo skills={userData?.skills} />
      <TestimonialSlider testimonials={userData?.testimonials} />
      <CallToActionSection />
    </Layouts>
  );
};

export default Home1;