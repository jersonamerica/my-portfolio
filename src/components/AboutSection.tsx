import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start"
        >
          <div>
            <p className="text-secondary font-display text-sm tracking-wider uppercase mb-2 font-bold">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Building Things That
              <span className="gradient-text-neon"> Matter</span>
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a passionate front-end developer with 9+ years of experience
              building web applications that are both beautiful and performant.
              I specialize in React, TypeScript, and Node.js ecosystems.
            </p>
            <p>
              I believe great software comes from understanding both the
              technical and human sides.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-6 border-t-2 border-secondary/30">
              {[
                { num: "9+", label: "Years Exp." },
                { num: "20+", label: "Projects" },
                { num: "30+", label: "Technologies" },
              ].map(({ num, label }) => (
                <div key={label} className="hover:scale-105 transition-transform">
                  <p className="text-3xl font-display font-bold text-secondary">
                    {num}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
