import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Privacy() {
  const [, navigate] = useLocation();

  return (
    <div className="w-full bg-[#111111] text-white font-body min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="container flex items-center justify-between h-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#6C3BFF] hover:text-[#8B5FFF] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Voltar</span>
          </button>
          <div className="font-display text-xl font-bold tracking-tight">AXION LABS</div>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-5xl md:text-6xl mb-12">Política de Privacidade</h1>

          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="font-display text-3xl mb-6 text-white">1. Introdução</h2>
              <p>
                A Axion Labs ("nós", "nosso" ou "Axion Labs") opera o site axionlabs.com (o "Site"). Esta página informa você sobre nossas políticas sobre a coleta, uso e divulgação de dados pessoais quando você usa nosso Site e as escolhas que você tem associadas a esses dados.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">2. Informações que Coletamos</h2>
              <p className="mb-4">Coletamos vários tipos de informações para diversos fins para fornecer e melhorar nosso Serviço a você:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dados Pessoais:</strong> Nome, endereço de email, número de telefone, endereço, etc.</li>
                <li><strong>Dados de Uso:</strong> Informações sobre como você acessa e usa o Site, como tipos de navegador, páginas visitadas, hora e data das visitas</li>
                <li><strong>Cookies:</strong> Usamos cookies e tecnologias de rastreamento semelhantes para rastrear atividades em nosso Site</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">3. Como Usamos Suas Informações</h2>
              <p className="mb-4">A Axion Labs usa os dados coletados para vários fins:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e manter nosso Site</li>
                <li>Notificá-lo sobre alterações em nosso Site</li>
                <li>Permitir que você participe de recursos interativos do nosso Site</li>
                <li>Fornecer suporte ao cliente</li>
                <li>Coletar análises para melhorar nosso Site</li>
                <li>Monitorar o uso do nosso Site</li>
                <li>Detectar, prevenir e resolver problemas técnicos</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">4. Segurança de Dados</h2>
              <p>
                A segurança de seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus dados pessoais, não podemos garantir sua segurança absoluta.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">5. Cookies</h2>
              <p>
                Usamos cookies para melhorar sua experiência em nosso Site. Um cookie é um pequeno arquivo de dados armazenado no seu dispositivo que contém informações sobre sua navegação. Você pode instruir seu navegador a recusar todos os cookies ou a alertá-lo quando um cookie está sendo enviado.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">6. Links para Outros Sites</h2>
              <p>
                Nosso Site pode conter links para sites externos que não são operados por nós. Esta Política de Privacidade se aplica apenas ao nosso Site e não temos responsabilidade pelas práticas de privacidade de sites de terceiros. Recomendamos que você revise a política de privacidade de qualquer site antes de fornecer suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">7. Seus Direitos de Privacidade</h2>
              <p className="mb-4">Dependendo de sua localização, você pode ter certos direitos sobre seus dados pessoais:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>O direito de acessar seus dados pessoais</li>
                <li>O direito de corrigir dados pessoais imprecisos</li>
                <li>O direito de solicitar a exclusão de seus dados pessoais</li>
                <li>O direito de optar por não receber comunicações de marketing</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">8. Retenção de Dados</h2>
              <p>
                A Axion Labs reterá seus dados pessoais apenas pelo tempo necessário para os fins estabelecidos nesta Política de Privacidade. Reteremos e usaremos seus dados pessoais conforme necessário para cumprir nossas obrigações legais.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">9. Alterações a Esta Política</h2>
              <p>
                A Axion Labs pode atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre qualquer alteração publicando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização" no topo desta Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">10. Entre em Contato Conosco</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em:
              </p>
              <div className="mt-4 p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg">
                <p className="mb-2"><strong>Email:</strong> contact@axionlabs.com</p>
                <p><strong>Telefone:</strong> +55 (11) 99999-9999</p>
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-[#2A2A2A]">
              <p className="text-sm text-gray-500">
                Última atualização: {new Date().toLocaleDateString("pt-BR")}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
