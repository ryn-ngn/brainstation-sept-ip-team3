import "./Arrived.scss";
import NotificationModal from "../../components/NotificationModal/NotificationModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import rating from "../../assets/images/ratingScrShot.png";

export default function Arrived() {
	const [showRating, setShowRating] = useState(false);

	const handleCloseModal = (e) => {
		setShowRating(false);
	};
	return (
		<div className="arrived">
			{/* <img src={onRoute} alt="google map on-route"></img> */}
			<NotificationModal
				heading={
					"Would you like to let your selected contacts know that you've made it to your destination?"
				}
				content={"Only your selected contacts will get the notification."}
				arrivalNoticeRequired={true}
				setShowRating={setShowRating}
			/>

			{showRating && (
				<div className="modal-overlay">
					<Link to="/">
						<div onClick={handleCloseModal} className="modal-content">
							<h2>Notification Sent</h2>
							<img src={rating} alt="rating modal"></img>
						</div>
					</Link>
				</div>
			)}
		</div>
	);
}
