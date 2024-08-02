import React, { useRef } from 'react';

const FileUpload = ({ onUpload }) => {
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current.click()}>
        Upload Video
      </button>
    </div>
  );
};

export default FileUpload;
