import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { enrollCourse } from "../services/api";

const VideoPlayer = ({ videoUrl, courseId, token }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetch current progress from the API (if any)
    // Simulate with a hardcoded value for now
    setProgress(0); // For demonstration

    // Handle course enrollment if the user hasn't enrolled yet
    enrollCourse(courseId, token)
      .then(() => console.log("Enrolled successfully"))
      .catch((err) => console.error(err));
  }, [courseId, token]);

  const handleProgress = (state) => {
    setProgress(state.played * 100); // Set progress in percentage

    // Optionally, save progress to the backend
    // Use an API like: saveProgress(courseId, progress);
  };

  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls
        onProgress={handleProgress}
        progressInterval={1000}
      />
      <p>Progress: {progress.toFixed(2)}%</p>
    </div>
  );
};

export default VideoPlayer;
