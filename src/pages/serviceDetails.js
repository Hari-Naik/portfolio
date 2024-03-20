import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TestimonialSlider from "../components/sliders/Testimonial";
import CallToActionSection from "../components/sections/CallToAction";
import Layouts from "../layouts/Layouts";
import PageBanner from "../components/PageBanner";
import PricingSection from "../components/sections/Pricing";

const ServiceDetails = () => {
  const [userData, loading] = useFetch();
  const { id } = useParams();

  if (loading) return;

  const serviceData = userData?.services.find(item => item._id === id);

  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-3.jpg"}
      rightPanelImg={"/img/person/6.png"}>
      <PageBanner pageTitle={serviceData.name} align={"center"} />

      <div className="mil-section-title mil-up mil-mb-90">
        <div className="mil-divider" />
        <h3>What is {serviceData?.name}</h3>
      </div>

      {/* about */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="mil-text-lg mil-dark mil-center mil-up mil-mb-90">
            <div dangerouslySetInnerHTML={{ __html: serviceData?.desc }} />
          </div>
        </div>
      </div>
      {/* about end */}

      <PricingSection price={serviceData.charge} />

      <TestimonialSlider testimonials={userData.testimonials} />

      <CallToActionSection />
    </Layouts>
  );
};

export default ServiceDetails;
