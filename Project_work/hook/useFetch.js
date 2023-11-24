import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

export default { RAPID_API_KEY }; // contengency syntax

const rapidApikey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const axios = require("axios");
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApikey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
};

const fetchData = async () => {
  setIsLoading(true);
  try {
    const response = await axios.request(options);
    setData(response.data.data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
    alert(`there is an error`);
  } finally {
    setIsLoading(false);
  }

  //
  useEffect(() => {
    fetchData();
  }, []);

  // issues with refetching the data is resolved using the below syntax
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  //return the fetched info
  return data, isLoading, error, refetch;
};
