import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "from-amber-500/20 to-orange-600/5",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard with interactive charts, filtering, and CSV export.",
    tags: ["Next.js", "D3.js", "TypeScript", "Tailwind"],
    color: "from-blue-500/20 to-cyan-600/5",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop, real-time updates, and team features.",
    tags: ["React", "Firebase", "DnD Kit", "Zustand"],
    color: "from-emerald-500/20 to-teal-600/5",
  },
  {
    title: "AI Content Generator",
    description: "SaaS application leveraging GPT APIs for generating marketing copy, blog posts, and social media content.",
    tags: ["Next.js", "OpenAI", "Prisma", "Vercel"],
    color: "from-purple-500/20 to-pink-600/5",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-wider uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient top */}
              <div className={`h-32 bg-gradient-to-br ${project.color}`} />

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
