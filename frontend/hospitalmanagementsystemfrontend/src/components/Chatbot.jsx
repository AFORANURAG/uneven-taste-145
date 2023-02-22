import React,{useState} from "react"
import {PredefinedQuestions} from "./Chatbot/Chatbotquestions"
export default function ChatWindow() {
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
  
    function handleUserInput(event) {
      setUserInput(event.target.value);
    }
    return (
      <div>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <p>User: {chat.user}</p>
            <p>Chatbot: {chat.chatbot}</p>
          </div>
        ))}
        <PredefinedQuestions />
      </div>
    );
  }
  
  