import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "https://github.com/feysal-jeylan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/feysal-jeylan", label: "LinkedIn" },
  { icon: ExternalLink, href: "https://upwork.com/freelancers/~01cad10ded435b78f3", label: "Upwork" },
  { icon: Mail, href: "mailto:feysaljeylan67@gmail.com", label: "Email" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-bright/5 blur-[100px]" />
      </div>

      <div className="section-container relative z-10 text-center" id="main-content">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="font-mono text-sm text-primary mb-4 tracking-wider">Hello, I'm</p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Feysal <span className="gradient-text">Jeylan</span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Frontend Developer
          </span>
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border">
            BIS Student
          </span>
        </motion.div>

        <motion.p
          className="text-lg text-muted-foreground max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          I build websites that work on every device—from mobile to desktop
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-emerald-bright transition-all hover:shadow-lg emerald-glow">
            View Work
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-primary/30 text-foreground font-medium hover:bg-primary/10 transition-all">
            Let's Talk
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all hover:scale-110"
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator">
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  );
}
