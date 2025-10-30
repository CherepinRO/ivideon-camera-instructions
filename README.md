# Инструкции Ivideon

Полный набор инструкций по подключению, активации и настройке IP-камер Ivideon.

![Ivideon Logo](https://img.shields.io/badge/Ivideon-0066CC?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==)

## 🎯 Описание

Этот проект содержит две русскоязычные landing pages:

1. **Подключение камер** - Пошаговая инструкция по подключению IP-камеры Ivideon через кабель или Wi-Fi
2. **Активация камер** - Полное руководство по активации, настройке интеграции с WB.Point и Ozon, настройке времени

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
   - 3.1 Через кабель (серийный номер/MAC-адрес)
   - 3.2 Через Wi-Fi (подключение к сети, QR код)

### Страница 2: Активация камер

1. Подключение через личный кабинет
2. ВБ Поинт (интеграция с Wildberries)
   - Создание группы камер
   - Именование камер
   - Передача прав на мастер-аккаунт
3. Турбо ПВЗ (Ozon)
4. Настройка времени
5. Регистрация личного кабинета
6. Видео с подключением

## 🚀 Использование

### React приложение

```bash
npm install
npm run dev
```

Откройте браузер по адресу `http://localhost:5000`

### Standalone HTML

Два независимых HTML файла:
- `ivideon-landing.html` - Подключение камер
- `camera-activation.html` - Активация камер

Просто откройте нужный файл в любом браузере.

## 📁 Структура проекта

```
.
├── client/src/
│   ├── pages/
│   │   ├── Home.tsx                  # Страница подключения
│   │   └── CameraActivation.tsx      # Страница активации
│   └── components/
│       ├── Header.tsx                # Шапка с навигацией
│       └── InstructionStep.tsx       # Компонент шага инструкции
├── attached_assets/
│   ├── high_res/images/              # Скриншоты страницы 1 (7 изображений)
│   └── page2/images/                 # Скриншоты страницы 2 (30 изображений)
├── ivideon-landing.html              # HTML: Подключение камер
├── camera-activation.html            # HTML: Активация камер
├── design_guidelines.md              # Руководство по дизайну
└── README.md                         # Этот файл
```

## 🎨 Дизайн

- **Основной цвет:** #0066CC (Ivideon Blue)
- **Шрифты:** Inter, Open Sans
- **Стиль:** Чистый документационный дизайн
- **Компоненты:** Shadcn UI + Tailwind CSS

## 📸 Изображения

- **Страница 1:** `attached_assets/high_res/images/` - 7 скриншотов высокого разрешения
- **Страница 2:** `attached_assets/page2/images/` - 30 скриншотов высокого разрешения

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
