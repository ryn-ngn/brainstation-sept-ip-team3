import DestinationReachedToast from "../components/DestinationReachedToast/DestinationReachedToast";
import GGMap from "../components/GGMap/GGMap";
import IntroModal from "../components/IntroModal/IntroModal";
import RecommendedRoutes from "../components/RecommendedRoutes/RecommendedRoutes";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Landing() {
  return (
    <>
      <SearchBar />
      <IntroModal />
      <GGMap />
      <RecommendedRoutes />
      <DestinationReachedToast />
    </>
  );
}
