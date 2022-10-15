import { socialLinks } from "../../data";

const Footer = () => {
  const socialLinksData = socialLinks;
  return (
    <footer className="min-h-8 text-textGray font-noto relative w-full bg-[#ece5e517] p-5 py-8">
      <div className="flex flex-row flex-wrap items-center justify-between">
        <div className="my-2 h-9 w-[40%] md:w-[15%]">
          <img alt="logo" src="/sign.png" className="h-full w-full" />
        </div>
        <div className="my-2">
          <p className="text-sm">
            © 2022-present Parshant Dhall. All Rights Reserved.
          </p>
        </div>
        <div
          role="social media container"
          className=" flex w-fit flex-row justify-start align-middle"
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
    </footer>
  );
};

export default Footer;
