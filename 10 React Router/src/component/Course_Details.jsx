import React from "react";
import { useParams } from "react-router-dom";

const Course_Details = () => {
  // console.log(useParams());

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
  const { id } = useParams();

  const course_detail = arr.filter((item)=> item.id == id)
  console.log(course_detail);
  


  return (
    <div>
      {
        course_detail.map((item)=>
        <div key={item.id}>
          <h2>Course Name : {item.course_name}</h2>
          <p> Course Duration :{item.course_duration}</p>
          <p>Course Price : {item.course_fee}</p>
        </div>
        )
      }
    </div>
  );
};

export default Course_Details;
