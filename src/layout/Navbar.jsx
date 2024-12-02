import Button from "../utils/Button";

const Navbar = () => {
  return (
    <nav className="pt-5 bg-mainBg">
      <section className="container mx-auto">
        <main className="flex items-center justify-between">
          <section>
            <h2 className="text-purple-800 text-2xl font-bold font-sora">
              kmSaifullah
            </h2>
          </section>
          <section>
            <section className="flex items-center gap-x-5">
              <ul className="flex items-center gap-x-6">
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
              <Button title="Contact me" />
            </section>
          </section>
        </main>
      </section>
    </nav>
  );
};

export default Navbar;
