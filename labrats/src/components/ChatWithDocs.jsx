import React, { useState } from 'react';

const ChatWithDocs = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="chat-with-docs">
      <div>
        <h3>Upload Docs</h3>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <div>
        <h3>Ask Me Anything</h3>
        <input type="text" placeholder="Ask about the document..." />
        <button>Ask</button>
      </div>
      <div>
        <h3>Download Doc</h3>
        <button>Download</button>
      </div>
    </div>
  );
};

export default ChatWithDocs;
