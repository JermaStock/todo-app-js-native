# Моё небольшое todo-приложение имеет следующие функции:
1) Добавление/удаление/отметка дела как сделанного с сохранением состояния в зависимости от типа хранилища
2) Три отдельных списка дел, каждое со своим отдельным хранилищем
3) Реализованы два типа хранения списков дел с сохранением их состояния
4) Локальное хранилище использует localstorage, серверное - простой backend сервер
5) Состояние каждого из хранилищ релизовано независимо друг от друга (пример: изменение типа хранилища в первом списке не отразится на том, какие типы хранилищ использует другие списки)

# Работа с приложением
Приложение написано на чистом JavaScript. В версии приложения, выложенной на [GitPages](https://jermastock.github.io/todo-app-js-native/) работает только тип хранилища "локальное", для работы с сервером, необходимо следовать нижеизложенной инструкции.

# Перед запуском сервера необходимо:

1) Установить Node.js версии 14 или выше. - https://nodejs.org/en/download
2) В папке с репозиторием инициализировать npm пакеты (npm i в командой строке)

# Для запуска сервера:

Перейдите в папку с репозиторием и выполните команду.
``````
npm start
``````
Это автоматически запустит live-server и back-end-server. 

Страница проекта автоматически откроется в браузере.