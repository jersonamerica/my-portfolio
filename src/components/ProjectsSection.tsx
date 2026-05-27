import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MMO Equipment Manager",
    description:
      "Full-stack application for MMO players to manage in-game equipment, track stats, and share builds with the community.",
    tags: [
      "React",
      "NextJS",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "React Query",
    ],
    image: "/projects/mmo-equipment-manager.jpg",
    link: "https://l9-hotdogzz.xyz/",
    source: "https://github.com/jersonamerica/l9-hotdogz",
  },
  {
    title: "Cryptojers",
    description:
      "A comprehensive cryptocurrency tracking platform featuring a complete list of cryptocurrencies with detailed information for each asset. Access real-time news updates, monitor price changes with interactive graphs that track performance over time, and stay informed about market trends.",
    tags: ["React", "Redux", "TypeScript", "Ant Design", "CoinGecko API"],
    image: "/projects/cryptojers.jpg",
    link: "https://cryptojers.netlify.app/",
    source: "https://github.com/jersonamerica/cryptojers",
  },
  {
    title: "CMS Blog Platform",
    description:
      "A headless CMS and blogging platform built with React and Node.js, allowing users to create, manage, and publish content with a rich text editor and media library.",
    tags: ["React", "Typescript", "GraphQL"],
    image: "/projects/graphcms.jpg",
    link: "https://cmsblog.vercel.app/",
    source: "https://github.com/jersonamerica/cmsblog",
  },
  {
    title: "OPEN AI Chat App",
    description:
      "An AI-powered chat application that leverages OpenAI's language model to provide intelligent and context-aware responses. Users can engage in natural language conversations, ask questions, and receive informative answers in real-time.",
    tags: ["React", "OpenAI", "Typescript", "Zustand"],
    image: "/projects/OpenAI.jpg",
    link: "https://open-ai-chat-app-dun.vercel.app/",
    source: "https://github.com/jersonamerica/open-ai-chat-app",
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
          <p className="text-secondary font-display text-sm tracking-wider uppercase mb-2 font-bold">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-lg border-2 border-secondary/50 bg-card overflow-hidden hover:border-secondary hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300"
            >
              {/* Neon accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Image background */}
              <div
                className="h-32 bg-cover bg-center relative group-hover:brightness-110 transition-all duration-300"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-display font-bold group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.source || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary hover:scale-110 transition-all"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary hover:scale-110 transition-all"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded border border-primary/50 bg-primary/10 text-foreground font-medium hover:border-primary hover:bg-primary/20 transition-all"
                    >
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
