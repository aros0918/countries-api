import { useSearchContext } from "../../context/SearchContext";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import "../../index.css";
import CountryCard from "./CountryCard/CountryCard";

const CountryList = () => {
  const {
    data: countries,
    loading,
    error,
  } = useAxiosFetch(`https://restcountries.com/v2/all`);

  const { search, searchCountries, regions } = useSearchContext();

  return (
    <section className="mt-10 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {!search &&
          regions &&
          regions.map((region: any, index: number) => (
            <CountryCard key={index} {...region} />
          ))}
        {searchCountries &&
          searchCountries.map((searchCountry: any, index: number) => (
            <CountryCard key={index} {...searchCountry} />
          ))}
        {!search &&
          countries &&
          countries.map((country: any, index: number) => (
            <CountryCard key={index} {...country} />
          ))}
      </div>
      {loading && (
        <div className="h-[calc(100vh_-_80px)] flex justify-center mt-24">
          <article className="loader"></article>
        </div>
      )}
      {error && (
        <div className="h-[calc(100vh_-_80px)] flex flex-col mt-5">
          <h1 className="text-[red] text-4xl md:text-4xl lg:text-7xl  font-800 tracking-wide ">
            No country found!
          </h1>
          <p className="text-dark-gray">
            Please refresh the page or go to back.
          </p>
        </div>
      )}
    </section>
  );
};

export default CountryList;
