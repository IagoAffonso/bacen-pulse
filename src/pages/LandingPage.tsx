import Layout from "@/components/layout/Layout";
import MetricCard from "@/components/ui/metric-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  Building2, 
  Target,
  ArrowRight,
  Shield,
  Zap,
  Download,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { mockMarketKPIs } from "@/data/mockData";

const LandingPage = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Análise de Market Share",
      description: "743 métricas únicas cobrindo ativos, crédito, rentabilidade e índices regulatórios"
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Perfis de Instituições",
      description: "Análise financeira completa de 2.000+ instituições com dados históricos desde 2013"
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Inteligência Competitiva",
      description: "Benchmarking entre pares e análise de posicionamento competitivo por segmentos"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-5 h-5 text-success" />,
      title: "Análise de Nível Profissional",
      description: "Qualidade institucional com rigor de research de investment banking"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-success" />,
      title: "Dados Regulatórios Reais",
      description: "Fonte direta BACEN com metodologia padronizada e auditada"
    },
    {
      icon: <Zap className="w-5 h-5 text-success" />,
      title: "Acesso Gratuito e Aberto",
      description: "Democratização de inteligência bancária premium para todos"
    },
    {
      icon: <Download className="w-5 h-5 text-success" />,
      title: "Capacidades de Exportação",
      description: "Excel, PDF e APIs para integração com workflows existentes"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero section-padding">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-display mb-6">
              Inteligência de Mercado 
              <span className="block text-white/90">Serviços Financeiros Brasil</span>
            </h1>
            
            <p className="text-subheading text-white/80 mb-8 max-w-3xl mx-auto">
              Acesso gratuito à análise abrangente de dados do BACEN cobrindo 2.000+ instituições 
              financeiras com 743 métricas únicas ao longo de 47 trimestres
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/market">
                <Button className="btn-hero group">
                  Explorar Dados do Mercado
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <Link to="/institutions">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold">
                  Buscar Instituições
                </Button>
              </Link>
            </div>

            {/* Mini Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {mockMarketKPIs.slice(0, 4).map((kpi, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">{kpi.value}</div>
                  <div className="text-sm text-white/70">{kpi.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-headline mb-4">Principais Funcionalidades</h2>
            <p className="text-subheading max-w-2xl mx-auto">
              Ferramentas profissionais de análise bancária construídas para investment banking e asset management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-subtle flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Snapshot Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-headline mb-4">Snapshot do Mercado</h2>
            <p className="text-subheading max-w-2xl mx-auto">
              Panorama em tempo real do sistema financeiro nacional brasileiro
            </p>
          </div>

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

          {/* Mini Chart Placeholder */}
          <div className="mt-12">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Concentração do Mercado - Top 10 Bancos</h3>
                  <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Gráfico interativo será implementado na próxima fase</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-headline mb-4">Por Que Escolher o Banco Insights</h2>
            <p className="text-subheading max-w-2xl mx-auto">
              Construído para analistas que exigem precisão, profundidade e acessibilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-headline mb-4">Comece Sua Análise Hoje</h2>
          <p className="text-subheading text-white/80 max-w-2xl mx-auto mb-8">
            Junte-se a centenas de analistas que confiam no Banco Insights para pesquisa do setor financeiro brasileiro
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/market">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold">
                Acessar Dashboard
              </Button>
            </Link>
            <Link to="/institutions">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold">
                Explorar Instituições
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;