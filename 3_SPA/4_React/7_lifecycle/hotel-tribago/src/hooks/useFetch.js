import { useState, useEffect, useRef } from "react";

export const useFetch = (url, otherOptions) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState(null);
  const options = useRef(otherOptions).current;

  // function delay(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);
      console.log(options);
      try {
        // await delay(10000);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(`${res.status}: ${res.statusText}`);
        }
        const json = await res.json();
        setData(json);
        setIsPending(false);
        setErrors(null);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setErrors(e);
          setIsPending(false);
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, isPending, errors };
};
