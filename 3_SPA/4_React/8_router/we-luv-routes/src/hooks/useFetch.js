import { useState, useEffect, useRef } from "react";

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const options = useRef(_options);
  useEffect(() => {
    console.log(options);
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setError(null);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setError(e.message);
          setIsPending(false);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, isPending, error };
};
