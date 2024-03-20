import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProjectData } from "../lib/fetchData";

const ProjectDetail = () => {
  const [projectData, setProjectData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjectData(id);
      setProjectData(data);
    };
    fetchData();
  }, [id]);

  if (!projectData) return;

  console.log(projectData);

  return <div>ProjectDetail</div>;
};

export default ProjectDetail;
