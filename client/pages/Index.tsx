import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Download, FileText } from "lucide-react";

const faqData = [
  {
    id: "1",
    question: "O que é o TSUDOI?",
    answer:
      "O Tsudoi é o Encontro InfantoJuvenil da Igreja Tenrikyo. A 69ª edição será realizada nos dia 15, 16 e 17 de janeiro de 2026 na Sede Missionária Da Tenrikyo Do Brasil (Dendotyo) na cidade de Bauru-SP.",
  },
  {
    id: "2",
    question: "Como faço para me inscrever?",
    answer:
      "Faça a sua inscrição preenchendo os formulários abaixo. Após o envio do formulário, realize o pagamento da taxa de inscrição pelos métodos de pagamento informados.\n\nRequisitos:\nPARTICIPANTES: Idade de 6 a 14 anos.\nAPOIO I OU MONITOR: Ter o Curso de Formação de Líderes da Associação Infantojuvenil.\nAPOIO II: Ter acima de 15 anos",
  },
  {
    id: "3",
    question: "Pagamento",
    answer:
      "O pagamento pode ser realizado em dinheiro na Sede Missionária Dendotyo do Brasil nos dias 13 e 14 de dezembro de 2025, 10 e 11 de janeiro de 2026 ou via pix no QR code abaixo.",
  },
  {
    id: "4",
    question: "Transporte",
    answer:
      "Conversar com os condutores de Igreja e Casa de Divulgação, responsáveis das Regionais ou o Shonenkai para saber quais serão os locais de saídas das caravanas para o TSUDOI 2026.\nPara falar com o Shonenkai sobre dúvidas relacionadas ao transporte, falar com Edison Santos - (11) 99151-3298",
  },
  {
    id: "5",
    question: "Informativos e Instruções",
    answer:
      "You can use your browser's built-in search function (Ctrl+F or Cmd+F) to quickly find specific keywords within the FAQ. This is helpful if you're looking for information about a particular topic.",
  },
  {
    id: "6",
    question: "Termo de autorizaç��o",
    answer:
      "We value your feedback! If you have suggestions for improving our FAQ or think we should add more information about a specific topic, please contact our support team. Your input helps us serve you better.",
  },
];

const pdfUrl =
  "https://cdn.builder.io/o/assets%2F451fa4d74a704a6a8d4625444abdc854%2F26d902bca373472a90aab82a40f0b3f1?alt=media&token=5f61c4e4-b538-43fe-a9c8-9a5631d5e30f&apiKey=451fa4d74a704a6a8d4625444abdc854";

const renderContent = (item: (typeof faqData)[0]) => {
  if (item.id === "2") {
    return (
      <div className="flex flex-col gap-4">
        <p className="whitespace-pre-line text-slate-700">{item.answer}</p>
        <div className="flex flex-col gap-3">
          <a
            href="https://forms.gle/EEeUEm4reYnF3MEA8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Participantes
          </a>
          <a
            href="https://forms.gle/qDSaFY8AK2XufYfQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
          >
            Apoio/Monitoria
          </a>
        </div>
      </div>
    );
  }
  if (item.id === "1") {
    return (
      <div className="flex flex-col gap-4">
        <p>{item.answer}</p>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F451fa4d74a704a6a8d4625444abdc854%2Fc8a73d7c560d42ba8b6ea13149be39de?format=webp&width=800"
              alt="Tenrikyo Headquarters"
              className="rounded-lg max-w-[80%] h-auto border-4 border-slate-300 shadow-lg"
            />
          </div>
          <p className="text-center text-sm text-slate-600 italic">
            Foto-lembrança do 68º Tsudoi 2025 em Bauru-SP
          </p>
        </div>
      </div>
    );
  }
  if (item.id === "3") {
    return (
      <div className="flex flex-col gap-4">
        <p>{item.answer}</p>
        <div className="flex justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F451fa4d74a704a6a8d4625444abdc854%2F2353ed015b8745dabe54ae12c632ebf2?format=webp&width=800"
            alt="QR Code PIX"
            className="rounded-lg max-w-[30%] h-auto"
          />
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-900 mb-3">Dados para PIX:</p>
          <div className="space-y-2 text-slate-700">
            <p><span className="font-semibold">Proprietário:</span> Arthur Mamoru Nakamine</p>
            <p><span className="font-semibold">Instituição:</span> Mercado Pago</p>
            <p><span className="font-semibold">Chave Pix:</span> (19) 97146-1674</p>
            <p><span className="font-semibold">Valor:</span>R$40,00 (participante) e R$60,00 (Apoio/Monitoria)</p>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-slate-700">
            <span className="font-semibold">Importante:</span> enviar comprovante para shonenkai@tenrikyo.org.br com: "Inscrição PARTICIPANTE TSUDOI + nome e a igreja do participante"
          </p>
        </div>
      </div>
    );
  }
  if (item.id === "5") {
    return (
      <div className="flex flex-col gap-3">
        <a
          href={pdfUrl}
          download
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800 transition-colors"
        >
          <Download size={18} />
          Instruções para as Igrejas
        </a>
        <a
          href={pdfUrl}
          download
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800 transition-colors"
        >
          <Download size={18} />
          Instruções para os pais e responsáveis
        </a>
        <a
          href={pdfUrl}
          download
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800 transition-colors"
        >
          <Download size={18} />
          Instruções para os staffs
        </a>
      </div>
    );
  }
  return item.answer;
};

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fff9cc" }}>
      {/* Hero Image */}
      <div className="w-full bg-black">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F451fa4d74a704a6a8d4625444abdc854%2Ff6a4822cc8c84e4a8b9a131ea4f8376c?format=webp&width=1600"
          alt="Tsudoi 2026 Banner"
          className="w-full h-auto block object-cover"
          style={{ aspectRatio: "16 / 4" }}
        />
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              <p>FAQ - Perguntas Frequentes</p>
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              <p>Aqui voê encontra as principais informações sobre o evento.</p>
            </p>
          </div>
        </div>
      </header>

      {/* FAQ Section */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-slate-600 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-600 pt-3">
                  {renderContent(item)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-3">
            <p>Não encontrou a sua pergunta?</p>
          </h2>
          <p className="mb-6 text-slate-200">
            <p>Entre em contato conosco pelos canais de comunicação!</p>
          </p>
          <a
            href="https://www.instagram.com/shonenkaibrasil/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Entrar em contato
          </a>
        </div>
      </main>
    </div>
  );
}
