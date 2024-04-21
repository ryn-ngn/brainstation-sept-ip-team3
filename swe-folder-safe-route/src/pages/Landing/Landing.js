import IntroModal from "../../components/IntroModal/IntroModal";
import "./Landing.scss";
import landingScreenShot from "../../assets/images/landingscrshot.png";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="maps">
      <img src={landingScreenShot} alt="google map interface"></img>
      <div className="maps__search-box" onClick={handleSearchClick}></div>
      <IntroModal />
    </div>
  );
}
