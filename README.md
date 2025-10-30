# Инструкции Ivideon

Полный набор инструкций по подключению, настройке и интеграции камер Ivideon.

![Ivideon Logo](https://img.shields.io/badge/Ivideon-0066CC?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==)

## 🎯 Описание

Этот проект содержит три русскоязычные landing pages с инструкциями по работе с камерами Ivideon:

1. **Подключение камер** - Пошаговая инструкция по подключению IP-камеры Ivideon через кабель или Wi-Fi (7 скриншотов)
2. **Интеграция с WB.Point** - Руководство по настройке камер для пунктов выдачи заказов Wildberries (10 скриншотов)
3. **Настройка времени** - Инструкция по настройке правильного времени на камере и в облачном архиве (4 скриншота)

### Особенности

- 📱 Адаптивный дизайн для всех устройств
- 🎨 Фирменный стиль Ivideon (синий #0066CC)
- 📸 Скриншоты высокого разрешения
- 🇷🇺 Полностью на русском языке
- ⚡ Два варианта: React приложение и standalone HTML

## 📋 Содержание

### Страница 1: Подключение камер

1. Добавить устройство
2. Выбрать IP-камеру
3. Выбрать способ подключения
   - Через кабель (серийный номер/MAC-адрес)
   - Через Wi-Fi (подключение к сети)

### Страница 2: Интеграция с WB.Point

1. **Шаг 1:** Создание группы камер ПВЗ в Ivideon
2. **Шаг 2:** Именование камер (Зона выдачи, Обзорная, Склад)
3. **Шаг 3:** Передача прав доступа на мастер-аккаунт Wildberries

### Страница 3: Настройка времени

1. Выбор камеры для настройки
2. Открытие настроек камеры
3. Переход в системные настройки
4. Настройка часового пояса и времени на устройстве

## 🚀 Использование

### React приложение

```bash
npm install
npm run dev
```

Откройте браузер по адресу `http://localhost:5000`

### Standalone HTML

Три независимых HTML файла с навигацией между ними:
- `ivideon-landing.html` - Подключение камер
- `wb-integration.html` - Интеграция с WB.Point
- `time-settings.html` - Настройка времени

Просто откройте нужный файл в любом браузере.

## 📁 Структура проекта

```
.
├── client/src/
│   ├── pages/
│   │   ├── Home.tsx              # Страница подключения камер
│   │   ├── WBIntegration.tsx     # Страница интеграции с WB.Point
│   │   └── TimeSettings.tsx      # Страница настройки времени
│   └── components/
│       ├── Header.tsx            # Шапка с навигацией
│       └── InstructionStep.tsx   # Компонент шага инструкции
├── attached_assets/
│   ├── high_res/images/              # Скриншоты подключения (7 изображений)
│   ├── page2_instructions/images/    # Скриншоты интеграции (10 изображений)
│   └── page3_time_settings/images/   # Скриншоты настройки времени (4 изображения)
├── ivideon-landing.html              # HTML: Подключение камер
├── wb-integration.html               # HTML: Интеграция с WB.Point
├── time-settings.html                # HTML: Настройка времени
├── design_guidelines.md              # Руководство по дизайну
└── README.md                         # Этот файл
```

## 🎨 Дизайн

- **Основной цвет:** #0066CC (Ivideon Blue)
- **Шрифты:** Inter, Open Sans
- **Стиль:** Чистый документационный дизайн
- **Компоненты:** Shadcn UI + Tailwind CSS

## 📸 Скриншоты

- **Подключение:** `attached_assets/high_res/images/` (7 изображений)
- **WB.Point:** `attached_assets/page2_instructions/images/` (10 изображений)
- **Настройка времени:** `attached_assets/page3_time_settings/images/` (4 изображения)

Все изображения в высоком разрешении с понятными иллюстрациями каждого шага.

## 🛠 Технологии

- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS + Shadcn UI
- **Build:** Vite
- **Backend:** Express.js (для dev сервера)

## 📝 Лицензия

© 2025 Ivideon. Инструкция по подключению IP-камер.

## 🔗 Ссылки

- [GitHub Repository](https://github.com/CherepinRO/ivideon-camera-instructions)
- [Ivideon Website](https://ivideon.com)

---

Создано с помощью Replit Agent
