"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Cpu, Github, Instagram, MessageCircle } from "lucide-react"

const mainSkills = [
   {
     name: "Next.js",
     level: 99,
     color: "#8b5cf6",
     description: "SSR, SSG, App Router, API Routes",
     icon: "NEXT"
  },
  {
    name: "JavaScript",
    level: 85,
    color: "#8b5cf6",
    description: "ES6+, DOM, APIs",
    icon: "JS",
  },
  {
    name: "HTML",
    level: 95,
    color: "#a78bfa",
    description: "Semantico, Acessivel",
    icon: "</>",
  },
  {
    name: "CSS",
    level: 90,
    color: "#c4b5fd",
    description: "Flexbox, Grid, Animacoes",
    icon: "#",
  },
]

const otherSkills = [
  { name: "Python", icon: "Py" },
  { name: "C++", icon: "C++" },
  { name: "Kotlin", icon: "Kt" },
  { name: "React", icon: "Re" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "Node" },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(
    mainSkills.map(() => 0)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          // Animate skill bars
          mainSkills.forEach((skill, i) => {
            setTimeout(() => {
              const start = Date.now()
              const duration = 1500
              const animate = () => {
                const elapsed = Date.now() - start
                const progress = Math.min(elapsed / duration, 1)
                const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
                setAnimatedLevels((prev) => {
                  const next = [...prev]
                  next[i] = Math.round(skill.level * eased)
                  return next
                })
                if (progress < 1) requestAnimationFrame(animate)
              }
              animate()
            }, i * 200)
          })
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Glow accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
              Skills & Tecnologias
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Main skills with animated bars */}
          <div className="space-y-8">
            <h3
              className={`text-2xl font-bold text-foreground transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Especialidades Principais
            </h3>

            {mainSkills.map((skill, i) => (
              <div
                key={skill.name}
                className={`glass rounded-xl p-6 group hover:box-glow transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-mono text-sm font-bold text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-mono">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold font-mono text-primary">
                    {animatedLevels[i]}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{
                      width: `${animatedLevels[i]}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other skills - Hex grid */}
          <div className="space-y-8">
            <h3
              className={`text-2xl font-bold text-foreground transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Outras Tecnologias
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {otherSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`glass rounded-xl p-6 flex flex-col items-center gap-3 group hover:box-glow hover:border-primary/30 cursor-default transition-all duration-500 ${
                    visible
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center font-mono text-lg font-bold text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Learning badge */}
            <div
              className={`glass rounded-xl p-5 flex items-center gap-4 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <Code2 className="w-5 h-5 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-accent font-mono">+</span> Sempre aprendendo novas
                tecnologias e aprimorando habilidades em{" "}
                <strong className="text-foreground">desenvolvimento de software</strong>,{" "}
                <strong className="text-foreground">automação</strong> e{" "}
                <strong className="text-foreground">interfaces inovadoras</strong>.
              </p>

              
  
            </div>
          </div>
        </div>
      </div>

      {/* Social Links Premium */}
        <div
          className="absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-10 animate-slide-up"
          style={{ animationDelay: "1.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          {/* Instagram */}
          <a
            href="https://instagram.com/juliacode.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-3xl glass border border-border 
              transition-all duration-500 
              group-hover:scale-110 
              group-hover:border-primary 
              group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            >
              <Instagram className="w-9 h-9 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
            <span className="text-xs tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300 font-mono">
              INSTAGRAM
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5541988478637"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-3xl glass border border-border 
              transition-all duration-500 
              group-hover:scale-110 
              group-hover:border-green-500 
              group-hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]"
            >
              <MessageCircle className="w-9 h-9 text-muted-foreground group-hover:text-green-500 transition-colors duration-300" />
            </div>
            <span className="text-xs tracking-wider text-muted-foreground group-hover:text-green-500 transition-colors duration-300 font-mono">
              WHATSAPP
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/juliafnsc"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-3xl glass border border-border 
              transition-all duration-500 
              group-hover:scale-110 
              group-hover:border-primary 
              group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            >
              <Github className="w-9 h-9 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
            <span className="text-xs tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300 font-mono">
              GITHUB
            </span>
          </a>
        </div>
    </section>
  )
}
