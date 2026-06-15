import { ArrowRight, Zap, Brain, Heart, Code, Shield, Rocket, ChevronRight, Menu, X, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import emailjs from "@emailjs/browser";


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
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistCountry, setWaitlistCountry] = useState("");
  const [waitlistPhone, setWaitlistPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("Ozc7CK4vlyayxDBeg");
  }, []);

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
    { label: "Roadmap", href: "#roadmap" },
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

    const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      
      // Enviar para Google Sheets
      if (googleSheetsUrl) {
        try {
          await fetch(googleSheetsUrl, {
            method: "POST",
            body: JSON.stringify({
              nome: waitlistName,
              email: waitlistEmail,
              pais: waitlistCountry,
              whatsapp: waitlistPhone,
            }),
          });
        } catch (sheetsError) {
          console.error("Erro ao enviar para Google Sheets:", sheetsError);
        }
      }

      // Enviar email de boas-vindas via EmailJS
      try {
        await emailjs.send(
          "service_i2qzyif",
          "template_7zo6cjr",
          {
            user_name: waitlistName,
            user_email: waitlistEmail,
            to_email: waitlistEmail,
          }
        );
      } catch (emailError) {
        console.error("Erro ao enviar email:", emailError);
      }

      // Mostrar mensagem de sucesso
      setSubmitMessage("Obrigado! Você foi adicionado à nossa lista de espera. Verifique seu email para mais informações.");
      setWaitlistName("");
      setWaitlistEmail("");
      setWaitlistCountry("");
      setWaitlistPhone("");
      setTimeout(() => setSubmitMessage(""), 6000);
    } catch (error) {
      console.error("Erro ao processar inscrição:", error);
      setSubmitMessage("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
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
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/axion-teaser.mp4" type="video/mp4" />
          {/* Fallback to background image if video doesn't load */}
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
        </video>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-transparent" />

        <div className="container relative z-10 flex flex-col justify-center h-full max-w-6xl px-4 md:px-0">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6 tracking-tight">
              Tecnologia que <span className="text-[#6C3BFF]">Compreende</span> Pessoas.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-xl font-light">
              Construindo a próxima geração de companheiros robóticos inteligentes através de robótica, inteligência artificial e excelência em engenharia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                className="btn-primary px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full sm:w-auto bg-[#6C3BFF] hover:bg-[#5A2FCC] transition-colors"
                onClick={() => handleNavClick("#companion")}
              >
                Conheça o Axion Companion
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 inline" />
              </button>
              <button
                className="btn-secondary px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full sm:w-auto border border-[#6C3BFF] text-[#6C3BFF] hover:bg-[#6C3BFF]/10 transition-colors"
                onClick={() => handleNavClick("#vision")}
              >
                Nossa Visão
              </button>
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

      {/* Companion Section - Showcase with Renders */}
      <section id="companion" className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">PRODUTO PRINCIPAL</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6">
              Axion <span className="text-[#6C3BFF]">Companion</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
              Um companheiro robótico inteligente de 10x10cm, projetado para aprender, interagir, assistir e crescer ao lado de seu proprietário.
            </p>
          </div>

          {/* Renders Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            {/* Frontal Render */}
            <div className="group relative overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/axion-companion-frontal-WvdcSgZw2E3UmmUcYKzPnv.webp"
                alt="Axion Companion - Vista Frontal"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold">Vista Frontal</h3>
                <p className="text-gray-400 text-sm mt-1">Olhos expressivos em neon purple</p>
              </div>
            </div>

            {/* Lateral Render */}
            <div className="group relative overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/axion-companion-lateral-UVDL9ei52vNJS4fkcjPmKd.webp"
                alt="Axion Companion - Vista Lateral"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold">Vista Lateral</h3>
                <p className="text-gray-400 text-sm mt-1">Design compacto e elegante</p>
              </div>
            </div>

            {/* Home Environment */}
            <div className="group relative overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/axion-companion-home-GvKtfFPFixXKQYkPLCg3Bu.webp"
                alt="Axion Companion - Em Casa"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold">Ambiente Doméstico</h3>
                <p className="text-gray-400 text-sm mt-1">Integrado perfeitamente em sua casa</p>
              </div>
            </div>

            {/* Interaction */}
            <div className="group relative overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/axion-companion-interaction-6HjdnBAMMoF4k3DBXMESUV.webp"
                alt="Axion Companion - Interação"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold">Interação Natural</h3>
                <p className="text-gray-400 text-sm mt-1">Portátil e sempre ao seu lado</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-8">Características Principais</h3>
              <div className="space-y-4 md:space-y-6">
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
            </div>

            <div className="relative h-64 sm:h-80 md:h-full min-h-80 md:min-h-96 rounded-lg overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/axion-companion-charging-b2NNwtGA9f3GEWq8iVAiiH.webp"
                alt="Axion Companion - Carregamento"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-16 md:py-32 lg:py-40 bg-[#0A0A0A]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">DESENVOLVIMENTO</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
              Roadmap <span className="text-[#6C3BFF]">Axion</span>
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                phase: "Fase 1",
                title: "Protótipo Funcional",
                desc: "Desenvolvimento e validação do primeiro protótipo com funcionalidades core",
                status: "Em Progresso",
              },
              {
                phase: "Fase 2",
                title: "Assistente por Voz",
                desc: "Integração completa de processamento de linguagem natural e síntese de voz",
                status: "Planejado",
              },
              {
                phase: "Fase 3",
                title: "Reconhecimento Facial",
                desc: "Implementação de visão computacional para reconhecimento de usuários",
                status: "Planejado",
              },
              {
                phase: "Fase 4",
                title: "Produção Piloto",
                desc: "Manufatura de unidades limitadas para testes com usuários beta",
                status: "Planejado",
              },
              {
                phase: "Fase 5",
                title: "Lançamento Comercial",
                desc: "Disponibilidade pública do Axion Companion para o mercado global",
                status: "Planejado",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col md:flex-row gap-4 md:gap-8 p-6 md:p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#6C3BFF] transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#6C3BFF] rounded-lg flex items-center justify-center">
                    <span className="font-display text-lg md:text-2xl font-bold text-white">{idx + 1}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-2">
                    <div>
                      <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">{item.phase}</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold mt-1">{item.title}</h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap ${
                        item.status === "Em Progresso"
                          ? "bg-[#6C3BFF]/20 text-[#6C3BFF]"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Axion Labs Section */}
      <section className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
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
                icon: Shield,
                title: "Privacidade em Primeiro Lugar",
                desc: "Dados do usuário protegidos com criptografia de ponta a ponta e processamento local quando possível.",
              },
              {
                icon: Rocket,
                title: "Inovação Contínua",
                desc: "Roadmap claro com atualizações regulares e novas funcionalidades baseadas em feedback dos usuários.",
              },
              {
                icon: Heart,
                title: "Design Centrado no Humano",
                desc: "Cada decisão de design é feita pensando na experiência e bem-estar do usuário.",
              },
            ].map((item, idx) => (
              <div key={idx} className="group p-6 md:p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#6C3BFF] transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Reality Section */}
      <section className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">REALIDADE</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
              Proof of <span className="text-[#6C3BFF]">Reality</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Team Photo */}
            <div className="group relative overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/proof-reality-team-6gLDmvftKkDEuEKUJcV3Mk.webp"
                alt="Equipe Axion Labs"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold">Nossa Equipe</h3>
                <p className="text-gray-400 text-sm mt-1">Engenheiros e designers apaixonados por inovação</p>
              </div>
            </div>

            {/* Workshop Photo */}
            <div className="group relative overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/proof-reality-workshop-fnoS2d5EafPmpgU9W6kxkD.webp"
                alt="Laboratório Axion Labs"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold">Laboratório</h3>
                <p className="text-gray-400 text-sm mt-1">Equipamento de ponta e precisão em engenharia</p>
              </div>
            </div>

            {/* Prototype Photo */}
            <div className="group relative overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/proof-reality-prototype-6CXMJH3pBQy3JxmNhyMmeA.webp"
                alt="Protótipo Axion Companion"
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-lg md:text-xl font-bold">Protótipo</h3>
                <p className="text-gray-400 text-sm mt-1">Axion Companion em desenvolvimento ativo</p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-20 p-6 md:p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center">
              Somos uma equipe real, com um laboratório real, desenvolvendo um produto real. Cada dia trabalhamos para trazer inovação em robótica e inteligência artificial para sua vida.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="vision" className="relative py-16 md:py-32 lg:py-40 bg-[#0A0A0A]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">LISTA DE ESPERA</span>
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6">
              Seja um dos <span className="text-[#6C3BFF]">Primeiros</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Junte-se à nossa comunidade e receba atualizações exclusivas sobre o desenvolvimento do Axion Companion.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleWaitlistSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={waitlistName}
                    onChange={(e) => setWaitlistName(e.target.value)}
                    required
                    className="w-full px-4 py-3 md:py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg focus:border-[#6C3BFF] focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 md:py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg focus:border-[#6C3BFF] focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">País</label>
                  <input
                    type="text"
                    placeholder="Brasil"
                    value={waitlistCountry}
                    onChange={(e) => setWaitlistCountry(e.target.value)}
                    required
                    className="w-full px-4 py-3 md:py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg focus:border-[#6C3BFF] focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">WhatsApp (Opcional)</label>
                  <input
                    type="tel"
                    placeholder="+55 (11) 99999-9999"
                    value={waitlistPhone}
                    onChange={(e) => setWaitlistPhone(e.target.value)}
                    className="w-full px-4 py-3 md:py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg focus:border-[#6C3BFF] focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>
              </div>
              {submitMessage && (
                <div className="p-4 bg-[#6C3BFF]/20 border border-[#6C3BFF] rounded-lg text-center text-[#6C3BFF]">
                  {submitMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 md:px-8 py-5 md:py-6 bg-[#6C3BFF] hover:bg-[#5A2FCC] disabled:bg-gray-600 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                {isSubmitting ? "Enviando..." : "Entrar na Lista de Espera"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">CONTATO</span>
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">
              Vamos <span className="text-[#6C3BFF]">Conversar</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
              Tem dúvidas sobre o Axion Companion? Quer discutir parcerias? Entre em contato conosco.
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <a
                href="mailto:contato@axionlabs.com"
                className="group p-6 md:p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#6C3BFF] transition-all duration-300 flex flex-col items-center"
              >
                <Mail className="h-8 w-8 md:h-10 md:w-10 text-[#6C3BFF] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg md:text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-400 text-sm md:text-base">contato@axionlabs.com</p>
              </a>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#6C3BFF] transition-all duration-300 flex flex-col items-center"
              >
                <MessageCircle className="h-8 w-8 md:h-10 md:w-10 text-[#6C3BFF] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg md:text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-400 text-sm md:text-base">+55 (11) 99999-9999</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 md:py-16 bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/logo-icon-PzLn8fXxFzLurNEN53JViZ.webp"
                  alt="Axion Labs"
                  className="h-6 w-6"
                />
                <span className="font-display font-bold">AXION LABS</span>
              </div>
              <p className="text-gray-400 text-sm">Tecnologia que compreende pessoas.</p>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-[#6C3BFF] transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#companion" className="hover:text-[#6C3BFF] transition-colors">
                    Produto
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="hover:text-[#6C3BFF] transition-colors">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/termos" className="hover:text-[#6C3BFF] transition-colors">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="/privacidade" className="hover:text-[#6C3BFF] transition-colors">
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:contato@axionlabs.com" className="hover:text-[#6C3BFF] transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5511999999999" className="hover:text-[#6C3BFF] transition-colors">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2A2A2A] pt-8 md:pt-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© 2026 Axion Labs. Todos os direitos reservados.</p>
            <p className="text-gray-500 text-xs">Desenvolvido com inovação e excelência em engenharia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Button Component
function Button({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
