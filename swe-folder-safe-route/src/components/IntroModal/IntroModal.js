import "./IntroModal.scss";
import { useEffect, useState } from "react";
import peopleImg from "../../assets/images/peopleImg.png";
import thumpsup from "../../assets/images/thumpsup.png";
import Button from "react-bootstrap/Button";
import ModalContent from "./ModalContent";
import { ContentArr } from "./ContentAsset";
export default function IntroModal() {
  const [showModal, setShowModal] = useState(false);
  const [currentModalPage, setCurrentModalPage] = useState(0);

  const handleNextIteration = () => {
    // Update the current iteration based on previous state
    setCurrentModalPage(currentModalPage + 1);
    if (currentModalPage > 2) {
      setShowModal(false);
      setCurrentModalPage(0);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  if (!showModal) return null;

  const renderContent = () => {
    switch (currentModalPage) {
      case 0:
        return (
          <div>
            <ModalContent
              imgSrc={peopleImg}
              h2Content={ContentArr[0].title}
              pContent={ContentArr[0].text}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <ModalContent
              h2Content={ContentArr[1].title}
              pContent={ContentArr[1].text}
            />{" "}
            <ModalContent
              h2Content={ContentArr[2].title}
              pContent={ContentArr[2].text}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <ModalContent
              h2Content={ContentArr[3].title}
              pContent={ContentArr[3].text}
            />{" "}
            <ModalContent
              h2Content={ContentArr[4].title}
              pContent={ContentArr[4].text}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <ModalContent imgSrc={thumpsup} pContent={ContentArr[4].text} />
          </div>
        );
      default:
        return null;
    }
  };

  const contentToRender = renderContent();

  return (
    <>
      {showModal && (
        <div className="intro-modal-overlay">
          <section className="content">
            {contentToRender}
            <Button onClick={handleNextIteration} variant="primary">
              Next
            </Button>{" "}
          </section>
        </div>
      )}
    </>
  );
}
