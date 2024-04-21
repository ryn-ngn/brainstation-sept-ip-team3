import routesTop from "../../assets/images/routesTop.png";
import GGMap from "../../components/GGMap/GGMap";
import "./RouteOptions.scss";

export default function RouteOptions() {
	return (
		<div className="route-options">
			<img className="route-options__top" src={routesTop} alt="gg map route search"></img>
			<GGMap />
		</div>
	);
}
