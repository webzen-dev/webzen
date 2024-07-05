import HomeChatBot from "./HomeChatBot/HomeChatBot";
import HomeContainer from "./HomeContainer";
import HomeFooter from "./HomeFooter";
import HomeIntroBlog from "./HomeIntroBlog";
import HomeSamples from "./HomeSamples";
import HomeScoialMedia from "./HomeScoialMedia";
import HomeServices from "./HomeServices";
import HomeWhitePaper from "./HomeWhitePaper";
import Introducing from "./Introducing";
import Skills from "./Skills";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <HomeContainer />
      <Introducing />
      <Skills />
      <HomeIntroBlog />
      <HomeServices />
      <HomeWhitePaper />
      <HomeChatBot />
      <HomeScoialMedia />
      <HomeSamples />
      <HomeFooter />
    </div>
  );
};

export default Home;
