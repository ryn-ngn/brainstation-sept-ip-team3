import searchResultSrcShot from "../../../assets/images/searchResultSrcShot.png";
import "./SearchResult.scss";
import { useNavigate } from "react-router-dom";

export default function SearchResult() {
	const navigate = useNavigate();

	const handleSearchClick = () => {
		navigate("/routes");
	};

	return (
		<div className="search-result">
			<img src={searchResultSrcShot} alt="gg map search page" onClick={handleSearchClick}></img>
			<div className="search-result__get-direction"></div>
		</div>
	);
}
