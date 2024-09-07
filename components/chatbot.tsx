import { useState, useEffect } from "react";

export default function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to set up the assistant when the component loads
  useEffect(() => {
    const setupAssistant = async () => {
      try {
        const res = await fetch('/api/setup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await res.json();

        if (res.ok) {
          // Setup was successful
          setIsSetupComplete(true);
        } else {
          // Setup failed, show error message
          setErrorMessage(data.error || 'Setup failed');
        }
      } catch (error) {
        console.error("Error during setup:", error);
        setErrorMessage("An error occurred during setup");
      }
    };

    setupAssistant();
  }, []); // Run the setup when the component mounts

  const askQuestion = async () => {
    if (!isSetupComplete) {
      setErrorMessage("Assistant is still being set up. Please wait.");
      return;
    }

    const res = await fetch('/api/ask', {
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

      {errorMessage && (
        <div className="mb-4 text-red-500">
          <strong>Error: </strong>{errorMessage}
        </div>
      )}

      {!isSetupComplete && (
        <div className="mb-4 text-gray-500">
          Setting up the assistant, please wait...
        </div>
      )}

      {isSetupComplete && (
        <>
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
        </>
      )}

      {answer && (
        <div className="mt-4">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
