import React from 'react';

const DeepfakePreview = ({ videoSrc }) => {
  if (!videoSrc) return null;

  return (
    <div>
      <h2>Deepfake Result</h2>
      <video width="600" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default DeepfakePreview;
