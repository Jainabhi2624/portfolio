const SectionHeading = ({ headingName }) => {
  return (
    <div className="w-full px-3 md:px-8">
      <h1
        className=" animate-moveColors font-noto text-textGray my-3  bg-gradient-to-tr from-[#8e67e0]  via-[#f57fd4] to-[#c5fd43] bg-clip-text text-6xl font-bold sm:text-7xl xl:text-8xl "
        style={{
          WebkitTextFillColor: "transparent",
          backgroundSize: "300% 300%",
        }}
      >
        {headingName}
      </h1>
    </div>
  );
};

export default SectionHeading;
