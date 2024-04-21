import "./MapDetail.scss";
import { useState } from "react";

function MapDetail({ origin, destination, routes, setRouteIndex }) {
  const [activeRoute, setActiveRoute] = useState(0);

  const handleClick = (index) => {
    setRouteIndex(index);
    setActiveRoute(index);
  };

  return (
    <>
      {routes.length > 0 && (
        <div className="maps__details">
          <h3 className="maps__route">
            {/* Direction:{" "}
						<span className="maps__route-direction">
							{origin.split(",")[0]} to {destination.split(",")[0]}
						</span> */}
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
      )}
    </>
  );
}

export default MapDetail;
