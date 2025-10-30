# Инструкция по подключению Ivideon камеры

Пошаговая инструкция по подключению IP-камеры Ivideon через кабель или Wi-Fi.

![Ivideon Logo](https://img.shields.io/badge/Ivideon-0066CC?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==)

## 🎯 Описание

Этот проект содержит русскоязычную landing page с подробными инструкциями по подключению IP-камеры к системе видеонаблюдения Ivideon.

### Особенности

- 📱 Адаптивный дизайн для всех устройств
- 🎨 Фирменный стиль Ivideon (синий #0066CC)
- 📸 Скриншоты высокого разрешения
- 🇷🇺 Полностью на русском языке
- ⚡ Два варианта: React приложение и standalone HTML

## 📋 Содержание инструкции

1. **Шаг 1:** Нажимаем кнопку добавить устройство
2. **Шаг 2:** Выбираем IP-камера
3. **Шаг 3:** Выбираем способ подключения
   - **3.1** Через кабель (серийный номер/MAC-адрес)
   - **3.2** Через Wi-Fi (подключение к сети)

## 🚀 Использование

### React приложение

```bash
npm install
npm run dev
```

Откройте браузер по адресу `http://localhost:5000`

### Standalone HTML

Просто откройте файл `ivideon-landing.html` в любом браузере.

## 📁 Структура проекта

```
.
├── client/src/
│   ├── pages/
│   │   └── Home.tsx              # Основная страница с инструкциями
│   └── components/
│       ├── Header.tsx            # Шапка сайта
│       └── InstructionStep.tsx   # Компонент шага инструкции
├── attached_assets/
│   └── high_res/
│       └── images/               # Скриншоты (image1.png - image7.png)
├── ivideon-landing.html          # Standalone HTML версия
├── design_guidelines.md          # Руководство по дизайну
└── README.md                     # Этот файл
```

## 🎨 Дизайн

- **Основной цвет:** #0066CC (Ivideon Blue)
- **Шрифты:** Inter, Open Sans
- **Стиль:** Чистый документационный дизайн
- **Компоненты:** Shadcn UI + Tailwind CSS

## 📸 Скриншоты

Все изображения находятся в папке `attached_assets/high_res/images/` и пронумерованы от `image1.png` до `image7.png`.

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
