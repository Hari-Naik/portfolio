import PageBanner from "../components/PageBanner";
import ProjectsMasonry from "../components/ProjectsMasonry";
import CallToActionSection from "../components/sections/CallToAction";
import useFetch from "../hooks/useFetch";
import Layouts from "../layouts/Layouts";
import PreLoader from "../layouts/preloader/Index";

const Projects3 = () => {
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

      <ProjectsMasonry projects={userData?.projects} masonry />

      <CallToActionSection />
    </Layouts>
  );
};
export default Projects3;
