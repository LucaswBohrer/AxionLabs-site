import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Heart, Code, Shield, Rocket, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Site Corporativo Axion Labs - Página Inicial
 * 
 * Filosofia de Design: Laboratório Premium
 * - Fundo graphite escuro (#111111) com acentos purple neon (#6C3BFF)
 * - Layouts assimétricos com uso estratégico de espaço em branco
 * - Tipografia premium usando Sora (display) e Inter (body)
 * - Formas geométricas ecoando o logo "A"
 * - Animações suaves e micro-interações
 * - Aparência profissional pronta para investidores
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#111111] text-white font-body">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A]" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/logo-icon-PzLn8fXxFzLurNEN53JViZ.webp"
              alt="Axion Labs"
              className="h-10 w-10"
            />
            <div className="font-display text-xl font-bold tracking-tight">AXION LABS</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm hover:text-[#6C3BFF] transition-colors duration-200">
              Sobre
            </a>
            <a href="#what-we-build" className="text-sm hover:text-[#6C3BFF] transition-colors duration-200">
              O que Construímos
            </a>
            <a href="#companion" className="text-sm hover:text-[#6C3BFF] transition-colors duration-200">
              Axion Companion
            </a>
            <a href="#vision" className="text-sm hover:text-[#6C3BFF] transition-colors duration-200">
              Visão
            </a>
            <a href="#contact" className="text-sm hover:text-[#6C3BFF] transition-colors duration-200">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/hero-robotics-lab-8KoREuVNLDPW6F3LhQybLd.webp')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-transparent" />
        </div>

        <div className="container relative z-10 flex flex-col justify-center h-full max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="font-display text-6xl md:text-7xl leading-tight mb-6 tracking-tight">
              Tecnologia que <span className="text-[#6C3BFF]">Compreende</span> Pessoas.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl font-light">
              Construindo a próxima geração de companheiros robóticos inteligentes através de robótica, inteligência artificial e excelência em engenharia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="btn-primary px-8 py-6 text-base rounded-lg font-medium"
                onClick={() => document.getElementById("companion")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conheça o Axion Companion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="btn-secondary px-8 py-6 text-base rounded-lg font-medium"
                onClick={() => document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })}
              >
                Nossa Visão
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section id="about" className="relative py-32 md:py-40 bg-[#111111]">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="md:col-span-2">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-[#6C3BFF]" />
                  <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">NOSSA HISTÓRIA</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
                  Nascida da <span className="text-[#6C3BFF]">Expertise</span> Técnica
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A Axion Labs emergiu de décadas de experiência na Eletrônica Digital, uma empresa que entendia tecnologia desde suas raízes. Transformamos essa expertise técnica em produtos inovadores projetados para melhorar a vida cotidiana através de robótica inteligente e inteligência artificial.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Hoje, estamos construindo companheiros robóticos inteligentes que combinam robótica de ponta, IA adaptativa e design centrado no ser humano para criar relacionamentos significativos entre humanos e tecnologia.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-sm font-semibold text-[#6C3BFF] tracking-wide">MISSÃO</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Criar companheiros inteligentes que aprimorem a vida humana através de inovação e excelência em engenharia.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-sm font-semibold text-[#6C3BFF] tracking-wide">VISÃO</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Um futuro onde a tecnologia compreende as pessoas, aprende com elas e cria conexões significativas.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-sm font-semibold text-[#6C3BFF] tracking-wide">VALORES</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Inovação, confiabilidade, design centrado no ser humano e excelência em engenharia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section - Technical Focus */}
      <section id="what-we-build" className="relative py-32 md:py-40 bg-[#0A0A0A]">
        <div className="container max-w-6xl">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">TECNOLOGIA</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Três Pilares da <span className="text-[#6C3BFF]">Inovação</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Robotics */}
            <div className="group">
              <div className="mb-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Robótica</h3>
                  <div className="w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Criando companheiros físicos inteligentes com sensores avançados, atuadores e design mecânico que permitem interação natural e intuitiva.
              </p>
            </div>

            {/* AI */}
            <div className="group">
              <div className="mb-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Inteligência Artificial</h3>
                  <div className="w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Processamento de linguagem natural, aprendizado adaptativo e compreensão emocional que permitem conversas significativas e crescimento contínuo.
              </p>
            </div>

            {/* Human Connection */}
            <div className="group">
              <div className="mb-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Conexão Humana</h3>
                  <div className="w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Tecnologia projetada para apoiar as pessoas na vida cotidiana, criando vínculos emocionais e relacionamentos significativos a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Section - Asymmetric with Image */}
      <section id="companion" className="relative py-32 md:py-40 bg-[#111111]">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-[#6C3BFF]" />
                  <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">PRODUTO PRINCIPAL</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl leading-tight">
                  Axion <span className="text-[#6C3BFF]">Companion</span>
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Um companheiro robótico inteligente projetado para aprender, interagir, assistir e crescer ao lado de seu proprietário.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { title: "Interação por Voz", desc: "Compreensão e geração de linguagem natural" },
                  { title: "Expressões Emocionais", desc: "Interações responsivas e expressivas" },
                  { title: "Capacidades de Aprendizado", desc: "Algoritmos adaptativos que melhoram ao longo do tempo" },
                  { title: "Lembretes Inteligentes", desc: "Assistência inteligente para tarefas diárias" },
                  { title: "Integração Doméstica", desc: "Conectividade perfeita com dispositivos inteligentes" },
                  { title: "Assistência Educacional", desc: "Suporte para aprendizado e crescimento pessoal" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#6C3BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="btn-primary px-8 py-6 text-base rounded-lg font-medium">
                Saiba Mais Sobre o Companion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/ai-neural-network-2gRQ3kqeFNpa2LKJUxSMdu.webp"
                alt="Axion Companion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Axion Labs Section */}
      <section className="relative py-32 md:py-40 bg-[#0A0A0A]">
        <div className="container max-w-6xl">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">DIFERENCIAL</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Por que <span className="text-[#6C3BFF]">Axion Labs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Code,
                title: "Abordagem Centrada em Engenharia",
                desc: "Construída sobre décadas de expertise técnica. Cada componente é projetado com precisão e confiabilidade.",
              },
              {
                icon: Heart,
                title: "Design Centrado no Ser Humano",
                desc: "Cada recurso é projetado com o usuário em mente. A tecnologia deve aprimorar a vida humana, não complicá-la.",
              },
              {
                icon: Shield,
                title: "Confiabilidade e Confiança",
                desc: "Construído para durar. Nossos companheiros são projetados para relacionamentos duradouros com seus proprietários.",
              },
              {
                icon: Rocket,
                title: "Inovação e Visão",
                desc: "Não estamos apenas construindo produtos hoje. Estamos criando a base para o futuro.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300"
              >
                <item.icon className="h-8 w-8 text-[#6C3BFF] mb-4" />
                <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="vision" className="relative py-32 md:py-40 bg-[#111111]">
        <div className="container max-w-6xl">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">ROADMAP</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Construindo um <span className="text-[#6C3BFF]">Ecossistema</span>
            </h2>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl">
              Axion Labs é uma empresa de tecnologia de longo prazo construindo o futuro da interação humano-robô.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Robótica Doméstica", desc: "Companheiros inteligentes para a vida cotidiana" },
              { title: "Robótica Educacional", desc: "Aprendizado e desenvolvimento através da interação" },
              { title: "Assistentes de IA", desc: "Sistemas avançados de IA conversacional" },
              { title: "Tecnologia para Idosos", desc: "Suporte compassivo para populações envelhecidas" },
              { title: "Dispositivos Inteligentes", desc: "Ecossistema conectado de produtos inteligentes" },
              { title: "Categorias Futuras", desc: "Expandindo para novas fronteiras da tecnologia" },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-1 h-4 bg-[#6C3BFF] flex-shrink-0" />
                  <h3 className="font-display text-lg font-bold">{category.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-32 md:py-40 bg-[#0A0A0A]">
        <div className="container max-w-4xl">
          <div className="bg-[#1A1A1A] border border-[#6C3BFF] p-12 md:p-16 rounded-lg">
            <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">Nosso Manifesto</h2>
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-300">
              <p>Acreditamos que a tecnologia deve fazer mais do que executar tarefas.</p>
              <p>Ela deve <span className="text-[#6C3BFF] font-semibold">aprender</span>.</p>
              <p>Ela deve <span className="text-[#6C3BFF] font-semibold">assistir</span>.</p>
              <p>Ela deve <span className="text-[#6C3BFF] font-semibold">conectar</span>.</p>
              <p className="pt-4">
                Enquanto outros constroem máquinas, nós construímos <span className="text-[#6C3BFF] font-semibold">companheiros</span>.
              </p>
              <p className="pt-4 text-[#8B5FFF] font-semibold">
                O futuro merece uma tecnologia que compreenda as pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 md:py-40 bg-[#111111]">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">ENTRE EM CONTATO</span>
              <div className="w-1 h-8 bg-[#6C3BFF]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
              Vamos Construir o <span className="text-[#6C3BFF]">Futuro</span> Juntos
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Interessado em saber mais sobre a Axion Labs? Adoraríamos ouvir você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
              <h3 className="font-display text-xl mb-4">Email</h3>
              <a href="mailto:contact@axionlabs.com" className="text-[#6C3BFF] hover:text-[#8B5FFF] transition-colors">
                contact@axionlabs.com
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
              <h3 className="font-display text-xl mb-4">Telefone</h3>
              <a href="tel:+5511999999999" className="text-[#6C3BFF] hover:text-[#8B5FFF] transition-colors">
                +55 (11) 99999-9999
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-colors duration-300"
            >
              <span className="text-xl font-bold">f</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-colors duration-300"
            >
              <span className="text-xl font-bold">𝕏</span>
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-colors duration-300"
            >
              <span className="text-xl font-bold">in</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-16">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-display text-sm font-bold mb-4 text-[#6C3BFF] tracking-widest">EMPRESA</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-[#6C3BFF] transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold mb-4 text-[#6C3BFF] tracking-widest">PRODUTOS</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#companion" className="hover:text-[#6C3BFF] transition-colors">
                    Axion Companion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Documentação
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold mb-4 text-[#6C3BFF] tracking-widest">LEGAL</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold mb-4 text-[#6C3BFF] tracking-widest">SIGA-NOS</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">© 2026 Axion Labs. Todos os direitos reservados.</p>
            <p className="text-sm text-gray-500 mt-4 md:mt-0">
              Engenharia com precisão. Projetado para humanos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
