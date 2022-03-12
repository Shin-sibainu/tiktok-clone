import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@shincode</h3>
        <p>ここに動画内容を追加</p>
        <div className="videoFooterTicker">
          <MusicNoteIcon className="videoFooterIcon" />
          <Ticker mode="smooth" className="ticker">
            {({ index }) => (
              <>
                <h1>Music Player Here...</h1>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
