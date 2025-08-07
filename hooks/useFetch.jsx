import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        // Ensure the request was successful
        if (!response.ok) throw new Error("Failed to fetch");

        const json = await response.json(); // Wait until json is assigned here

        // Now you can safely log the data
        console.log("Fetched data:", json);
        console.log("Response status code:", response.status);

        setData(json.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
