import React from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  return (
    <div>
      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default WebcamComponent;
