import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { useDarkmodeContext } from "../../context/DarkmodeContext";

const Navbar = () => {
  const { darkmode, setDarkmode } = useDarkmodeContext();

  return (
    <nav className="h-20 w-full bg-[white] dark:bg-dark-blue duration-500 ease-in-out fixed top-0 shadow-sm z-10">
      <div className="w-[90%] md:w-4/5 m-auto flex items-center justify-between h-full">
        <h1 className="font-800 md:text-3xl tracking-wide dark:text-very-light-gray">
          Where in the world?
        </h1>
        <div
          className="flex items-center gap-2 h-full"
          onClick={() => setDarkmode((darkmode: any) => !darkmode)}
        >
          <div className="cursor-pointer">
            {darkmode ? (
              <HiMoon className="dark:text-very-light-gray text-lg" />
            ) : (
              <HiOutlineMoon className="text-lg" />
            )}
          </div>
          <h3 className="dark:text-very-light-gray font-600 cursor-pointer">
            Dark Mode
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
