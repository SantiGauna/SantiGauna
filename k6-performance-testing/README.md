# ⚡ k6 Performance Testing

Pruebas de carga realizadas con [k6](https://k6.io/), enfocadas en endpoints públicos.

## 📁 Estructura

- `scripts/`: Contiene los archivos de prueba.
- `results/`: (Opcional) Resultados o reportes que quieras guardar.
  
## ▶️ Ejecutar prueba de carga

    k6 run --env BASE_URL=https://reqres.in/api --env API_KEY=reqres-free-v1 scripts/test_load_users.js

    k6 run --env BASE_URL=https://reqres.in/api --env API_KEY=reqres-free-v1 scripts/test_all_endpoints.js


