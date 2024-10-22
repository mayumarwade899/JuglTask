import React, { useState } from "react";
import ChatButton from "./component/ChatButton";
import ChatWindow from "./component/ChatWindow";
import { CSSTransition } from "react-transition-group";
import "./animations.css";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I help you?" },
  ]);

  const [error, setError] = useState(null);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const addMessage = (message) => {
    if (message.text.trim() === "") {
      setError("Message cannot be empty.");
      return;
    }
    setMessages((prevMessages) => [...prevMessages, message]);
    setError(null);
  };

  return (
    <div className="App">
      <ChatButton onClick={toggleChat} isChatOpen={isChatOpen} />
      <CSSTransition
        in={isChatOpen}
        timeout={300}
        classNames="chat"
        unmountOnExit
      >
        <ChatWindow
          closeChat={toggleChat}
          messages={messages}
          addMessage={addMessage}
          error={error}
        />
      </CSSTransition>
    </div>
  );
}

export default App;
