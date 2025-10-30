import InstructionStep from '@/components/InstructionStep';

import image1 from '@assets/page2_instructions/images/image1.png';
import image2 from '@assets/page2_instructions/images/image2.png';
import image3 from '@assets/page2_instructions/images/image3.png';
import image4 from '@assets/page2_instructions/images/image4.png';
import image5 from '@assets/page2_instructions/images/image5.png';
import image6 from '@assets/page2_instructions/images/image6.png';
import image7 from '@assets/page2_instructions/images/image7.png';
import image8 from '@assets/page2_instructions/images/image8.png';
import image9 from '@assets/page2_instructions/images/image9.png';
import image10 from '@assets/page2_instructions/images/image10.png';

export default function WBIntegration() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="page-title">
            Интеграция с WB.Point
          </h1>
          <p className="text-base md:text-lg text-muted-foreground" data-testid="page-subtitle">
            Токен для интеграции видеонаблюдения ПВЗ с WB.Point
          </p>
        </div>

        <section className="mb-12 md:mb-16 bg-card border border-border rounded-lg p-6 md:p-8" data-testid="intro-section">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
            Инструкция по интеграции
          </h2>
          <p className="text-base md:text-lg text-foreground/80">
            Пошаговое руководство по настройке камер Ivideon для работы с пунктами выдачи заказов Wildberries.
          </p>
        </section>

        <div className="space-y-12 md:space-y-16">
          <section data-testid="section-step1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-step1">
              Шаг 1. Создание группы камер ПВЗ в Ivideon
            </h2>
            
            <div className="space-y-12 md:space-y-16">
              <InstructionStep
                stepNumber="1.1"
                instruction='Кликнуть на 3 вертикальные точки, далее "Добавить группу"'
                imageSrc={image4}
                imageAlt="Добавление группы камер"
                isSubStep={true}
              />
              
              <div className="ml-0 md:ml-14" data-testid="additional-content">
                <img 
                  src={image3} 
                  alt="Создание группы камер" 
                  className="w-full rounded-lg border border-border"
                  data-testid="step-image"
                />
              </div>
              
              <InstructionStep
                stepNumber="1.2"
                instruction="Назвать группу согласно шестизначному ID конкретного пункта выдачи (только цифры, не допускаются другие символы). Кликнуть «Добавить группу»"
                imageSrc={image6}
                imageAlt="Именование группы камер"
                isSubStep={true}
              />
              
              <InstructionStep
                stepNumber="1.3"
                instruction='Выбрать камеры, принадлежащие данному ПВЗ, и кликнуть «Сохранить». После того как камеры перенеслись в правое поле, закрыть вкладку'
                imageSrc={image5}
                imageAlt="Выбор камер для группы"
                isSubStep={true}
              />
            </div>
          </section>

          <section data-testid="section-step2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-step2">
              Шаг 2. Верно назвать камеры
            </h2>
            
            <div className="space-y-6 mb-8 bg-card border border-border rounded-lg p-6 md:p-8">
              <p className="text-base md:text-lg font-medium">
                По регламенту, в ПВЗ Wildberries должно быть 3 камеры:
              </p>
              <ul className="space-y-3 text-base md:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span><strong>Зона выдачи</strong> – обзор действий администратора и выдачи товара</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span><strong>Обзорная</strong> – обзор происходящего в пункте, фиксирует отгрузку и прием товаров</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold">•</span>
                  <span><strong>Склад</strong> – обзор действий на складе</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-12 md:space-y-16">
              <InstructionStep
                stepNumber="2.1"
                instruction="Задать название камеры согласно ее расположению. Назвать в таком формате все действующие камеры"
                imageSrc={image7}
                imageAlt="Именование камер"
                isSubStep={true}
              />
              
              <InstructionStep
                stepNumber="2.2"
                instruction='Нажать 3 точки в правом нижнем углу камер, затем выбрать "Переименовать"'
                imageSrc={image9}
                imageAlt="Переименование камеры"
                isSubStep={true}
              />
            </div>
          </section>

          <section data-testid="section-step3">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-step3">
              Шаг 3. Передать доступ на мастер-аккаунт Wildberries
            </h2>
            
            <div className="space-y-12 md:space-y-16">
              <InstructionStep
                stepNumber="3.1"
                instruction='Кликнуть по 3-м вертикальным точкам в поле «Мои камеры». Кликнуть «Передать права»'
                imageSrc={image1}
                imageAlt="Передача прав доступа"
                isSubStep={true}
              />
              
              <InstructionStep
                stepNumber="3.2"
                instruction='Выбрать нужную группу. Нажать «Продолжить»'
                imageSrc={image10}
                imageAlt="Выбор группы для передачи прав"
                isSubStep={true}
              />
              
              <InstructionStep
                stepNumber="3.3"
                instruction='Выбрать из списка передачи прав только «Живое видео», «Архив» и «События и уведомления». Кликнуть «Продолжить»'
                imageSrc={image8}
                imageAlt="Выбор прав доступа"
                isSubStep={true}
              />
              
              <div className="space-y-6">
                <InstructionStep
                  stepNumber="3.4"
                  instruction="Внести в поле адрес мастер-аккаунта Wildberries:"
                  imageSrc={image2}
                  imageAlt="Ввод email мастер-аккаунта"
                  isSubStep={true}
                />
                
                <div className="ml-0 md:ml-14 bg-primary/5 border-l-4 border-primary p-4 md:p-6 rounded-r-lg" data-testid="email-highlight">
                  <p className="text-lg md:text-xl font-mono font-semibold text-primary">
                    video_wb.point@wildberries.ru
                  </p>
                </div>
                
                <div className="ml-0 md:ml-14 text-base md:text-lg text-muted-foreground">
                  <p>Кликнуть «Передать права»</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
