import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import rocketAnimation from "../../public/rocket.json";

const ScrollToTopBtn = () => {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window && window.pageYOffset);
  const btnRef = useRef();
  const anim = useRef(null);

  const handleScrollToTop = () => {
    anim.current?.play();
    window && window.scrollTo(0, 0);
  };
  if (offSetY === 0) anim.current?.pause();
  useEffect(() => {
    if (btnRef.current) {
      anim.current = Lottie.loadAnimation({
        name: "Rocket animation",
        container: btnRef.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: rocketAnimation,
      });
    }
    return () => anim.current?.destroy();
  }, []);

  useEffect(() => {
    window && window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      ref={btnRef}
      className={`fixed bottom-8 right-6 z-30 hidden h-[100px] w-[100px] cursor-pointer transition-all md:inline-block ${
        offSetY > 500 ? "translate-x-0" : "translate-x-[200px]"
      }`}
    ></button>
  );
};

export default ScrollToTopBtn;
