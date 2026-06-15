import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Terms() {
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
          <h1 className="font-display text-5xl md:text-6xl mb-12">Termos de Serviço</h1>

          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section>
              <h2 className="font-display text-3xl mb-6 text-white">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o site da Axion Labs, você aceita estar vinculado por estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não use este site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">2. Uso Licenciado</h2>
              <p>
                É concedida a você uma licença limitada, não exclusiva e não transferível para visualizar e usar este site para fins pessoais e não comerciais. Você não pode:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                <li>Modificar ou copiar os materiais</li>
                <li>Usar os materiais para qualquer finalidade comercial ou para qualquer finalidade pública</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site</li>
                <li>Remover qualquer aviso de direitos autorais ou propriedade dos materiais</li>
                <li>Transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">3. Isenção de Responsabilidade</h2>
              <p>
                Os materiais no site da Axion Labs são fornecidos "como estão". A Axion Labs não oferece garantias, expressas ou implícitas, e se isenta de todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">4. Limitações de Responsabilidade</h2>
              <p>
                Em nenhum caso a Axion Labs ou seus fornecedores serão responsáveis por danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção de negócios) decorrentes do uso ou da incapacidade de usar os materiais no site da Axion Labs.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">5. Precisão dos Materiais</h2>
              <p>
                Os materiais que aparecem no site da Axion Labs podem incluir erros técnicos, tipográficos ou fotográficos. A Axion Labs não garante que qualquer material em seu site seja preciso, completo ou atual. A Axion Labs pode fazer alterações nos materiais contidos em seu site a qualquer momento sem aviso prévio.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">6. Links</h2>
              <p>
                A Axion Labs não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso pelo site da Axion Labs do site. O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">7. Modificações</h2>
              <p>
                A Axion Labs pode revisar estes Termos de Serviço para seu site a qualquer momento sem aviso prévio. Ao usar este site, você está concordando em estar vinculado pela versão atual destes Termos de Serviço.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">8. Lei Aplicável</h2>
              <p>
                Estes Termos de Serviço e qualquer disputa relacionada são regidos pelas leis do Brasil, e você irrevogavelmente concorda em se submeter à jurisdição exclusiva dos tribunais localizados no Brasil.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl mb-6 text-white">9. Contato</h2>
              <p>
                Se você tiver dúvidas sobre estes Termos de Serviço, entre em contato conosco em contact@axionlabs.com.
              </p>
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
