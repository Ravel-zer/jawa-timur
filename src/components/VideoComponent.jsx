import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/style.css";

const YouTubeVideo = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=ruKqXQ2KtH4&key=AIzaSyDTuWU-iejGI5Z23yf9wG40ZXO8mtICo20`);
        const videoId = response.data.items[0].id;
        setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div className="video-container">
      {videoUrl && <iframe title="YouTube Video" width="560" height="315" src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>}
    </div>
  );
};

export default YouTubeVideo;
