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
  /** Financeiro consolidado da seção (usado quando a seção reúne várias unidades num único investimento, ex. Complexo Alphaville) */
  financeiroConsolidado?: { nome: string; financeiro: Financeiro };
  unidades: Unidade[];
};

const secoes: Secao[] = [
  {
    id: "alma-cafe",
    titulo: "Alma Café",
    unidades: [
      {
        nome: "Café Alma",
        imagem: "/alma.png",
        descricao:
          "Conceito - O ALMA é uma cafeteria premium inspirada nos charmosos cafés europeus, oferecendo uma experiência completa do café da manhã ao jantar. O cardápio reúne cafés especiais, brunch, confeitaria artesanal, almoços leves e, à noite, uma seleção sofisticada de burratas, bruschettas, pizzettas artesanais, tábuas, fondue, vinhos e drinks autorais. Em um ambiente elegante e acolhedor, unimos a excelência da gastronomia europeia aos sabores e à hospitalidade da Bahia, criando um novo destino gastronômico no coração do Pelourinho.",
        financeiro: {
          investimento: "?",
          payback: "?",
          margemEbitda: "?",
          valuation5: "?",
          valuation10: "?",
        },
        kpis: [
          { valor: "R$ 67,14", label: "Ticket Médio Est." },
          { valor: "44", label: "Clientes / Dia" },
          { valor: "28-32 %", label: "CMV Target" },
          { valor: "39", label: "Payback (Meses)" },
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
        imagem: "/teste.png",
        descricao:
          "Descrição do conceito, localização e proposta de valor da Vila da Graça.",
        financeiro: {
          investimento: "R$ 1,3MM",
          payback: "29 meses",
          margemEbitda: "29,77%",
          valuation5: "R$ 3,4MM",
          valuation10: "R$ 8,3MM",
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
        imagem: "/teste.png",
        descricao:
          "Descrição do conceito, localização e proposta de valor da Vila Ondina.",
        financeiro: {
          investimento: "R$ 1,3MM",
          payback: "29 meses",
          margemEbitda: "29,77%",
          valuation5: "R$ 3,4MM",
          valuation10: "R$ 8,3MM",
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
        imagem: "/vila-ptb.png",
        descricao:
          "Conceito - A Vila da Graça nasceu para transformar qualquer encontro em uma experiência completa. Um espaço vibrante, descontraído e cheio de personalidade, onde a gastronomia abraça todos os gostos: espetos, açaí, pizzas, hambúrgueres, cachorro-quente e muito mais. Para acompanhar, bebidas geladas e chopp sempre no clima. É aquele lugar para chegar sem pressa, reunir os amigos, comer bem, brindar e deixar a noite acontecer.",
        financeiro: {
          investimento: "R$ 3MM",
          payback: "26 meses",
          margemEbitda: "26,41%",
          valuation5: "R$ 4,7MM",
          valuation10: "R$ 10,2MM",
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
  /* {
    id: "complexo-alphaville",
    titulo: "Complexo Alphaville",
    // Os dados financeiros foram fornecidos de forma consolidada para os 3 conceitos juntos
    financeiroConsolidado: {
      nome: "Vila Alphaville + Mediterrâneo + Japonês",
      financeiro: {
        investimento: "R$ 8,5MM",
        payback: "57 meses",
        margemEbitda: "25,56%",
        valuation5: "R$ 10,7MM",
        valuation10: "R$ 37,5MM",
      },
    },
    unidades: [
      {
        nome: "Vila Alphaville",
        imagem: "/teste.png",
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
        imagem: "/boteko.png",
        descricao:
          "Descrição do conceito Japonês Luxo dentro do Complexo Alphaville.",
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
        imagem: "/teste.png",
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
  }, */
];

/* Resumo executivo exibido no Hero */
const resumoExecutivo = {
  kicker: "Apresentação Executiva",
  VDG: "VILA DA GRAÇA",
  titulo:
    "Vila Da Graça - Uma Marca, Novos Endereços, Operações atuais e oportunidades de investimento",
  texto:
    "Este material apresenta uma visão consolidada das operações atuais e das novas unidades projetadas: Alma Café, Vila da Graça, Vila Ondina, Vila Pituba e Complexo Alphaville. Para cada frente, são detalhados o investimento necessário, as projeções financeiras e os principais indicadores de desempenho, incluindo faturamento, rentabilidade, margem EBITDA, prazo de payback e valuation estimado em 5 e 10 anos. O objetivo é oferecer aos investidores informações claras e consistentes para a análise das oportunidades e a tomada de decisão sobre a alocação de capital.",
};

/* Dados de contato do rodapé — ajuste conforme necessário */
const contato = {
  emails: ["rodrigo@r4scapital.com", "thsilvavb@gmail.com"],
  telefones: ["+55 71 99668-8636", "+55 71 98119-7523"],
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

function BlocoUnidade({
  unidade,
  mostrarTabela = true,
}: {
  unidade: Unidade;
  mostrarTabela?: boolean;
}) {
  return (
    <div className="flex flex-col gap-10">
      {/* imagem */}
      <div className="w-full">
        <Image
          src={unidade.imagem}
          alt={unidade.nome}
          width={1200}
          height={900}
          className="w-full aspect-video object-cover rounded-sm"
        />
      </div>
      {/* sessao dupla */}
      <div className="flex w-full justify-between gap-6 max-lg:flex-col">
        {/* descrição */}
        <p className="text-offwhite/80 font-light text-xl leading-relaxed w-1/2 max-lg:w-full">
          {unidade.descricao}
        </p>

        {/* tabela-1 */}
        {mostrarTabela && (
          <TabelaFinanceira
            nome={unidade.nome}
            financeiro={unidade.financeiro}
          />
        )}
      </div>

      {/* KPIs */}
      <div className="scroll-anim fade-in-up text-center">
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

        {/* tabela-1 consolidada, quando a seção reúne várias unidades num único investimento */}
        {secao.financeiroConsolidado && (
          <div className="mb-16">
            <TabelaFinanceira
              nome={secao.financeiroConsolidado.nome}
              financeiro={secao.financeiroConsolidado.financeiro}
            />
          </div>
        )}

        {!multiplasUnidades ? (
          <BlocoUnidade
            unidade={secao.unidades[0]}
            mostrarTabela={!secao.financeiroConsolidado}
          />
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
                <BlocoUnidade
                  unidade={unidade}
                  mostrarTabela={!secao.financeiroConsolidado}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] flex items-center justify-center overflow-hidden py-6">
      {/* imagem/plano de fundo — troque por uma imagem real se desejar */}
      <div className="" />
      <div className="" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <p className="scroll-anim fade-in-up text-dourado tracking-[0.3em] text-sm font-bold uppercase">
          {resumoExecutivo.kicker}
        </p>
        <h1 className="scroll-anim fade-in-up text-2xl md:text-3xl lg:text-4xl font-serif text-offwhite leading-tight">
          {resumoExecutivo.titulo}
        </h1>
        <p className="scroll-anim fade-in-up text-offwhite/70 font-light leading-relaxed text-base md:text-xl max-w-2xl">
          {resumoExecutivo.texto}
        </p>

        <a
          href={`#${secoes[0].id}`}
          className="scroll-anim fade-in-up inline-flex items-center border border-dourado/40 text-dourado text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-sm hover:bg-dourado/10 transition-colors"
        >
          Ver Unidades
        </a>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F0B08] border-b border-dourado/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between max-lg:justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif tracking-wide">
            VILA DA GRAÇA
          </h1>
          <p className="text-2xl font-serif">A SUA VILA</p>
        </div>
        <nav className="hidden min-lg:flex gap-8 text-xs tracking-[0.2em] uppercase text-offwhite/70">
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
              href={`https://wa.me/55${tel.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
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
    <div className="bg-[#A88B67] min-h-screen">
      <Header />
      <Hero />
      <main>
        {secoes.map((secao) => (
          <Secao key={secao.id} secao={secao} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
