import "./ModalContent.scss";

export default function ModalContent({ imgSrc, h2Content, pContent }) {
  return (
    <div>
      {h2Content && <h2>{h2Content}</h2>}
      {imgSrc && <img src={imgSrc} alt="two persons shake hands"></img>}
      <p>{pContent}</p>
    </div>
  );
}
