import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const timeline = [
  {
    institution: "Addis Ababa University",
    degree: "BSc Business & Information Systems",
    date: "Present",
    points: ["Systems Analysis & Design", "Database Management", "Software Engineering", "Business Communication"],
  },
  {
    institution: "Udacity",
    degree: "Nanodegree Programming & Data Analysis",
    date: "Nov 2024 – Feb 2025",
    points: ["Programming fundamentals", "Data analysis", "Algorithms", "Problem-solving"],
  },
  {
    institution: "Self-Directed Learning",
    degree: "Frontend Development",
    date: "Ongoing",
    points: ["150+ hours: HTML5, CSS3, JavaScript ES6+", "Responsive design", "React (learning)"],
  },
];

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <p className="font-mono text-sm text-primary mb-2">Education</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Learning <span className="gradient-text">Journey</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <div
              key={item.institution}
              className={`relative mb-12 last:mb-0 md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card p-6 hover:border-primary/30 transition-all">
                  <span className="font-mono text-xs text-primary">{item.date}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{item.institution}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.degree}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.points.map(p => (
                      <span key={p} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
