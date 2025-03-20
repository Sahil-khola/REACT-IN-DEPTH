import React, { useEffect, useState } from "react";

const Meal = () => {
  const [apiData, setApiData] = useState([]);
  const [food, setFood] = useState("canadian");
  const [search, setSearch] = useState("");


  async function mealDbApi() {
    const Api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${food}`
    );
    const data = await Api.json();

    setApiData(data.meals);
  }


  async function submitHandler(event) {
    event.preventDefault();
    const Api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await Api.json();
    setSearch(data.meals);

    setApiData(data.meals);
  }

    
  useEffect(() => {
    mealDbApi();
  },[food]);

  
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        <button onClick={() => setFood("indian")}>Indian</button>
        <button onClick={() => setFood("canadian")}>Canadian</button>
        <button onClick={() => setFood("american")}>American</button>
        <button onClick={() => setFood("british")}>British</button>
        <button onClick={() => setFood("russian")}>Russian</button>
      </div>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px",
        }}
      >
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {apiData.map((items) => (
          <div key={items.idMeal} id="boxes">
            <img
              src={items.strMealThumb}
              alt=""
              width={"220px"}
              style={{
                borderRadius: "10px",
                border: "2px solid grey",
                boxShadow: "10px 10px 15px  grey",
              }}
            />
            <h5 style={{ textAlign: "center", width: "220px" }}>
              {items.strMeal}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
