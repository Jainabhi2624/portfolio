import { linksArr } from "../../data";

const Navbar = () => {
  const linksArrData = linksArr;
  return (
    <nav className="hidden w-2/4 items-center justify-around md:flex ">
      {linksArrData.map((lk) => (
        <div
          key={lk.address}
          role="nav-link container"
          className="group w-max cursor-pointer rounded-md py-3 px-5 uppercase transition-all hover:bg-[#ece5e517]"
        >
          <a href={lk.address}>
            <p className="text-textGray font-roboto group-hover:text-lightBlue w-max text-sm font-bold">
              {lk.name}
            </p>
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
