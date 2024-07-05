import SmallCircleCyan from "../Circles/SmallCircleCyan";
import { motion } from "framer-motion";

const HomeWhitePaper = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="HomeWhitePaper">
        <div>
          <p>View my white paper</p>
          <button>
            Read My WhitePaper
            <span className="caption">You can read about me</span>
          </button>
        </div>
        <SmallCircleCyan />
      </div>
    </motion.div>
  );
};

export default HomeWhitePaper;
