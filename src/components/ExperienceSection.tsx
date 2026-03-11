import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Game Developer",
    company: "Extreme Unreal Technology Inc.",
    period: "2023 — 2026",
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
      "Built and maintained responsive websites and web applications. Collaborated with designers to create visually appealing and user-friendly interfaces.",
  },
  {
    role: "Front End Developer",
    company: "Dottystyle Creative",
    period: "2015 — 2016",
    description:
      "Develop rich media HTML5 banners. Translate design comps accurately and seamlessly into standards-compliant Web code and cross-browser compatibility. ",
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
          <p className="text-primary font-display text-sm tracking-wider uppercase mb-2">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative pl-8 pb-12 border-l border-border last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30 group-hover:bg-primary transition-colors">
                <div className="absolute inset-1 rounded-full bg-primary" />
              </div>

              <p className="text-sm text-primary font-display mb-1">
                {exp.period}
              </p>
              <h3 className="text-xl font-display font-semibold">{exp.role}</h3>
              <p className="text-muted-foreground font-medium mb-2">
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
