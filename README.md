# Frontend-lab2
![image](https://user-images.githubusercontent.com/100159653/160296910-39f09933-ea93-4261-8674-d626348f5901.png)
![image](https://user-images.githubusercontent.com/100159653/160296914-6348902e-86e2-40da-9832-7821aea2d9cb.png)
![image](https://user-images.githubusercontent.com/100159653/160296917-b613aef7-6534-44e6-8525-521e9b330437.png)
![image](https://user-images.githubusercontent.com/100159653/160296919-3f499eff-4bb5-40a4-b6a2-da4bfcf8daab.png)
![image](https://user-images.githubusercontent.com/100159653/160296921-1ef0d60c-2480-4c97-9976-2adddd593f0d.png)
![image](https://user-images.githubusercontent.com/100159653/160296927-8ac8d43c-7db9-43c2-8258-bf561f45e9db.png)

Дополнительные вопросы

1. Яке основне призначення webpack? 
Основная задача webpack – связать большое количество файлов JavaScript в один или несколько файлов. 

2. Яка різниця між завантажувачами та плагінами? 
Загрузчики выполняют предварительную обработку файлов любого формата. Они работают на уровне отдельных файлов во время или до создания пакета. После того как отработают загрузчики наступает очередь плагинов. Плагины, как правило, отрабатывают только одну функцию. Плагины значительно расширяют возможности загрузчиков. Плагины являются куда более мощными, чем загрузчики. 

3. Наведіть приклади завантажувачів. 

a) File-loader – используется для загрузки различных файлов (изображения, музыка) в выходную директорию

b) Style-loader, css-loader – используется для загрузки CSS.

c) svgr/webpack — позволяет использовать svg изображения как jsx элементы

d) Babel-loader – настройка Webpack для работы с Babel

4. Наведіть приклади плагінів.

a) Clean-webpack-plugin – автоматическая очистка выходной директории после каждой сборки проекта

b) Html-webpack-plugin – создание HTML файла на основе шаблона 

c) Webpack-dev-server – запуск локального сервера 