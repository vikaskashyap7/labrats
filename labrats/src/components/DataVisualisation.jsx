import React, { useState } from 'react';

const DataVisualisation = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="data-visualisation">
      <div>
        <h3>Upload Docs</h3>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div>
        <h3>Visualise</h3>
        <button>Visualise Data</button>
        {/* Add your data visualisation logic here */}
        <div className="visualisation-area">
          <img src="chart-placeholder.png" alt="Data Visualisation" />
        </div>
      </div>
      <div>
        <h3>Download</h3>
        <button>Download Visualisation</button>
      </div>
    </div>
  );
};

export default DataVisualisation;
