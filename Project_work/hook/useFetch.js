import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const options = {
          method: "GET",
          url: `https://jsearch.p.rapidapi.com/${endpoint}`,
          headers: {
            "X-RapidAPI-Key": rapidApiKey,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },
          params: { ...query },
        };

        const response = await axios.request(options);
        setData(response.data.data);
      } catch (error) {
        setError(error);
        alert("There is an error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, query]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
export default useFetch;
