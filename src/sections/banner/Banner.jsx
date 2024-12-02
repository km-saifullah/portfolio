import React from "react";
import { Link } from "react-router-dom";
import { GrLinkedinOption } from "react-icons/gr";
import { RiGithubFill } from "react-icons/ri";
import { FaDev } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import avatar from "/saifullah.jpg";

const socialLinks = [
  {
    linkedin: "https://www.linkedin.com/in/kmsaifullah",
  },
  {
    github: "https://github.com/km-saifullah",
  },
  { dev: "https://dev.to/kmsaifullah" },
  { youtube: "https://www.youtube.com/@kmSaifullah" },
];

const Banner = () => {
  return (
    <main className="py-10">
      <section className="container mx-auto">
        <section className="flex items-center justify-between flex-col lg:flex-row gap-y-8 lg:gap-y-0">
          <section className="space-y-2 lg:space-y-5">
            <h2 className="text-2xl lg:text-4xl text-textColor font-sora font-bold leading-[54px] text-center lg:text-left">
              This is Khaled Md Saifullah
            </h2>
            <h1 className="px-2 lg:px-0 w-full lg:w-[521px] text-4xl lg:text-[60px] text-secondary font-bold font-sora leading-[45px] lg:leading-[72px] text-center lg:text-left">
              I am a <span className="text-primary">MERN</span> Stack Developer
            </h1>
            <p className="px-2 lg:px-0 w-full lg:w-[520px] text-textColor text-base font-normal font-sora leading-[26px] text-center lg:text-left">
              Experienced MERN stack developer dedicated to creating captivating
              web experiences proficient in MongoDB, Express.js, React.js and
              Node.js technologies
            </p>
            <section className="px-2 flex md:flex-none items-center lg:items-start lg:justify-start justify-center py-4">
              <div className="flex items-center gap-x-3">
                <Link to={socialLinks[0].linkedin} target="_blank">
                  <div className="p-2 md:p-0 bg-primary h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-full flex items-center justify-center text-white text-2xl">
                    <GrLinkedinOption />
                  </div>
                </Link>
                <Link to={socialLinks[1].github} target="_blank">
                  <div className="p-2 md:p-0 bg-primary h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-full flex items-center justify-center text-white text-2xl">
                    <RiGithubFill />
                  </div>
                </Link>
                <Link to={socialLinks[2].dev} target="_blank">
                  <div className="p-2 md:p-0 bg-primary h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-full flex items-center justify-center text-white text-2xl">
                    <FaDev />
                  </div>
                </Link>
                <Link to={socialLinks[3].youtube} target="_blank">
                  <div className="p-2 md:p-0 bg-primary h-[40px] md:h-[50px] w-[40px] md:w-[50px] rounded-full flex items-center justify-center text-white text-2xl">
                    <BsYoutube />
                  </div>
                </Link>
                <Link>
                  <button className="px-4 py-3 border border-primary rounded-full text-primary bg-white text-base font-medium font-sora hover:bg-primary hover:text-white hover:transition-all hover:ease-linear hover:duration-300 hover:border-transparent">
                    Download CV
                  </button>
                </Link>
              </div>
            </section>
          </section>
          <section>
            <div className="w-[320px] h-[400px] md:w-[485px] md:h-[530px] overflow-hidden rounded-lg border-2 border-primary rotate-3 hover:rotate-0 transition-transform duration-300">
              <img src={avatar} alt="" />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Banner;
