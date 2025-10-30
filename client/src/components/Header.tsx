import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b bg-primary">
      <div className="max-w-4xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-primary-foreground">
          Ivideon
        </h1>
        
        <Link href="/">
          <button 
            className="flex items-center gap-2 text-primary-foreground hover:bg-primary-foreground/10 px-3 md:px-4 py-2 rounded-md transition-colors"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm md:text-base">Все инструкции</span>
          </button>
        </Link>
      </div>
    </header>
  );
}
