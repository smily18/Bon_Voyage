import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/Map";
import { useAuthContext } from "../hooks/useAuthContext";
import { GoLocation } from "react-icons/go";
import { URL } from "../App";

const BusDetails = () => {
  const { name } = useParams();
  const [bus, setBus] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchBus = async () => {
        const response = await fetch(`${URL}/bus/` + name, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();

        if (response.ok) {
          setBus(json);
        }
      };
      if (user) {
        fetchBus();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [name, user]);

  return (
    <div className="bus-details">
      {bus && (
        <div>
          <h2>Bus Name : {bus.name}</h2>
          <h4>Route Points :</h4>
          <div className="locations">
            {bus.route.map((r) => (
              <p key={r.id} className="location">
                <GoLocation />
                &nbsp;{r.place}
              </p>
            ))}
          </div>
        </div>
      )}
      {bus && (
        <Map
          position={bus.currentLocation}
          arr1={bus.allLat}
          arr2={bus.allLng}
          route={bus.route}
        />
      )}
    </div>
  );
};

export default BusDetails;
