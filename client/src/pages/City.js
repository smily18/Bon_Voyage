import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuthContext } from "../hooks/useAuthContext";
import { URL } from "../App";

const City = () => {
  const [cities, setCities] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(`${URL}/city`, {
        headers: {
          Authorization: `Bearer ${user.token} `,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setCities(json);
      }
    };
    if (user) {
      fetchCities();
    }
  }, [user]);

  return (
    <div className="city">
      <h3>Cities</h3>
      {!cities && (
          <div className="center">
            <div className="ring"></div>
            <span>Loading....</span>
          </div>
        )}
      <div className="cities">
        {cities && cities.map((city) => <Card key={city._id} city={city} />)}
      </div>
    </div>
  );
};

export default City;
