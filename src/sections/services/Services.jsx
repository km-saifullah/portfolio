import { motion } from "motion/react";

const serviceData = [
  {
    id: 1,
    serviceName: "Web Development",
    detail:
      "Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.",
  },
  {
    id: 2,
    serviceName: "Figma Design",
    detail:
      "Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.",
  },
  {
    id: 3,
    serviceName: "App Development",
    detail:
      "Elizabeth some dodgy chavs are you taking the piss faff about pardon amongst car boot a load of old tosh is cracking goal blow off telling brown.",
  },
];

const Services = () => {
  return (
    <motion.main
      className="bg-[#F6F3FC] py-16"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <section className="container mx-auto">
        <section>
          <h2 className="heading text-secondary">Services</h2>
        </section>
        <section className="py-8">
          <section className="space-y-6">
            {serviceData.map((service) => (
              <section
                key={service.id}
                className="bg-[#9F6FFB] p-7 flex items-center justify-between flex-wrap gap-5 text-white"
              >
                <div className="text-2xl font-bold font-sora">
                  0{service.id}
                </div>
                <div className="text-4xl font-bold font-sora">
                  {service.serviceName}
                </div>
                <p className="w-[740px] text-base font-normal font-sora leading-6">
                  {service.detail}
                </p>
              </section>
            ))}
          </section>
        </section>
      </section>
    </motion.main>
  );
};

export default Services;
