import { Search, Menu, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Visão Geral", href: "/market", icon: BarChart3 },
    { label: "Instituições", href: "/institutions" },
    { label: "Rankings", href: "/rankings" },
    { label: "Análise", href: "/analysis" },
    { label: "Sobre", href: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Banco Insights</span>
              <span className="text-xs text-muted-foreground -mt-1">Inteligência Bancária</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="relative hidden md:block">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Buscar instituições..."
                    className="w-64 transition-all duration-300"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    ✕
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Search className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;