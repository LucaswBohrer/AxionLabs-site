import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

const LAST_UPDATED = "14 de agosto de 2026";
const CONTACT_EMAIL = "axion.labs.technologies@gmail.com";

export default function Terms() {
  const [, navigate] = useLocation();

  return (
    <div className="w-full bg-[#111111] text-white font-body min-h-screen">
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

      <main className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="font-display text-4xl md:text-6xl mb-6">Termos de Uso</h1>
          <p className="text-gray-400 mb-12">Rascunho operacional para o site Axion Labs. Revisão jurídica recomendada antes de uso comercial em escala.</p>

          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">1. Sobre este site</h2>
              <p>
                Este site apresenta o projeto Axion e permite que pessoas interessadas se inscrevam para receber atualizações sobre o desenvolvimento do Axion Companion. Ao acessar ou usar o site, você concorda com estes termos e com a Política de Privacidade publicada nesta plataforma.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">2. Projeto em desenvolvimento</h2>
              <p>
                O Axion Companion é um protótipo em desenvolvimento. Textos, imagens conceituais, renders, vídeos, especificações, cronogramas e capacidades exibidos no site podem mudar à medida que os componentes forem testados, integrados ou descartados. A apresentação de uma funcionalidade futura não constitui garantia de lançamento, disponibilidade, prazo, preço ou desempenho final.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">3. Registros e conteúdo</h2>
              <p>
                O site pode reunir registros reais de desenvolvimento e imagens conceituais. Os registros documentam o estágio mostrado na data da publicação; eles não devem ser interpretados como demonstração de uma versão final, certificada ou comercialmente disponível do produto.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">4. Lista de espera</h2>
              <p>
                A inscrição na lista de espera expressa interesse em receber atualizações. Ela não cria reserva, compra, contrato de fornecimento, direito de prioridade, promessa de convite ou compromisso de venda. Você pode solicitar a remoção do seu cadastro pelos canais indicados na Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">5. Uso permitido</h2>
              <p className="mb-4">Você pode navegar e compartilhar links públicos do site para fins pessoais e não comerciais. Não é permitido:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>interferir no funcionamento, segurança ou disponibilidade do site;</li>
                <li>usar formulários ou canais de contato para spam, fraude ou atividade ilícita;</li>
                <li>copiar, republicar ou explorar comercialmente conteúdos do site sem autorização;</li>
                <li>apresentar-se como associado, representante ou parceiro da Axion Labs sem autorização.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">6. Propriedade intelectual</h2>
              <p>
                A identidade Axion, os textos, logotipos, imagens, interfaces, vídeos e demais conteúdos presentes neste site pertencem à Axion Labs ou são usados com autorização de seus titulares. Nenhum direito de uso além da navegação pessoal é concedido por estes termos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">7. Links externos</h2>
              <p>
                O site pode direcionar você a plataformas de terceiros, como Instagram, WhatsApp e fornecedores de formulário ou e-mail. Esses serviços possuem regras e políticas próprias; a Axion Labs não controla seu conteúdo ou tratamento de dados fora deste site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">8. Atualizações</h2>
              <p>
                Estes termos poderão ser atualizados para refletir mudanças no projeto, no site ou em requisitos aplicáveis. A versão vigente será disponibilizada nesta página com sua respectiva data de atualização.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">9. Contato</h2>
              <p>
                Para dúvidas sobre estes termos ou sobre o projeto, escreva para <a className="text-[#B69CFF] hover:text-white underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <div className="mt-16 pt-8 border-t border-[#2A2A2A]">
              <p className="text-sm text-gray-500">Última atualização: {LAST_UPDATED}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
