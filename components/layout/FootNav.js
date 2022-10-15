import { linksArr } from "../../data";

const FootNav = () => {
  const linkData = linksArr;

  return (
    <div className="fixed bottom-0 left-0 z-50 min-w-full bg-[#ece5e517] p-3 backdrop-blur-lg">
      <div className="flex flex-row flex-nowrap items-center justify-around">
        {linkData.map((lk) => (
          <div className="text-lightBlue p-2 text-2xl" key={lk.name}>
            <a href={lk.address} title={lk.name}>
              <lk.icon />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootNav;
