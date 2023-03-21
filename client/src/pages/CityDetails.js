import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiBus } from "react-icons/bi";

const CityDetails = () => {
  const { name } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch("/city/" + name);
      const json = await response.json();
      if (response.ok) {
        setCity(json);
      }
    };
    fetchCity();
  }, [name]);

  return (
    <div className="city-details">
      {city &&
        city.bus.map((bus) => (
          <Link to={`/bus/${bus}`}>
            <h3 className="bus-route">
              <BiBus />
              &nbsp;&nbsp;{bus}
            </h3>
          </Link>
        ))}
    </div>
  );
};

export default CityDetails;
