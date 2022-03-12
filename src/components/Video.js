import React, { useRef, useState } from "react";
import "./Video.css";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPlayer = () => {
    console.log(videoRef.current); //<video src="">
    //もし再生されていたら止める
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="videoPlayer"
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/aad786532c6225732725689b5490e06b/622cd5ac/video/tos/useast2a/tos-useast2a-ve-0068c003/02231ed20d2b4ae3bc3a23591164add3/?a=1988&br=1558&bt=779&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3opnz7TheV.vDXq&l=202203121117020102450452041D728C96&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajpvcTk6ZmhqOTMzNzczM0ApZTM2Njk5ZTtkNzNlOzMzOGdgNWBpcjQwbF9gLS1kMTZzczUuLjNhNjJjYy1hYmEzMzA6Yw%3D%3D&vl=&vr="
        loop
      ></video>

      {/* videoFooter */}
      {/* videoSidebar */}
    </div>
  );
};

export default Video;
