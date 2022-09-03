import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  population: string | number;
  region: string;
  capital: string;
  flag: string;
}

const CountryCard: React.FC<Props> = ({
  name,
  population,
  region,
  capital,
  flag,
}) => {
  return (
    <Link to={`/country/details/${name}`}>
      <article className="bg-[white] rounded flex flex-col dark:bg-dark-blue shadow-md h-full">
        <img className="flex-[1]" src={flag} alt={name} />
        <div className="p-5">
          <h3 className="font-800 text-xl dark:text-very-light-gray">{name}</h3>
          <div className="mt-4">
            {population && (
              <h4 className="dark:text-very-light-gray">
                Population: <span className="text-dark-gray">{population}</span>
              </h4>
            )}
            {region && (
              <h4 className="dark:text-very-light-gray">
                Region: <span className="text-dark-gray">{region}</span>
              </h4>
            )}
            {capital && (
              <h4 className="dark:text-very-light-gray">
                Captital: <span className="text-dark-gray">{capital}</span>
              </h4>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default React.memo(CountryCard);
