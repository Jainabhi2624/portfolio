import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "../small_components/SectionHeading";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Button from "../small_components/Button";
import { workData } from "../../data";
import gsap from "gsap";

const WorkSection = () => {
  const slideShowData = workData;
  const [index, setIndex] = useState(0);

  // GSAP animation stuff...
  const tl = gsap.timeline();

  const leftBtn = () => {
    if (index >= 1) {
      setIndex(index - 1);
      tl.fromTo(
        "#content",
        1.2,
        {
          opacity: 0,
          x: 20,
          ease: "power3.out",
        },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
        }
      );
    } else return;
  };

  const rightBtn = () => {
    if (index < slideShowData.length - 1) {
      setIndex(index + 1);
      tl.fromTo(
        "#content",
        1.2,
        {
          opacity: 0,
          x: -20,
          ease: "power3.out",
        },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
        }
      );
    } else return;
  };

  return (
    <section className="bg-darkBlue h-full w-full p-5" id="work">
      <SectionHeading headingName={"Work"} />
      {/* content starts */}
      {slideShowData.length > 1 ? (
        <div className="mx-auto mt-5 grid h-full w-full  gap-7 py-8 sm:grid-cols-2 md:w-fit md:px-10 lg:mt-8 xl:gap-16  ">
          {/* left container */}
          <div className="font-roboto flex w-full max-w-[65ch] flex-col ">
            {/* ------Arrrow container----- */}
            <div
              role="arrow-container"
              className="mt-6 flex w-[22ch] flex-row items-center justify-between sm:mt-0"
            >
              <button
                className="bg-lightBlue w-fit cursor-pointer rounded-sm p-3 text-xl text-[white]"
                onClick={leftBtn}
              >
                <FaLongArrowAltLeft aria-label="left arrow of slideshow" />
              </button>

              <p className="font-noto w-fit text-xl font-bold text-[white]">
                0{index + 1}/0{slideShowData.length}
              </p>

              <button
                className="bg-lightBlue w-fit cursor-pointer rounded-sm p-3 text-xl text-[white]"
                onClick={rightBtn}
              >
                <FaLongArrowAltRight aria-label="left arrow of slideshow" />
              </button>
            </div>
            {/* ----Arrow container ends----- */}
            <div
              className="font-roboto mt-5 flex flex-col xl:justify-between 2xl:mt-10"
              id="content"
            >
              <h2 className="text-textGray  text-5xl font-bold sm:text-6xl ">
                {" "}
                {slideShowData[index].websiteName}
              </h2>
              <p className="mt-3 font-bold text-[#A98AF1] xl:mt-6 ">
                Tech Stack
              </p>
              {/* ----Chip container----- */}
              <div
                role="chip container"
                className="mt-2 flex flex-row flex-wrap items-center justify-start"
              >
                {slideShowData[index].techStack.map((tech) => (
                  <div
                    key={tech}
                    role="chip"
                    className="mr-2 mt-2 rounded-lg bg-[#494B54] px-4 py-1 text-sm font-bold text-[white]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              {/* info about the project */}
              <p className="text-textGray mt-5 2xl:mt-10 ">
                {slideShowData[index].description}
              </p>
              {/* button container */}
              <div className="mt-5 flex flex-row justify-start py-2 2xl:mt-10 ">
                {slideShowData[index].previewLink ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={slideShowData[index].previewLink}
                  >
                    <Button content="Preview" bgColor="#F14DC3" icon="FaEye" />
                  </a>
                ) : (
                  ""
                )}
                {slideShowData[index].githubLink ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={slideShowData[index].githubLink}
                  >
                    <Button content="GitHub" bgColor="blue" icon="FaGithub" />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {/* right container */}
          <div className="relative row-start-1 h-[400px] max-h-[500px] w-full max-w-[500px] overflow-hidden sm:row-start-auto md:w-full">
            <div className="w-[100px]">
              <Image
                src={slideShowData[index].image}
                alt="parshant dhall image"
                quality={100}
                layout="fill"
                objectFit="cover"
                objectPosition="left"
                className=" rounded-lg transition-all "
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default WorkSection;
