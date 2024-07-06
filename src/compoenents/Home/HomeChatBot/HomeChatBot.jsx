import { CiCircleInfo } from "react-icons/ci";
import "./chat.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SmallCirclePink from "../../Circles/SmallCirclePink";
import MediumCircleOrang from "../../Circles/MediumCircleOrang";
import axios from "axios";

const HomeChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [qaList, setQaList] = useState([]);

  useEffect(() => {
    // Load the questions and answers from the text file
    axios.get('questions_answers.txt')
      .then(response => {
        const qaArray = response.data.split('\n\n').map(qa => {
          const [question, answer] = qa.split('\n');
          return { question, answer };
        });
        setQaList(qaArray);
      })
      .catch(error => {
        console.error("Error loading questions and answers:", error);
      });
  }, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const botResponse = qaList.find(qa => qa.question.toLowerCase() === input.toLowerCase());
    const botMessage = {
      text: botResponse ? botResponse.answer : "لطفا سوالاتون بهتر بپرسید",
      sender: "bot"
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 2, ease: "easeInOut" } }}
      style={{ marginBottom: 20 }}
    >
      <div className="HomeChatBot">
        <h4>Webzen chat Bot</h4>
        <div className="chat-header">
          <img src="./logo.png" alt="logo" />
          WEBZEN-GPT
          <span>
            online <div id="onlineDot"></div>
          </span>
          <div className="icon">
            <CiCircleInfo />
          </div>
        </div>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "user" ? "message" : "bot_message"}>
              <img src="./logo.png" alt="logo" />
              <p>{msg.text}</p>
              <span>{msg.sender}</span>
            </div>
          ))}
        </div>
        <div className="Frequently">
          Frequently Asked Questions: {" "}
          <div className="question-box">
            {qaList.map((qa, index) => (
              <div key={index} className="question" onClick={() => setInput(qa.question)}>
                {qa.question}
              </div>
            ))}
          </div>
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Message WebZen-GPT....."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
        <MediumCircleOrang />
        <SmallCirclePink />
      </div>
    </motion.div>
  );
};

export default HomeChatBot;
