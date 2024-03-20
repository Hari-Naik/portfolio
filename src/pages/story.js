import PageBanner from "../components/PageBanner";
import CallToActionSection from "../components/sections/CallToAction";
import useFetch from "../hooks/useFetch";
import Layouts from "../layouts/Layouts";
import PreLoader from "../layouts/preloader/Index";

const Story = () => {
  const [userData, loading] = useFetch();

  if (loading) {
    return <PreLoader />;
  }

  const education = userData.timeline.filter(
    item => item.forEducation === true
  );
  const work = userData.timeline.filter(item => item.forEducation === false);

  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-4.jpg"}
      rightPanelImg={"/img/person/4.png"}>
      <PageBanner pageTitle={"Success Story"} />

      {/* story */}
      <section>
        <div className="row">
          <div className="col-xl-6">
            <div className="mil-section-title mil-up mil-left mil-mb-90">
              <div className="mil-divider"></div>
              <h3>Education:</h3>
            </div>

            <div className="mil-timeline mil-mb-90">
              <div className="mil-timeline-track"></div>
              <ul>
                {education.map(item => (
                  <StoryItem key={item?._id} item={item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-section-title mil-up mil-left mil-mb-90">
              <div className="mil-divider"></div>
              <h3>Work:</h3>
            </div>

            <div className="mil-timeline mil-mb-90">
              <div className="mil-timeline-track"></div>
              <ul>
                {work?.map(item => (
                  <StoryItem key={item?._id} item={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* story end */}

      <CallToActionSection />
    </Layouts>
  );
};

export default Story;

const StoryItem = ({ item }) => {
  return (
    <li className="mil-up">
      <div className="mil-item-head mil-mb-5">
        <h4>{item?.company_name}</h4>
        <div className="mil-text-sm">
          {new Date(item.startDate).getFullYear()}-
          {new Date(item.endDate).getFullYear()}
        </div>
      </div>
      <p className="mil-text-sm mil-mb-15">
        {item?.forEducation ? "student" : item?.jobTitle}
      </p>
      <p>{item?.summary}</p>
    </li>
  );
};
