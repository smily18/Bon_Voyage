import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const BusDetails = () => {
  const { name } = useParams();
  const [bus, setBus] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchBus = async () => {
      const response = await fetch("/bus/" + name, {
        headers: {
          "Authorization": `Bearer ${user.token}`,
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
  }, [name,user]);

  return (
    <div className="bus-details">
      {bus && (
        <div>
          <h2>Bus Name : {bus.name}</h2>
          <h4>Location:</h4>
          {bus.location.map((route) => (
            <p>{route}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusDetails;
