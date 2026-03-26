import { useState, useRef, useEffect } from "react";
import type { FormEvent } from "react";

const RATE_LIMIT_KEY = "portfolio_last_contact";
const RATE_LIMIT_MS = 60_000; // 60 seconds
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
} from "../ui/SocialIcons";
import { personal } from "../../data/personal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

type FormState = "idle" | "sending" | "success" | "error";

const socials = [
  {
    icon: <GitHubIcon size={20} />,
    label: "GitHub",
    url: personal.github,
    color: "#aaaaaa",
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: "LinkedIn",
    url: personal.linkedin,
    color: "#0a66c2",
  },
  {
    icon: <InstagramIcon size={20} />,
    label: "Instagram",
    url: personal.instagram,
    color: "#e1306c",
  },
  {
    icon: <YouTubeIcon size={20} />,
    label: "YouTube",
    url: personal.youtube,
    color: "#ff0000",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [cooldown, setCooldown] = useState(0); // seconds remaining

  useEffect(() => {
    const last = Number(localStorage.getItem(RATE_LIMIT_KEY) ?? 0);
    const remaining = Math.ceil((last + RATE_LIMIT_MS - Date.now()) / 1000);
    if (remaining > 0) setCooldown(remaining);
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  function validate() {
    const errs: Record<string, string> = {};
    if (!fields.name.trim()) errs.name = "Name is required.";
    if (!fields.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = "Enter a valid email.";
    if (!fields.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (cooldown > 0) return;
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("sending");

    try {
      const formData = new FormData();
      formData.append("name", fields.name);
      formData.append("email", fields.email);
      formData.append("message", fields.message);

      const res = await fetch(
        `https://formspree.io/f/${personal.formspreeId}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        },
      );

      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", message: "" });
        localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
        setCooldown(Math.ceil(RATE_LIMIT_MS / 1000));
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const inputStyle = (hasError: boolean) => ({
    width: "100%",
    padding: "0.85rem 1rem",
    borderRadius: "12px",
    border: `1px solid ${hasError ? "#fc8181" : "var(--border-glow)"}`,
    background: "rgba(255,255,255,0.04)",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    outline: "none",
    backdropFilter: "blur(8px)",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
  });

  return (
    <section
      id="contact"
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
          <span className="tag">Let's Talk</span>
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </motion.p>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left — Info */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="glass neon-glow"
              style={{
                borderRadius: "24px",
                padding: "2.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                }}
              >
                Contact Info
              </h3>

              {[
                {
                  icon: <Mail size={16} />,
                  label: personal.email,
                  href: `mailto:${personal.email}`,
                },
                {
                  icon: <Phone size={16} />,
                  label: personal.phone,
                  href: `tel:${personal.phone}`,
                },
                {
                  icon: <MapPin size={16} />,
                  label: personal.location,
                  href: undefined,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.1rem",
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent-blue)",
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "rgba(99,179,237,0.1)",
                      border: "1px solid rgba(99,179,237,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        color: "var(--text-muted)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent-blue)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              style={{ display: "flex", gap: "1rem" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-glow)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = s.color + "80";
                    e.currentTarget.style.background = s.color + "15";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border-glow)";
                    e.currentTarget.style.background = "var(--bg-card)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="glass neon-glow"
            style={{ borderRadius: "24px", padding: "2.5rem" }}
          >
            {formState === "success" ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <CheckCircle2 size={48} style={{ color: "#68d391" }} />
                <h3 style={{ fontWeight: 800, fontSize: "1.2rem" }}>
                  Message Sent!
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  Thanks for reaching out, Krishna will get back to you soon.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.65rem 1.5rem",
                    borderRadius: "9999px",
                    background:
                      "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                    color: "#fff",
                    border: "none",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Send a Message
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {/* Name */}
                  <div>
                    <label
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                        display: "block",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={fields.name}
                      onChange={(e) =>
                        setFields((f) => ({ ...f, name: e.target.value }))
                      }
                      style={inputStyle(!!errors.name)}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--accent-blue)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.name
                          ? "#fc8181"
                          : "var(--border-glow)")
                      }
                    />
                    {errors.name && (
                      <p
                        style={{
                          color: "#fc8181",
                          fontSize: "0.75rem",
                          marginTop: "0.3rem",
                        }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                        display: "block",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={fields.email}
                      onChange={(e) =>
                        setFields((f) => ({ ...f, email: e.target.value }))
                      }
                      style={inputStyle(!!errors.email)}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--accent-blue)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.email
                          ? "#fc8181"
                          : "var(--border-glow)")
                      }
                    />
                    {errors.email && (
                      <p
                        style={{
                          color: "#fc8181",
                          fontSize: "0.75rem",
                          marginTop: "0.3rem",
                        }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "0.4rem",
                        display: "block",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Hey Krishna, let's collaborate on..."
                      value={fields.message}
                      onChange={(e) =>
                        setFields((f) => ({ ...f, message: e.target.value }))
                      }
                      style={{
                        ...inputStyle(!!errors.message),
                        resize: "vertical",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--accent-blue)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.message
                          ? "#fc8181"
                          : "var(--border-glow)")
                      }
                    />
                    {errors.message && (
                      <p
                        style={{
                          color: "#fc8181",
                          fontSize: "0.75rem",
                          marginTop: "0.3rem",
                        }}
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error banner */}
                  {formState === "error" && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "10px",
                        background: "rgba(252,129,129,0.1)",
                        border: "1px solid rgba(252,129,129,0.3)",
                        color: "#fc8181",
                        fontSize: "0.85rem",
                      }}
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "sending" || cooldown > 0}
                    style={{
                      padding: "0.9rem 2rem",
                      borderRadius: "9999px",
                      background:
                        cooldown > 0
                          ? "rgba(100,116,139,0.4)"
                          : formState === "sending"
                            ? "rgba(99,179,237,0.4)"
                            : "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                      color: "#fff",
                      border: "none",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      cursor:
                        formState === "sending" || cooldown > 0
                          ? "not-allowed"
                          : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 18px rgba(99,179,237,0.25)",
                    }}
                    onMouseEnter={(e) => {
                      if (formState !== "sending" && cooldown === 0)
                        e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {formState === "sending" ? (
                      <>
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "2px solid rgba(255,255,255,0.4)",
                            borderTopColor: "#fff",
                            borderRadius: "50%",
                            animation: "spin 0.7s linear infinite",
                            display: "inline-block",
                          }}
                        />
                        Sending...
                      </>
                    ) : cooldown > 0 ? (
                      <>⏳ Wait {cooldown}s</>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
