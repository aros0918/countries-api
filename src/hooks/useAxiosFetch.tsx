import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (url: string) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async (url: string) => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
        setError("");
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getData(url);
  }, [url]);

  return { data, loading, error };
};

export default useAxiosFetch;
