import React, { useState } from "react";
import { movies } from "./Data.js";
const Movies = () => {
  const [movieList, setMovielist] = useState(movies);

  function filterCategory(cat) {
    setMovielist(movies.filter((data) => data.category == cat));
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          textAlign: "center",
          width: "1100px",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <button
        onClick={()=>setMovielist(movies)}
        type="button" 
        className="btn btn-outline-primary">
          All
        </button>
        <button
          onClick={() => filterCategory("Action")}
          type="button"
          className="btn btn-outline-primary"
        >
          Action
        </button>
        <button
          onClick={() => filterCategory("Thriller")}
          type="button"
          className="btn btn-outline-light"
        >
          Thriller
        </button>
        <button
          onClick={() => filterCategory("Animation")}
          type="button"
          className="btn btn-outline-info"
        >
          Animation
        </button>
        <button
          onClick={() => filterCategory("Horror")}
          type="button"
          className="btn btn-outline-warning"
        >
          horror
        </button>
        <button
          onClick={() => filterCategory("Drama")}
          type="button"
          className="btn btn-outline-info"
        >
          Drama
        </button>
        <button
          onClick={() => filterCategory("Sci-Fi")}
          type="button"
          className="btn btn-outline-light"
        >
          Sci-Fi
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          textAlign: "center",
          width: "1100px",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        {movieList.map((items) => (
          <div key={items.id} style={{ maxWidth: "220px" }}>
            <div
              style={{
                padding: "10px",
              }}
              className="card"
            >
              <img
                src={items.poster_path}
                alt=""
                style={{
                  width: "200px",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                }}
              />
            </div>
            <h5>{items.title}</h5>
            <p>{items.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
