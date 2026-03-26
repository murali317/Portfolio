import { useState } from "react";
import { motion } from "framer-motion";
import { skills, skillCategories, type Skill } from "../../data/skills";

const categoryLabels: Record<string, string> = {
  all: "All",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
  concepts: "Concepts",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "20px",
        padding: "1.75rem 1.5rem",
        background: hovered
          ? `linear-gradient(135deg, ${skill.color}18, transparent)`
          : "var(--bg-card)",
        border: `1px solid ${hovered ? skill.color + "55" : "var(--border-glow)"}`,
        backdropFilter: "blur(12px)",
        cursor: "default",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 12px 32px ${skill.color}22`
          : "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1rem",
        }}
      >
        <span style={{ fontSize: "1.8rem" }}>{skill.icon}</span>
        <div>
          <p style={{ fontWeight: 700, fontSize: "0.95rem" }}>{skill.name}</p>
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              textTransform: "capitalize",
            }}
          >
            {skill.category}
          </p>
        </div>
        <span
          style={{
            marginLeft: "auto",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: skill.color,
            fontFamily: "'Fira Code', monospace",
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: "6px",
          borderRadius: "9999px",
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "9999px",
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
            boxShadow: `0 0 8px ${skill.color}66`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof skillCategories)[number]>("all");

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      style={{ backgroundColor: "var(--bg-primary)", padding: "6rem 0" }}
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
          <span className="tag">What I Work With</span>
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Technologies I use to build awesome web experiences.
        </motion.p>

        {/* Filter tabs */}
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
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.45rem 1.25rem",
                borderRadius: "9999px",
                border: `1px solid ${activeCategory === cat ? "var(--accent-blue)" : "var(--border-glow)"}`,
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))"
                    : "var(--bg-card)",
                color: activeCategory === cat ? "#fff" : "var(--text-muted)",
                fontWeight: 600,
                fontSize: "0.82rem",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s ease",
                textTransform: "capitalize",
              }}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
