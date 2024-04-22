import "./OnRoute.scss";
import NotificationModal from "../../components/NotificationModal/NotificationModal";
import { useNavigate } from "react-router-dom";

export default function OnRoute() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/arrived");
  };

  return (
    <div className="onRoute">
      {/* <img src={onRoute} alt="google map on-route"></img> */}
      <NotificationModal
        heading={"It seems dark here"}
        content={"Would you like to turn the flashlight"}
      />

      <div onClick={handleSearchClick} className="onRoute__exit"></div>
    </div>
  );
}
