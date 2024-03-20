import { Link } from "react-router-dom";

const ServicesSection = ({ services }) => {
  return (
    <>
      <div className="mil-section-title mil-up">
        <div className="mil-divider"></div>
        <h3>Services</h3>
      </div>
      {/* services */}
      <section className="mil-p-90-30">
        <div className="row justify-content-between align-items-center">
          {services.map((item, key) => (
            <div key={`services-item-${item._id}`} className="col-lg-4">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-service-icon mil-up">
                  <img
                    src={item.image.url}
                    alt={item.name}
                    className="mil-mb-30"
                  />
                </div>
                <h5 className="mil-up mil-mb-30">{item.name}</h5>
                <p className="mil-up mil-mb-30">{item.desc}</p>
                <div className="mil-up">
                  <Link
                    to={`/services/${item._id}`}
                    className="mil-link mil-icon-link">
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
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* services end */}
    </>
  );
};

export default ServicesSection;
