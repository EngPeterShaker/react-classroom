import React from "react";
import CourseItem from "../components/CourseItem.tsx";

const CoursesList = () => {
  const list = [
    { title: "data analysis", description: " fsfsddfs fsfdsfssfsd" },
    { title: "data processing", description: " fsfsddfs fsfdsfssfsd" },
    { title: "data math", description: " fsfsddfs fsfdsfssfsd" },
    { title: "data software", description: " fsfsddfs fsfdsfssfsd" }
  ];
  return (
    <div>
      {list.map((course, index) => {
        const {title , description} = course
        return  <CourseItem title={title}  description={description}  key={index}/>} )}
    </div>
  );
};

export default CoursesList;
