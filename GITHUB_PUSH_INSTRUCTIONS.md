# Инструкция по публикации на GitHub

Ваш новый репозиторий GitHub успешно создан!

**URL репозитория:** https://github.com/CherepinRO/ivideon-camera-instructions

## Как опубликовать код

Откройте Shell в Replit и выполните следующие команды:

```bash
# 1. Добавить remote репозиторий
git remote remove origin 2>/dev/null
git remote add origin https://github.com/CherepinRO/ivideon-camera-instructions.git

# 2. Добавить все файлы
git add .

# 3. Создать коммит
git commit -m "Initial commit: Ivideon camera connection instructions landing page"

# 4. Отправить в GitHub
git push -u origin main
```

## Альтернативный метод (если main branch не существует)

Если получите ошибку, попробуйте:

```bash
git branch -M main
git push -u origin main
```

## Что включено в проект

- ✅ React приложение с инструкциями на русском языке
- ✅ Standalone HTML файл (`ivideon-landing.html`)
- ✅ Все изображения высокого разрешения в папке `attached_assets/high_res/images/`
- ✅ Полная стилизация с Ivideon брендингом (синий цвет #0066CC)
- ✅ Адаптивный дизайн для мобильных и десктопных устройств
- ✅ 7 шагов инструкции с подшагами 3.1 и 3.2

## Файлы проекта

- **React Application:** `client/src/pages/Home.tsx` - основная страница
- **HTML Version:** `ivideon-landing.html` - standalone версия
- **Images:** `attached_assets/high_res/images/` - все скриншоты
- **Design Guidelines:** `design_guidelines.md` - руководство по дизайну

Репозиторий готов к публикации!
