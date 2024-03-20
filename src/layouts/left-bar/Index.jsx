import { fetchUserData } from "../../lib/fetchData";
import appData from "../../data/app.json";
import { useEffect, useState } from "react";

const LeftPanelModule = () => {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUserData();
      setSocial(userData.social_handles);
    };

    fetchData();
  }, []);

  return (
    <>
      {/* left bar */}
      <div className="mil-left-panel">
        <div className="mil-page-name mil-upper mil-dark">Homepage</div>

        <ul className="mil-social-icons">
          {social.map((item, key) => {
            const icon = appData.social.find(
              item1 => item1.title === item.platform
            )?.icon;
            return (
              <li key={`lp-social-item-${key}`}>
                <a href={item.url} target="_blank" className="social-icon">
                  <i className={icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* left bar end */}
    </>
  );
};
export default LeftPanelModule;
