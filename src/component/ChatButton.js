import React from "react";
import { FiMessageCircle, FiChevronDown } from "react-icons/fi";

function ChatButton({ onClick, isChatOpen }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
    >
      {isChatOpen ? <FiChevronDown size={24} /> : <FiMessageCircle size={24} />}
    </button>
  );
}

export default ChatButton;
