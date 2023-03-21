import { Link } from "react-router-dom";

const Card = ({ city }) => {
  return (
    <div className="card">
      <Link to={`/city/${city.name}`}>
        <img src={city.img} alt={city.name} />

        <h4>{city.name}</h4>
      </Link>
    </div>
  );
};

export default Card;
