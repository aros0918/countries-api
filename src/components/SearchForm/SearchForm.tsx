import { FaSearch } from "react-icons/fa";
import { useSearchContext } from "../../context/SearchContext";

const SearchForm = () => {
  const { search, setSearch, searchRegion, setSearchRegion } =
    useSearchContext();

  return (
    <form className="p-0 m-0" onSubmit={(e) => e.preventDefault()}>
      <div className="m-auto md:w-full md:flex md:items-center md:justify-between">
        <div className="relative  md:w-full">
          <input
            className="w-full rounded p-3 pl-12 md:w-[30%] border-none outline-none shadow-sm dark:bg-dark-blue dark:text-very-light-gray"
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute top-[50%] left-4 translate-y-[-50%] text-dark-gray" />
        </div>
        <select
          className="rounded border-none outline-none p-3 pr-8 text-sm mt-8 md:mt-0 font-600  dark:bg-dark-blue dark:text-[#ccc]"
          name="region"
          id="region"
          value={searchRegion}
          onChange={(e) => setSearchRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default SearchForm;
