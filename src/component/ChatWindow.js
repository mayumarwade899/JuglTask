import React, { useState, useEffect, useRef } from "react";
import Messages from "./Messages";
import { FiSend } from "react-icons/fi";

function ChatWindow({ closeChat, messages, addMessage, error }) {
  const [input, setInput] = useState("");
  const messageRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim() === "") {
      addMessage({sender: "user", text: ""})
      return;
    }
    const newMessage = { sender: "user", text: input };
    addMessage(newMessage);
    setInput("");

    setTimeout(() => {
      addMessage({ sender: "bot", text: "Thank you for your message!" });
    }, 1000);
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-20 right-5 w-80 bg-white border rounded-2xl shadow-lg ">
      <div className="flex justify-between p-3 bg-blue-600 text-white rounded-t-2xl">
        <h4 className="text-lg font-semibold">Support Chat</h4>
      </div>
      <div className="p-3 overflow-y-auto h-80">
        {messages.map((msg, index) => (
          <Messages key={index} sender={msg.sender} text={msg.text}/>
        ))}
        <div ref={messageRef} />
      </div>
      <div className="p-2 border-t flex bg-gray-100 rounded-b-2xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type your message...."
          className="w-3/4 p-2 border rounded"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-3 rounded-r-full ml-1 flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-200"
        >
          <FiSend size={18} />
        </button>
      </div>
      {error && <div className="text-red-500 text-center py-2">{error}</div>}
    </div>
  );
}

export default ChatWindow;
