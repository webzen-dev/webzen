import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./compoenents/Header/Navigation";
import Home from "./compoenents/Home/Home";
import { motion } from "framer-motion";

function App() {
  const itemVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
      >
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to={"/Home"} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Skiils" element={<Home />} />
        </Routes>
    </div>
      </motion.div>
  );
}

export default App;
