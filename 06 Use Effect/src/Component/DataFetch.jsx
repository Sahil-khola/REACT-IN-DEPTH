import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [apiData, setApiData] = useState([]);

  async function fetchDataFromApi() {
    const api = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await api.json();
    setApiData(data);

    console.log(data);
  }

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <>
      <h1>Fetch data</h1>
      {apiData.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: "blue",
            margin: "10px",
            border: "2px solid yellow",
            textAlign: "center",
          }}
        >
          <h3>{item.title}</h3>
        </div>
      ))}
    </>
  );
};

export default DataFetch;
