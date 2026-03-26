import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Download } from "lucide-react";
import { personal } from "../../data/personal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "var(--bg-secondary)", padding: "6rem 0" }}
    >
      <div className="section">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
          style={{ marginBottom: "0.5rem" }}
        >
          <span className="tag">Who I Am</span>
        </motion.div>

        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
        >
          A little background on who I am and what drives me.
        </motion.p>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Avatar + info card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
          >
            <div
              className="glass neon-glow"
              style={{
                borderRadius: "24px",
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
              {/* Avatar photo */}
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  margin: "0 auto 1.5rem",
                  background:
                    "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  boxShadow: "0 0 30px rgba(99,179,237,0.3)",
                  border: "3px solid rgba(99,179,237,0.3)",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Muralikrishna Devarakonda"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    // fallback to emoji if photo not found
                    const parent = e.currentTarget.parentElement!;
                    e.currentTarget.style.display = "none";
                    parent.style.display = "flex";
                    parent.style.alignItems = "center";
                    parent.style.justifyContent = "center";
                    parent.style.fontSize = "3rem";
                    parent.textContent = "🦚";
                  }}
                />
              </div>

              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  marginBottom: "0.25rem",
                }}
              >
                {personal.name}
              </h3>
              <p
                style={{
                  color: "var(--accent-blue)",
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                {personal.role}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  textAlign: "left",
                }}
              >
                {[
                  { icon: <MapPin size={14} />, text: personal.location },
                  { icon: <Mail size={14} />, text: personal.email },
                  { icon: <Phone size={14} />, text: personal.phone },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <span
                      style={{ color: "var(--accent-blue)", flexShrink: 0 }}
                    >
                      {item.icon}
                    </span>
                    {item.text}
                  </div>
                ))}
              </div>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "1.5rem",
                  padding: "0.7rem 1.5rem",
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  boxShadow: "0 4px 18px rgba(99,179,237,0.25)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </motion.div>

          {/* Bio + stats */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
            >
              {personal.about.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                    marginBottom: "1rem",
                    fontSize: "1rem",
                  }}
                >
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={fadeUp}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              {personal.stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass"
                  style={{
                    borderRadius: "16px",
                    padding: "1.25rem",
                    textAlign: "center",
                    transition: "transform 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-4px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      background:
                        "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.8rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
