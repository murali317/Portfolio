import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { experiences, type ExperienceItem } from "../../data/experience";

// Highlight numbers/percentages/metrics in bullet text
function HighlightedBullet({ text }: { text: string }) {
  const parts = text.split(/(\d+[k+%]?[\w+]*|\d+\+?|<\d+%)/g);
  return (
    <span>
      {parts.map((part, i) =>
        /^(\d+[k+%]?[\w+]*|\d+\+?|<\d+%)$/.test(part) ? (
          <strong
            key={i}
            style={{
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 800,
            }}
          >
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 0); // first card open by default

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ display: "flex", gap: "0", position: "relative" }}
    >
      {/* Timeline spine + dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: "48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Dot */}
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${exp.accentColor}, var(--accent-purple))`,
            border: "3px solid var(--bg-primary)",
            boxShadow: exp.current ? `0 0 16px ${exp.accentColor}88` : "none",
            flexShrink: 0,
            marginTop: "1.6rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          {exp.current && (
            <span
              style={{
                position: "absolute",
                inset: "-4px",
                borderRadius: "50%",
                border: `2px solid ${exp.accentColor}55`,
                animation: "pingDot 1.5s ease-in-out infinite",
              }}
            />
          )}
        </div>
        {/* Vertical line below dot (not for last card) */}
        {index < experiences.length - 1 && (
          <div
            style={{
              width: "2px",
              flex: 1,
              minHeight: "2rem",
              background: `linear-gradient(180deg, ${exp.accentColor}66, var(--border-glow))`,
              marginTop: "4px",
            }}
          />
        )}
      </div>

      {/* Card */}
      <div style={{ flex: 1, paddingBottom: "2.5rem", paddingLeft: "1rem" }}>
        {/* Header */}
        <div
          onClick={() => setExpanded((e) => !e)}
          style={{
            borderRadius: expanded ? "20px 20px 0 0" : "20px",
            padding: "1.5rem 1.75rem",
            background: "var(--bg-card)",
            border: `1px solid ${expanded ? exp.accentColor + "55" : "var(--border-glow)"}`,
            borderBottom: expanded ? "none" : undefined,
            backdropFilter: "blur(12px)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              exp.accentColor + "88";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = expanded
              ? exp.accentColor + "55"
              : "var(--border-glow)";
          }}
        >
          {/* Company logo placeholder */}
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: `linear-gradient(135deg, ${exp.accentColor}33, ${exp.accentColor}11)`,
              border: `1px solid ${exp.accentColor}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "1.3rem",
              color: exp.accentColor,
              flexShrink: 0,
            }}
          >
            {exp.companyInitial}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.3rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  lineHeight: 1.2,
                }}
              >
                {exp.role}
              </h3>
              {exp.current && (
                <span
                  style={{
                    padding: "0.15rem 0.6rem",
                    borderRadius: "9999px",
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    color: "#10b981",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  ● Current
                </span>
              )}
              {exp.type === "internship" && (
                <span
                  style={{
                    padding: "0.15rem 0.6rem",
                    borderRadius: "9999px",
                    background: "rgba(99,179,237,0.1)",
                    border: "1px solid rgba(99,179,237,0.25)",
                    color: "var(--accent-blue)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                  }}
                >
                  Internship
                </span>
              )}
            </div>

            <p
              style={{
                color: exp.accentColor,
                fontWeight: 700,
                fontSize: "0.92rem",
                marginBottom: "0.5rem",
              }}
            >
              {exp.company}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                color: "var(--text-muted)",
                fontSize: "0.8rem",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <Calendar size={13} /> {exp.start} – {exp.end}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <MapPin size={13} /> {exp.location}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <Briefcase size={13} />{" "}
                {exp.type === "internship" ? "Internship" : "Full-Time"}
              </span>
            </div>
          </div>

          <div
            style={{
              color: "var(--text-muted)",
              flexShrink: 0,
              marginTop: "0.25rem",
            }}
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>

        {/* Expandable body */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              borderRadius: "0 0 20px 20px",
              padding: "1.5rem 1.75rem",
              background: "var(--bg-card)",
              border: `1px solid ${exp.accentColor + "55"}`,
              borderTop: `1px solid ${exp.accentColor + "22"}`,
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Bullets */}
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
                marginBottom: "1.5rem",
              }}
            >
              {exp.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    color: "var(--text-muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      color: exp.accentColor,
                      flexShrink: 0,
                      marginTop: "0.35rem",
                      fontSize: "0.55rem",
                    }}
                  >
                    ◆
                  </span>
                  <HighlightedBullet text={bullet} />
                </motion.li>
              ))}
            </ul>

            {/* Tech stack */}
            <div
              style={{
                borderTop: `1px solid ${exp.accentColor}22`,
                paddingTop: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "0.2rem 0.7rem",
                      borderRadius: "9999px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      background: `${exp.accentColor}15`,
                      color: exp.accentColor,
                      border: `1px solid ${exp.accentColor}35`,
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// Stat cards at the top
const stats = [
  { value: "2+", label: "Years Experience", icon: "🗓️" },
  { value: "95%", label: "Sprint Delivery", icon: "🚀" },
  //   { value: '20k+', label: 'Users Impacted', icon: '👥' },
  { value: "25%", label: "Error Reduction", icon: "📉" },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          <span className="tag">Where I've Worked</span>
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          My professional journey — building impactful products at scale.
        </motion.p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.07 }}
              className="glass neon-glow"
              style={{
                borderRadius: "18px",
                padding: "1.25rem",
                textAlign: "center",
                cursor: "default",
                transition: "transform 0.25s ease",
              }}
              whileHover={{ y: -5 }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: "0.35rem" }}>
                {s.icon}
              </div>
              <div
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 900,
                  background:
                    "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.75rem",
                  marginTop: "0.25rem",
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div
          style={{ position: "relative", maxWidth: "820px", margin: "0 auto" }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <a
            href="https://drive.google.com/file/d/1BfOFENOMzWGPc6nodSnBMZuFpnmoIeZv/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2.25rem",
              borderRadius: "9999px",
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              color: "#fff",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: "0 4px 24px rgba(99,179,237,0.25)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(99,179,237,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 24px rgba(99,179,237,0.25)";
            }}
          >
            <ExternalLink size={16} /> View Full Resume
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes pingDot {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%       { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
