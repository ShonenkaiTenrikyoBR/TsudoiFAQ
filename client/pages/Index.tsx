import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "1",
    question: "O que é o TSUDOI?",
    answer:
      "An FAQ (Frequently Asked Questions) is a list of common questions and their answers that help users find information quickly without having to contact support.",
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

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Image */}
      <div className="w-full bg-black">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F451fa4d74a704a6a8d4625444abdc854%2Ff28d56f011204d5f9ca495c285b9ad0b?format=webp&width=1600"
          alt="Tsudoc 2025 Banner"
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
                  {item.answer}
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
          <button className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
            <p>Entrar em contato</p>
          </button>
        </div>
      </main>
    </div>
  );
}
