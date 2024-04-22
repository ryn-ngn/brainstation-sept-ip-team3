import "./NotificationModal.scss";
import { useEffect, useState } from "react";

export default function NotificationModal({
  heading,
  content,
  arrivalNoticeRequired,
  setShowRating,
}) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const handleCloseModal = (e) => {
    if (arrivalNoticeRequired && e.target.className === "btn-yes") {
      setShowRating(true);
    }
    setShowModal(false);
  };

  if (!showModal) return null;
  return (
    <>
      {showModal && (
        <div className="notification-overlay">
          <section className="content">
            <h3>{heading}</h3>
            <p>{content}</p>
            <button className="btn-learnMore">Learn More</button>
            <button onClick={handleCloseModal} className="btn-no">
              No
            </button>
            <button onClick={handleCloseModal} className="btn-yes">
              Yes
            </button>
          </section>
        </div>
      )}
    </>
  );
}
