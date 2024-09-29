import React, { useState, useEffect } from 'react';
import { getCourses } from '../services/api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(res => setCourses(res.data)).catch(err => console.log(err));
  }, []);

  return (
    <div>
      {courses.map(course => (
        <div key={course._id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
