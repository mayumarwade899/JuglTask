import React from "react";
import { FiUser, FiZap } from "react-icons/fi";

function Messages({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div className={`mb-2 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex items-center ${
          isUser ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {isUser ? (
          <FiUser className="text-blue-500 mr-2" />
        ) : (
          <FiZap className="text-yellow-500 mr-2" />
        )}
        <div
          className={`p-2 rounded ${
            isUser ? "bg-blue-500 text-white" : "bg-gray-200"
          } max-w-xs`}
        >
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;
