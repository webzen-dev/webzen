import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GoHome} from "react-icons/go";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { SlEmotsmile } from "react-icons/sl";
import { VscTerminalPowershell } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import DarkMod from "./DarkMod";
import "./header.css";
const Navigation = () => {
  return (
    <header>
      <div className="menu">
        {" "}
        <ul className="menu-item">
          <li>
            <NavLink to={"/Home"}>
              <GoHome />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/About"}>
              <SlEmotsmile />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/skills"}>
              <VscTerminalPowershell />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contactus"}>
              <RiContactsLine />
            </NavLink>
          </li>
        </ul>
        <div className="social-media">
          <ul>
            <li>
              <a href="https://github.com/webzen-dev">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <PiTelegramLogoLight />
              </a>
            </li>
            <li>
              <a href="#">
                <RxDiscordLogo />
              </a>
            </li>
          </ul>
        </div>
        <DarkMod />
      </div>
      <div className="logo">
        {/* <img src="./logo.png" alt="" /> */}
        webzen
      </div>
    </header>
  );
};

export default Navigation;
