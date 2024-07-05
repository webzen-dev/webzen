import LargestCirclePurple from "../Circles/LargestCirclePurple";
import { motion } from "framer-motion";

const HomeServices = () => {
  const itemVariants = {
    hidden: { opacity: 0,x:-100 },
    visible: {
      opacity: 1,
      x:0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    
    <div className="HomeServices">
      <div className="services">
      <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
    >
        <h3>What is My Services</h3>
        <p>
          my service I design and develop dynamic and interactive websites using
          modern frameworks such as React and Three.js. My expertise in UI/UX
          design along with programming ability in JavaScript, TypeScript,
          Python and C# allows me to deliver creative and innovative projects.
          My goal is to provide user-friendly and optimal solutions for your
          various needs. Contact me to create a unique experience in the digital
          world for you.
        </p>
        <button>Read More....</button>
        </motion.div>

      </div>
      <LargestCirclePurple />
    </div>
  );
};

export default HomeServices;
