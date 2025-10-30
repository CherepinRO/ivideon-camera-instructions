import { Link } from 'wouter';
import { Camera, Package, Clock, UserPlus } from 'lucide-react';

export default function Index() {
  const pages = [
    {
      title: 'Регистрация',
      description: 'Создание личного кабинета в системе видеонаблюдения Ivideon',
      icon: UserPlus,
      href: '/registration',
      steps: '3 шага',
      testId: 'card-registration'
    },
    {
      title: 'Подключение камер',
      description: 'Пошаговая инструкция по подключению IP-камеры Ivideon через кабель или Wi-Fi',
      icon: Camera,
      href: '/connection',
      steps: '7 шагов',
      testId: 'card-connection'
    },
    {
      title: 'Настройка времени',
      description: 'Инструкция по настройке правильного времени на камере и в облачном архиве',
      icon: Clock,
      href: '/time-settings',
      steps: '4 шага',
      testId: 'card-time-settings'
    },
    {
      title: 'Интеграция с WB.Point',
      description: 'Руководство по настройке камер для пунктов выдачи заказов Wildberries',
      icon: Package,
      href: '/wb-integration',
      steps: '10 шагов',
      testId: 'card-wb-integration'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-primary">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center">
          <h1 className="text-xl md:text-2xl font-semibold text-primary-foreground">
            Ivideon
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4" data-testid="main-title">
            Инструкции Ivideon
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="main-subtitle">
            Выберите интересующую вас инструкцию для работы с системой видеонаблюдения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <Link 
                key={page.href} 
                href={page.href}
              >
                <div 
                  className="bg-card border border-border rounded-lg p-6 md:p-8 hover-elevate active-elevate-2 cursor-pointer h-full"
                  data-testid={page.testId}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-semibold mb-2">
                        {page.title}
                      </h2>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {page.steps}
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground">
                    {page.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
