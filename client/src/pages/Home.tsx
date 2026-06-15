import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Heart, Code, Shield, Rocket, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#about" },
    { label: "O que Construímos", href: "#what-we-build" },
    { label: "Axion Companion", href: "#companion" },
    { label: "Visão", href: "#vision" },
    { label: "Contato", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#111111] text-white font-body">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A]" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/logo-icon-PzLn8fXxFzLurNEN53JViZ.webp"
              alt="Axion Labs"
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <div className="font-display text-lg md:text-xl font-bold tracking-tight">AXION LABS</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm hover:text-[#6C3BFF] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#6C3BFF] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A]">
            <div className="container py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block text-sm py-2 hover:text-[#6C3BFF] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-[#2A2A2A] pt-3 mt-3 space-y-2">
                <a
                  href="/termos"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/termos");
                  }}
                  className="block text-sm py-2 text-gray-400 hover:text-[#6C3BFF] transition-colors"
                >
                  Termos
                </a>
                <a
                  href="/privacidade"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/privacidade");
                  }}
                  className="block text-sm py-2 text-gray-400 hover:text-[#6C3BFF] transition-colors"
                >
                  Privacidade
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 pb-8 md:pb-0">
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

        <div className="container relative z-10 flex flex-col justify-center h-full max-w-6xl px-4 md:px-0">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6 tracking-tight">
              Tecnologia que <span className="text-[#6C3BFF]">Compreende</span> Pessoas.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-xl font-light">
              Construindo a próxima geração de companheiros robóticos inteligentes através de robótica, inteligência artificial e excelência em engenharia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                className="btn-primary px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full sm:w-auto"
                onClick={() => handleNavClick("#companion")}
              >
                Conheça o Axion Companion
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                className="btn-secondary px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full sm:w-auto"
                onClick={() => handleNavClick("#vision")}
              >
                Nossa Visão
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section id="about" className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start">
            <div className="md:col-span-2">
              <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
                  <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">NOSSA HISTÓRIA</span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">
                  Nascida da <span className="text-[#6C3BFF]">Expertise</span> Técnica
                </h2>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                A Axion Labs emergiu de décadas de experiência na Eletrônica Digital, uma empresa que entendia tecnologia desde suas raízes. Transformamos essa expertise técnica em produtos inovadores projetados para melhorar a vida cotidiana através de robótica inteligente e inteligência artificial.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Hoje, estamos construindo companheiros robóticos inteligentes que combinam robótica de ponta, IA adaptativa e design centrado no ser humano para criar relacionamentos significativos entre humanos e tecnologia.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-4 md:p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <div className="w-1 h-3 md:h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-xs md:text-sm font-semibold text-[#6C3BFF] tracking-wide">MISSÃO</h3>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Criar companheiros inteligentes que aprimorem a vida humana através de inovação e excelência em engenharia.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-4 md:p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <div className="w-1 h-3 md:h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-xs md:text-sm font-semibold text-[#6C3BFF] tracking-wide">VISÃO</h3>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Um futuro onde a tecnologia compreende as pessoas, aprende com elas e cria conexões significativas.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-4 md:p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <div className="w-1 h-3 md:h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-xs md:text-sm font-semibold text-[#6C3BFF] tracking-wide">VALORES</h3>
                </div>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Inovação, confiabilidade, design centrado no ser humano e excelência em engenharia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section - Technical Focus */}
      <section id="what-we-build" className="relative py-16 md:py-32 lg:py-40 bg-[#0A0A0A]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">TECNOLOGIA</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
              Três Pilares da <span className="text-[#6C3BFF]">Inovação</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            {/* Robotics */}
            <div className="group">
              <div className="mb-4 md:mb-6 flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-2xl font-bold mb-1 md:mb-2">Robótica</h3>
                  <div className="w-6 md:w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Criando companheiros físicos inteligentes com sensores avançados, atuadores e design mecânico que permitem interação natural e intuitiva.
              </p>
            </div>

            {/* AI */}
            <div className="group">
              <div className="mb-4 md:mb-6 flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-2xl font-bold mb-1 md:mb-2">Inteligência Artificial</h3>
                  <div className="w-6 md:w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Processamento de linguagem natural, aprendizado adaptativo e compreensão emocional que permitem conversas significativas e crescimento contínuo.
              </p>
            </div>

            {/* Human Connection */}
            <div className="group">
              <div className="mb-4 md:mb-6 flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-2xl font-bold mb-1 md:mb-2">Conexão Humana</h3>
                  <div className="w-6 md:w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Tecnologia projetada para apoiar as pessoas na vida cotidiana, criando vínculos emocionais e relacionamentos significativos a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Section - Asymmetric with Image */}
      <section id="companion" className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <div className="mb-6 md:mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
                  <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">PRODUTO PRINCIPAL</span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
                  Axion <span className="text-[#6C3BFF]">Companion</span>
                </h2>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-10">
                Um companheiro robótico inteligente projetado para aprender, interagir, assistir e crescer ao lado de seu proprietário.
              </p>

              <div className="space-y-3 md:space-y-5 mb-8 md:mb-10">
                {[
                  { title: "Interação por Voz", desc: "Compreensão e geração de linguagem natural" },
                  { title: "Expressões Emocionais", desc: "Interações responsivas e expressivas" },
                  { title: "Capacidades de Aprendizado", desc: "Algoritmos adaptativos que melhoram ao longo do tempo" },
                  { title: "Lembretes Inteligentes", desc: "Assistência inteligente para tarefas diárias" },
                  { title: "Integração Doméstica", desc: "Conectividade perfeita com dispositivos inteligentes" },
                  { title: "Assistência Educacional", desc: "Suporte para aprendizado e crescimento pessoal" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#6C3BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm md:text-base font-semibold mb-0.5 md:mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-xs md:text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="btn-primary px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full md:w-auto">
                Saiba Mais Sobre o Companion
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>

            <div className="relative h-64 sm:h-80 md:h-full min-h-80 md:min-h-96 rounded-lg overflow-hidden">
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
      <section className="relative py-16 md:py-32 lg:py-40 bg-[#0A0A0A]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">DIFERENCIAL</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
              Por que <span className="text-[#6C3BFF]">Axion Labs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
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
                className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 md:p-8 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300"
              >
                <item.icon className="h-6 w-6 md:h-8 md:w-8 text-[#6C3BFF] mb-3 md:mb-4" />
                <h3 className="font-display text-lg md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="vision" className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">ROADMAP</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
              Construindo um <span className="text-[#6C3BFF]">Ecossistema</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mt-4 md:mt-6 max-w-2xl">
              Axion Labs é uma empresa de tecnologia de longo prazo construindo o futuro da interação humano-robô.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                className="bg-[#1A1A1A] border border-[#2A2A2A] p-4 md:p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300"
              >
                <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-1 h-3 md:h-4 bg-[#6C3BFF] flex-shrink-0" />
                  <h3 className="font-display text-base md:text-lg font-bold">{category.title}</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative py-16 md:py-32 lg:py-40 bg-[#0A0A0A]">
        <div className="container max-w-4xl px-4 md:px-0">
          <div className="bg-[#1A1A1A] border border-[#6C3BFF] p-8 md:p-12 lg:p-16 rounded-lg">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center">Nosso Manifesto</h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
              <p>Acreditamos que a tecnologia deve fazer mais do que executar tarefas.</p>
              <p>Ela deve <span className="text-[#6C3BFF] font-semibold">aprender</span>.</p>
              <p>Ela deve <span className="text-[#6C3BFF] font-semibold">assistir</span>.</p>
              <p>Ela deve <span className="text-[#6C3BFF] font-semibold">conectar</span>.</p>
              <p className="pt-2 md:pt-4">
                Enquanto outros constroem máquinas, nós construímos <span className="text-[#6C3BFF] font-semibold">companheiros</span>.
              </p>
              <p className="pt-2 md:pt-4 text-[#8B5FFF] font-semibold">
                O futuro merece uma tecnologia que compreenda as pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
        <div className="container max-w-4xl px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">ENTRE EM CONTATO</span>
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6">
              Vamos Construir o <span className="text-[#6C3BFF]">Futuro</span> Juntos
            </h2>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
              Interessado em saber mais sobre a Axion Labs? Adoraríamos ouvir você.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 md:p-8 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
              <h3 className="font-display text-lg md:text-xl mb-3 md:mb-4">Email</h3>
              <a href="mailto:contact@axionlabs.com" className="text-[#6C3BFF] hover:text-[#8B5FFF] transition-colors text-sm md:text-base">
                contact@axionlabs.com
              </a>
            </div>

            <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 md:p-8 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
              <h3 className="font-display text-lg md:text-xl mb-3 md:mb-4">Telefone</h3>
              <a href="tel:+5511999999999" className="text-[#6C3BFF] hover:text-[#8B5FFF] transition-colors text-sm md:text-base">
                +55 (11) 99999-9999
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-colors duration-300"
            >
              <span className="text-lg md:text-xl font-bold">f</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-colors duration-300"
            >
              <span className="text-lg md:text-xl font-bold">𝕏</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg flex items-center justify-center hover:border-[#6C3BFF] hover:text-[#6C3BFF] transition-colors duration-300"
            >
              <span className="text-lg md:text-xl font-bold">in</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-12 md:py-16">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
            <div>
              <h4 className="font-display text-xs md:text-sm font-bold mb-3 md:mb-4 text-[#6C3BFF] tracking-widest">EMPRESA</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
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
              <h4 className="font-display text-xs md:text-sm font-bold mb-3 md:mb-4 text-[#6C3BFF] tracking-widest">PRODUTOS</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
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
              <h4 className="font-display text-xs md:text-sm font-bold mb-3 md:mb-4 text-[#6C3BFF] tracking-widest">LEGAL</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
                <li>
                  <a
                    href="/privacidade"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/privacidade");
                    }}
                    className="hover:text-[#6C3BFF] transition-colors"
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="/termos"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/termos");
                    }}
                    className="hover:text-[#6C3BFF] transition-colors"
                  >
                    Termos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-xs md:text-sm font-bold mb-3 md:mb-4 text-[#6C3BFF] tracking-widest">SIGA-NOS</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">
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

          <div className="border-t border-[#2A2A2A] pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">© 2026 Axion Labs. Todos os direitos reservados.</p>
            <p className="text-xs md:text-sm text-gray-500 text-center">
              Engenharia com precisão. Projetado para humanos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
