import { React, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import InfoDetail from "./InfoDetail";

function Info() {
  const [countryInfo, setCountryInfo] = useState([]);

  const location = useLocation();
  const name = location.pathname.replace(/[^a-zA-Z0-9 ]/, "");
  const nam = name.replace(/[^a-zA-Z0-9 ]/, "").toLowerCase();

  useEffect(() => {
    const getCountryInfo = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${nam}`
      );
      const data = await response.json();
      setCountryInfo(data);
    };
    getCountryInfo();
  }, []);

  return (
    <div className="container mt-14">
      {countryInfo.map((country) => (
        <InfoDetail
          key={country.name.common}
          image={country.flags.png}
          name={country.name.common}
          population={country.population}
          capital={country.capital}
          region={country.region}
          tld={country.tld}
          currencies={Object.keys(country.currencies).map(
            (key) => country.currencies[key].name
          )}
          subregion={country.subregion}
          languages={Object.keys(country.languages).map(
            (key) => country.languages[key]
          )}
          nativeName={Object.keys(country.name.nativeName).map(
            (key) => country.name.nativeName[key].official
          )}
          borders={country.borders}
        />
      ))}
    </div>
  );
}

export default Info;
