import React from "react";
import { Link } from "react-router-dom";

function InfoDetail(props) {
  const {
    image,
    name,
    nativeName,
    population,
    region,
    capital,
    subregion,
    tld,
    currencies,
    languages,
    borders,
  } = props;

  return (
    <div className="">
      <Link
        to="/"
        className="bg-white dark:bg-darkBlueDark rounded-md px-10 py-3 text-xl text-veryDarkBlue dark:text-white flex items-center justify-center gap-3 w-32 hover:opacity-75"
      >
        <span>
          <i className="fa fa-long-arrow-left"></i>
        </span>
        Back
      </Link>
      <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-16 mb-10">
        <div className="flex h-[250px] shadow-md w-fit">
          {image && <img className="" src={image} alt="flag" width="400px" />}
        </div>
        <div className="flex flex-col gap-5 lg:w-[50%]">
          {name && (
            <h3 className="font-extrabold dark:text-white text-veryDarkBlue text-3xl">
              {name}
            </h3>
          )}
          <div className="font-semibold dark:text-white text-veryDarkBlue text-md flex flex-col md:flex-row gap-10 md:gap-24 lg:justify-between">
            <div className="flex flex-col gap-2">
              {nativeName && (
                <p className="flex gap-2">
                  <span>Native Name:</span>
                  <span>{nativeName}</span>
                </p>
              )}
              {population && (
                <p className="flex gap-1">
                  <span>Population:</span>
                  <span>{population}</span>
                </p>
              )}
              {region && (
                <p className="flex gap-2">
                  <span>Region:</span>
                  <span>{region}</span>
                </p>
              )}
              {subregion && (
                <p className="flex gap-2">
                  <span>Sub Region:</span>
                  <span>{subregion}</span>
                </p>
              )}
              {capital && (
                <p className="flex gap-2">
                  <span>Capital:</span>
                  <span>{capital}</span>
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              {tld && (
                <p className="flex gap-2">
                  <span>Top Level Domain:</span>
                  <span>{tld}</span>
                </p>
              )}
              {currencies && (
                <p className="flex gap-2">
                  <span>Currencies:</span>
                  <span>{currencies}</span>
                </p>
              )}
              {languages && (
                <p className="flex gap-2">
                  <span>Languages:</span>
                  {languages.map((language) => (
                    <span key={language}>{language},</span>
                  ))}
                </p>
              )}
            </div>
          </div>
          {borders && (
            <h3 className="font-semibold flex flex-col md:flex-row gap-5 items-start md:items-center dark:text-white text-veryDarkBlue text-md">
              <span>Border Countries:</span>
              <div className="flex flex-wrap gap-3">
                {borders.map((border) => (
                  <span
                    key={border}
                    className="bg-white dark:bg-darkBlueDark rounded-md px-4 py-2 text-veryDarkBlue dark:text-white text-sm font-semibold md:ml-2"
                  >
                    {border}
                  </span>
                ))}
              </div>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoDetail;
