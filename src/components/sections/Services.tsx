import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../data/personal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
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
          <span className="tag">What I Offer</span>
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My <span className="gradient-text">Services</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          From concept to deployment — here's what I bring to the table.
        </motion.p>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginBottom: "5rem",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                borderRadius: "20px",
                padding: "2rem",
                background: "var(--bg-card)",
                border: `1px solid ${activeIndex === i ? "rgba(99,179,237,0.4)" : "var(--border-glow)"}`,
                backdropFilter: "blur(12px)",
                cursor: "default",
                transition: "all 0.3s ease",
                transform:
                  activeIndex === i ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  activeIndex === i
                    ? "0 16px 40px rgba(99,179,237,0.15)"
                    : "0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg, rgba(99,179,237,0.15), rgba(183,148,244,0.15))",
                  border: "1px solid rgba(99,179,237,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  marginBottom: "1.25rem",
                  transition: "transform 0.3s ease",
                  transform:
                    activeIndex === i ? "scale(1.1) rotate(5deg)" : "scale(1)",
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "1rem",
                  marginBottom: "0.6rem",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </p>

              {/* Glow line on hover */}
              <div
                style={{
                  height: "2px",
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(90deg, var(--accent-blue), var(--accent-purple))",
                  marginTop: "1.25rem",
                  opacity: activeIndex === i ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
