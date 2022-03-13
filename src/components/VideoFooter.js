import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooterTicker">
          <MusicNoteIcon className="videoFooterIcon" />
          <Ticker mode="smooth" className="ticker">
            {({ index }) => (
              <>
                <h1>{song}</h1>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
