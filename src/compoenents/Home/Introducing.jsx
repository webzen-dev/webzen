import { motion } from "framer-motion";
const Introducing = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className="Introducing">
        <div className="text-box">
          <h3>Introducing Myself</h3>
          <p>
            Hello, I am a front end developer with more than 2 years of
            experience in my field. Since I entered this field, I have been
            interested in developing modern sites using new technologies. I
            focus on beautiful designs, exceptional user interface and better
            user experience for websites. With excellent skills in HTML, CSS,
            and JavaScript and experience working with popular frameworks like
            React
          </p>
        </div>
        <div className="image-box">
          <img src="./me.jpg" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Introducing;
