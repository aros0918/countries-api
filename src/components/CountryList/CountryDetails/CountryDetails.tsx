import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import "../../../index.css";

interface Props {
  name: string;
  population: string | number;
  region: string;
  capital: string;
  flag: string;
}

const CountryDetails = () => {
  const { name } = useParams();
  const { data, loading, error } = useAxiosFetch(
    `https://restcountries.com/v2/name/${name}`
  );

  if (data) {
    return (
      <main className="bg-very-light-gray dark:bg-very-dark-blue mt-20 duration-500 ease-in-out lg:h-[calc(100vh_-_80px)]">
        <div className="pt-10 lg:pt-16 w-[85%] m-auto md:w-4/5 pb-10">
          <Link to="/">
            <button className="bg-[white] py-2 px-6 rounded flex items-center gap-3 shadow-md dark:bg-dark-blue dark:text-very-light-gray">
              <FaArrowLeft /> Back
            </button>
          </Link>
          {data &&
            data.map((country: string | any) => {
              const {
                flag,
                name,
                nativeName,
                population,
                region,
                subregion,
                capital,
                topLevelDomain,
                currencies,
                languages,
                borders,
              } = country;
              return (
                <article
                  className="mt-11 rounded flex flex-col lg:flex-row lg:justify-between lg:gap-7"
                  key={name}
                >
                  <img
                    className="h-52 lg:w-full lg:flex-[1] lg:h-96"
                    src={flag}
                    alt={name}
                  />
                  <div className="py-5 mt-5 lg:flex lg:justify-between lg:mt-0 lg:py-0 lg:flex-[1]">
                    <div className="mt-5 flex flex-col gap-4 lg:mt-0">
                      <h3 className="font-800 text-xl dark:text-very-light-gray lg:text-2xl">
                        {name}
                      </h3>
                      {nativeName && (
                        <h4 className="dark:text-very-light-gray font-600">
                          Native Name:{" "}
                          <span className="text-dark-gray">{nativeName}</span>
                        </h4>
                      )}
                      {population && (
                        <h4 className="dark:text-very-light-gray font-600">
                          Population:{" "}
                          <span className="text-dark-gray">{population}</span>
                        </h4>
                      )}
                      {subregion && (
                        <h4 className="dark:text-very-light-gray font-600">
                          Sub Region:{" "}
                          <span className="text-dark-gray">{subregion}</span>
                        </h4>
                      )}
                      {region && (
                        <h4 className="dark:text-very-light-gray font-600">
                          Region:{" "}
                          <span className="text-dark-gray">{region}</span>
                        </h4>
                      )}
                      {capital && (
                        <h4 className="dark:text-very-light-gray font-600">
                          Captital:{" "}
                          <span className="text-dark-gray">{capital}</span>
                        </h4>
                      )}
                    </div>
                    <div className="mt-12 flex flex-col gap-4 lg:mt-12">
                      {topLevelDomain && (
                        <h4 className="dark:text-very-light-gray font-600">
                          Top Level Domain:{" "}
                          {topLevelDomain.map(
                            (domain: any, index: number) =>
                              domain && (
                                <span key={index} className="text-dark-gray">
                                  {domain}
                                </span>
                              )
                          )}
                        </h4>
                      )}
                      {currencies && (
                        <h4 className="dark:text-very-light-gray font-600">
                          Currencies:{" "}
                          {currencies.map(
                            (currency: any, index: number) =>
                              currency && (
                                <span key={index} className="text-dark-gray">
                                  {currency.name}
                                </span>
                              )
                          )}
                        </h4>
                      )}
                      {languages && (
                        <h4 className="dark:text-very-light-gray font-600">
                          Languages:{" "}
                          {languages.map(
                            (languange: any, index: number) =>
                              languange && (
                                <span key={index} className="text-dark-gray">
                                  {languange.name},{" "}
                                </span>
                              )
                          )}
                        </h4>
                      )}
                      <div className="mt-12 lg:mt-0">
                        {borders && (
                          <h4 className="dark:text-very-light-gray font-600">
                            Bourder Countries:{" "}
                            {borders.map(
                              (border: any, index: number) =>
                                border && (
                                  <span key={index} className="text-dark-gray">
                                    {border},{" "}
                                  </span>
                                )
                            )}
                          </h4>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          {loading && (
            <div className="flex justify-center mt-24 h-[calc(100vh_-_80px)]">
              <article className="loader"></article>
            </div>
          )}
          {error && (
            <div className="flex flex-col mt-5 h-[calc(100vh_-_80px)] w-full">
              <h1 className="text-[red] text-4xl md:text-4xl lg:text-7xl  font-800 tracking-wide ">
                No country found!
              </h1>
              <p className="text-dark-gray">
                Please refresh the page or go to back.
              </p>
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <>
      {loading && (
        <main className="bg-very-light-gray dark:bg-very-dark-blue mt-20 duration-500 ease-in-out lg:h-[calc(100vh_-_80px)]">
          <h1>No Countries found </h1>
        </main>
      )}
    </>
  );
};

export default CountryDetails;
