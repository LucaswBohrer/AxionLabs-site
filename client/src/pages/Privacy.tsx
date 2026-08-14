import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

const LAST_UPDATED = "14 de agosto de 2026";
const CONTACT_EMAIL = "axion.labs.technologies@gmail.com";
const CONTACT_WHATSAPP = "+55 (51) 99750-5450";

export default function Privacy() {
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
          <h1 className="font-display text-4xl md:text-6xl mb-6">Política de Privacidade</h1>
          <p className="text-gray-400 mb-12">Rascunho operacional para o site Axion Labs. Revisão jurídica recomendada antes de uso comercial em escala.</p>

          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">1. Escopo e responsável</h2>
              <p>
                Esta política descreve como a Axion Labs trata dados pessoais enviados por meio deste site, em especial pela lista de espera do Axion Companion. Para dúvidas, solicitações ou exercício de direitos relacionados aos seus dados, use os canais de contato informados ao final desta página.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">2. Dados que coletamos</h2>
              <p className="mb-4">No formulário de lista de espera, coletamos apenas os dados preenchidos voluntariamente:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Nome</strong>, para personalizar a comunicação;</li>
                <li><strong>E-mail</strong>, para enviar atualizações sobre o desenvolvimento do Axion.</li>
              </ul>
              <p className="mt-4">
                A infraestrutura de hospedagem pode registrar dados técnicos necessários à segurança e ao funcionamento do site, como endereço IP, navegador, data e horário de acesso, conforme as políticas do provedor de hospedagem. Não solicitamos endereço postal, documento, país ou telefone pela lista de espera atual.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">3. Finalidade e uso</h2>
              <p className="mb-4">Usamos os dados da lista de espera exclusivamente para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>registrar o interesse em acompanhar o Axion Companion;</li>
                <li>enviar atualizações de desenvolvimento, evidências de testes e comunicações relacionadas ao projeto;</li>
                <li>responder a solicitações feitas pelos canais de contato;</li>
                <li>proteger o site e investigar falhas técnicas ou uso indevido.</li>
              </ul>
              <p className="mt-4">Não vendemos nem alugamos os dados enviados pela lista de espera.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">4. Fornecedores envolvidos</h2>
              <p>
                Quando você envia a lista de espera, os dados são encaminhados para a origem de registro configurada pela Axion Labs e podem ser processados por Google Apps Script/Google Sheets para armazenamento do interesse e por EmailJS para o envio de confirmação ou comunicação por e-mail. Esses serviços atuam conforme suas próprias políticas de privacidade e segurança.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">5. Retenção e segurança</h2>
              <p>
                Mantemos os dados da lista de espera enquanto ela estiver ativa ou até que você solicite a exclusão, salvo quando uma retenção adicional for necessária para cumprir obrigação legal ou resguardar direitos. Empregamos controles compatíveis com o estágio do projeto, mas nenhum método de transmissão ou armazenamento eletrônico elimina integralmente riscos de segurança.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">6. Cookies e métricas</h2>
              <p>
                A versão atual do formulário não usa cookies de marketing para registrar sua inscrição. O site poderá utilizar métricas técnicas para compreender desempenho e navegação; caso uma ferramenta que dependa de cookies ou identificadores seja ativada, esta política e os avisos necessários serão atualizados antes ou junto da ativação.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">7. Seus direitos</h2>
              <p className="mb-4">
                Nos termos da legislação aplicável, você pode solicitar confirmação de tratamento, acesso, correção, atualização, anonimização quando cabível, eliminação, informação sobre compartilhamentos e revogação de consentimento. Para exercer esses direitos, entre em contato pelos canais abaixo e informe o e-mail usado no cadastro.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">8. Alterações nesta política</h2>
              <p>
                Esta política poderá ser atualizada quando a lista de espera, os fornecedores ou o funcionamento do site mudarem. A data de atualização exibida abaixo indica a versão deste texto.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl mb-5 text-white">9. Contato</h2>
              <p>Para dúvidas sobre privacidade ou para solicitar a exclusão dos seus dados, fale com a Axion Labs:</p>
              <div className="mt-4 p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg">
                <p className="mb-2"><strong>E-mail:</strong> <a className="text-[#B69CFF] hover:text-white underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
                <p><strong>WhatsApp:</strong> <a className="text-[#B69CFF] hover:text-white underline underline-offset-4" href="https://wa.me/5551997505450" target="_blank" rel="noopener noreferrer">{CONTACT_WHATSAPP}</a></p>
              </div>
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
