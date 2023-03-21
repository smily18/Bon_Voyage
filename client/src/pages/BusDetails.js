import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BusDetails = () => {
  const { name } = useParams();
  const [bus, setBus] = useState(null);

  useEffect(() => {
    const fetchBus = async () => {
      const response = await fetch("/bus/" + name);
      const json = await response.json();

      if (response.ok) {
        setBus(json);
      }
    };
    fetchBus();
  }, [name]);

  return (
    <div className="bus-details">
      {bus&& <div>
        <h2>Bus Name : {bus.name}</h2>
        <h4>Location:</h4>
        {bus.location.map((route) => (
          <p>{route}</p>
        ))}
      </div>}
    </div>
  );
};

export default BusDetails;
