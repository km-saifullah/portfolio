import Button from "../utils/Button";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="py-5 bg-mainBg">
      <section className="container mx-auto">
        <main className="flex items-center justify-between px-2 md-px-0">
          <section>
            <h2 className="text-purple-800 text-xl md:text-2xl font-bold font-sora">
              kmSaifullah
            </h2>
          </section>
          <section>
            <section className="flex items-center gap-x-5">
              <ul className="hidden lg:flex items-center gap-x-6 ">
                <li className="text-navLink text-base font-normal font-sora cursor-pointer">
                  About
                </li>
                <li className="text-navLink text-base font-normal font-sora cursor-pointer">
                  Services
                </li>
                <li className="text-navLink text-base font-normal font-sora cursor-pointer">
                  Skills
                </li>
                <li className="text-navLink text-base font-normal font-sora cursor-pointer">
                  Projects
                </li>
                <li className="text-navLink text-base font-normal font-sora cursor-pointer">
                  Achievements
                </li>
                <li className="text-navLink text-base font-normal font-sora cursor-pointer">
                  Blogs
                </li>
                <li className="text-navLink text-base font-normal font-sora cursor-pointer">
                  Contact
                </li>
              </ul>
              <Button title="Contact Me" />
              <div className="block lg:hidden">
                <HiBars3 className="text-4xl text-priamry cursor-pointer" />
              </div>
            </section>
          </section>
        </main>
      </section>
    </nav>
  );
};

export default Navbar;
