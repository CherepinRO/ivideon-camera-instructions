import { Link, useLocation } from 'wouter';

export default function Header() {
  const [location] = useLocation();
  
  return (
    <header className="border-b bg-primary">
      <div className="max-w-4xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-primary-foreground">
          Ivideon
        </h1>
        
        <nav className="flex gap-4" data-testid="header-nav">
          <Link 
            href="/"
            className={`text-sm md:text-base px-4 py-2 rounded-md transition-colors ${
              location === '/' 
                ? 'bg-primary-foreground text-primary font-semibold' 
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            data-testid="nav-link-connection"
          >
            Подключение
          </Link>
          <Link 
            href="/activation"
            className={`text-sm md:text-base px-4 py-2 rounded-md transition-colors ${
              location === '/activation' 
                ? 'bg-primary-foreground text-primary font-semibold' 
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            data-testid="nav-link-activation"
          >
            Активация
          </Link>
        </nav>
      </div>
    </header>
  );
}
