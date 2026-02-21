"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown, Terminal, Github, Instagram, MessageCircle } from "lucide-react"
const codeLines = [
  'const julia = {',
  '  nome: "Julia Fonseca",',
  '  cargo: "Dev Full Stack",',
  '  skills: ["Next", "JS", "HTML", "CSS"],',
  '  paixao: "criar experiencias",',
  '};',
]

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [visibleCodeLines, setVisibleCodeLines] = useState<number>(0)
  const [mounted, setMounted] = useState(false)
  const fullText = "Full Stack de qualidade!"
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!mounted) return
    let line = 0
    const interval = setInterval(() => {
      if (line < codeLines.length) {
        line++
        setVisibleCodeLines(line)
      } else {
        clearInterval(interval)
      }
    }, 400)
    return () => clearInterval(interval)
  }, [mounted])

  return (
    
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-24">
        {/* Left - Content */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-2 rounded-full glass text-xs font-mono text-primary tracking-wider animate-slide-up"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            DISPONIVEL PARA PROJETOS
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance animate-slide-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            <span className="text-foreground">
              Eleve seu negocio digital a outro nivel com{" "}
            </span>
            <span className="text-glow text-primary">
              {typedText}
              <span
                className={`inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </h1>

          <p
            className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
          >
            Sou <strong className="text-foreground">Julia Fonseca</strong>, desenvolvedora Dev Full Stack especializada em Next.js, JavaScript, HTML e CSS. Transformo ideias em experiências digitais modernas e funcionais, ajudando pequenos negócios e designers a tirarem projetos do papel com estratégia e qualidade.
          </p>

          <div
            className="flex flex-wrap gap-3 justify-center lg:justify-start animate-slide-up"
            style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
          >
            <a
            href="https://wa.me/5541988478637"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 box-glow overflow-hidden"
          >
            <span className="relative z-10">Vamos conversar?</span>
            <div className="absolute inset-0 bg-accent/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
            <a
              href="#sobre"
              className="px-8 py-3.5 rounded-xl font-medium text-sm border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:box-glow"
            >
              Sobre mim
            </a>
          </div>
        </div>

        {/* Right - Code Block */}
        <div
          className="flex-1 max-w-lg w-full animate-slide-up"
          style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="glass rounded-2xl overflow-hidden box-glow animate-float-slow">
            {/* Terminal header */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <Terminal className="w-3.5 h-3.5" />
                julia.ts
              </div>
            </div>
            {/* Code content */}
            <div className="p-5 font-mono text-sm leading-7">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className={`flex gap-4 transition-all duration-500 ${
                    i < visibleCodeLines
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  <span className="text-muted-foreground/50 select-none w-5 text-right text-xs leading-7">
                    {i + 1}
                  </span>
                  <span>
                    {line.includes("const") && (
                      <>
                        <span className="text-primary">const </span>
                        <span className="text-accent">julia</span>
                        <span className="text-foreground"> = {"{"}</span>
                      </>
                    )}
                    {line.includes("nome") && (
                      <>
                        <span className="text-muted-foreground">{"  "}</span>
                        <span className="text-accent">nome</span>
                        <span className="text-foreground">{": "}</span>
                        <span className="text-green-400">{'"Julia Fonseca"'}</span>
                        <span className="text-foreground">,</span>
                      </>
                    )}
                    {line.includes("cargo") && (
                      <>
                        <span className="text-muted-foreground">{"  "}</span>
                        <span className="text-accent">cargo</span>
                        <span className="text-foreground">{": "}</span>
                        <span className="text-green-400">{'"Dev Full Stack"'}</span>
                        <span className="text-foreground">,</span>
                      </>
                    )}
                    {line.includes("skills") && (
                      <>
                        <span className="text-muted-foreground">{"  "}</span>
                        <span className="text-accent">skills</span>
                        <span className="text-foreground">{": ["}</span>
                        <span className="text-green-400">{'"Next"'}</span>
                        <span className="text-foreground">{", "}</span>
                        <span className="text-green-400">{'"JS"'}</span>
                        <span className="text-foreground">{", "}</span>
                        <span className="text-green-400">{'"HTML"'}</span>
                        <span className="text-foreground">{", "}</span>
                        <span className="text-green-400">{'"CSS"'}</span>
                        <span className="text-foreground">{"],"}</span>
                      </>
                    )}
                    {line.includes("paixao") && (
                      <>
                        <span className="text-muted-foreground">{"  "}</span>
                        <span className="text-accent">paixao</span>
                        <span className="text-foreground">{": "}</span>
                        <span className="text-green-400">{'"criar experiencias"'}</span>
                        <span className="text-foreground">,</span>
                      </>
                    )}
                    {line.includes("};") && (
                      <span className="text-foreground">{"}"}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>      
      

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-mono tracking-wider">scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>      

      
    </section>

    
  )
}
