import { useState, useEffect } from "react";
import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps";

function Routes({ origin, destination, routeIndex, setRoutes, mapCenter }) {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();

  useEffect(() => {
    if (!map || !routesLibrary) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    const getRoutes = async () => {
      if (!directionsService || !directionsRenderer || !origin || !destination)
        return;
      const response = await directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true,
      });
      directionsRenderer.setDirections(response);
      setRoutes(response.routes);
    };
    getRoutes();
  }, [directionsService, directionsRenderer, origin, destination, mapCenter]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  return <div>Routes</div>;
}
// Simulate geolocation using mock data
const getCurrentLocation = () => {
  // Mock latitude and longitude coordinates
  const latitude = 37.7749;
  const longitude = -122.4194;
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
  // Use latitude and longitude to perform further actions
};

// Call the function to get the current location
getCurrentLocation();
export default Routes;
