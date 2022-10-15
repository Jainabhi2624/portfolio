import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "lottie-web";
import coderAnimation from "../../public/coder.json";
import Button from "../small_components/Button";

const HeroSection = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    let animationObj = null;
    // if the element is loaded then
    if (animationContainer.current && !animationObj) {
      animationObj = Lottie.loadAnimation({
        name: "Developer Hero animation",
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: coderAnimation,
      });
    }

    // GSAP animation stuff...
    const tl = gsap.timeline();

    tl.from("#name-heading", 1.5, {
      opacity: 1,
      y: 250,
      ease: "power3.out",
      skewY: 9,
      stagger: {
        amount: 0.9,
      },
    })
      .from("#designation", 1, {
        opacity: 1,
        y: 100,
        ease: "power3.out",
      })
      .from("#hero-btn-container", 1, {
        opacity: 1,
        y: 100,
        ease: "power3.out",
      });
  }, []);
  return (
    <section className="bg-darkBlue h-full w-full p-5" id="hero">
      {/* content starts */}
      <div className="mt-10 grid h-full w-full grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:px-10 lg:mt-12 ">
        {/* left container */}
        <div className="flex flex-col items-start justify-start md:px-10 xl:translate-x-[10%] 2xl:translate-y-[10%]">
          <p className="font-roboto text-textGray my-4 font-bold md:text-lg lg:text-xl">
            {"Hej 👋, I'm"}
          </p>
          <div className="w-fit overflow-hidden">
            <h1
              id="name-heading"
              className=" animate-moveColors font-noto text-textGray my-3 -translate-x-2 bg-gradient-to-tr from-[#8e67e0]  via-[#f57fd4] to-[#c5fd43] bg-clip-text text-7xl font-bold md:text-6xl lg:text-7xl xl:text-8xl "
              style={{
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
              }}
            >
              Parshant <br /> Dhall
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2
              id="designation"
              className="font-roboto text-textGray my-4 mt-2 w-max font-bold uppercase md:text-lg lg:text-xl"
            >
              {" "}
              fullstack developer
            </h2>
          </div>
          <div role="for animation" className="overflow-hidden">
            <div
              className="my-4 flex w-full flex-row justify-start"
              id="hero-btn-container"
            >
              <a href="#contact">
                <Button bgColor={"blue"} content="Say Hi 👋" />
              </a>
              <a href="/res.pdf" download>
                <Button bgColor={"#F14DC3"} content="Resume" />
              </a>
            </div>
          </div>
        </div>
        {/* right container */}
        <div
          role="animation container"
          ref={animationContainer}
          className="hidden h-max md:block"
        ></div>
      </div>
      {/* Down Arrow */}
      {/* <div className="mt-[-155px] flex w-full  justify-center align-middle text-2xl text-[white]">
        <a href="#aboutme">
          <FaArrowDown aria-label="down arrow" />
        </a>
      </div> */}
    </section>
  );
};

export default HeroSection;
