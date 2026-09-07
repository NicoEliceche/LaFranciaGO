# Proceso de desarrollo

Documentos sobre cómo viene el proyecto. No son parte de la aplicación: son
para leer, no para ejecutar.

## Qué hay acá

- **[estado-lafranciago.html](estado-lafranciago.html)** — Qué puede hacer cada
  tipo de cuenta hoy, contado en criollo, más el listado completo de
  funcionalidades con su estado, para poder cotizar el trabajo.

Se abre haciendo doble clic: es una página suelta, sin nada que instalar.

## Cómo mantenerlo al día

El informe se actualiza a mano cuando se agrega o se cierra algo. Las tres
cosas que se desactualizan primero:

- **Las cifras de arriba** (pantallas, servicios, tablas). Salen de contar:

  ```bash
  ls src/features/marketplace/screens/*.tsx | wc -l   # pantallas
  grep -c "CREATE TABLE" backend/migrations/*.sql     # tablas
  ```

- **El estado de cada funcionalidad**: listo, a medias o pendiente.
- **La fecha del encabezado**, que es lo que le dice a quien lo lee si sigue
  valiendo.
