import "./CardMain.css";

const CardMain = (props) => {
  return (
    <div className="cardMainBody">
      <div className="cardMainType">Proffesional</div>
      <div className="cardPrice">${props.cost}</div>
      <div className="description">
        <div className="descriptionMainItem">1 TB Storage</div>
        <div className="descriptionMainItem">5 Users Allowed</div>
        <div className="descriptionMainItem">Send up to 10 GB</div>
      </div>
      <div className="mainButton">learn more</div>
    </div>
  );
};

export default CardMain;
