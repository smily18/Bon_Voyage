import { useEffect, useState } from "react";
import Card from "../components/Card";

const City = () => {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch("/city");
      const json = await response.json();
      if (response.ok) {
        setCities(json);
      }
    };
    fetchCities();
  }, []);

  return (
    <div className="city">
      <h3>Cities</h3>
      <div className="cities">
        {!cities && <p>Loading..............</p>}
        {cities && cities.map((city) => <Card key={city._id} city={city} />)}
      </div>
    </div>
  );
};

export default City;
