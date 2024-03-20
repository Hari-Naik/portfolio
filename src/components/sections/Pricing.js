import React from "react";
import { Link } from "react-router-dom";

const Pricing = ({ price }) => {
  return (
    <>
      <div className="mil-section-title mil-up">
        <div className="mil-divider" />
        <h3>Price</h3>
      </div>

      <div className="mil-p-90-60">
        <div className="mil-price-card mil-up mil-mb-30">
          <h4 className="mil-upper mil-accent mil-up mil-mb-30">
            monthly payment
          </h4>

          <div className="mil-price-number mil-up mil-mb-30">
            {price} <span>/mo</span>
          </div>

          <div className="mil-divider mil-up mil-mb-30" />

          <Link href={"/contact"} className="mil-link mil-up">
            <span>visit website</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pricing;
