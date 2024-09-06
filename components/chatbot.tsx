import { useState } from "react";

export default function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askQuestion = async () => {
    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="p-4 bg-gray-200 rounded shadow-md">
      <h3 className="text-lg font-bold mb-2">Chat with me</h3>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Ask me anything..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={askQuestion}
      >
        Ask
      </button>
      {answer && (
        <div className="mt-4">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
