import React, { useState } from 'react';

const AskMeAnything = () => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  const handleAsk =() => {
    
    // Dummy answer handling
    setAnswers([...answers, { question, answer: "This is a dummy answer." }]);
    setQuestion('');
  };

  return (
    <div className="ask-me-anything">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
      />
      <button onClick={handleAsk}>Ask</button>
      <div className="chat-box">
        {answers.map((item, index) => (
          <div key={index}>
            <p>User: {item.question}</p>
            <p>AI: {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskMeAnything;
