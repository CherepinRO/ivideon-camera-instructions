import Header from '@/components/Header';
import InstructionStep from '@/components/InstructionStep';

import image1 from '@assets/page4_registration/images/image1.png';
import image2 from '@assets/page4_registration/images/image2.png';
import image3 from '@assets/page4_registration/images/image3.png';

export default function Registration() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="page-title">
            Регистрация личного кабинета
          </h1>
          <p className="text-base md:text-lg text-muted-foreground" data-testid="page-subtitle">
            Создание аккаунта в системе Ivideon
          </p>
        </div>

        <section className="mb-12 md:mb-16 bg-card border border-border rounded-lg p-6 md:p-8" data-testid="intro-section">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
            Инструкция по регистрации
          </h2>
          <p className="text-base md:text-lg text-foreground/80 mb-4">
            Пошаговое руководство по созданию личного кабинета в системе видеонаблюдения Ivideon.
          </p>
          <div className="bg-primary/5 border-l-4 border-primary p-4 md:p-6 rounded-r-lg">
            <p className="text-base md:text-lg font-semibold text-foreground">
              Для регистрации заходим на сайт:{' '}
              <a 
                href="https://ru.ivideon.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ru.ivideon.com/
              </a>
            </p>
          </div>
        </section>

        <div className="space-y-12 md:space-y-16">
          <section data-testid="section-registration">
            <div className="space-y-12 md:space-y-16">
              <InstructionStep
                stepNumber={1}
                instruction="Нажимаем «Войти»"
                imageSrc={image1}
                imageAlt="Кнопка входа на сайте Ivideon"
              />
              
              <InstructionStep
                stepNumber={2}
                instruction="Затем выбираем «Регистрация»"
                imageSrc={image2}
                imageAlt="Переход к регистрации"
              />
              
              <InstructionStep
                stepNumber={3}
                instruction="Указываем все необходимые данные и регистрируемся"
                imageSrc={image3}
                imageAlt="Форма регистрации"
              />

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 md:p-8" data-testid="important-note">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-amber-600 dark:text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Важно
                    </h3>
                    <p className="text-base md:text-lg text-amber-800 dark:text-amber-200">
                      Логин, по которому вы будете заходить в Личный кабинет Ivideon — это <strong>адрес электронной почты</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
