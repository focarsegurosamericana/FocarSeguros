import {
  Car,
  Motorbike,
  Truck,
  Home,
  Store,
  Building2,
  User,
  Users,
  ShieldAlert,
  Plane,
  Bike,
  KeyRound,
  Package,
  type LucideIcon,
} from "lucide-react";

export type QuoteFieldType =
  | "text"
  | "cpfCnpj"
  | "cep"
  | "date"
  | "phone"
  | "email"
  | "select"
  | "checklist"
  | "textarea";

export type QuoteField = {
  name: string;
  label: string;
  type: QuoteFieldType;
  options?: string[];
  placeholder?: string;
  span?: 1 | 2;
  required?: boolean;
};

export type QuoteStep = {
  id: string;
  label: string;
  fields: QuoteField[];
};

export type QuoteCategory = {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  steps: QuoteStep[];
};

const seguradoStep: QuoteStep = {
  id: "segurado",
  label: "Segurado",
  fields: [
    { name: "documento", label: "CPF/CNPJ", type: "cpfCnpj", span: 1 },
    { name: "nome", label: "Nome Completo", type: "text", span: 1 },
    { name: "cep", label: "CEP", type: "cep", span: 1 },
    { name: "nascimento", label: "Data de Nascimento", type: "date", span: 1 },
    {
      name: "genero",
      label: "Gênero",
      type: "select",
      options: ["Masculino", "Feminino"],
      span: 1,
    },
    {
      name: "estadoCivil",
      label: "Estado Civil",
      type: "select",
      options: [
        "Solteiro(a)",
        "Casado(a)",
        "Divorciado(a)",
        "Viúvo(a)",
        "União Estável",
      ],
      span: 1,
    },
  ],
};

const contatoStep: QuoteStep = {
  id: "contato",
  label: "Contato",
  fields: [
    { name: "telefone", label: "Telefone / WhatsApp", type: "phone", span: 1 },
    { name: "email", label: "E-mail", type: "email", span: 1 },
    {
      name: "horario",
      label: "Melhor horário para contato",
      type: "select",
      options: ["Manhã", "Tarde", "Noite"],
      span: 1,
      required: false,
    },
  ],
};

const coberturasStep = (options: string[]): QuoteStep => ({
  id: "coberturas",
  label: "Coberturas",
  fields: [
    {
      name: "coberturas",
      label: "Coberturas desejadas",
      type: "checklist",
      options,
      span: 2,
      required: false,
    },
    {
      name: "observacoes",
      label: "Observações (opcional)",
      type: "textarea",
      span: 2,
      required: false,
      placeholder: "Conte um pouco mais sobre o que você precisa",
    },
  ],
});

const coberturasVeiculo = [
  "Roubo e Furto",
  "Colisão / Acidentes",
  "Responsabilidade Civil (RCF)",
  "Assistência 24h",
  "Carro Reserva",
  "Vidros e Faróis",
];

const coberturasPatrimonio = [
  "Incêndio",
  "Roubo e Furto",
  "Danos Elétricos",
  "Responsabilidade Civil",
  "Assistência 24h",
  "Vendaval / Fenômenos da Natureza",
];

const coberturasVida = [
  "Morte Natural ou Acidental",
  "Invalidez Permanente",
  "Doenças Graves",
  "Assistência Funeral",
  "Diária por Internação",
];

export const quoteCategories: QuoteCategory[] = [
  {
    slug: "carro",
    title: "Seguro Carro",
    subtitle: "Cotação para o seu automóvel.",
    icon: Car,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "veiculo",
        label: "Veículo",
        fields: [
          { name: "placa", label: "Placa", type: "text", span: 1 },
          { name: "marca", label: "Marca", type: "text", span: 1 },
          { name: "modelo", label: "Modelo", type: "text", span: 1 },
          { name: "ano", label: "Ano", type: "text", span: 1 },
          {
            name: "uso",
            label: "Uso do veículo",
            type: "select",
            options: ["Particular", "Motorista de aplicativo", "Comercial"],
            span: 2,
          },
        ],
      },
      coberturasStep(coberturasVeiculo),
    ],
  },
  {
    slug: "moto",
    title: "Seguro Moto",
    subtitle: "Cotação para a sua motocicleta.",
    icon: Motorbike,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "veiculo",
        label: "Motocicleta",
        fields: [
          { name: "placa", label: "Placa", type: "text", span: 1 },
          { name: "marca", label: "Marca", type: "text", span: 1 },
          { name: "modelo", label: "Modelo", type: "text", span: 1 },
          { name: "ano", label: "Ano", type: "text", span: 1 },
        ],
      },
      coberturasStep(coberturasVeiculo),
    ],
  },
  {
    slug: "caminhao",
    title: "Seguro Caminhão",
    subtitle: "Cotação para o seu caminhão.",
    icon: Truck,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "veiculo",
        label: "Caminhão",
        fields: [
          { name: "placa", label: "Placa", type: "text", span: 1 },
          { name: "marca", label: "Marca", type: "text", span: 1 },
          { name: "modelo", label: "Modelo", type: "text", span: 1 },
          { name: "ano", label: "Ano", type: "text", span: 1 },
          { name: "carga", label: "Tipo de carga transportada", type: "text", span: 2 },
        ],
      },
      coberturasStep(coberturasVeiculo),
    ],
  },
  {
    slug: "residencial",
    title: "Seguro Residencial",
    subtitle: "Cotação para a sua casa ou apartamento.",
    icon: Home,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "imovel",
        label: "Imóvel",
        fields: [
          {
            name: "tipoImovel",
            label: "Tipo de imóvel",
            type: "select",
            options: ["Casa", "Apartamento"],
            span: 1,
          },
          { name: "endereco", label: "Endereço do imóvel", type: "text", span: 1 },
          { name: "valorImovel", label: "Valor estimado do imóvel", type: "text", span: 2 },
        ],
      },
      coberturasStep(coberturasPatrimonio),
    ],
  },
  {
    slug: "empresa",
    title: "Seguro Empresa",
    subtitle: "Cotação para o seu negócio.",
    icon: Store,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "empresa",
        label: "Empresa",
        fields: [
          { name: "razaoSocial", label: "Razão Social", type: "text", span: 1 },
          { name: "cnpj", label: "CNPJ", type: "cpfCnpj", span: 1 },
          { name: "ramo", label: "Ramo de atividade", type: "text", span: 1 },
          { name: "enderecoEmpresa", label: "Endereço da empresa", type: "text", span: 1 },
        ],
      },
      coberturasStep(coberturasPatrimonio),
    ],
  },
  {
    slug: "condominio",
    title: "Seguro Condomínio",
    subtitle: "Cotação para o seu condomínio.",
    icon: Building2,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "condominio",
        label: "Condomínio",
        fields: [
          { name: "nomeCondominio", label: "Nome do condomínio", type: "text", span: 1 },
          { name: "unidades", label: "Número de unidades", type: "text", span: 1 },
          { name: "enderecoCondominio", label: "Endereço", type: "text", span: 2 },
        ],
      },
      coberturasStep(coberturasPatrimonio),
    ],
  },
  {
    slug: "vida-individual",
    title: "Seguro Vida Individual",
    subtitle: "Segurança financeira para você e sua família.",
    icon: User,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "perfil",
        label: "Perfil",
        fields: [
          { name: "profissao", label: "Profissão", type: "text", span: 1 },
          { name: "renda", label: "Renda mensal aproximada", type: "text", span: 1 },
          {
            name: "fumante",
            label: "É fumante?",
            type: "select",
            options: ["Não", "Sim"],
            span: 2,
          },
        ],
      },
      coberturasStep(coberturasVida),
    ],
  },
  {
    slug: "vida-global",
    title: "Seguro Vida Global",
    subtitle: "Proteção coletiva para grupos e empresas.",
    icon: Users,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "grupo",
        label: "Grupo Segurado",
        fields: [
          { name: "entidade", label: "Empresa / entidade vinculada", type: "text", span: 1 },
          { name: "vidas", label: "Número de vidas a segurar", type: "text", span: 1 },
        ],
      },
      coberturasStep(coberturasVida),
    ],
  },
  {
    slug: "acidentes",
    title: "Seguro de Acidentes Pessoais",
    subtitle: "Cobertura para imprevistos do dia a dia.",
    icon: ShieldAlert,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "perfil",
        label: "Perfil de Risco",
        fields: [
          { name: "profissao", label: "Profissão", type: "text", span: 1 },
          {
            name: "atividadeRisco",
            label: "Pratica atividade de risco?",
            type: "select",
            options: ["Não", "Sim"],
            span: 1,
          },
        ],
      },
      coberturasStep(coberturasVida),
    ],
  },
  {
    slug: "viagem",
    title: "Seguro Viagem",
    subtitle: "Assistência médica em qualquer destino.",
    icon: Plane,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "viagem",
        label: "Viagem",
        fields: [
          { name: "destino", label: "Destino", type: "text", span: 2 },
          { name: "dataIda", label: "Data de ida", type: "date", span: 1 },
          { name: "dataVolta", label: "Data de volta", type: "date", span: 1 },
          { name: "viajantes", label: "Número de viajantes", type: "text", span: 1 },
        ],
      },
      coberturasStep([
        "Assistência Médica",
        "Bagagem Extraviada",
        "Cancelamento de Viagem",
        "Assistência Odontológica",
      ]),
    ],
  },
  {
    slug: "bike",
    title: "Seguro Bike",
    subtitle: "Cotação para a sua bicicleta.",
    icon: Bike,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "bike",
        label: "Bicicleta",
        fields: [
          { name: "marcaBike", label: "Marca", type: "text", span: 1 },
          { name: "modeloBike", label: "Modelo", type: "text", span: 1 },
          { name: "valorBike", label: "Valor da bicicleta", type: "text", span: 2 },
        ],
      },
      coberturasStep(["Roubo e Furto", "Danos Acidentais", "Assistência 24h"]),
    ],
  },
  {
    slug: "aluguel",
    title: "Seguro Aluguel",
    subtitle: "Garantia para imóveis alugados.",
    icon: KeyRound,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "imovelAlugado",
        label: "Imóvel Alugado",
        fields: [
          { name: "enderecoAlugado", label: "Endereço do imóvel", type: "text", span: 2 },
          { name: "valorAluguel", label: "Valor mensal do aluguel", type: "text", span: 1 },
        ],
      },
      coberturasStep(coberturasPatrimonio),
    ],
  },
  {
    slug: "diversos",
    title: "Seguro Diversos",
    subtitle: "Cotação para outros tipos de bens.",
    icon: Package,
    steps: [
      seguradoStep,
      contatoStep,
      {
        id: "detalhes",
        label: "Detalhes do Bem",
        fields: [
          { name: "descricaoBem", label: "Descrição do bem a segurar", type: "textarea", span: 2 },
          { name: "valorBem", label: "Valor estimado", type: "text", span: 1 },
        ],
      },
      coberturasStep(["Roubo e Furto", "Danos Acidentais", "Responsabilidade Civil"]),
    ],
  },
];

export const getQuoteCategory = (slug: string) =>
  quoteCategories.find((c) => c.slug === slug);
