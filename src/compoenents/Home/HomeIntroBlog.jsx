import { motion } from "framer-motion";
const Blogs = [
  {
    title: "What is JSX? ",
    caption:
      "JSX stands for JavaScript XML.JSX is an XML/HTML like extension to JavaScript.",
    category: "Programming",
    image:
      "https://damiandeluca.com.ar/wp-content/uploads/2023/07/jsx-logo.jpg",
  },
  {
    title: "What is Front-End Developer",
    caption:
      "A Front-End Developer is someone who creates websites and web applications.",
    category: "Programming",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1620675214626/o-c_A3ztL.jpeg?w=1200&h=630&fit=crop&crop=entropy&auto=compress,format&format=webp&fm=png",
  },
  {
    title: "What is React",
    caption:
      "React is a JavaScript library created by Facebook . React is a User Interface (UI) library .React is a tool for building UI components",
    category: "Programming FrameWork",
    image: "https://www.w3schools.com/whatis/img_react.jpg",
  },
  {
    title: "What is Babel",
    caption:
      "Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript .Babel is available for different conversions.",
    category: "Programming FramWork",
    image: "https://www.easeout.co/images/uploads/babel-js.png",
  },
];

const HomeIntroBlog = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 , x:1000},
    visible: {
      opacity: 1,
      y: 0,
      x:0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.div variants={itemVariants} initial="hidden" whileInView="visible">
      <div className="HomeIntroBlog">
        <h1> Intro Blogs</h1>
        <div className="slider">
          {Blogs.map((product, index) => (
            <div key={index} className="cart">
              <div className="image-box">
                <img src={product.image} alt={`${product.name} image`} />
              </div>
              <div className="caption">
                <h2>{product.title}</h2>
                <div className="details">{product.caption}</div>
                <div className="category">{product.category}</div>
              </div>
              <div className="btn">
                <button>Go Blog Page</button>
              </div>
            </div>
          ))}
        </div>
        <div className="blogBtn">
          <button>more....</button>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeIntroBlog;
