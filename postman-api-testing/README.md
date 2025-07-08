# 🧪 API Testing con Postman - Reqres.in

Este proyecto contiene una colección de pruebas automatizadas para la API pública [Reqres.in](https://reqres.in), usando Postman.

---

## 📂 Estructura del Proyecto

postman-api-testing/
├── collections/
│ └── Tests_Reqres.postman_collection.json
├── environments/
│ └── REQRES.postman_environment.json
└── README.md

## 🚀 Cómo usar

### 1. Importar la colección y el entorno en Postman

- Abrí Postman
- Hacé clic en **Import** y seleccioná el archivo `reqres_api_tests.postman_collection.json` dentro de la carpeta `collections`.
- Repetí para el entorno: Importá `reqres_environment.postman_environment.json` dentro de la carpeta `environments`.

### 2. Ejecutar las pruebas

- Seleccioná la colección importada.
- Elegí el entorno adecuado en el selector superior derecho (el entorno que importaste).
- Ejecutá los requests uno por uno o usá la opción **Run** para ejecutar toda la colección.

### 3. (Opcional) Ejecutar con Newman (desde consola)

Si querés correr la colección desde línea de comandos, primero instalá Newman:

bash
npm install -g newman

Correr los tests
newman run .\collections\Tests_Reqres.postman_collection.json -e .\environments\REQRES.postman_environment.json

Correr los tests generando el informe html

Primero instalamos 
npm install -g newman-reporter-html

Después corremos los tests
newman run .\collections\Tests_Reqres.postman_collection.json -e .\environments\REQRES.postman_environment.json -r html --reporter-html-export newman/report.html


