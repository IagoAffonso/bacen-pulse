import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Building2, 
  Filter,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { mockInstitutions, formatCurrency, formatPercentage } from "@/data/mockData";
import { Link } from "react-router-dom";

const InstitutionSearch = () => {
  const institutionTypes = ["Todos", "Banco Comercial", "Cooperativas", "Financeiras", "Desenvolvimento"];
  const segments = ["Todos", "S1", "S2", "S3", "S4", "S5"];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-subtle py-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-display mb-4">Buscar Instituições</h1>
            <p className="text-subheading">
              Explore 2.000+ instituições financeiras com análise detalhada e métricas comparativas
            </p>
          </div>
        </div>
      </section>

      {/* Search Interface */}
      <section className="py-12">
        <div className="container-custom">
          <Card className="card-elegant mb-8">
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Main Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar por nome da instituição..."
                    className="pl-10 h-12 text-lg"
                  />
                </div>

                {/* Filters */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Instituição</label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg">
                      {institutionTypes.map(type => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Segmento (Porte)</label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg">
                      {segments.map(segment => (
                        <option key={segment}>{segment}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Controle</label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg">
                      <option>Todos</option>
                      <option>Privado</option>
                      <option>Público</option>
                      <option>Estrangeiro</option>
                    </select>
                  </div>
                </div>

                {/* Institution Type Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Bancos Comerciais
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Cooperativas
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Financeiras
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Bancos de Desenvolvimento
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Resultados da Busca</h2>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
                <select className="px-3 py-1 border border-border rounded text-sm">
                  <option>Ativos Totais</option>
                  <option>Alfabética</option>
                  <option>Market Share</option>
                  <option>ROE</option>
                </select>
              </div>
            </div>

            {/* Institution Cards Grid */}
            <div className="grid gap-6">
              {mockInstitutions.map((institution) => (
                <Card key={institution.id} className="card-elegant hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        {/* Logo Placeholder */}
                        <div className="w-16 h-16 rounded-lg bg-gradient-subtle flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-8 h-8 text-primary" />
                        </div>

                        {/* Institution Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-1">
                                {institution.name}
                              </h3>
                              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                <span>{institution.type}</span>
                                <span>•</span>
                                <span>{institution.control}</span>
                                <span>•</span>
                                <span>Segmento {institution.segment}</span>
                              </div>
                            </div>
                            <Badge variant="outline" className="ml-4">
                              {institution.segment}
                            </Badge>
                          </div>

                          {/* Key Metrics */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <div className="text-sm text-muted-foreground">Ativos Totais</div>
                              <div className="font-semibold">{formatCurrency(institution.totalAssets)}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Carteira de Crédito</div>
                              <div className="font-semibold">{formatCurrency(institution.creditPortfolio)}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">ROE</div>
                              <div className="font-semibold text-success">{formatPercentage(institution.roe)}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Market Share</div>
                              <div className="font-semibold">{institution.marketShare.assets}%</div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <Link to={`/institutions/${institution.id}`}>
                            <Button className="group">
                              Ver Perfil Completo
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 pt-8">
              <Button variant="outline" size="sm">Anterior</Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="text-muted-foreground">...</span>
              <Button variant="outline" size="sm">12</Button>
              <Button variant="outline" size="sm">Próximo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container-custom">
          <h2 className="text-headline mb-8 text-center">Acesso Rápido</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Top 20 por Ativos</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Maiores instituições do sistema financeiro brasileiro
                </p>
                <Button variant="outline" size="sm">Explorar</Button>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Adições Recentes</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Instituições autorizadas nos últimos 12 meses
                </p>
                <Button variant="outline" size="sm">Ver Lista</Button>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <Search className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Mais Buscadas</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Instituições populares entre analistas
                </p>
                <Button variant="outline" size="sm">Descobrir</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InstitutionSearch;