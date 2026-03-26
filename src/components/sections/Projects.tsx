import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "../ui/SocialIcons";
import { projects, type Project } from "../../data/projects";

const categories = ["all", "frontend", "fullstack", "backend"] as const;

const categoryLabels: Record<string, string> = {
  all: "All Projects",
  frontend: "Frontend",
  fullstack: "Full Stack",
  backend: "Backend",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "var(--bg-card)",
        border: "1px solid var(--border-glow)",
        backdropFilter: "blur(12px)",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 48px rgba(99,179,237,0.18)"
          : "0 4px 20px rgba(0,0,0,0.25)",
        borderColor: hovered ? "rgba(99,179,237,0.35)" : "var(--border-glow)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            padding: "0.25rem 0.7rem",
            borderRadius: "9999px",
            background:
              "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: 700,
          }}
        >
          <Star size={10} fill="currentColor" />
          Featured
        </div>
      )}

      {/* Image */}
      <div
        style={{ position: "relative", height: "200px", overflow: "hidden" }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
        {/* Overlay on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,15,30,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                padding: "0.6rem 1.2rem",
                borderRadius: "9999px",
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.82rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <GitHubIcon size={14} /> Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.5rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <h3 style={{ fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.87rem",
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginTop: "0.5rem",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.2rem 0.65rem",
                borderRadius: "9999px",
                fontSize: "0.72rem",
                fontWeight: 600,
                background: "rgba(99,179,237,0.1)",
                color: "var(--accent-cyan)",
                border: "1px solid rgba(99,179,237,0.15)",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "var(--text-muted)",
              fontSize: "0.8rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-blue)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            <GitHubIcon size={14} /> GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof categories)[number]>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{ backgroundColor: "var(--bg-secondary)", padding: "6rem 0" }}
    >
      <div className="section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "0.5rem" }}
        >
          <span className="tag">What I've Built</span>
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          A selection of things I've designed and built.
        </motion.p>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "0.45rem 1.25rem",
                borderRadius: "9999px",
                border: `1px solid ${activeFilter === cat ? "var(--accent-blue)" : "var(--border-glow)"}`,
                background:
                  activeFilter === cat
                    ? "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))"
                    : "var(--bg-card)",
                color: activeFilter === cat ? "#fff" : "var(--text-muted)",
                fontWeight: 600,
                fontSize: "0.82rem",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s ease",
              }}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
