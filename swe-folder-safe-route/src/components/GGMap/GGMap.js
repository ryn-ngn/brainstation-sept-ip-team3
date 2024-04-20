import "./GGMap.scss";
import { useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import Header from "../Header/Header";
import MapDetail from "../MapDetail/MapDetail";
import Routes from "../Routes";
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function GGMap() {
  const center = { lat: 43.64238, lng: -79.39674 };
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const [mapCenter, setMapCenter] = useState(true);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="maps">
      <Header
        setOrigin={setOrigin}
        setDestination={setDestination}
        setMapCenter={setMapCenter}
        Autocomplete={Autocomplete}
      />
      <div className="maps__container">
        <APIProvider apiKey={apiKey}>
          <Map
            defaultCenter={center}
            defaultZoom={15}
            zoomControl={false}
            streetViewControl={false}
            mapTypeControl={false}
            fullscreenControl={false}
          >
            <Routes
              origin={origin}
              destination={destination}
              routeIndex={routeIndex}
              setRoutes={setRoutes}
              mapCenter={mapCenter}
            />
          </Map>
        </APIProvider>
      </div>
      <MapDetail
        origin={origin}
        destination={destination}
        routes={routes}
        setRouteIndex={setRouteIndex}
      />
    </div>
  );
}
