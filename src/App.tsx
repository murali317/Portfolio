import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import { useTheme } from "./context/ThemeContext";

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setWidth(scrolled * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%`, transition: "width 0.1s linear" }}
    />
  );
}

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [onInteractive, setOnInteractive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setRing({ x: e.clientX, y: e.clientY }), 60);
      const target = e.target as Element;
      setOnInteractive(
        !!target.closest(
          'a, button, input, textarea, select, label, [role="button"]',
        ),
      );
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: onInteractive ? 0 : 1,
          transition: "opacity 0.15s ease",
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: ring.x,
          top: ring.y,
          opacity: onInteractive ? 0 : 0.6,
          transition: "opacity 0.15s ease, all 0.15s ease",
        }}
      />
    </>
  );
}

function HireMeButton() {
  return (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        document
          .querySelector("#contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      style={{
        position: "fixed",
        right: "1.5rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 997,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        padding: "1.1rem 0.65rem",
        borderRadius: "999px",
        background:
          "linear-gradient(180deg, var(--accent-blue), var(--accent-purple))",
        color: "#fff",
        fontWeight: 800,
        fontSize: "0.78rem",
        letterSpacing: "0.12em",
        boxShadow: "0 0 24px rgba(99,179,237,0.35), 0 4px 16px rgba(0,0,0,0.3)",
        animation: "hirePulse 2.5s ease-in-out infinite",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        userSelect: "none",
      }}
    >
      ✦ Hire Me!
      <style>{`
        @keyframes hirePulse {
          0%, 100% { box-shadow: 0 0 24px rgba(99,179,237,0.35), 0 4px 16px rgba(0,0,0,0.3); }
          50%       { box-shadow: 0 0 40px rgba(183,148,244,0.55), 0 8px 24px rgba(0,0,0,0.4); }
        }
        @media (max-width: 480px) {
          a[href="#contact"][style*="position: fixed"] {
            right: 0.5rem;
            font-size: 0.68rem;
            padding: 0.85rem 0.5rem;
          }
        }
      `}</style>
    </a>
  );
}

function App() {
  const { theme } = useTheme();
  return (
    <div
      style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}
      data-theme={theme}
    >
      <CustomCursor />
      <ScrollProgress />
      <HireMeButton />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          borderTop: "1px solid var(--border-glow)",
          color: "var(--text-muted)",
          fontSize: "0.85rem",
        }}
      >
        <p>
          Built with ❤️ by{" "}
          <span style={{ color: "var(--accent-blue)", fontWeight: 600 }}>
            Muralikrishna Devarakonda
          </span>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
