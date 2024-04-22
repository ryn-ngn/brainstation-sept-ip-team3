import "./MapDetail.scss";
import { useState } from "react";
import firstRoute from "../../assets/images/firstRoute.png";
import secondRoute from "../../assets/images/secondRoute.png";
import { useNavigate } from "react-router-dom";

function MapDetail({ origin, destination, routes, setRouteIndex }) {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState(0);

  const handleClick = (index) => {
    setRouteIndex(index);
    setActiveRoute(index);
  };

  const handleClickStart = (index) => {
    navigate("/onRoute");
  };

  return (
    <>
      {/* {routes.length > 0 && (
        <div className="maps__details">
          <h3 className="maps__route">
            Direction:{" "}
						<span className="maps__route-direction">
							{origin.split(",")[0]} to {destination.split(",")[0]}
						</span>
            Routes:
          </h3>
          {routes.map((route, index) => (
            <div
              className={`maps__route-detail ${
                activeRoute === index ? "maps__route-detail--active" : ""
              }`}
              key={route.summary}
              onClick={() => handleClick(index)}
            >
              <div className="maps__route-summary">
                <p>Route Name: {route.summary}</p>
                <p>route rating ...</p>
              </div>
              <p className="maps__route-info">detailed info ...</p>
              <div className="maps__route-data">
                <p>Duration: {route.legs[0].duration.text}</p>
                <p>Distance: {route.legs[0].distance.text}</p>
              </div>
            </div>
          ))}
        </div>
      )} */}
      <div className="maps__details">
        <img src={firstRoute} alt="First Route" onClick={() => handleClick(0)} />
        <div className="start-button-1" onClick={handleClickStart}></div>
      </div>
      <div className="maps__details">
        <img src={secondRoute} alt="Second Route" onClick={() => handleClick(1)} />
        <div className="start-button-2" onClick={handleClickStart}></div>
      </div>
    </>
  );
}

export default MapDetail;
