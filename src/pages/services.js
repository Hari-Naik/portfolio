import React from "react";
import ServicesSection from "../components/sections/Services";
import Layouts from "../layouts/Layouts";
import PageBanner from "../components/PageBanner";
import TestimonialSlider from "../components/sliders/Testimonial";
import CallToActionSection from "../components/sections/CallToAction";
import useFetch from "../hooks/useFetch";
import Pricing from "../components/sections/Pricing";
import PreLoader from "../layouts/preloader/Index";

const Services = () => {
  const [userData, loading] = useFetch();

  if (loading) return <PreLoader />;

  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/6.png"}>
      <PageBanner pageTitle={"This is what i do best"} align={"center"} />

      <ServicesSection services={userData.services} />

      <Pricing price={"$300"} />

      <TestimonialSlider testimonials={userData.testimonials} />

      <CallToActionSection />
    </Layouts>
  );
};

export default Services;
