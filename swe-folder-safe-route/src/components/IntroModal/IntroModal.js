import "./IntroModal.scss";
import { useEffect, useState } from "react";
import peopleImg from "../../assets/images/peopleImg.png";
import Button from "react-bootstrap/Button";
import ModalContent from "./ModelContent";

export default function IntroModal() {
  const [showModal, setShowModal] = useState(false);
  const [currentModalPage, setCurrentModalPage] = useState(0);

  const handleNextIteration = () => {
    // Update the current iteration based on previous state
    setCurrentModalPage(currentModalPage + 1);
    if (currentModalPage > 1) {
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

  const contentArr = [
    {
      title: "Welcome To Google Companion",
      text: `This feature uses AI to enhance your safety while navigating. Click through to see how it works!`,
    },
    {
      title: "Safety First",
      text: `Google Companion uses crime data to generate safer walking routes. It's like having a knowledgeable friend guiding you on your journey.`,
    },
    {
      title: "Tailored Recommendations",
      text: `Google Companion uses crime data to generate safer walking routes. It's like having a knowledgeable friend guiding you on your journey.`,
    },
    {
      title: "You’re In Control",
      text: "Your trust is important to us. You can turn off the Google Companion feature at any time. We're here to help, but you decide how and when.",
    },
    {
      title: "Data Protection",
      text: "We use your data only to improve your app experience and ensure safety. Your data remains private and exclusively shapes the AI's behaviour and recommendations.",
    },
  ];

  const renderContent = () => {
    switch (currentModalPage) {
      case 0:
        return (
          <div>
            <ModalContent
              isImgRequired={true}
              imgSrc={peopleImg}
              h2Content={contentArr[0].title}
              pContent={contentArr[0].text}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <ModalContent
              h2Content={contentArr[1].title}
              pContent={contentArr[1].text}
            />{" "}
            <ModalContent
              h2Content={contentArr[2].title}
              pContent={contentArr[2].text}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <ModalContent
              h2Content={contentArr[3].title}
              pContent={contentArr[3].text}
            />{" "}
            <ModalContent
              h2Content={contentArr[4].title}
              pContent={contentArr[4].text}
            />
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
