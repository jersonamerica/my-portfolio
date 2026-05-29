import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "TypeScript",
      "Next.js",
      "Angular",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Java",
      "C#",
      "PHP",
      "MySQL",
      "MSSQL",
      "DB2",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "UIkit",
      "Material UI",
      "Bootstrap",
      "Ant Design",
      "jest",
      "enzyme",
      "react-testing-library",
    ],
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Problem Solving", "Agile"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary font-display text-sm tracking-wider uppercase mb-2 font-bold">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-lg bg-card border-2 border-primary/40 hover:border-secondary hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300"
            >
              <h3 className="font-display text-lg font-bold mb-4 text-secondary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded border border-secondary/60 bg-secondary/15 text-foreground font-medium hover:border-secondary hover:bg-secondary/25 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
