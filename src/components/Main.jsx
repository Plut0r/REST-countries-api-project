import React, { useEffect } from "react";
import Country from "./Country";

function Main() {
  const [countries, setCountries] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all/?limit=10"
      );
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    };
    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      country.region.toLowerCase().includes(filters.toLowerCase())
    );
  });

  return (
    <div className="container relative">
      <div className="mt-10 flex flex-col md:flex-row gap-5 md:gap-0 md:items-center justify-between">
        <input
          className="md:w-[380px] h-[50px] dark:bg-darkBlueDark dark:placeholder:text-white dark:text-white pl-5 rounded-md outline-none placeholder:text-darkGray"
          type="text"
          placeholder="Search for a country..."
          onChange={handleSearch}
          value={search}
        />
        <div className="">
          <div className="flex items-center px-6 justify-between bg-white dark:bg-darkBlueDark h-[50px] w-[200px] rounded-md font-semibold text-veryDarkBlue dark:text-white">
            <h4 className="">Filter by region</h4>
            <i
              className="fa fa-sort-desc text-xl cursor-pointer mt-[-10px]"
              onClick={handleShow}
            ></i>
          </div>
          {show && (
            <ul className="absolute flex flex-col gap-2 bg-white dark:bg-darkBlueDark dark:text-white mt-2 rounded-md w-[200px] pl-6 pt-3 pb-3">
              <li
                className="text-md font-semibold cursor-pointer hover:text-darkGray"
                onClick={() => {
                  setFilters("America");
                  setShow(false);
                }}
              >
                America
              </li>
              <li
                className="text-md font-semibold cursor-pointer hover:text-darkGray"
                onClick={() => {
                  setFilters("Asia");
                  setShow(false);
                }}
              >
                Asia
              </li>
              <li
                className="text-md font-semibold cursor-pointer hover:text-darkGray"
                onClick={() => {
                  setFilters("Africa");
                  setShow(false);
                }}
              >
                Africa
              </li>
              <li
                className="text-md font-semibold cursor-pointer hover:text-darkGray"
                onClick={() => {
                  setFilters("Europe");
                  setShow(false);
                }}
              >
                Europe
              </li>
              <li
                className="text-md font-semibold cursor-pointer hover:text-darkGray"
                onClick={() => {
                  setFilters("Oceania");
                  setShow(false);
                }}
              >
                Oceania
              </li>
            </ul>
          )}
        </div>
      </div>
      {loading ? (
        <p className="text-3xl dark:text-white flex justify-center font-normal mt-14">Data Loading...</p>
      ) : (
        <div className="flex gap-16 gap-y-10 flex-wrap mt-12 justify-center lg:justify-start">
          {filteredCountries.map((country) => (
            <Country
              key={country.name.common}
              image={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
