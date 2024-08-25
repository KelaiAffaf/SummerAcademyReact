import "./Card.css";
const Card = ({ flag, name, population }) => {
  return (
    <div className="card">
      <h1>{flag}</h1>
      <h3>{name} </h3>
      <p>{population} </p>
    </div>
  );
};

export default Card;
