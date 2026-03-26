import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Code2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
          transition: "all 0.3s ease",
          backgroundColor: scrolled
            ? theme === "dark"
              ? "rgba(10, 15, 30, 0.92)"
              : "rgba(240,244,255,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-glow)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 800,
            fontSize: "1.2rem",
          }}
          onClick={() => handleLinkClick("#hero")}
        >
          <Code2 size={22} style={{ color: "var(--accent-blue)" }} />
          <span className="gradient-text">Krishna</span>
        </a>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "2rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="animated-underline"
                style={{
                  color:
                    active === link.href
                      ? "var(--accent-blue)"
                      : "var(--text-muted)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  transition: "color 0.2s ease",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-glow)",
                borderRadius: "50%",
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-primary)",
                transition: "all 0.3s ease",
              }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          className="mobile-controls"
        >
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-glow)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-primary)",
            }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            zIndex: 999,
            backgroundColor:
              theme === "dark"
                ? "rgba(10,15,30,0.97)"
                : "rgba(240,244,255,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--border-glow)",
            padding: "1.5rem 2rem",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  style={{
                    color:
                      active === link.href
                        ? "var(--accent-blue)"
                        : "var(--text-primary)",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .mobile-controls { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
