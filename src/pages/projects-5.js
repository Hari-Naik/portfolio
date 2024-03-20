// import Layouts from "@layouts/Layouts";
// import dynamic from "next/dynamic";

// import { getSortedProjectsData } from "@library/projects";
import Layouts from "../layouts/Layouts";

// const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), {
//   ssr: false,
// });

import ProjectsSlider from "../components/sliders/Projects";
import useFetch from "../hooks/useFetch";
import PreLoader from "../layouts/preloader/Index";

const Projects5 = () => {
  const [userData, loading] = useFetch();
  if (loading) {
    return <PreLoader />;
  }
  return (
    <Layouts fullWidth fullWidth100 noFooter>
      <ProjectsSlider projects={userData?.projects} />
    </Layouts>
  );
};
export default Projects5;
