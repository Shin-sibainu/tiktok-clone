import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  song,
  favorite,
  messages,
  shares,
}) => {
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
      <video className="videoPlayer" ref={videoRef} src={url} loop></video>

      {/* videoFooter */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* videoSidebar */}
      <VideoSidebar favorite={favorite} messages={messages} shares={shares} />
    </div>
  );
};

export default Video;
