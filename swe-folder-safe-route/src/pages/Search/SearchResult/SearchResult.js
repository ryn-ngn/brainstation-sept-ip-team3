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
			<img onClick={handleSearchClick} src={searchResultSrcShot} alt="gg map search page"></img>

			<div onClick={handleSearchClick} className="search-result__get-direction"></div>
		</div>
	);
}
