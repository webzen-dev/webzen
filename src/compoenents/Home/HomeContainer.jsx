import { TypeAnimation } from "react-type-animation";
import LargestCircle from "../Circles/LargestCircle";
import MediumCircle from "../Circles/MediumCircle";
import SmallCircle from "../Circles/SmallCircle";
import MediumCircleGreen from "../Circles/MediumCircleGreen";

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <LargestCircle />
      <MediumCircle />
      <SmallCircle />
      <MediumCircleGreen/>
      <div className="text-box">
        <h2>
          Hi ! I'm <span>WebZen</span>
        </h2>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            100,
            "",
            500,
            "I'm FrontEnd Developer ",
            1000,
            "I'm React Developer ",
          ]}
          speed={40}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        <button>About Me</button>
      </div>
      {/* <img src="./logo.png" alt="" /> */}
    </div>
  );
};

export default HomeContainer;
