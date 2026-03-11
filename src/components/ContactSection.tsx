import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-wider uppercase mb-2">Contact</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-medium text-lg hover:opacity-90 transition-opacity group"
          >
            <Mail size={20} />
            Say Hello
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
            <MapPin size={16} />
            <span className="text-sm">San Francisco, CA</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 John Developer. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
