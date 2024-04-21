export default function ModalContent({
  imgSrc,
  isImgRequired,
  h2Content,
  pContent,
}) {
  return (
    <div>
      <h2>{h2Content}</h2>
      {isImgRequired && <img src={imgSrc} alt="two persons shake hands"></img>}
      <p>{pContent}</p>
    </div>
  );
}
