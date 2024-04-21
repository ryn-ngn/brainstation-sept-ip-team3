import landingScreenShot from "../../../assets/images/searchEnteredScrShot.png";
import "./SearchEntered.scss";
import { useNavigate } from "react-router-dom";

export default function SearchEntered() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/searchResult");
  };

  return (
    <div className="search-entered">
      <img src={landingScreenShot} alt="gg map search page"></img>
      <div className="search-entered__box" onClick={handleSearchClick}></div>
    </div>
  );
}
