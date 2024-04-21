import "./OnRoute.scss";
import NotificationModal from "../../components/NotificationModal/NotificationModal";

export default function OnRoute() {
  return (
    <div className="onRoute">
      {/* <img src={onRoute} alt="google map on-route"></img> */}
      <div className="modal-ctn">
        <NotificationModal
          heading={"It seems dark here"}
          content={"Would you like to turn the flashlight"}
        />
      </div>
    </div>
  );
}
