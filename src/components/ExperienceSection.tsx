import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Game Developer",
    company: "Extreme Unreal Technology Inc.",
    period: "2023 — 2025",
    description:
      "Responsible for developing and maintaining high-performance game features using Unity. Collaborated with cross-functional teams to deliver engaging gaming experiences.",
  },
  {
    role: "Senior React JS Developer ",
    company: "GetDevs",
    period: "2022 — 2023",
    description:
      "Collaborated with designers and backend developers to create responsive web applications. Implemented new features and optimized performance for a seamless user experience.",
  },
  {
    role: "ReactJS Developer",
    company: "Swapoolabs",
    period: "2018 — 2021",
    description:
      "Developed and maintained web applications using ReactJS. Worked closely with the design team to implement user-friendly interfaces and enhance application performance.",
  },
  {
    role: "Front End Developer",
    company: "Idigital Enterprise Inc.,",
    period: "2017 — 2018",
    description:
      "Built and maintained internal web application using React, Redux and Typescript.",
  },
  {
    role: "Front End Developer",
    company: "Dottystyle Creative",
    period: "2015 — 2016",
    description:
      "Created rich media HTML5 banners. Worked closely with the design team to ensure the visual quality of the banners and optimized them for performance across various platforms.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary font-display text-sm tracking-wider uppercase mb-2 font-bold">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative pl-8 pb-12 border-l-2 border-secondary/50 hover:border-secondary last:pb-0 transition-colors"
            >
              {/* Neon timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-[5px] w-3 h-3 rounded-full bg-secondary border-2 border-secondary shadow-lg shadow-secondary/60">
                <div className="absolute inset-0.5 rounded-full bg-secondary" />
              </div>

              <p className="text-sm text-secondary font-display mb-1 font-bold">
                {exp.period}
              </p>
              <h3 className="text-xl font-display font-bold group-hover:text-secondary transition-colors">
                {exp.role}
              </h3>
              <p className="text-muted-foreground font-medium mb-2 border-b border-primary/30 pb-2">
                {exp.company}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
