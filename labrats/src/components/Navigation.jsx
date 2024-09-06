import React from 'react';

const Navigation = ({ setActiveSection }) => {
  return (
    <div className="navigation">
      <button onClick={() => setActiveSection("ask")}>Ask Me Anything</button>
      <button onClick={() => setActiveSection("chat")}>Chat With Docs</button>
      <button onClick={() => setActiveSection("visualisation")}>Data Visualisation</button>
      <button onClick={() => setActiveSection("query")}>Data Query</button>
    </div>
  );
};

export default Navigation;
