import React, { useEffect } from "react";

const VideoSingle = ({ match }) => {
  useEffect(() => {
    console.log(match);
  }, [match]);

  return (
    <div>
      <h1>Single</h1>
    </div>
  );
};

export default VideoSingle;
