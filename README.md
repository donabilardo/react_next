# React + Vite

## NVM

https://github.com/coreybutler/nvm-windows/releases

```bash
nvm list #список доступных версий ноды
# 1. Посмотреть доступные версии Node.js
nvm list available

# 2. Установить конкретную версию
nvm install 18.19.0   # LTS версия
nvm install 20.11.0   # Новее
nvm install 21.6.2    # Последняя
nvm install latest    # Самая последняя

# 3. Посмотреть установленные версии
nvm list

# 4. Переключиться между версиями
nvm use 18.19.0
nvm use 20.11.0

# 5. Удалить версию
nvm uninstall 16.20.0

# 6. Установить LTS версию
nvm install lts
nvm use lts


# Установка
nvm install 18.19.0
nvm install 20.11.0

# Смотрим что установили
nvm list

# Вывод:
#   20.11.0
#   18.19.0
# Currently using 64-bit executable

# Переключаемся
nvm use 18.19.0
# Now using node v18.19.0 (64-bit)

# Проверяем
node --version
# v18.19.0
npm --version
# 10.2.3
```
