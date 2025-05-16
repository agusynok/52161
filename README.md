Analizador Sintáctico con ANTLR4 - Agustín Yañez (Legajo 52161)
Este proyecto es un analizador sintáctico en JavaScript usando ANTLR4.
Sirve para interpretar y traducir cadenas de texto que describen vuelos.
Incluye lexer, parser, manejo de errores, muestra tokens y guarda resultados en archivos.

Qué hace el programa:

Analiza textos con datos de vuelos

Muestra la tabla de símbolos (tokens)

Reporta errores léxicos y sintácticos y los guarda en un archivo

Muestra y guarda el árbol de derivación

Traduce la info a un objeto JavaScript

Guarda los datos del vuelo en un archivo JSON

Requisitos previos:

Tener Java (JRE) 1.8 o superior instalado. Es necesario porque ANTLR usa Java. Se puede descargar en https://www.java.com/en/download/

Tener Node.js (versión 16 o superior) instalado. Se usa para ejecutar el proyecto con JavaScript. Descargalo en https://nodejs.org/es

Tener Visual Studio Code instalado para editar y trabajar con el código. Descargalo en https://code.visualstudio.com/

Durante la instalación activar la opción "Add to PATH" para poder abrir VS Code desde la terminal con code .

Tener Git instalado para clonar el repositorio. Descargar en https://git-scm.com/downloads

Para verificar que están instalados, abrir la terminal y ejecutar:
node -v para ver la versión de Node
npm -v para ver la versión de npm
code -v para ver la versión de VS Code
git -v para ver la versión de Git

Configuración recomendada para Visual Studio Code:

Instalar la extensión "ANTLR4 grammar syntax support" desde el menú de extensiones (Ctrl+Shift+X)

Reiniciar VS Code

Configurar la generación de código de ANTLR en las preferencias (settings.json) con lo siguiente:
{"antlr4.generation": {
 "alternativeJar": "antlr-4.13.2-complete.jar",
 "mode": "external",
 "listeners": true,
 "visitors": true,
 "language": "JavaScript",
 "outputDir": "./generated"
 } 
 Ejecución:

Para ejecutar el analizador:
node index.js

El programa busca un archivo input.txt para analizar.

Archivos generados:

errores.log contiene errores léxicos y sintácticos si los hay

tree.txt contiene el árbol de derivación en texto

flight_data.json contiene los datos del vuelo en formato JSON

## 🔧 Instalación

Instalar las dependencias de Node.js:

npm install

1. Cloná este repositorio:

bash
git clone https://github.com/agusynok/52161.git


cd 52161
