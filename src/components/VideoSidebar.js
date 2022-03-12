import {
  FavoriteBorder,
  FavoriteOutlined,
  MessageOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./VideoSidebar.css";

const VideoSidebar = ({ favorite, messages, shares }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebarButton">
        {favorited ? (
          <FavoriteOutlined
            fontSize="large"
            onClick={() => setFavorited(false)}
          />
        ) : (
          <FavoriteBorder fontSize="large" onClick={() => setFavorited(true)} />
        )}
        <p>{favorited ? favorite + 1 : favorite}</p>
      </div>
      <div className="videoSidebarButton">
        <MessageOutlined fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebarButton">
        <ShareOutlined fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
