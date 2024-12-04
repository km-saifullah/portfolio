import { motion, useAnimationFrame } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];

const Skills = () => {
  const itemWidth = 200; // Each item's width in pixels
  const gap = 20; // Gap between items in pixels
  const speed = 50; // Speed of the animation in pixels/second
  const totalWidth = (itemWidth + gap) * skills.length;
  return (
    <main>
      <section className="container mx-auto">
        <section>
          <h2 className="heading text-white">Skills</h2>
        </section>
      </section>
    </main>
  );
};

export default Skills;
