import { IoArrowUpCircleOutline } from "react-icons/io5";

const HomeFooter = () => {
  return (
    <div className="HomeFooter">
        <div className="leftSideFooter">
          <img src="./logo.png" alt="" />
          WEBZEN
        </div>
        <div className="rightSideFoooter">
          Go Up <IoArrowUpCircleOutline />
        </div>
    </div>
  );
};

export default HomeFooter;
