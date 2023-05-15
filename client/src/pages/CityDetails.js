import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiBus } from "react-icons/bi";
import { useAuthContext } from "../hooks/useAuthContext";
import { URL } from "../App";

const CityDetails = () => {
  const { name } = useParams();
  const [city, setCity] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch(`${URL}/city/` + name, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setCity(json);
      }
    };
    if (user) {
      fetchCity();
    }
  }, [name, user]);

  return (
    <div className="city-details">
      {!city && (
        <div className="center">
          <div className="ring"></div>
          <span>Loading....</span>
        </div>
      )}
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
