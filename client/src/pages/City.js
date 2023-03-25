import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAuthContext } from "../hooks/useAuthContext";

const City = () => {
  const [cities, setCities] = useState(null);
  const {user}= useAuthContext();

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch("/city",{
        headers:{
          "Authorization":`Bearer ${user.token} `
        }
      });
      const json = await response.json();
      if (response.ok) {
        setCities(json);
      }
    };
    if(user){
      fetchCities();
    }
  }, [user]);

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
