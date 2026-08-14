import Image from "next/image";
import { Mail, Phone } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DADOS — troque os valores "—" pelos números reais de cada negócio  */
/* ------------------------------------------------------------------ */

type Financeiro = {
  investimento: string;
  payback: string;
  margemEbitda: string;
  valuation5: string;
  valuation10: string;
};

type Kpi = { valor: string; label: string };

type Unidade = {
  nome: string;
  imagem: string;
  descricao: string;
  financeiro: Financeiro;
  kpis: Kpi[];
};

type Secao = {
  id: string;
  titulo: string;
  unidades: Unidade[];
};

const secoes: Secao[] = [
  {
    id: "alma-cafe",
    titulo: "Alma Café",
    unidades: [
      {
        nome: "Alma Café",
        imagem: "/images/alma-cafe.jpg",
        descricao:
          "Descrição do conceito, localização e proposta de valor do Alma Café.",
        financeiro: {
          investimento: "R$ —",
          payback: "— meses",
          margemEbitda: "— %",
          valuation5: "R$ —",
          valuation10: "R$ —",
        },
        kpis: [
          { valor: "R$ —", label: "Ticket Médio Est." },
          { valor: "—", label: "Clientes / Dia" },
          { valor: "— %", label: "CMV Target" },
          { valor: "—", label: "Payback (Meses)" },
        ],
      },
    ],
  },
  {
    id: "vila-da-graca",
    titulo: "Vila da Graça",
    unidades: [
      {
        nome: "Vila da Graça",
        imagem: "/images/vila-da-graca.jpg",
        descricao:
          "Descrição do conceito, localização e proposta de valor da Vila da Graça.",
        financeiro: {
          investimento: "R$ —",
          payback: "— meses",
          margemEbitda: "— %",
          valuation5: "R$ —",
          valuation10: "R$ —",
        },
        kpis: [
          { valor: "R$ —", label: "Ticket Médio Est." },
          { valor: "—", label: "Clientes / Dia" },
          { valor: "— %", label: "CMV Target" },
          { valor: "—", label: "Payback (Meses)" },
        ],
      },
    ],
  },
  {
    id: "vila-ondina",
    titulo: "Vila Ondina",
    unidades: [
      {
        nome: "Vila Ondina",
        imagem: "/images/vila-ondina.jpg",
        descricao:
          "Descrição do conceito, localização e proposta de valor da Vila Ondina.",
        financeiro: {
          investimento: "R$ —",
          payback: "— meses",
          margemEbitda: "— %",
          valuation5: "R$ —",
          valuation10: "R$ —",
        },
        kpis: [
          { valor: "R$ —", label: "Ticket Médio Est." },
          { valor: "—", label: "Clientes / Dia" },
          { valor: "— %", label: "CMV Target" },
          { valor: "—", label: "Payback (Meses)" },
        ],
      },
    ],
  },
  {
    id: "vila-pituba",
    titulo: "Vila Pituba",
    unidades: [
      {
        nome: "Vila Pituba",
        imagem: "/images/vila-pituba.jpg",
        descricao:
          "Descrição do conceito, localização e proposta de valor da Vila Pituba.",
        financeiro: {
          investimento: "R$ —",
          payback: "— meses",
          margemEbitda: "— %",
          valuation5: "R$ —",
          valuation10: "R$ —",
        },
        kpis: [
          { valor: "R$ —", label: "Ticket Médio Est." },
          { valor: "—", label: "Clientes / Dia" },
          { valor: "— %", label: "CMV Target" },
          { valor: "—", label: "Payback (Meses)" },
        ],
      },
    ],
  },
  {
    id: "complexo-alphaville",
    titulo: "Complexo Alphaville",
    unidades: [
      {
        nome: "Vila Alphaville",
        imagem: "/images/alphaville-vila.jpg",
        descricao: "Descrição do conceito Vila dentro do Complexo Alphaville.",
        financeiro: {
          investimento: "R$ —",
          payback: "— meses",
          margemEbitda: "— %",
          valuation5: "R$ —",
          valuation10: "R$ —",
        },
        kpis: [
          { valor: "R$ —", label: "Ticket Médio Est." },
          { valor: "—", label: "Clientes / Dia" },
          { valor: "— %", label: "CMV Target" },
          { valor: "—", label: "Payback (Meses)" },
        ],
      },
      {
        nome: "Japonês Luxo",
        imagem: "/images/alphaville-japones.jpg",
        descricao: "Descrição do conceito Japonês Luxo dentro do Complexo Alphaville.",
        financeiro: {
          investimento: "R$ —",
          payback: "— meses",
          margemEbitda: "— %",
          valuation5: "R$ —",
          valuation10: "R$ —",
        },
        kpis: [
          { valor: "R$ —", label: "Ticket Médio Est." },
          { valor: "—", label: "Clientes / Dia" },
          { valor: "— %", label: "CMV Target" },
          { valor: "—", label: "Payback (Meses)" },
        ],
      },
      {
        nome: "Mediterrâneo Luxo",
        imagem: "/images/alphaville-mediterraneo.jpg",
        descricao:
          "Descrição do conceito Mediterrâneo Luxo dentro do Complexo Alphaville.",
        financeiro: {
          investimento: "R$ —",
          payback: "— meses",
          margemEbitda: "— %",
          valuation5: "R$ —",
          valuation10: "R$ —",
        },
        kpis: [
          { valor: "R$ —", label: "Ticket Médio Est." },
          { valor: "—", label: "Clientes / Dia" },
          { valor: "— %", label: "CMV Target" },
          { valor: "—", label: "Payback (Meses)" },
        ],
      },
    ],
  },
];

/* Dados de contato do rodapé — ajuste conforme necessário */
const contato = {
  emails: ["contato@empresa.com.br", "financeiro@empresa.com.br"],
  telefones: ["+55 71 90000-0000", "+55 71 90000-0001"],
};

/* ------------------------------------------------------------------ */
/*  COMPONENTES                                                        */
/* ------------------------------------------------------------------ */

function TabelaFinanceira({
  nome,
  financeiro,
}: {
  nome: string;
  financeiro: Financeiro;
}) {
  const linhas = [
    { label: "Investimento Total", valor: financeiro.investimento },
    { label: "Payback", valor: financeiro.payback },
    { label: "Média Margem EBITDA", valor: financeiro.margemEbitda },
    { label: "Valuation post money (5 anos)", valor: financeiro.valuation5 },
    { label: "Valuation post money (10 anos)", valor: financeiro.valuation10 },
  ];

  return (
    <div className="w-full max-w-md border border-dourado/20 rounded-sm bg-white/5 overflow-hidden">
      <div className="bg-dourado/10 border-b border-dourado/20 px-6 py-4">
        <h3 className="text-offwhite font-serif text-lg tracking-wide">
          {nome}
        </h3>
      </div>
      <dl className="divide-y divide-dourado/10">
        {linhas.map((linha) => (
          <div
            key={linha.label}
            className="flex items-center justify-between gap-4 px-6 py-3"
          >
            <dt className="text-xs tracking-[0.1em] uppercase font-light text-offwhite/60">
              {linha.label}
            </dt>
            <dd className="text-dourado font-serif text-base whitespace-nowrap">
              {linha.valor}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function GradeKpis({ kpis }: { kpis: Kpi[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, i) => (
        <div
          key={kpi.label}
          className="scroll-anim fade-in-up flex flex-col items-center justify-center p-8 border border-dourado/20 rounded-sm bg-white/5 hover:bg-white/10 transition-colors"
          style={{ transitionDelay: `${i * 0.2}s` }}
        >
          <span className="text-3xl md:text-4xl font-serif text-dourado mb-3 text-center">
            {kpi.valor}
          </span>
          <span className="text-xs tracking-[0.15em] uppercase font-light text-offwhite/70 text-center">
            {kpi.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function BlocoUnidade({ unidade }: { unidade: Unidade }) {
  return (
    <div className="flex flex-col gap-10">
      {/* imagem */}
      <div className="relative w-full h-[320px] md:h-[420px] rounded-sm overflow-hidden">
        <Image
          src={unidade.imagem}
          alt={unidade.nome}
          fill
          className="object-cover"
        />
      </div>

      {/* descrição */}
      <p className="text-offwhite/80 font-light leading-relaxed max-w-3xl">
        {unidade.descricao}
      </p>

      {/* tabela-1 */}
      <TabelaFinanceira nome={unidade.nome} financeiro={unidade.financeiro} />

      {/* KPIs */}
      <div className="scroll-anim fade-in-up">
        <p className="text-dourado tracking-[0.3em] text-xs font-bold uppercase mb-4">
          Investimento &amp; Retorno
        </p>
        <h3 className="text-2xl md:text-3xl font-serif text-offwhite mb-8">
          KPIs — {unidade.nome}
        </h3>
      </div>
      <GradeKpis kpis={unidade.kpis} />
    </div>
  );
}

function Secao({ secao }: { secao: Secao }) {
  const multiplasUnidades = secao.unidades.length > 1;

  return (
    <section
      id={secao.id}
      className="w-full py-24 md:py-32 border-b border-dourado/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* titulo */}
        <div className="scroll-anim fade-in-up mb-16">
          <p className="text-dourado tracking-[0.3em] text-xs font-bold uppercase mb-4">
            Unidade
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-offwhite">
            {secao.titulo}
          </h2>
        </div>

        {!multiplasUnidades ? (
          <BlocoUnidade unidade={secao.unidades[0]} />
        ) : (
          <div className="flex flex-col gap-24">
            {secao.unidades.map((unidade) => (
              <div
                key={unidade.nome}
                className="border-t border-dourado/10 pt-16 first:border-t-0 first:pt-0"
              >
                <h3 className="text-xl md:text-2xl font-serif text-dourado mb-8 tracking-wide">
                  {unidade.nome}
                </h3>
                <BlocoUnidade unidade={unidade} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/60 border-b border-dourado/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-serif text-xl md:text-2xl text-offwhite tracking-wide">
          Nome do Projeto
        </span>
        <nav className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase text-offwhite/70">
          {secoes.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="hover:text-dourado transition-colors"
            >
              {s.titulo}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full py-16 border-t border-dourado/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
        <p className="text-dourado tracking-[0.3em] text-xs font-bold uppercase">
          Contato
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {contato.emails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-offwhite/80 hover:text-dourado transition-colors"
            >
              <Mail className="w-5 h-5 text-dourado" strokeWidth={1.5} />
              <span className="text-sm font-light">{email}</span>
            </a>
          ))}

          {contato.telefones.map((tel) => (
            <a
              key={tel}
              href={`tel:${tel.replace(/\D/g, "")}`}
              className="flex items-center gap-3 text-offwhite/80 hover:text-dourado transition-colors"
            >
              <Phone className="w-5 h-5 text-dourado" strokeWidth={1.5} />
              <span className="text-sm font-light">{tel}</span>
            </a>
          ))}
        </div>

        <p className="text-offwhite/40 text-xs font-light tracking-wide">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PÁGINA                                                              */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        {secoes.map((secao) => (
          <Secao key={secao.id} secao={secao} />
        ))}
      </main>
      <Footer />
    </div>
  );
}