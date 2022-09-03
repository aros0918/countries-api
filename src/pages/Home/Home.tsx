import { CountryList, SearchForm } from "../../components";

const Home = () => {
  return (
    <main className="bg-very-light-gray dark:bg-very-dark-blue mt-20 duration-500 ease-in-out">
      <div className="w-[90%] m-auto md:w-4/5 pt-7 pb-10">
        <SearchForm />
        <CountryList />
      </div>
    </main>
  );
};

export default Home;
