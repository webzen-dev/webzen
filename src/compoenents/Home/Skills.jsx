import { FaGithub, FaReact } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
      <div className="skills">
        <h2>What is my Skills ?</h2>
        <div className="skill-flex-box">
          <div className="skill">
            <span>
              {" "}
              <FaReact />
            </span>
            React
          </div>
          <div className="skill">
            <span>
              <SiTypescript />
            </span>
            Type Script
          </div>
          <div className="skill">
            <span>
              <SiJavascript />
            </span>
            Java Script
          </div>
          <div className="skill">
            <span>
              <FaGithub />
            </span>
            Git & github
          </div>
          <div className="skill">
            <span>
              <LuCode2 />
            </span>
            Html & css
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
