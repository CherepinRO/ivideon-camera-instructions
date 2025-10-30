import Header from '@/components/Header';
import InstructionStep from '@/components/InstructionStep';
import image1 from '@assets/page2/images/image1.png';
import image2 from '@assets/page2/images/image2.png';
import image3 from '@assets/page2/images/image3.png';
import image4 from '@assets/page2/images/image4.png';
import image5 from '@assets/page2/images/image5.png';
import image6 from '@assets/page2/images/image6.png';
import image7 from '@assets/page2/images/image7.png';
import image8 from '@assets/page2/images/image8.png';
import image9 from '@assets/page2/images/image9.png';
import image10 from '@assets/page2/images/image10.png';
import image11 from '@assets/page2/images/image11.png';
import image12 from '@assets/page2/images/image12.png';
import image13 from '@assets/page2/images/image13.png';
import image14 from '@assets/page2/images/image14.png';
import image15 from '@assets/page2/images/image15.png';
import image16 from '@assets/page2/images/image16.png';
import image17 from '@assets/page2/images/image17.png';
import image18 from '@assets/page2/images/image18.png';
import image19 from '@assets/page2/images/image19.png';
import image20 from '@assets/page2/images/image20.png';
import image21 from '@assets/page2/images/image21.png';
import image22 from '@assets/page2/images/image22.png';
import image23 from '@assets/page2/images/image23.png';
import image24 from '@assets/page2/images/image24.png';
import image25 from '@assets/page2/images/image25.png';
import image26 from '@assets/page2/images/image26.png';
import image27 from '@assets/page2/images/image27.png';
import image28 from '@assets/page2/images/image28.png';
import image29 from '@assets/page2/images/image29.png';
import image30 from '@assets/page2/images/image30.png';

export default function CameraActivation() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold" data-testid="page-title">
            Активация камер
          </h1>
        </div>

        <div className="space-y-12 md:space-y-16">
          <section data-testid="section-connection">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-connection">
              Подключение камер через личный кабинет
            </h2>
            
            <div className="space-y-12 md:space-y-16">
              <InstructionStep
                stepNumber={1}
                instruction="В личном кабинете ivideon нажмите кнопку Добавить устройство"
                imageSrc={image1}
                imageAlt="Добавить устройство в личном кабинете Ivideon"
              />
              
              <InstructionStep
                stepNumber={2}
                instruction="Выберите устройство которое хотите подключить"
                imageSrc={image2}
                imageAlt="Выбор устройства для подключения"
              />
              
              <InstructionStep
                stepNumber="3.1"
                instruction="Через кабель: Укажите серийный номер камеры (либо нажмите Использовать MAC-адрес и введите MAC-адрес) они расположены на коробке и на устройстве, далее нажмите Продолжить."
                imageSrc={image3}
                imageAlt="Подключение через кабель"
                isSubStep={true}
              />
              
              <div className="ml-8 md:ml-14 space-y-6 md:space-y-8" data-testid="cable-continuation">
                <p className="text-base md:text-lg leading-relaxed" data-testid="cable-instruction">
                  Далее следуем инструкциям.
                </p>
                <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                  <img src={image4} alt="Следующий шаг подключения" className="w-full h-auto" />
                </div>
                <p className="text-base md:text-lg leading-relaxed font-medium" data-testid="tariff-question">
                  Подключаем Тарифный план?
                </p>
                <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                  <img src={image5} alt="Подключение тарифного плана" className="w-full h-auto" />
                </div>
              </div>
              
              <InstructionStep
                stepNumber="3.2"
                instruction="Через Wi-Fi: Подключаем камеру к сети питания"
                imageSrc={image6}
                imageAlt="Подключение камеры к питанию"
                isSubStep={true}
              />
              
              <div className="ml-8 md:ml-14 space-y-6 md:space-y-8" data-testid="wifi-section">
                <div className="space-y-4">
                  <p className="text-base md:text-lg leading-relaxed font-medium" data-testid="wifi-credentials-title">
                    Вводим название сети и пароль
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground" data-testid="wifi-note">
                    В 99.99% случаев вам нужна сеть в 2.4ГГц. Данные с логином и паролем как правило можно найти на коробке от роутера ( если вы их не меняли)
                  </p>
                </div>
                
                <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                  <img src={image7} alt="Ввод данных Wi-Fi сети" className="w-full h-auto" />
                </div>
                
                <p className="text-base md:text-lg leading-relaxed" data-testid="qr-instruction">
                  Далее нам нужно что бы камера посмотрела на QR код и обработала его , после успешной обработка, следуем инструкциям.
                </p>
                
                <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                  <img src={image8} alt="QR код для сканирования" className="w-full h-auto" />
                </div>
                
                <p className="text-base md:text-lg leading-relaxed font-medium" data-testid="tariff-question-2">
                  Подключаем Тарифный план?
                </p>
                <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                  <img src={image9} alt="Подключение тарифного плана" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </section>

          <section data-testid="section-wb-point">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-wb">
              ВБ Поинт
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-base md:text-lg leading-relaxed" data-testid="wb-intro">
                Токен для интеграции видеонаблюдения ПВЗ с WB.Point. Инструкция LinkVideo
              </p>
            </div>
            
            <div className="space-y-12 md:space-y-16">
              <div data-testid="wb-step-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-6" data-testid="wb-step-1-title">
                  Шаг 1. Создание группы камер ПВЗ в Ivideon, действия:
                </h3>
                <ul className="space-y-3 text-base md:text-lg ml-6 mb-6 list-disc" data-testid="wb-step-1-list">
                  <li>Кликнуть на 3 вертикальные точки, далее «Добавить группу»</li>
                  <li>Назвать группу согласно шестизначному ID конкретного пункта выдачи (только цифры, не допускаются другие символы)</li>
                  <li>Кликнуть «Добавить группу»</li>
                  <li>Выбрать камеры, принадлежащие данному ПВЗ, и кликнуть «Сохранить»</li>
                  <li>После того как камеры перенеслись в правое поле, закрыть вкладку</li>
                </ul>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image10} alt="Создание группы - шаг 1" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image11} alt="Создание группы - шаг 2" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image12} alt="Создание группы - шаг 3" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image13} alt="Создание группы - шаг 4" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image14} alt="Создание группы - шаг 5" className="w-full h-auto" />
                  </div>
                </div>
              </div>

              <div data-testid="wb-step-2">
                <h3 className="text-xl md:text-2xl font-semibold mb-6" data-testid="wb-step-2-title">
                  Шаг 2. Верно назвать камеры
                </h3>
                <div className="space-y-4 mb-6">
                  <p className="text-base md:text-lg leading-relaxed">
                    По регламенту, в ПВЗ Wildberries должно быть 3 камеры:
                  </p>
                  <ul className="space-y-2 text-base md:text-lg ml-6 list-disc">
                    <li>Зона выдачи – обзор действий администратора и выдачи товара</li>
                    <li>Обзорная – обзор происходящего в пункте, фиксирует отгрузку и прием товаров</li>
                    <li>Склад – обзор действий на складе</li>
                  </ul>
                  <p className="text-base md:text-lg leading-relaxed">
                    Задать название камеры согласно ее расположению
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Назвать в таком формате все действующие камеры
                  </p>
                  <p className="text-base md:text-lg leading-relaxed">
                    Нажать 3 точки в правом нижнем углу камер, затем выбрать "Переименовать"
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image15} alt="Переименование камер - шаг 1" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image16} alt="Переименование камер - шаг 2" className="w-full h-auto" />
                  </div>
                </div>
              </div>

              <div data-testid="wb-step-3">
                <h3 className="text-xl md:text-2xl font-semibold mb-6" data-testid="wb-step-3-title">
                  Шаг 3. Передать доступ на мастер-аккаунт Wildberries
                </h3>
                <ul className="space-y-3 text-base md:text-lg ml-6 mb-6 list-disc">
                  <li>Кликнуть по 3-м вертикальным точкам в поле «Мои камеры»</li>
                  <li>Кликнуть «Передать права»</li>
                  <li>Выбрать нужную группу</li>
                  <li>Нажать «Продолжить»</li>
                  <li>Выбрать из списка передачи прав только «Живое видео», «Архив» и «События и уведомления»</li>
                  <li>Кликнуть «Продолжить»</li>
                  <li>Внести в поле адрес мастер-аккаунта Wildberries: <strong>video_wb.point@wildberries.ru</strong></li>
                  <li>Кликнуть «Передать права»</li>
                </ul>
                <div className="space-y-6">
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image17} alt="Передача прав - шаг 1" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image18} alt="Передача прав - шаг 2" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image19} alt="Передача прав - шаг 3" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image20} alt="Передача прав - шаг 4" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image21} alt="Передача прав - шаг 5" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image22} alt="Передача прав - шаг 6" className="w-full h-auto" />
                  </div>
                  <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                    <img src={image23} alt="Передача прав - шаг 7" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section data-testid="section-ozon">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-ozon">
              Турбо ПВЗ (озон)
            </h2>
            <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <img src={image24} alt="Турбо ПВЗ Ozon" className="w-full h-auto" />
            </div>
          </section>

          <section data-testid="section-time-settings">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-time">
              Настройка времени
            </h2>
            <p className="text-base md:text-lg mb-6" data-testid="time-link">
              <a 
                href="https://linkvideo.ru/instructions/tpost/2s1p4aakl1-na-kamere-otobrazhaetsya-nevernoe-vremya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://linkvideo.ru/instructions/tpost/2s1p4aakl1-na-kamere-otobrazhaetsya-nevernoe-vremya
              </a>
            </p>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-6" data-testid="time-subtitle">
              На камере отображается неверное время
            </h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg leading-relaxed">
                Для настройки времени нужно выбрать камеру и нажать на 3 точки в правом нижнем углу
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Выбираем настройки камеры
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Настройки системные
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Нужно поменять время
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>Часовой пояс</strong> - это время отображается в облачном архиве
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>Время на устройстве</strong> - Это время показанное на камере
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <img src={image25} alt="Настройка времени - шаг 1" className="w-full h-auto" />
              </div>
              <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <img src={image26} alt="Настройка времени - шаг 2" className="w-full h-auto" />
              </div>
              <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <img src={image27} alt="Настройка времени - шаг 3" className="w-full h-auto" />
              </div>
            </div>
          </section>

          <section data-testid="section-registration">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-registration">
              Регистрация ЛК
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-base md:text-lg leading-relaxed">
                Для регистрации заходим на сайт - <a href="https://ru.ivideon.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ru.ivideon.com/</a>
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Нажимаем войти
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Затем выбираем регистрация
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Указываем все необходимые данные и регистрируемся.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-semibold text-primary">
                Важно: Логин по которому вы будете заходить в Личный кабинет Ivideon это Адрес электронной почты
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <img src={image28} alt="Регистрация - шаг 1" className="w-full h-auto" />
              </div>
              <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <img src={image29} alt="Регистрация - шаг 2" className="w-full h-auto" />
              </div>
            </div>
          </section>

          <section data-testid="section-video">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" data-testid="section-title-video">
              Видео с подключением
            </h2>
            <div className="border border-border rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <img src={image30} alt="Видео с подключением" className="w-full h-auto" />
            </div>
          </section>
        </div>
      </main>
      
      <footer className="border-t mt-16 py-8">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <p className="text-sm text-muted-foreground text-center" data-testid="footer-text">
            © 2025 Ivideon. Инструкция по активации и настройке камер.
          </p>
        </div>
      </footer>
    </div>
  );
}
