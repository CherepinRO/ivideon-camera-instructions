import { Link, useLocation } from 'wouter';

export default function Header() {
  const [location] = useLocation();
  
  return (
    <header className="border-b bg-primary">
      <div className="max-w-4xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-primary-foreground">
          Ivideon
        </h1>
        
        <nav className="flex gap-2 md:gap-3" data-testid="header-nav">
          <Link 
            href="/"
            className={`text-xs md:text-base px-2 md:px-4 py-2 rounded-md transition-colors ${
              location === '/' 
                ? 'bg-primary-foreground text-primary font-semibold' 
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            data-testid="nav-link-connection"
          >
            Подключение
          </Link>
          <Link 
            href="/wb-integration"
            className={`text-xs md:text-base px-2 md:px-4 py-2 rounded-md transition-colors ${
              location === '/wb-integration' 
                ? 'bg-primary-foreground text-primary font-semibold' 
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            data-testid="nav-link-wb"
          >
            WB.Point
          </Link>
          <Link 
            href="/time-settings"
            className={`text-xs md:text-base px-2 md:px-4 py-2 rounded-md transition-colors ${
              location === '/time-settings' 
                ? 'bg-primary-foreground text-primary font-semibold' 
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            data-testid="nav-link-time"
          >
            Время
          </Link>
        </nav>
      </div>
    </header>
  );
}
