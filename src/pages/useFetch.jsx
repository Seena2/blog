import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetchg = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortFetchg.signal }) //a promise that returned until the fetch() completes
        //fired when the above promise is completed
        .then((res) => {
          //console.log(res);
          if (!res.ok) {
            //checks if the response return data, if not
            throw Error("Could not fetch data, Sorry!");
          }
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          setData(data); //update the state
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          //console.log(err.message);
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setPending(false);
            setError(err.message);
          }
        });
    }, 2000);
    //cleanup function
    return () => abortFetchg.abort();
  }, [url]); //the empty array makes it runs only once
  return { data, pending, error };
};

export default useFetch;
