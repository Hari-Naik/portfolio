export const fetchUserData = async () => {
  const res = await fetch(
    "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
  );
  const { user } = await res.json();

  return user;
};

// export const fetchProjectData = async id => {
//   const user = await fetchUserData();
//   const projectData = user.projects.find(project => project._id === id);

//   return projectData;
// };

export const fetchServiceData = async id => {
  const user = await fetchUserData();
  const serviceData = user.services.filter(item => item._id === id);
  return serviceData;
};
