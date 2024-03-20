import { Link, useLocation } from "react-router-dom";

import appData from "../data/app.json";

const PageBanner = ({ pageTitle, breadTitle, align }) => {
  const { pathname: asPath } = useLocation();
  let clearBreadTitle;

  if (breadTitle !== undefined) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${appData.settings.siteName} - ${clearBreadTitle}`;

  return (
    <>
      {/* banner */}
      <section className={`mil-banner-sm mil-${align}`}>
        <div className="mil-banner-top mil-up"></div>
        <div className="mil-banner-title">
          <h1
            className="mil-h1-sm mil-up mil-mb-60"
            dangerouslySetInnerHTML={{ __html: pageTitle }}
          />
          <ul className="mil-breadcrumbs mil-up">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            {asPath.indexOf("/blog/") !== -1 && (
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            )}
            {asPath.indexOf("/projects/") !== -1 && (
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            )}
            {asPath.indexOf("/services/") !== -1 && (
              <li>
                <Link to="/services">Services</Link>
              </li>
            )}
            <li dangerouslySetInnerHTML={{ __html: clearBreadTitle }} />
          </ul>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
