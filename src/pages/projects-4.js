import PageBanner from "../components/PageBanner";
import ProjectsGrid from "../components/ProjectsGrid";
import CallToActionSection from "../components/sections/CallToAction";
import useFetch from "../hooks/useFetch";
import Layouts from "../layouts/Layouts";
import PreLoader from "../layouts/preloader/Index";

const Projects4 = () => {
  const [userData, loading] = useFetch();
  if (loading) {
    return <PreLoader />;
  }
  return (
    <Layouts fullWidth>
      <PageBanner
        pageTitle={"Designing a <br>Better World Today"}
        breadTitle={"Portfolio"}
        align={"center"}
      />

      <ProjectsGrid projects={userData.projects} columns={2} />

      <CallToActionSection />
    </Layouts>
  );
};
export default Projects4;
