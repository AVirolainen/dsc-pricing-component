import "./Card.css";

const Card = (props) => {
  return (
    <div className="cardBody">
      <div className="cardType">{props.type}</div>
      <div className="cardPrice">${props.cost}</div>
      <div className="description">
        <div className="descriptionItem">{props.storage} Storage</div>
        <div className="descriptionItem">{props.users} Users Allowed</div>
        <div className="descriptionItem">Send up to {props.memory} GB</div>
      </div>
      <div className="button">learn more</div>
    </div>
  );
};

export default Card;
