import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Country(props) {
  const { name, population, region, capital, image } = props;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `${name}`;
    navigate(path);
  };

  return (
    <div
      onClick={routeChange}
      className="bg-white dark:bg-darkBlueDark shadow-md flex flex-col w-64 h-[370px] rounded-md cursor-pointer hover:shadow-xl"
    >
      <img
        src={image}
        alt={name}
        className="w-64 h-40 mb-[25px] rounded-t-md"
      />
      <div className="flex flex-col pl-4">
        <h2 className="text-veryDarkBlue dark:text-white font-extrabold text-xl mb-3">
          {name}
        </h2>
        <p className="text-darkGray dark:text-white text-md font-semibold">
          <span className="text-veryDarkBlue dark:text-white">Population:</span>{" "}
          {population}
        </p>
        <p className="text-darkGray dark:text-white text-md font-semibold">
          <span className="text-veryDarkBlue dark:text-white">Region:</span>{" "}
          {region}
        </p>
        <p className="text-darkGray dark:text-white text-md font-semibold">
          <span className="text-veryDarkBlue dark:text-white">Capital:</span>{" "}
          {capital}
        </p>
      </div>
    </div>
  );
}

export default Country;
