# ✈️ Analizador Sintáctico con ANTLR4 - Agustín Yañez (Legajo 52161)

Este proyecto implementa un **analizador sintáctico** en JavaScript utilizando **ANTLR4**, diseñado para interpretar y traducir declaraciones de vuelos.  
El sistema incluye un **lexer**, **parser**, manejo de errores, visualización de tokens y generación de archivos auxiliares con los resultados.

---
📋 ¿Qué hace este programa?

- ✅ Analiza cadenas de texto que describen vuelos.
- 📑 Muestra una tabla de símbolos (tokens léxicos).
- ❌ Reporta errores léxicos y sintácticos (y los guarda en `errores.log`).
- 🌳 Muestra y guarda el árbol de derivación (`tree.txt`).
- 🔄 Traduce la información a un objeto JavaScript.
- 💾 Guarda los datos del vuelo en formato JSON (`flight_data.json`).

---

## 📦 Requisitos

Antes de empezar, asegurate de tener instalado:

- [Node.js](https://nodejs.org/)
- Java (requerido por ANTLR)
- ANTLR4 (CLI):

## 🔧 Instalación

1. Cloná este repositorio:

```bash
git clone https://github.com/agusynok/52161.git
cd 52161

