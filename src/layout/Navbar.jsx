import { useState } from "react";
import Button from "../utils/Button";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <nav className="py-8 bg-mainBg">
      <section className="container mx-auto">
        <main className="flex items-center justify-between px-2 md-px-0">
          <section>
            <h2 className="text-white text-xl md:text-2xl font-bold font-sora">
              kmSaifullah
            </h2>
          </section>
          <section>
            <section className="flex items-center gap-x-5">
              <ul className="hidden lg:flex items-center gap-x-6 ">
                <li className="text-white text-base font-normal font-sora cursor-pointer">
                  About
                </li>
                <li className="text-white text-base font-normal font-sora cursor-pointer">
                  Services
                </li>
                <li className="text-white text-base font-normal font-sora cursor-pointer">
                  Skills
                </li>
                <li className="text-white text-base font-normal font-sora cursor-pointer">
                  Projects
                </li>
                <li className="text-white text-base font-normal font-sora cursor-pointer">
                  Achievements
                </li>
                <li className="text-white text-base font-normal font-sora cursor-pointer">
                  Blogs
                </li>
                <li className="text-white text-base font-normal font-sora cursor-pointer">
                  Contact
                </li>
              </ul>
              <Button title="Contact Me" />
              <div className="block lg:hidden">
                <HiBars3
                  className="text-4xl text-white cursor-pointer"
                  onClick={toggleSidebar}
                />
              </div>
            </section>
            <div
              className={`fixed z-10 top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center px-4 py-3">
                <h2 className="text-xl font-semibold text-secondary">
                  kmSaifullah
                </h2>
                <HiXMark
                  className="text-3xl text-primary cursor-pointer"
                  onClick={toggleSidebar}
                />
              </div>
              <nav className="mt-4">
                <ul className="space-y-4 px-4">
                  <li>
                    <a href="#home" className="block text-lg text-gray-700">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="block text-lg text-gray-700">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="block text-lg text-gray-700">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="block text-lg text-gray-700">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              {isSidebarOpen && (
                <div
                  className="fixed inset-0 bg-primary bg-opacity-10 cursor-pointer"
                  onClick={toggleSidebar}
                ></div>
              )}
            </div>
          </section>
        </main>
      </section>
    </nav>
  );
};

export default Navbar;
