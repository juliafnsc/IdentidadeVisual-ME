"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Braces, GraduationCap, Sparkles, User } from "lucide-react"

const stats = [
  { label: "Desde", value: "2021", icon: GraduationCap },
  { label: "Foco", value: "Full Stack", icon: Braces },
  { label: "Objetivo", value: "Inovar", icon: Sparkles },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative py-32 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-primary" />
            <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">
              Sobre mim
            </span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left - Terminal-style about */}
          <div className="lg:col-span-3 space-y-6">
            <div
              className={`glass rounded-2xl p-8 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-xs text-muted-foreground ml-2">
                  ~/julia/sobre.md
                </span>
              </div>

              <div className="space-y-5">
                <p className="text-foreground leading-relaxed">
                  <span className="text-primary font-mono mr-2">{">"}</span>
                  Sou <strong className="text-primary">Julia Fonseca</strong>, nascida em 2001, venho 
                  construindo minha trajetória na área de Tecnologia da Informação, formada em{" "}
                  <strong className="text-accent">Análise e Desenvolvimento de Sistemas</strong>.
                </p>

                <p className="text-foreground leading-relaxed">
                  <span className="text-primary font-mono mr-2">{">"}</span>
                  Meu foco principal é o desenvolvimento full stack, criando sites intuitivos, modernos e estratégicos, com informações organizadas de forma clara, unindo{" "}
                  <strong className="text-accent">design e funcionalidade</strong> para
                  proporcionar experiências marcantes aos usuários.
                </p>

                <p className="text-foreground leading-relaxed">
                  <span className="text-primary font-mono mr-2">{">"}</span>
                  Desde 2021, venho investindo no meu aperfeiçoamento profissional através de cursos
                  em plataformas reconhecidas como{" "}
                  <strong className="text-primary">Alura</strong> e{" "}
                  <strong className="text-primary">Rocketseat</strong>.
                </p>

                <p className="text-foreground leading-relaxed">
                  <span className="text-primary font-mono mr-2">{">"}</span>
                  Sou determinada e enfrento desafios com foco e disciplina,
                  sempre buscando crescimento pessoal e profissional,
                  consolidando meu futuro na área de tecnologia.
                </p>


        {/* Card código */}
          <div
            className={`glass rounded-xl p-5 font-mono text-xs leading-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "850ms" }}
          >
            <div className="text-muted-foreground/60">
              {"// formacao.ts"}
            </div>
            <div>
              <span className="text-primary">interface </span>
              <span className="text-accent">Formacao </span>
              <span className="text-foreground">{"{"}</span>
            </div>
            <div className="pl-4">
              <span className="text-accent">curso</span>
              <span className="text-foreground">{": "}</span>
              <span className="text-green-400">{"string"}</span>;
            </div>
            <div className="pl-4">
              <span className="text-accent">area</span>
              <span className="text-foreground">{": "}</span>
              <span className="text-green-400">{"string"}</span>;
            </div>
            <div>
              <span className="text-foreground">{"}"}</span>
            </div>
          </div>
              </div>
            </div>
          </div>

        {/* Right - Image + Stats */}
       <div className="lg:col-span-2 flex flex-col gap-6">

        {/* Imagem */}
        <div
          className={`relative w-full h-72 rounded-2xl overflow-hidden glass transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <Image
            src="/julia-tech.jpg"
            alt="Julia programando"
            fill
            className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-primary/20" />
        </div>


        {/* Stats cards */}
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className={`glass rounded-xl p-6 group hover:box-glow hover:border-primary/30 transition-all duration-500 cursor-default ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </div>
      </div>
    </section>
  )
}