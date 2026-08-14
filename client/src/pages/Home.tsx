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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitState, setSubmitState] = useState<"success" | "error" | "">("");

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
    { label: "Protótipo", href: "#building" },
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
    setSubmitState("");

    try {
      const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

      if (!googleSheetsUrl) {
        throw new Error("A origem de registro da lista de espera não está configurada.");
      }

      // Mantém o formato original da planilha, mesmo que país e WhatsApp não sejam mais coletados no site.
      const registration = {
        nome: waitlistName.trim(),
        email: waitlistEmail.trim(),
        pais: "",
        whatsapp: "",
      };

      const sheetsResponse = await fetch(googleSheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(registration),
      });

      if (!sheetsResponse.ok) {
        throw new Error(`Não foi possível registrar a inscrição (${sheetsResponse.status}).`);
      }

      let welcomeEmailSent = true;
      try {
        const emailResponse = await emailjs.send(
          "service_i2qzyif",
          "template_7zo6cjr",
          {
            user_name: registration.nome,
            user_email: registration.email,
            to_email: registration.email,
          }
        );
        welcomeEmailSent = emailResponse.status >= 200 && emailResponse.status < 300;
      } catch (emailError) {
        welcomeEmailSent = false;
        console.error("Inscrição registrada, mas o e-mail de boas-vindas falhou:", emailError);
      }

      setSubmitState("success");
      setSubmitMessage(
        welcomeEmailSent
          ? "Inscrição registrada. Enviaremos atualizações do protótipo para o seu e-mail."
          : "Inscrição registrada. O e-mail de boas-vindas pode demorar, mas seus dados já foram adicionados à lista."
      );
      setWaitlistName("");
      setWaitlistEmail("");
    } catch (error) {
      console.error("Erro ao processar inscrição:", error);
      setSubmitState("error");
      setSubmitMessage("Não foi possível registrar sua inscrição agora. Tente novamente ou entre em contato pelo e-mail abaixo.");
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
          <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663723826567/bScHQvpdSTjzZowB.mp4" type="video/mp4" />
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
              Um companheiro robótico <span className="text-[#6C3BFF]">em desenvolvimento</span>.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-xl font-light">
              O Axion Companion é um protótipo físico em evolução, criado para tornar a tecnologia mais presente, expressiva e humana. Acompanhe cada etapa de construção e validação.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                className="btn-primary px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full sm:w-auto bg-[#6C3BFF] hover:bg-[#5A2FCC] transition-colors"
                onClick={() => handleNavClick("#building")}
              >
                Ver o protótipo em desenvolvimento
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 inline" />
              </button>
              <button
                className="btn-secondary px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-lg font-medium w-full sm:w-auto border border-[#6C3BFF] text-[#6C3BFF] hover:bg-[#6C3BFF]/10 transition-colors"
                onClick={() => handleNavClick("#roadmap")}
              >
                Acompanhar os testes
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
                  <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">O PROJETO</span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 md:mb-8">
                  Construído na <span className="text-[#6C3BFF]">bancada</span>, passo a passo
                </h2>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                A Axion Labs é o projeto independente de Lucas Bohrer para criar um companheiro robótico expressivo e útil. O desenvolvimento começa pelo que pode ser visto, ligado e testado no mundo real: hardware, display, olhos e estados de interação.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                A visão é evoluir essa base física para percepção, áudio, comunicação, IA, voz, personalidade e memória — no ritmo em que cada camada puder ser validada com responsabilidade.
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
              Bases do que estamos <span className="text-[#6C3BFF]">construindo</span>
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
                A base atual é o protótipo físico: ESP32, display e expressões visuais. Novos sensores e periféricos entram somente depois de testes isolados.
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
                A camada de IA pertence às etapas futuras. Ela será conectada a uma arquitetura própria depois que a base de hardware, percepção e comunicação estiver validada.
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
                Expressão, presença e uma interação respeitosa orientam a experiência. O objetivo é que cada capacidade técnica tenha uma função humana clara.
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
              Uma visão de produto para um companheiro robótico compacto. O protótipo está em desenvolvimento ativo; cada capacidade abaixo é apresentada com seu estágio atual para manter a evolução transparente.
            </p>
            <p className="inline-flex mt-5 px-3 py-2 rounded-full bg-[#6C3BFF]/10 text-[#C8B7FF] text-xs font-semibold tracking-wide">Imagens conceituais de produto em evolução</p>
          </div>

          {/* Renders Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            {/* Frontal Render */}
            <div className="group relative overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/axion-companion-frontal-WvdcSgZw2E3UmmUcYKzPnv.webp"
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                loading="lazy"
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
                  { title: "Olhos e estados visuais", desc: "Display ligado e expressões visuais registradas no protótipo em bancada.", status: "Demonstrado no registro" },
                  { title: "Sensor de presença", desc: "Próxima etapa de validação isolada do hardware.", status: "Próximo marco" },
                  { title: "Microfone e áudio", desc: "Integração prevista após a validação dos componentes de percepção.", status: "Planejado" },
                  { title: "Interação por voz", desc: "Processamento de linguagem e síntese de voz para uma etapa posterior.", status: "Visão futura" },
                  { title: "Memória e personalidade", desc: "Camadas próprias a serem desenvolvidas depois da base de hardware e comunicação.", status: "Visão futura" },
                  { title: "Integrações adicionais", desc: "Expansões serão consideradas depois de um protótipo funcional validado.", status: "Futuro" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 md:gap-4">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#6C3BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ChevronRight className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm md:text-base font-semibold mb-0.5 md:mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-xs md:text-sm">{feature.desc}</p>
                      <span className="inline-flex mt-2 px-2 py-1 rounded-full bg-[#6C3BFF]/15 text-[#B69CFF] text-[10px] md:text-xs font-semibold tracking-wide">{feature.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 sm:h-80 md:h-full min-h-80 md:min-h-96 rounded-lg overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663723826567/2FzR4jRCyHDrWV2TuKTUbo/axion-companion-charging-b2NNwtGA9f3GEWq8iVAiiH.webp"
                loading="lazy"
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
                title: "Desenvolvimento documentado",
                desc: "O projeto mostra registros de bancada e separa com clareza o que foi demonstrado, o que está em teste e o que ainda é visão futura.",
              },
              {
                icon: Shield,
                title: "Coleta de dados mínima",
                desc: "A lista de espera atual solicita apenas nome e e-mail para o envio de atualizações. O tratamento está descrito na Política de Privacidade.",
              },
              {
                icon: Rocket,
                title: "Validação antes de integração",
                desc: "Cada componente precisa ser testado de forma isolada antes de se tornar parte do sistema. Isso reduz incertezas e preserva o que já funciona.",
              },
              {
                icon: Heart,
                title: "Design expressivo",
                desc: "Os olhos e os estados visuais dão forma à identidade do Axion desde a primeira etapa, conectando hardware e experiência de maneira simples.",
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

      {/* Building in Public Section */}
      <section id="building" className="relative py-16 md:py-32 lg:py-40 bg-[#111111]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
              <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">CONSTRUÇÃO REAL</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6">
              Construído <span className="text-[#6C3BFF]">no mundo real</span>.
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              O Axion está sendo desenvolvido passo a passo. Abaixo estão registros reais da bancada de desenvolvimento; eles mostram o processo atual, não uma versão final do produto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <figure className="group overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-all duration-300">
              <img
                src="/media/prototipo-em-bancada.jpeg"
                alt="Registro de bancada do protótipo Axion com ESP32 conectado a um display de olhos expressivos"
                loading="lazy"
                className="w-full h-72 md:h-[30rem] object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="p-5 md:p-6">
                <span className="inline-flex px-2 py-1 rounded-full bg-[#6C3BFF]/15 text-[#B69CFF] text-[10px] md:text-xs font-semibold tracking-wide">Registro real de bancada</span>
                <h3 className="font-display text-lg md:text-xl font-bold mt-3">Display e olhos em desenvolvimento</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">O registro mostra o ESP32 conectado ao display enquanto os estados visuais dos olhos são exibidos. Componentes adicionais ainda estão em integração e validação.</p>
              </figcaption>
            </figure>

            <div className="rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] overflow-hidden flex flex-col">
              <video controls playsInline preload="metadata" className="w-full h-72 md:h-[30rem] object-cover bg-black">
                <source src="/media/processo-construcao.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
              <div className="p-5 md:p-6">
                <span className="inline-flex px-2 py-1 rounded-full bg-[#6C3BFF]/15 text-[#B69CFF] text-[10px] md:text-xs font-semibold tracking-wide">Registro do processo</span>
                <h3 className="font-display text-lg md:text-xl font-bold mt-3">Acompanhe a evolução do protótipo</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">Um registro enviado durante o desenvolvimento. Novas validações serão publicadas conforme cada componente for testado de forma isolada e integrado ao sistema.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-16">
            <div className="max-w-3xl mb-6 md:mb-8">
              <span className="text-[#B69CFF] text-xs md:text-sm font-semibold tracking-widest">ESTUDOS DE CARCAÇA</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-3">Da ideia à estrutura física</h3>
              <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed">Estes são desenhos e visualizações iniciais da carcaça do Axion. Eles orientam a próxima etapa de prototipagem, mas ainda não representam uma peça final fabricada ou validada.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              <figure className="overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="aspect-[4/3] bg-[#F8F6D9]">
                  <img src="/media/axion-front-panel-rev-g.png" alt="Estudo inicial do painel frontal da carcaça do Axion, com recorte para display e pontos de fixação" loading="lazy" className="w-full h-full object-contain" />
                </div>
                <figcaption className="p-5">
                  <span className="inline-flex px-2 py-1 rounded-full bg-[#6C3BFF]/15 text-[#B69CFF] text-[10px] font-semibold tracking-wide">Estudo de design · Rev. G</span>
                  <h4 className="font-display text-lg font-bold mt-3">Painel frontal</h4>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">Estudo com recorte de display e pontos de fixação. Encaixes, dimensões e materiais ainda precisam de validação física.</p>
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="aspect-[4/3] bg-[#F8F6D9]">
                  <img src="/media/axion-assembly-rev-g.png" alt="Visualização inicial da montagem da carcaça cúbica do Axion" loading="lazy" className="w-full h-full object-contain" />
                </div>
                <figcaption className="p-5">
                  <span className="inline-flex px-2 py-1 rounded-full bg-[#6C3BFF]/15 text-[#B69CFF] text-[10px] font-semibold tracking-wide">Estudo de design · Rev. G</span>
                  <h4 className="font-display text-lg font-bold mt-3">Montagem da carcaça</h4>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">Visualização do volume externo e da tampa superior como referência de forma. Não é um produto fabricado.</p>
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-lg bg-[#0A0A0A] border border-[#2A2A2A] hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="aspect-[4/3] bg-[#F8F6D9]">
                  <img src="/media/axion-enclosure-single-cube-rev-f.svg" alt="Desenho técnico inicial da enclosure do Axion com vistas de referência" loading="lazy" className="w-full h-full object-contain" />
                </div>
                <figcaption className="p-5">
                  <span className="inline-flex px-2 py-1 rounded-full bg-[#6C3BFF]/15 text-[#B69CFF] text-[10px] font-semibold tracking-wide">Referência técnica · Rev. F</span>
                  <h4 className="font-display text-lg font-bold mt-3">Desenho da enclosure</h4>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">Documento de referência com vistas de projeto da enclosure. Os detalhes mecânicos permanecem em evolução.</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="mt-8 md:mt-12 p-6 md:p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-[#B69CFF] text-xs font-semibold tracking-widest">AGORA</p>
              <p className="text-gray-300 text-sm mt-2">Base de hardware, display e estados visuais em desenvolvimento.</p>
            </div>
            <div>
              <p className="text-[#B69CFF] text-xs font-semibold tracking-widest">PRÓXIMO TESTE</p>
              <p className="text-gray-300 text-sm mt-2">Validação isolada do sensor de presença antes da integração.</p>
            </div>
            <div>
              <p className="text-[#B69CFF] text-xs font-semibold tracking-widest">DEPOIS</p>
              <p className="text-gray-300 text-sm mt-2">Microfone, áudio, comunicação e camadas de IA em etapas posteriores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section id="creator" className="relative py-16 md:py-28 lg:py-32 bg-[#0A0A0A] border-y border-[#2A2A2A]">
        <div className="container max-w-6xl px-4 md:px-0">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-center">
            <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-3 rounded-2xl bg-[#6C3BFF]/20 blur-2xl" aria-hidden="true" />
              <img
                src="/media/lucas-bohrer-criador.jpeg"
                alt="Lucas Bohrer, criador do projeto Axion"
                loading="lazy"
                className="relative w-full aspect-[3/4] object-cover rounded-xl border border-[#6C3BFF]/40"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 md:h-8 bg-[#6C3BFF]" />
                <span className="text-[#6C3BFF] text-xs md:text-sm font-semibold tracking-widest">QUEM ESTÁ CONSTRUINDO</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl leading-tight mb-5">
                Por trás do <span className="text-[#6C3BFF]">Axion</span>.
              </h2>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-5">
                Eu sou Lucas Bohrer, criador do Axion. Estou construindo o projeto de ponta a ponta: do protótipo físico e seus testes de hardware à experiência, identidade e evolução do Companion.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                O desenvolvimento é documentado com transparência porque cada avanço precisa ser testado no mundo real antes de se tornar parte do produto.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/lucas_bohrer_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#6C3BFF] text-[#D8CCFF] hover:bg-[#6C3BFF]/15 transition-colors font-semibold"
                >
                  Acompanhe no Instagram <span aria-hidden="true">@lucas_bohrer_ ↗</span>
                </a>
                <a
                  href="https://github.com/LuquinhasBohrer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conheça outros projetos de Lucas Bohrer no GitHub"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#3A3A3A] text-gray-200 hover:border-[#6C3BFF] hover:text-[#D8CCFF] transition-colors font-semibold"
                >
                  Outros projetos no GitHub <span aria-hidden="true">@LuquinhasBohrer ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative py-16 md:py-32 lg:py-40 bg-[#0A0A0A]">
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
              Receba atualizações sobre os testes do protótipo, novas evidências de desenvolvimento e futuros convites para acompanhar a jornada do Axion.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleWaitlistSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="waitlist-name" className="block text-sm font-semibold mb-2">Nome</label>
                  <input
                    id="waitlist-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome"
                    value={waitlistName}
                    onChange={(e) => setWaitlistName(e.target.value)}
                    required
                    className="w-full px-4 py-3 md:py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg focus:border-[#6C3BFF] focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="waitlist-email" className="block text-sm font-semibold mb-2">E-mail</label>
                  <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="seu@email.com"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 md:py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg focus:border-[#6C3BFF] focus:outline-none transition-colors text-white placeholder-gray-500"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">Usaremos seu nome e e-mail apenas para enviar atualizações sobre o desenvolvimento do Axion. Consulte nossa <a href="/privacidade" className="text-[#B69CFF] underline underline-offset-4 hover:text-white">Política de Privacidade</a>.</p>
              {submitMessage && (
                <div role={submitState === "error" ? "alert" : "status"} aria-live="polite" className={`p-4 rounded-lg text-center ${submitState === "error" ? "bg-red-500/10 border border-red-400/60 text-red-200" : "bg-[#6C3BFF]/20 border border-[#6C3BFF] text-[#D8CCFF]"}`}>
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
                href="mailto:axion.labs.technologies@gmail.com"
                className="group p-6 md:p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#6C3BFF] transition-all duration-300 flex flex-col items-center"
              >
                <Mail className="h-8 w-8 md:h-10 md:w-10 text-[#6C3BFF] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg md:text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-400 text-sm md:text-base">axion.labs.technologies@gmail.com</p>
              </a>

              <a
                href="https://wa.me/5551997505450?text=Olá.%20gostaria%20de%20mais%20informações%20sobre%20a%20Axion%20Labs"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg hover:border-[#6C3BFF] transition-all duration-300 flex flex-col items-center"
              >
                <MessageCircle className="h-8 w-8 md:h-10 md:w-10 text-[#6C3BFF] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg md:text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-400 text-sm md:text-base">+55 (51) 99750-5450</p>
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
              <a
                href="https://github.com/LuquinhasBohrer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 text-sm text-gray-300 hover:text-[#B69CFF] transition-colors"
              >
                GitHub · @LuquinhasBohrer <span className="ml-1" aria-hidden="true">↗</span>
              </a>
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
                  <a href="mailto:axion.labs.technologies@gmail.com" className="hover:text-[#6C3BFF] transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5551997505450?text=Olá.%20gostaria%20de%20mais%20informações%20sobre%20a%20Axion%20Labs" className="hover:text-[#6C3BFF] transition-colors">
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
