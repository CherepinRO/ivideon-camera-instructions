import Header from '@/components/Header';
import InstructionStep from '@/components/InstructionStep';
import ivideonScreenshot from '@assets/unnamed_1761668226614.png';
import deviceSelectionScreenshot from '@assets/unnamed (1)_1761668898895.png';
import connectionMethodScreenshot from '@assets/unnamed (3)_1761669149528.png';
import cableConnectionScreenshot from '@assets/unnamed (4)_1761669218517.png';
import wifiConnectionScreenshot from '@assets/unnamed (5)_1761669298875.png';
import wifiCredentialsScreenshot from '@assets/unnamed (6)_1761669429280.png';

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
          
          <InstructionStep
            stepNumber="3.1"
            instruction="Через кабель: Укажите серийный номер камеры (либо нажмите Использовать MAC-адрес и введите MAC-адрес) они расположены на коробке и на устройстве, далее нажмите Продолжить."
            imageSrc={cableConnectionScreenshot}
            imageAlt="Подключение IP-камеры через кабель"
            isSubStep={true}
          />
          
          <InstructionStep
            stepNumber="3.2"
            instruction="Через Wi-Fi: Подключаем камеру к сети питания"
            imageSrc={wifiConnectionScreenshot}
            imageAlt="Подключение камеры к питанию для Wi-Fi настройки"
            isSubStep={true}
          />
          
          <div className="ml-8 md:ml-14 space-y-6 md:space-y-8" data-testid="wifi-credentials-section">
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed font-medium" data-testid="wifi-credentials-title">
                Вводим название сети и пароль
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground" data-testid="wifi-credentials-note">
                В 99.99% случаев вам нужна сеть в 2.4ГГц. Данные с логином и паролем как правило можно найти на коробке от роутера ( если вы их не меняли)
              </p>
            </div>
            
            <div 
              className="border border-border rounded-lg overflow-hidden"
              style={{ boxShadow: 'var(--shadow-lg)' }}
              data-testid="wifi-credentials-image"
            >
              <img 
                src={wifiCredentialsScreenshot} 
                alt="Ввод данных Wi-Fi сети"
                className="w-full h-auto"
              />
            </div>
          </div>
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
