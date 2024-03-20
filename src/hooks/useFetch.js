import { useEffect, useState } from "react";
import { fetchUserData } from "../lib/fetchData";

const useFetch = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const user = await fetchUserData();
      setUserData(user);
      setLoading(false);
    };
    fetchData();
  }, []);

  return [userData, loading];
};

export default useFetch;
