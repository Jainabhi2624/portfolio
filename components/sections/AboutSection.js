/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SectionHeading from "../small_components/SectionHeading";
import { socialLinks } from "../../data";

const AboutSection = () => {
  const socialLinksData = socialLinks;

  return (
    <section
      className="bg-darkBlue  h-fit min-h-full min-w-full p-5 lg:mt-0"
      id="aboutme"
    >
      <SectionHeading headingName={"About Me"} />

      {/* content starts */}
      <div className="mx-auto  grid h-full w-full  gap-5 py-8 sm:grid-cols-2 md:w-fit md:px-10 lg:mt-12 ">
        {/* left container */}
        <div className="relative h-[400px] max-h-[500px] w-full max-w-[500px] overflow-hidden rounded-3xl md:w-[80%] ">
          <Image
            src="/my-image.png"
            alt="parshant dhall image"
            quality={100}
            layout="fill"
            objectFit="fill"
            className=" rounded-3xl saturate-0 transition-all hover:saturate-100"
          />
        </div>
        {/* right container */}
        <div className="text-textGray font-roboto flex w-full max-w-[65ch] flex-col justify-evenly  ">
          <div role="name" className="my-4">
            <h1 className="text-6xl font-bold ">Parshant Dhall</h1>
            <h2 className="text-[#ABAEAF]">Full-stack Developer</h2>
          </div>
          <div role="my introduction" className="my-4">
            <p>
              Hi there, my name is Parshant Dhall. I’m a full-stack developer
              and designer based in Australia. I have recently completed my
              Masters in IT and System and currently I'm working as a freelancer
              develoing human-centered products with focuse on assesibilty and
              SEO.
            </p>
          </div>
          <div role="sign container" className="my-4 w-[60%]">
            <img src="/sign.png" alt="My sign" className="h-full w-full" />
          </div>
          <div
            role="social media container"
            className="flex w-fit flex-row justify-start align-middle"
          >
            {socialLinksData.map((social) => (
              <div key={social.name} className="not-fir my-2 mr-3 h-fit w-fit">
                <a
                  href={social.link}
                  title={social.name}
                  className="text-3xl text-[blue]"
                >
                  <social.icon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
