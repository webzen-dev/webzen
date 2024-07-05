import { CiCircleInfo } from "react-icons/ci";
import "./chat.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import SmallCirclePink from "../../Circles/SmallCirclePink";
import MediumCircleOrang from "../../Circles/MediumCircleOrang";

const HomeChatBot = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(false);
    return setIsTyping(true);
  }, [isTyping]);

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      style={{ marginBottom: 20 }}
    >
      <div className="HomeChatBot">
        <h4>Webzen chat Bot</h4>
        <div className="chat-header">
          <img src="./logo.png" alt="" />
          WEBZEN-GPT{" "}
          <span>
            online <div id="onlineDot"></div>
          </span>
          <div className="icon">
            {" "}
            <CiCircleInfo />
          </div>
        </div>
        <div className="chat-box">
          <div className="bot_message">
            <img src="./logo.png" alt="" />
            <p>
              {" "}
              {isTyping && (
                <TypeAnimation
                  sequence={[
                    100,
                    "",
                    500,
                    "Welcome to Webzen-bot! I'm an AI designed to assist you as a React developer. If you have any questions about technology, React, or any other aspect of web development, feel free to ask me. My goal is to help you better understand your projects and improve your user experience.",
                    1000,
                    "....",
                  ]}
                  repeat={Infinity}
                  speed={40}
                />
              )}
            </p>
            <span>webzen</span>
          </div>
          <div className="message">
            <p>
             {}
            </p>
            <span>You</span>
          </div>
        </div>
        <div className="Frequently">
          Frequently Asked Questions : {"  "}
          <div className="question-box">
            <div className="question">What is React?</div>
            <div className="question">
              How Can Creating website for my bussines?
            </div>
            <div className="question">What is SEO ?</div>
          </div>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Message WebZen-GPT....." />
          <button>Send</button>
        </div>
        <MediumCircleOrang/>
        <SmallCirclePink/>
      </div>
      
    </motion.div>
  );
};

export default HomeChatBot;
