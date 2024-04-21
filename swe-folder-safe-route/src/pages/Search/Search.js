import searchscrshot from "../../assets/images/searchscrshot.png";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/searchEntered");
  };

  return (
    <div className="search">
      <img src={searchscrshot} alt="gg map search page"></img>
      <div className="search__input" onClick={handleSearchClick}></div>
    </div>
  );
}
