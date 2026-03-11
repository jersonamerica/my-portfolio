import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp",
    period: "2022 — Present",
    description: "Leading the frontend team in building scalable React applications. Improved performance by 40% and mentored 5 junior developers.",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupHub",
    period: "2020 — 2022",
    description: "Built end-to-end features for a SaaS platform serving 50K+ users. Designed and implemented RESTful APIs and React interfaces.",
  },
  {
    role: "Frontend Developer",
    company: "DigitalAgency",
    period: "2018 — 2020",
    description: "Developed responsive web applications for clients across fintech, healthcare, and e-commerce. Delivered 20+ projects on time.",
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
          <p className="text-primary font-display text-sm tracking-wider uppercase mb-2">Career</p>
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

              <p className="text-sm text-primary font-display mb-1">{exp.period}</p>
              <h3 className="text-xl font-display font-semibold">{exp.role}</h3>
              <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
