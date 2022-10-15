import Navbar from "../small_components/Navbar";

const Header = () => {
  return (
    <header className="bg-darkBlue  z-50 flex w-full min-w-full items-center justify-between px-6 py-8 pb-4 backdrop-blur-lg">
      <div className="h-9 w-[40%] md:w-[15%]">
        <img alt="logo" src="/sign.png" className="h-full w-full" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
