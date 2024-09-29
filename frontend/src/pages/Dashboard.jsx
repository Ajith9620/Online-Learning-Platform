import React, { useEffect, useState } from "react";
import { getCourses } from "../services/api";
import VideoPlayer from "../components/VideoPlayer";

const Dashboard = ({ token }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Your Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id} onClick={() => setSelectedCourse(course)}>
            {course.title}
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <VideoPlayer
          videoUrl={selectedCourse.videoUrl}
          courseId={selectedCourse._id}
          token={token}
        />
      )}
    </div>
  );
};

export default Dashboard;
