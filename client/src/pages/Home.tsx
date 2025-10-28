import Header from '@/components/Header';
import InstructionStep from '@/components/InstructionStep';
import ivideonScreenshot from '@assets/unnamed_1761668226614.png';
import deviceSelectionScreenshot from '@assets/unnamed (1)_1761668898895.png';
import connectionMethodScreenshot from '@assets/unnamed (3)_1761669149528.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h1 
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12 md:mb-16"
          data-testid="page-title"
        >
          Подключение камер через личный кабинет
        </h1>
        
        <div className="space-y-12 md:space-y-16">
          <InstructionStep
            stepNumber={1}
            instruction="В личном кабинете ivideon нажмите кнопку Добавить устройство"
            imageSrc={ivideonScreenshot}
            imageAlt="Интерфейс личного кабинета Ivideon с кнопкой Добавить устройство"
          />
          
          <InstructionStep
            stepNumber={2}
            instruction="Выберите устройство которое хотите подключить"
            imageSrc={deviceSelectionScreenshot}
            imageAlt="Диалог выбора устройства для подключения"
          />
          
          <InstructionStep
            stepNumber={3}
            instruction="Выбираем способ подключения"
            imageSrc={connectionMethodScreenshot}
            imageAlt="Выбор способа подключения камеры"
          />
        </div>
      </main>
      
      <footer className="border-t mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <p className="text-sm text-muted-foreground" data-testid="footer-text">
            © 2025 Ivideon. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
