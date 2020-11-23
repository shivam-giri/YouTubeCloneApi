import React, { Fragment } from "react";
import Moment from "react-moment";
const VideoDetails = ({ video }) => {
  console.log(video);
  if (!video) {
    return "Loading....";
  } else {
    var videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  }
  return (
    <div className="videoBlockId">
      <div className="videoPlayer">
        <iframe
          width="100%"
          height={450}
          src={videoUrl}
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="titleBlock">
        <h2>{video.snippet.title}</h2>
        <p>
          <Moment fromNow>{video.snippet.publishedAt}</Moment>
        </p>
      </div>
      <hr className="hr" />
      <div className="VideoDescriptionBlock">
        <p>{video.snippet.channelTitle}</p>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
