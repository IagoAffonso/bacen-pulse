// Mock data for Banco Insights 2.0

export interface Institution {
  id: string;
  name: string;
  type: string;
  control: string;
  segment: string;
  totalAssets: number;
  creditPortfolio: number;
  roe: number;
  roa: number;
  baselRatio: number;
  marketShare: {
    assets: number;
    credit: number;
  };
  lastUpdate: string;
  headquarters?: string;
  founded?: number;
}

export interface MarketData {
  quarter: string;
  metric: string;
  institutions: Array<{
    name: string;
    value: number;
    marketShare: number;
  }>;
}

export interface MarketKPI {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  description?: string;
}

export const mockInstitutions: Institution[] = [
  {
    id: "00360305",
    name: "ITAU UNIBANCO S.A.",
    type: "Banco Comercial",
    control: "Privado",
    segment: "S1",
    totalAssets: 1823456789012,
    creditPortfolio: 892345678901,
    roe: 0.189,
    roa: 0.014,
    baselRatio: 0.175,
    marketShare: {
      assets: 18.9,
      credit: 19.2
    },
    lastUpdate: "2024-T3",
    headquarters: "São Paulo, SP",
    founded: 1945
  },
  {
    id: "00237335",
    name: "BANCO BRADESCO S.A.",
    type: "Banco Comercial", 
    control: "Privado",
    segment: "S1",
    totalAssets: 1567890123456,
    creditPortfolio: 756789012345,
    roe: 0.156,
    roa: 0.012,
    baselRatio: 0.165,
    marketShare: {
      assets: 16.2,
      credit: 16.8
    },
    lastUpdate: "2024-T3",
    headquarters: "Osasco, SP",
    founded: 1943
  },
  {
    id: "00104099",
    name: "CAIXA ECONOMICA FEDERAL",
    type: "Banco Comercial",
    control: "Público",
    segment: "S1", 
    totalAssets: 1345678901234,
    creditPortfolio: 678901234567,
    roe: 0.134,
    roa: 0.011,
    baselRatio: 0.158,
    marketShare: {
      assets: 13.9,
      credit: 15.1
    },
    lastUpdate: "2024-T3",
    headquarters: "Brasília, DF",
    founded: 1861
  },
  {
    id: "00033066",
    name: "BANCO SANTANDER (BRASIL) S.A.",
    type: "Banco Comercial",
    control: "Estrangeiro",
    segment: "S1",
    totalAssets: 987654321098,
    creditPortfolio: 456789012345,
    roe: 0.142,
    roa: 0.013,
    baselRatio: 0.167,
    marketShare: {
      assets: 10.2,
      credit: 10.8
    },
    lastUpdate: "2024-T3",
    headquarters: "São Paulo, SP",
    founded: 1857
  },
  {
    id: "00341073",
    name: "BANCO INTER S.A.",
    type: "Banco Comercial",
    control: "Privado",
    segment: "S2",
    totalAssets: 123456789012,
    creditPortfolio: 67890123456,
    roe: 0.198,
    roa: 0.016,
    baselRatio: 0.172,
    marketShare: {
      assets: 1.3,
      credit: 1.5
    },
    lastUpdate: "2024-T3",
    headquarters: "Belo Horizonte, MG",
    founded: 1994
  }
];

export const mockMarketKPIs: MarketKPI[] = [
  {
    title: "Ativos Totais do Sistema",
    value: "R$ 9,67 trilhões",
    change: 8.4,
    changeLabel: "último trimestre",
    description: "Soma de todos os ativos do SFN"
  },
  {
    title: "Carteira de Crédito Total",
    value: "R$ 4,52 trilhões",
    change: 5.2,
    changeLabel: "último trimestre", 
    description: "Total de operações de crédito ativas"
  },
  {
    title: "Número de Instituições",
    value: "2.347",
    change: -1.2,
    changeLabel: "último trimestre",
    description: "Instituições autorizadas pelo BACEN"
  },
  {
    title: "Concentração HHI",
    value: "0.087",
    change: 0.8,
    changeLabel: "último trimestre",
    description: "Índice Herfindahl-Hirschman"
  },
  {
    title: "ROE Médio Sistema",
    value: "15.2%",
    change: 2.1,
    changeLabel: "último trimestre",
    description: "Retorno sobre patrimônio líquido"
  },
  {
    title: "Índice Basileia Médio",
    value: "16.8%",
    change: 0.3,
    changeLabel: "último trimestre",
    description: "Adequação de capital regulatório"
  }
];

export const formatCurrency = (value: number): string => {
  if (value >= 1e12) {
    return `R$ ${(value / 1e12).toFixed(2)} tri`;
  }
  if (value >= 1e9) {
    return `R$ ${(value / 1e9).toFixed(2)} bi`;
  }
  if (value >= 1e6) {
    return `R$ ${(value / 1e6).toFixed(2)} mi`;
  }
  return `R$ ${value.toLocaleString('pt-BR')}`;
};

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(1)}%`;
};