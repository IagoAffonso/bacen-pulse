import Layout from "@/components/layout/Layout";
import MetricCard from "@/components/ui/metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Building2, 
  Target,
  BarChart3,
  Users,
  PieChart
} from "lucide-react";
import { mockMarketKPIs } from "@/data/mockData";

const MarketOverview = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-subtle py-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-display mb-4">Visão Geral do Mercado</h1>
            <p className="text-subheading">
              Panorama completo do sistema financeiro nacional brasileiro em tempo real
            </p>
          </div>
        </div>
      </section>

      {/* Main Metrics Bar */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockMarketKPIs.map((kpi, index) => (
              <MetricCard
                key={index}
                title={kpi.title}
                value={kpi.value}
                change={kpi.change}
                changeLabel={kpi.changeLabel}
                description={kpi.description}
                variant={index < 2 ? "primary" : index < 4 ? "default" : "success"}
                icon={
                  index < 2 ? <TrendingUp className="w-5 h-5 text-primary" /> :
                  index < 4 ? <Building2 className="w-5 h-5 text-secondary" /> :
                  <Target className="w-5 h-5 text-success" />
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Market Share Chart Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container-custom">
          <Card className="card-elegant">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold">Evolução do Market Share - Top 10 Instituições</CardTitle>
                  <p className="text-muted-foreground mt-2">Participação por ativos totais ao longo do tempo</p>
                </div>
                <div className="flex items-center space-x-3">
                  <select className="px-3 py-2 border border-border rounded-lg text-sm">
                    <option>Ativos Totais</option>
                    <option>Carteira de Crédito</option>
                    <option>Lucro Líquido</option>
                  </select>
                  <select className="px-3 py-2 border border-border rounded-lg text-sm">
                    <option>5 Anos</option>
                    <option>2 Anos</option>
                    <option>1 Ano</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-subtle rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Gráfico de área interativo será implementado</p>
                  <p className="text-sm text-muted-foreground">Plotly.js integration na próxima fase</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Concentration Analysis */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  <span>Análise de Concentração</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Índice HHI</span>
                    <span className="text-lg font-bold">0.087</span>
                  </div>
                  <div className="h-48 bg-gradient-subtle rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Gráfico de concentração</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Top 5 Bancos</span>
                      <span className="font-medium">68.2%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Demais Instituições</span>
                      <span className="font-medium">31.8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span>Destaques do Trimestre</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-medium text-success">Crescimento Acelerado</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Banco Inter registrou crescimento de 15.2% em ativos no trimestre
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-medium">Novas Autorizações</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      3 novas instituições receberam autorização do BACEN
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <h4 className="font-medium text-primary">Consolidação</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      2 operações de M&A anunciadas no período
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketOverview;