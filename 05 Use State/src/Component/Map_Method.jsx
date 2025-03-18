import React from "react";

const Map = () => {
  let items = [
    {
      id: 1,
      name: "Rohit",
      salary: 50000,
    },
    {
      id: 2,
      name: "Sourav",
      salary: 100000,
    },
    {
      id: 3,
      name: "Rahul",
      salary: 150000,
    },
    {
      id: 4,
      name: "Virat",
      salary: 200000,
    },
  ];
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.salary}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Map;
