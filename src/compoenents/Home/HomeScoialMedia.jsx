import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";

const HomeScoialMedia = () => {
  return (
    <div className="HomeScoialMedia">
      <h4>Social Media </h4>
      <div className="HomeScoialMediaItems">
        <div className="ScoialMediaItem">
          <a href="#">
            Github
            <FaGithub />
          </a>
        </div>
        <div className="ScoialMediaItem">
          <a href="#">
            Instagram
            <BsInstagram />
          </a>
        </div>
        <div className="ScoialMediaItem">
          <a href="#">
            Telegram
            <PiTelegramLogoLight />
          </a>
        </div>
        <div className="ScoialMediaItem">
          <a href="#">
            Discord
            <RxDiscordLogo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeScoialMedia;
