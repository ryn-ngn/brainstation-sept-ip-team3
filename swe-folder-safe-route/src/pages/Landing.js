import DestinationReachedToast from "../components/DestinationReachedToast/DestinationReachedToast";
import GGMap from "../components/GGMap/GGMap";
import IntroModal from "../components/IntroModal/IntroModal";
import "./Landing.scss";

export default function Landing() {
  return (
    <div className="maps">
      <IntroModal />
      <GGMap />

      <DestinationReachedToast />
    </div>
  );
}
