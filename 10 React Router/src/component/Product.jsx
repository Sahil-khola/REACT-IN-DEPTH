import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const arr = [
    {
      id: "MERN001",
      course_name: "MERN_Stack",
      course_duration: "6 months",
      course_fee: "100000",
    },
    {
      id: "JAVA002",
      course_name: "Java_Full_Stack",
      course_duration: "6 months",
      course_fee: "100000",
    },
    {
      id: "PY0101",
      course_name: "Python_Full_Stack",
      course_duration: "6 months",
      course_fee: "100000",
    },
    {
      id: "REACT003",
      course_name: " React js",
      course_duration: "6 months",
      course_fee: "100000",
    },
  ];
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {arr.map((item) => (
          <div key={item.id}>
            <li>
              <Link to={`/course/${item.course_name}`}>{item.course_name}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Product;
