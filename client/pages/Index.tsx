import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Download } from "lucide-react";

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
      "Getting started is easy! Simply browse through the questions below, click on any question to expand it and read the answer. If you can't find what you're looking for, feel free to reach out to our support team.",
  },
  {
    id: "3",
    question: "Pagamento",
    answer:
      "Absolutely! While this FAQ covers the most common inquiries, we encourage you to contact our support team if you have questions not covered here. We're always happy to help.",
  },
  {
    id: "4",
    question: "Transporte",
    answer:
      "We regularly update our FAQ based on customer feedback and common support inquiries. New questions and answers are added regularly to ensure we're addressing the most relevant topics.",
  },
  {
    id: "5",
    question: "Informativos e Instruções",
    answer:
      "You can use your browser's built-in search function (Ctrl+F or Cmd+F) to quickly find specific keywords within the FAQ. This is helpful if you're looking for information about a particular topic.",
  },
  {
    id: "6",
    question: "Termo de autorização",
    answer:
      "We value your feedback! If you have suggestions for improving our FAQ or think we should add more information about a specific topic, please contact our support team. Your input helps us serve you better.",
  },
];

const pdfUrl =
  "https://cdn.builder.io/o/assets%2F451fa4d74a704a6a8d4625444abdc854%2F26d902bca373472a90aab82a40f0b3f1?alt=media&token=5f61c4e4-b538-43fe-a9c8-9a5631d5e30f&apiKey=451fa4d74a704a6a8d4625444abdc854";

const renderContent = (item: (typeof faqData)[0]) => {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
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
