import React, { useState } from "react";
const Message = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      setMessages([
        ...messages,
        { sender: "You", text: newMessage },
        { sender: selectedUser.name, text: "Got it!" }, // Simulated response
      ]);
      setNewMessage("");
    }
  };

  if (!selectedUser) {
    return (
      <div className="d-flex align-items-center justify-content-center h-80 text-white">
        <p>Select a person to start chatting</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column h-100 bg-dark text-white">
      {/* Chat Header */}
      <div className="bg-secondary text-center p-3 rounded-top">
        <h4>Chat with {selectedUser.name}</h4>
      </div>

      {/* Messages Display */}
      <div className="flex-grow-1 p-3 overflow-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`d-flex flex-column p-2 mb-2 ${
              msg.sender === "You" ? "align-self-end text-end" : "align-self-start"
            }`}
          >
            <div
              className={`p-2 rounded text-white ${
                msg.sender === "You" ? "bg-primary" : "bg-secondary"
              }`}
              style={{ maxWidth: "60%", wordWrap: "break-word" }}
            >
              <strong>{msg.sender}:</strong> <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="d-flex p-2 bg-secondary">
        <input
          type="text"
          className="form-control me-2"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="btn btn-primary" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};
export default Message;