import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Heart, Code, Shield, Rocket, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Axion Labs Corporate Website - Home Page
 * 
 * Design Philosophy: Premium Laboratory
 * - Dark graphite background (#111111) with neon purple accents (#6C3BFF)
 * - Asymmetric layouts with strategic use of whitespace
 * - Premium typography using Sora (display) and Inter (body)
 * - Geometric accent shapes echoing the "A" logo
 * - Smooth animations and micro-interactions
 * - Investor-ready, professional appearance
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
              Technology That <span className="text-[#6C3BFF]">Understands</span> People.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl font-light">
              Building the next generation of intelligent robotic companions through robotics, artificial intelligence,
              and engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="btn-primary px-8 py-6 text-base rounded-lg font-medium"
                onClick={() => document.getElementById("companion")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discover Axion Companion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="btn-secondary px-8 py-6 text-base rounded-lg font-medium"
                onClick={() => document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Vision
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
                  <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">OUR STORY</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl leading-tight mb-8">
                  Born from <span className="text-[#6C3BFF]">Technical</span> Expertise
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Axion Labs emerged from decades of experience at Eletrônica Digital, a company that understood
                technology from the inside. We transformed that technical expertise into innovative products designed
                to improve everyday life through intelligent robotics and artificial intelligence.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Today, we're building intelligent robotic companions that combine cutting-edge robotics, adaptive AI,
                and human-centered design to create meaningful relationships between humans and technology.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-sm font-semibold text-[#6C3BFF] tracking-wide">MISSION</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Create intelligent companions that enhance human life through innovation and engineering excellence.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-sm font-semibold text-[#6C3BFF] tracking-wide">VISION</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A future where technology understands people, learns from them, and creates meaningful connections.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-lg hover:border-[#6C3BFF] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-[#6C3BFF]" />
                  <h3 className="font-display text-sm font-semibold text-[#6C3BFF] tracking-wide">VALUES</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Innovation, reliability, human-centered design, and engineering-driven excellence.
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
              <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">TECHNOLOGY</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Three Pillars of <span className="text-[#6C3BFF]">Innovation</span>
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
                  <h3 className="font-display text-2xl font-bold mb-2">Robotics</h3>
                  <div className="w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Creating intelligent physical companions with advanced sensors, actuators, and mechanical design that
                enable natural, intuitive interaction.
              </p>
            </div>

            {/* AI */}
            <div className="group">
              <div className="mb-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Artificial Intelligence</h3>
                  <div className="w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Natural language processing, adaptive learning, and emotional understanding that enables meaningful
                conversations and continuous growth.
              </p>
            </div>

            {/* Human Connection */}
            <div className="group">
              <div className="mb-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6C3BFF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">Human Connection</h3>
                  <div className="w-8 h-1 bg-[#6C3BFF] rounded-full" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Technology designed to support people in everyday life, creating emotional bonds and meaningful
                long-term relationships.
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
                  <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">FLAGSHIP PRODUCT</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl leading-tight">
                  Axion <span className="text-[#6C3BFF]">Companion</span>
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                An intelligent robotic companion designed to learn, interact, assist, and grow alongside its owner.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { title: "Voice Interaction", desc: "Natural language understanding and generation" },
                  { title: "Emotional Expressions", desc: "Responsive and expressive interactions" },
                  { title: "Learning Capabilities", desc: "Adaptive algorithms that improve over time" },
                  { title: "Smart Reminders", desc: "Intelligent assistance for daily tasks" },
                  { title: "Home Integration", desc: "Seamless connectivity with smart devices" },
                  { title: "Educational Assistance", desc: "Support for learning and personal growth" },
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
                Learn More About Companion
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
              <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">DIFFERENTIATION</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Why <span className="text-[#6C3BFF]">Axion Labs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Code,
                title: "Engineering-First Approach",
                desc: "Built on decades of technical expertise. Every component is designed with precision and reliability.",
              },
              {
                icon: Heart,
                title: "Human-Centered Design",
                desc: "Every feature is designed with the user in mind. Technology should enhance human life, not complicate it.",
              },
              {
                icon: Shield,
                title: "Reliability & Trust",
                desc: "Built to last. Our companions are designed for long-term relationships with their owners.",
              },
              {
                icon: Rocket,
                title: "Innovation & Vision",
                desc: "We're not just building products today. We're creating the foundation for the future.",
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
              Building an <span className="text-[#6C3BFF]">Ecosystem</span>
            </h2>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl">
              Axion Labs is a long-term technology company building the future of human-robot interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Home Robotics", desc: "Intelligent companions for everyday life" },
              { title: "Educational Robotics", desc: "Learning and development through interaction" },
              { title: "AI Assistants", desc: "Advanced conversational AI systems" },
              { title: "Elder Care Technology", desc: "Compassionate support for aging populations" },
              { title: "Smart Devices", desc: "Connected ecosystem of intelligent products" },
              { title: "Future Categories", desc: "Expanding into new frontiers of technology" },
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
            <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">Our Manifesto</h2>
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-300">
              <p>We believe technology should do more than execute tasks.</p>
              <p>It should <span className="text-[#6C3BFF] font-semibold">learn</span>.</p>
              <p>It should <span className="text-[#6C3BFF] font-semibold">assist</span>.</p>
              <p>It should <span className="text-[#6C3BFF] font-semibold">connect</span>.</p>
              <p className="pt-4">
                While others build machines, we build <span className="text-[#6C3BFF] font-semibold">companions</span>.
              </p>
              <p className="pt-4 text-[#8B5FFF] font-semibold">
                The future deserves technology that understands people.
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
              <span className="text-[#6C3BFF] text-sm font-semibold tracking-widest">GET IN TOUCH</span>
              <div className="w-1 h-8 bg-[#6C3BFF]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-6">
              Let's Build the <span className="text-[#6C3BFF]">Future</span> Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Interested in learning more about Axion Labs? We'd love to hear from you.
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
              <h3 className="font-display text-xl mb-4">Phone</h3>
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
              <h4 className="font-display text-sm font-bold mb-4 text-[#6C3BFF] tracking-widest">COMPANY</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-[#6C3BFF] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold mb-4 text-[#6C3BFF] tracking-widest">PRODUCTS</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#companion" className="hover:text-[#6C3BFF] transition-colors">
                    Axion Companion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold mb-4 text-[#6C3BFF] tracking-widest">LEGAL</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6C3BFF] transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold mb-4 text-[#6C3BFF] tracking-widest">FOLLOW</h4>
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
            <p className="text-sm text-gray-500">© 2026 Axion Labs. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-4 md:mt-0">
              Engineered with precision. Designed for humans.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
