import InstructionStep from '@/components/InstructionStep';

import image1 from '@assets/page3_time_settings/images/image1.png';
import image2 from '@assets/page3_time_settings/images/image2.png';
import image3 from '@assets/page3_time_settings/images/image3.png';
import image4 from '@assets/page3_time_settings/images/image4.png';

export default function TimeSettings() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="page-title">
            Настройка времени
          </h1>
          <p className="text-base md:text-lg text-muted-foreground" data-testid="page-subtitle">
            На камере отображается неверное время
          </p>
        </div>

        <section className="mb-12 md:mb-16 bg-card border border-border rounded-lg p-6 md:p-8" data-testid="intro-section">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
            Инструкция по настройке времени
          </h2>
          <p className="text-base md:text-lg text-foreground/80">
            Пошаговое руководство по настройке правильного времени на камере Ivideon и в облачном архиве.
          </p>
        </section>

        <div className="space-y-12 md:space-y-16">
          <section data-testid="section-time-setup">
            <div className="space-y-12 md:space-y-16">
              <InstructionStep
                stepNumber={1}
                instruction="Для настройки времени нужно выбрать камеру и нажать на 3 точки в правом нижнем углу"
                imageSrc={image1}
                imageAlt="Выбор камеры для настройки времени"
              />
              
              <InstructionStep
                stepNumber={2}
                instruction="Выбираем настройки камеры"
                imageSrc={image2}
                imageAlt="Меню настроек камеры"
              />
              
              <InstructionStep
                stepNumber={3}
                instruction="Настройки системные"
                imageSrc={image3}
                imageAlt="Системные настройки"
              />
              
              <InstructionStep
                stepNumber={4}
                instruction="Нужно поменять время"
                imageSrc={image4}
                imageAlt="Настройка времени"
              />

              <div className="bg-card border border-border rounded-lg p-6 md:p-8" data-testid="time-info">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Параметры времени</h3>
                <ul className="space-y-4 text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-foreground">Часовой пояс</strong> – это время отображается в облачном архиве
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-semibold flex-shrink-0">•</span>
                    <div>
                      <strong className="text-foreground">Время на устройстве</strong> – это время показанное на камере
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
