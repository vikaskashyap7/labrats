import React, { useState } from 'react';

const DataQuery = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="data-query">
      <div>
        <h3>Upload Docs</h3>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div>
        <h3>Ask Me Anything</h3>
        <input type="text" placeholder="Query the data..." />
        <button>Ask</button>
      </div>
      <div>
        <h3>Download</h3>
        <button>Download Query Results</button>
      </div>
    </div>
  );
};

export default DataQuery;
