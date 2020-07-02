### Тестовое задание для принятия участия в стажировке компании Simbirsoft, направление Front-end.

Логинов Андрей, email:fixyyy1@gmail.com

Задача:
Разработать приложение/web страницу для отображения погоды в текущем регионе

Требования к заданию:
Обязательные технологии: React Native – для мобильного приложения, React/Vuejs/Angular для web

Допускается использовать: Любые UI библиотеки

Основные требования: Приложение должно представлять из себя экран/страницу с погодой в текущем
регионе.

Для запуска приложения потребуется актуальная версия node.js, а также выполнить следующие действия в терминале:
- npm install
- npm start

Приложение разработано при соблюдении всех условий, перечисленных в задании.

При разработке использовалась UI-библиотека Bootstrap.

Для получения данных о погоде в текущем регионе использовалось API ресурса https://openweathermap.org/. По условиям использования API сервиса была выполнена регистрация для получения уникального id, чтобы направлять GET запросы.
В ответ на запрос приходил ответ в формате JSON, где необходимая информация о погоде представлялась в Кельвинах. Информация о скорости ветра в регионе приходила в формате миль/час. Для комфортного восприятия информации были написаны две функции, которые производили вычисления в градусы Цельсия и километры/час соответственно.

Тематическая фоновая картинка приложения встроена в код через URL ресурса https://unsplash.com/.
