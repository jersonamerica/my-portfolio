import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Neon glow background effects */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] rounded-full bg-primary/15 blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-lg mb-4 tracking-wider uppercase">
            Hello, I'm
          </p>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Jerson
          <br />
          <span className="text-gradient">America</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Front end developer crafting elegant digital experiences with modern
          technologies.
        </motion.p>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#projects"
            className="relative group bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded font-display font-bold hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <ArrowDown
                size={18}
                className="group-hover:translate-y-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/jersonamerica" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/jersonamerica/",
              },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
