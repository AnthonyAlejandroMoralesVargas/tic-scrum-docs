# Sprint 4 – Sprint Planning

### 1. Sprint Goal

Finalizar las tutorías agendadas y registrar reseñas.

### 2. Capacidad del Equipo (Effort-Hours)

| Person    | Days Available (Less Personal Time) | Days for Other Scrum Activities | Hours per Day | Available Effort-Hours |
| --------- | ----------------------------------- | ------------------------------- | ------------- | ---------------------- |
| David     | 11                                  | 8                               | 2 a 3         | 6 a 9                  |
| Emilio    | 11                                  | 6                               | 1 a 3         | 5 a 15                 |
| José      | 11                                  | 6                               | 1 a 3         | 5 a 15                 |
| Sebastián | 11                                  | 8                               | 2 a 3         | 6 a 9                  |
| Estefano  | 11                                  | 7                               | 1 a 2         | 4 a 8                  |
| Anthony   | 11                                  | 8                               | 2 a 3         | 6 a 9                  |
| **Total** |                                     |                                 |               | **32 a 65**            |

### 3. Sprint Backlog

### Nro. HU39 Título: Ver historial de tutorías impartidas

| Sección                 | Descripción                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5 SP                                                                                                             |
| **Historia de Usuario** | Como tutor, quiero ver mi historial de tutorías impartidas para tener un registro de mi experiencia profesional. |

#### Criterios de aceptación HU39

| **Escenario**                                            | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| :------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visualización Inicial del Historial (<= 5 registros)** | **Dado** que el tutor ingresa a la opción 'Historial' y no tiene más de 5 tutorías impartidas registradas,<br> **cuando** el sistema carga la pantalla 'Historial de Tutorías Impartidas',<br> **entonces** se visualizan las tres métricas estáticas superiores (Tutorías completadas, Materias impartidas y Estudiantes que califican) y un listado de máximo 5 tarjetas. Cada tarjeta muestra los siguientes campos: iniciales del estudiante (en un círculo), título de la oferta de la tutoría, nombre del estudiante, y la fecha y hora de la sesión. Los controles de paginación están ocultos. |
| **Historial con Paginación Disponible (> 5 registros)**  | **Dado** que el tutor tiene más de 5 tutorías registradas y accede a 'Historial',<br> **cuando** el sistema carga la pantalla 'Historial de Tutorías Impartidas',<br> **entonces** se visualiza el listado con las primeras 5 tarjetas (cada una detallando: iniciales, título de la oferta de la tutoría, nombre del estudiante, y fecha y hora de la sesión) y, en la parte inferior, los controles numéricos de paginación y flechas ('<', '1', '2', '>').                                                                                                                                          |
| **Navegación por Número de Página**                      | **Dado** que el tutor visualiza la primera página de su 'Historial de Tutorías Impartidas' con los controles de paginación visibles,<br> **cuando** hace clic en el número de página '2',<br> **entonces** el listado se actualiza para mostrar el siguiente bloque de tutorías (tarjetas 6 a 10) y el número '2' se resalta.                                                                                                                                                                                                                                                                          |
| **Navegación por Flecha Siguiente**                      | **Dado** que el tutor visualiza la primera página de su 'Historial de Tutorías Impartidas',<br> **cuando** hace clic en la flecha de paginación '>',<br> **entonces** el listado avanza a la siguiente página de resultados y el número de la nueva página activa se resalta.                                                                                                                                                                                                                                                                                                                          |
| **Navegación por Flecha Anterior**                       | **Dado** que el tutor se encuentra visualizando la segunda página de su 'Historial de Tutorías Impartidas',<br> **cuando** hace clic en la flecha de paginación '<',<br> **entonces** el listado retrocede a la primera página de resultados y el número '1' se resalta.                                                                                                                                                                                                                                                                                                                               |
| **Abrir Detalle de Tutoría Impartida**                   | **Dado** que el tutor visualiza el listado de tarjetas en su 'Historial de Tutorías Impartidas',<br> **cuando** hace clic sobre el área general de una tarjeta individual,<br> **entonces** se despliega la ventana modal 'Detalle de la Tutoría' atenuando el fondo. El modal muestra la información del estudiante, título de la oferta de la tutoría, fecha, hora, modalidad, precio, lugar/enlace y mensaje. En la parte inferior únicamente se visualiza el botón 'Cerrar'.                                                                                                                       |
| **Cerrar Detalle de Tutoría Impartida**                  | **Dado** que el tutor se encuentra visualizando el modal 'Detalle de la Tutoría',<br> **cuando** hace clic en el botón 'Cerrar',<br> **entonces** la ventana modal desaparece y el usuario regresa a la vista principal del listado en la pantalla 'Historial de Tutorías Impartidas'.                                                                                                                                                                                                                                                                                                                 |

#### Tareas HU39

| No. | Tarea                                                                                                                         | Effort-Hours |
| --- | ----------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para historial y detalle de tutorías                                                                         | 0.3H         |
| 2   | Implementación de Server Actions con seed data (historial y detalle)                                                          | 0.5H         |
| 3   | Maquetación `HistorialTutoriasPage` con carga inicial y estado                                                                | 0.5H         |
| 4   | Implementación de componentes `TutorialCard`, `MetricCardsDisplay` y `TutorialHistoryList`                                    | 0.5H         |
| 5   | Implementación de `PaginationControls` (funcional y condicional)                                                              | 0.3H         |
| 6   | Desarrollo y lógica de `TutorialDetailModal` (visualización y cierre)                                                         | 0.4H         |
| 7   | Integración final de Server Actions con backend                                                                               | 0.3H         |
| 8   | Verificar visualización inicial (<= 5) y validación de métricas estáticas superiores.                                         | 0.5H         |
| 9   | Probar navegación de paginación por números y flechas para historiales > 5 registros.                                         | 0.5H         |
| 10  | Validar apertura, datos mostrados (título de la oferta) y cierre del modal "Detalle de la Tutoría".                           | 0.25H        |
| 11  | Crear entidad `Tutorial` con enums `Status/Modality` y relaciones `ManyToOne` con `Tutor`, `Student` y `Subject`              | 1.5H         |
| 12  | Definir `TutorHistoryQueryParams`, `HistoryResponseDto` y `TutorialDetailDto` con decoradores de `class-validator`            | 1H           |
| 13  | Implementar `TutorialsController` con endpoints `GET /tutorias/historial` y `GET /tutorias/:id` protegidos por `JwtAuthGuard` | 0.5H         |
| 14  | Implementar `TutorialsService.getTutorHistory()` con agregación de métricas (summary) y consulta paginada mediante TypeORM    | 2H           |
| 15  | Implementar `TutorialsService.getTutorTutorialDetail()` con carga de relaciones y verificación de pertenencia por `tutorId`   | 0.5H         |
| 16  | Registrar entidades en `TutoriasModule` y crear script de seed para pruebas de historial y métricas                           | 0.5H         |

**Total:** 10.05 Effort Hours

---

### Nro. HU43 Título: Registrar la tutoría completada

| Sección                 | Descripción                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Estimación**          | 5 SP                                                                                                                     |
| **Historia de Usuario** | Como tutor, quiero registrar que la tutoría ha sido completada para mantener mi historial actualizado y recibir el pago. |

#### Criterios de aceptación HU43

| **Escenario**                                                          | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :--------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Registro de Tutoría Completada desde Tarjeta**                       | **Dado** que el tutor visualiza una tutoría "sin confirmar" en el listado de 'Historial de Tutorías Impartidas',<br>**cuando** hace clic directamente en el botón 'Completada' (con borde verde) ubicado en la tarjeta,<br>**entonces** la tarjeta se actualiza en tiempo real. Los botones de acción desaparecen y la tarjeta muestra únicamente una etiqueta verde estática con el ícono check y el texto 'Completada', lo cual incrementa en uno la métrica de "Tutorías completadas". |
| **Apertura de Detalle de Tutoría sin Confirmar**                       | **Dado** que el tutor visualiza una tutoría "sin confirmar" en el listado principal,<br>**cuando** hace clic sobre el área general de dicha tarjeta,<br>**entonces** se despliega el modal 'Detalle de la Tutoría'. En su parte inferior se visualiza el botón interactivo 'Completada' (borde verde) junto al botón 'Cerrar'.                                                                                                                                                            |
| **Registro de Tutoría Completada desde Modal**                         | **Dado** que el tutor se encuentra visualizando el modal 'Detalle de la Tutoría' con los botones de acción habilitados,<br>**cuando** hace clic en el botón 'Completada' dentro del modal,<br>**entonces** la ventana modal se cierra automáticamente. Al regresar al listado principal, la tarjeta correspondiente se actualiza visualmente al estado 'Completada' (mostrando solo la etiqueta verde estática) e incrementa en uno la métrica de "Tutorías completadas".                 |
| **Visualización de Detalle de Tutoría Completada (Solo Lectura)**      | **Dado** que el tutor hace clic en el área general de una tarjeta que ya está en estado 'Completada' (y el estudiante aún no ha calificado),<br>**cuando** se abre el modal 'Detalle de la Tutoría',<br>**entonces** la vista es de modo lectura. En la esquina inferior izquierda se visualiza el texto estático "Estado: [Icono] Completada" y en la esquina inferior derecha únicamente está habilitado el botón 'Cerrar'.                                                             |
| **Cierre de Detalle de Tutoría Completada**                            | **Dado** que el tutor se encuentra visualizando el modal 'Detalle de la Tutoría' en modo lectura,<br>**cuando** hace clic en el botón 'Cerrar',<br>**entonces** la ventana modal se cierra y el sistema regresa a la pantalla 'Historial de Tutorías Impartidas'.                                                                                                                                                                                                                         |
| **Visualización de Detalle de Tutoría Confirmada (Integración HU-10)** | **Dado** que el tutor hace clic en una tarjeta 'Completada' que ya fue calificada por el estudiante,<br>**cuando** se abre el modal 'Detalle de la Tutoría',<br>**entonces** la vista es de lectura y muestra, en su parte inferior, una sección adicional con la puntuación en estrellas otorgada y el comentario exacto redactado por el estudiante. Solo el botón 'Cerrar' está habilitado.                                                                                            |

#### Tareas HU43

| No. | Tarea                                                                                                                                                                             | Effort-Hours |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed data para tutorías en diversos estados.                                                                                                                          | 0.3H         |
| 2   | Implementación de `marcarTutoriaCompletadaAction` (con seed) y su integración en `TutoriaCard` y `DetalleTutoriaModal` (incluye `BotonCompletadaCard` y `BotonCompletadaModal`).  | 0.5H         |
| 3   | Implementación de `getDetalleTutoriaAction` (con seed) y su integración en `DetalleTutoriaModal` (incluye `SeccionCalificacionEstudiante` y `BotonCerrarModal`).                  | 0.5H         |
| 4   | Lógica de visualización y actualización de estados en `TutoriaCard` y `DetalleTutoriaModal` (incluye `EtiquetaEstadoCompletada` y `ContadorTutoriasCompletadas` en modo lectura). | 0.7H         |
| 5   | Integración final de `marcarTutoriaCompletadaAction` con backend real.                                                                                                            | 0.4H         |
| 6   | Integración final de `getDetalleTutoriaAction` con backend real.                                                                                                                  | 0.3H         |
| 7   | Comprobar el registro de tutoría completada desde la tarjeta y actualización de la métrica.                                                                                       | 0.5H         |
| 8   | Validar registro desde el modal, ocultamiento del botón inasistencia y cierre automático.                                                                                         | 0.25H        |
| 9   | Verificar vista de solo lectura en detalle de tutorías completadas y confirmadas con reseña.                                                                                      | 0.25H        |
| 10  | Crear entidad `Tutorial` con enums `TutorialStatus/Modality` y relaciones `ManyToOne` con `Tutor`, `Student` y `Subject`                                                          | 1.5H         |
| 11  | Definir `TutoriaDetalleDto` y `EstudianteDto` con validaciones de `class-validator` para el contrato del Frontend                                                                 | 1H           |
| 12  | Implementar `TutoriasController` con endpoints `GET /tutorias/:id` y `PATCH /tutorias/:id/completar` protegidos por `JwtAuthGuard`                                                | 0.5H         |
| 13  | Implementar `TutoriasService.findById()` con carga de relaciones (joins) y mapeo de datos a DTO usando `dayjs`                                                                    | 1.5H         |
| 14  | Implementar `TutoriasService.marcarCompletada()` con validación de propiedad por `tutorId` y restricción de estado `SCHEDULED`                                                    | 1H           |
| 15  | Registrar repositorios en `TutoriasModule` y crear script de seed para pruebas de cambio de estado                                                                                | 0.5H         |

**Total:** 9.70 Effort Hours

---

### Nro. HU48 Título: Registrar inasistencia del estudiante

| Sección                 | Descripción                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5 SP                                                                                                                |
| **Historia de Usuario** | Como tutor, quiero registrar la inasistencia de un estudiante para proteger mi tiempo y evitar pérdidas económicas. |

#### Criterios de aceptación HU48

| **Escenario**                                               | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| :---------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mostrar Modal de Confirmación desde Tarjeta**             | **Dado** que el tutor visualiza una tutoría "sin confirmar" en su 'Historial de Tutorías Impartidas',<br> **cuando** hace clic en el botón 'Inasistencia' (con borde rojo) de la tarjeta,<br> **entonces** se superpone la ventana modal de advertencia "Confirmar Inasistencia" con el texto: "¿Estás seguro? Esta acción marcará la tutoría como inasistencia del estudiante. Esta acción no se puede deshacer.", y los botones "Cancelar" y "Sí, reportar inasistencia". |
| **Mostrar Modal de Confirmación desde Detalle**             | **Dado** que el tutor se encuentra dentro del modal 'Detalle de la Tutoría' de una sesión pendiente,<br> **cuando** hace clic en el botón rojo 'Inasistencia' dentro de este modal,<br> **entonces** se superpone el modal de advertencia "Confirmar Inasistencia" bloqueando la vista anterior, mostrando el mensaje de confirmación y los botones "Cancelar" y "Sí, reportar inasistencia".                                                                               |
| **Cancelar Confirmación de Inasistencia**                   | **Dado** que el tutor visualiza el modal de advertencia "Confirmar Inasistencia",<br> **cuando** hace clic en el botón 'Cancelar',<br> **entonces** el modal de advertencia desaparece sin aplicar cambios. El sistema devuelve al tutor exactamente a la interfaz que estaba debajo (el modal de detalle).                                                                                                                                                                 |
| **Reportar Inasistencia Exitosamente**                      | **Dado** que el tutor visualiza el modal de advertencia "Confirmar Inasistencia",<br> **cuando** hace clic en el botón rojo 'Sí, reportar inasistencia',<br> **entonces** todos los modales abiertos se cierran. En el listado principal de 'Historial de Tutorías Impartidas', la tarjeta se actualiza visualmente mostrando una etiqueta estática con contorno rojo, ícono de "X" y el texto "Inasistencia". Los botones de acción desaparecen.                           |
| **Ver Detalles de Tutoría con Inasistencia (Solo lectura)** | **Dado** que el tutor hace clic sobre una tarjeta que ya se encuentra en estado 'Inasistencia',<br> **cuando** se despliega el modal 'Detalle de la Tutoría',<br> **entonces** la información se presenta en modo lectura. En la parte inferior se muestra estáticamente "Estado: [Ícono X rojo] Inasistencia". Solo el botón "Cerrar" está habilitado.                                                                                                                     |
| **Cerrar Detalle de Tutoría con Inasistencia**              | **Dado** que el tutor se encuentra visualizando el modal 'Detalle de la Tutoría' de una sesión con inasistencia,<br> **cuando** hace clic en el botón 'Cerrar',<br> **entonces** el modal se cierra y el sistema regresa a la pantalla 'Historial de Tutorías Impartidas'.                                                                                                                                                                                                  |

#### Tareas HU48

| No. | Tarea                                                                                                                                  | Effort-Hours |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para datos de tutorías en diferentes estados.                                                                         | 0.3H         |
| 2   | `TutoriaCard` - Implementar botón 'Inasistencia' y estado visual.                                                                      | 0.4H         |
| 3   | `DetalleModal` - Implementar botón 'Inasistencia' y modo lectura.                                                                      | 0.4H         |
| 4   | `ConfirmModal` - Integración de contenido y lógica 'Cancelar'.                                                                         | 0.3H         |
| 5   | `reportarInasistenciaAction` - Server Action con seed y revalidación.                                                                  | 0.5H         |
| 6   | `ConfirmModal` - Lógica 'Sí, reportar inasistencia' y notificación.                                                                    | 0.3H         |
| 7   | `reportarInasistenciaAction` - Integración con backend.                                                                                | 0.4H         |
| 8   | Verificar apertura del modal de confirmación y correcto funcionamiento del botón Cancelar.                                             | 0.5H         |
| 9   | Validar reporte de inasistencia exitoso, actualización de tarjeta y vista de solo lectura del detalle.                                 | 1H           |
| 10  | Actualizar entidad `Tutorial` agregando el valor `NO_SHOW` al enum `TutorialStatus`                                                    | 0.5H         |
| 11  | Definir `ReportInasistenciaDto` y actualizar `TutoriaDetalleDto` con validaciones de `class-validator`                                 | 0.5H         |
| 12  | Crear endpoint `POST /api/tutorias/:id/inasistencia` en `TutoriasController` con extracción de `tutorId` desde `req.user`              | 0.5H         |
| 13  | Implementar `TutoriasService.reportInasistencia()` con lógica de validación de estado actual (`SCHEDULED`) y verificación de propiedad | 1.5H         |
| 14  | Refactorizar `TutoriasService.findById()` para incluir el mapeo del nuevo estado `NO_SHOW` a `'INASISTENCIA'` en el DTO de respuesta   | 0.5H         |
| 15  | Registrar repositorios en `TutoriasModule` y generar seed de datos para pruebas de flujo de inasistencia y estados de error            | 0.5H         |

**Total:** 8.10 Effort Hours

---

### Nro. HU40 Título: Ver historial de tutorías recibidas

| Sección                 | Descripción                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5 SP                                                                                                                   |
| **Historia de Usuario** | Como estudiante, quiero ver mi historial de tutorías recibidas para recordar tutores anteriores y revisar mi progreso. |

#### Criterios de aceptación HU40

| **Escenario**                                                       | **Descripción**                                                                                                                                                                                                                                                                                                                 |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Visualización Inicial del Historial (Integración HU-43 y HU-48)** | **Dado** que el estudiante ingresa a la pestaña "Historial",<br> **cuando** el sistema carga la pantalla principal 'Historial de Tutorías',<br> **entonces** se listan únicamente las tarjetas en estado "Completada" (etiqueta verde) e "Inasistencia" (con recuadro rojo: "El tutor reportó inasistencia para esta sesión."). |
| **Navegación a Página Específica**                                  | **Dado** que el estudiante visualiza la primera página de su 'Historial de Tutorías' con paginación,<br> **cuando** hace clic en el número de página '2',<br> **entonces** el listado se actualiza para mostrar los registros de la página 2 y el número se resalta con fondo oscuro.                                           |
| **Navegación a Siguiente Página**                                   | **Dado** que el estudiante se encuentra en la primera página de su 'Historial de Tutorías',<br> **cuando** hace clic en el control de paginación '>',<br> **entonces** el listado avanza a la siguiente página y el número activo se resalta.                                                                                   |
| **Navegación a Página Anterior**                                    | **Dado** que el estudiante se encuentra en la segunda página de su 'Historial de Tutorías',<br> **cuando** hace clic en el control de paginación '<',<br> **entonces** el listado retrocede a la página anterior y el número activo se resalta.                                                                                 |
| **Ver Detalles de Tutoría Completada (Integración HU-43)**          | **Dado** que el estudiante hace clic sobre el área general de una tarjeta "Completada",<br> **cuando** se abre el modal 'Detalle de la Tutoría',<br> **entonces** se muestran los datos de la sesión y una etiqueta inferior de "Estado: Completada". En la parte inferior únicamente se visualiza el botón "Cerrar".           |
| **Ver Detalles de Tutoría con Inasistencia (Integración HU-48)**    | **Dado** que el estudiante hace clic sobre una tarjeta con el recuadro rojo de Inasistencia,<br> **cuando** se abre el modal 'Detalle de la Tutoría',<br> **entonces** muestra los datos de la sesión y en la parte inferior la etiqueta "Estado: Inasistencia". Solo el botón "Cerrar" está habilitado.                        |
| **Cerrar Modal de Detalle de Tutoría**                              | **Dado** que el estudiante visualiza cualquier modal 'Detalle de la Tutoría' desde su historial,<br> **cuando** hace clic en el botón 'Cerrar',<br> **entonces** la ventana modal desaparece y regresa a la vista del listado de 'Historial de Tutorías'.                                                                       |

#### Tareas HU40

| No. | Tarea                                                                                                                        | Effort-Hours |
| --- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para el listado de historial de tutorías.                                                                   | 0.1H         |
| 2   | Creación de seed para el detalle de una tutoría.                                                                             | 0.1H         |
| 3   | Definición de tipos de datos Frontend (DTOs y QueryParams).                                                                  | 0.1H         |
| 4   | Implementación de Server Action `fetchHistorialAction` con seed.                                                             | 0.2H         |
| 5   | Implementación de Server Action `fetchDetalleAction` con seed.                                                               | 0.2H         |
| 6   | Configuración de la página `app/historial/page.tsx`.                                                                         | 0.1H         |
| 7   | Maquetación del contenedor principal y título de la página.                                                                  | 0.1H         |
| 8   | Carga y renderizado inicial del listado de tutorías en `page.tsx`.                                                           | 0.1H         |
| 9   | Creación del componente `TarjetaTutoria` (estructura base).                                                                  | 0.1H         |
| 10  | Renderizado de datos básicos en `TarjetaTutoria`.                                                                            | 0.1H         |
| 11  | Estilos condicionales de estado para `TarjetaTutoria` (Completada).                                                          | 0.1H         |
| 12  | Estilos condicionales de estado para `TarjetaTutoria` (Inasistencia).                                                        | 0.1H         |
| 13  | Creación del componente `PaginacionHistorial` (estructura base).                                                             | 0.1H         |
| 14  | Lógica y renderizado de números de página en `PaginacionHistorial`.                                                          | 0.1H         |
| 15  | Implementación de navegación ">" y "<" en `PaginacionHistorial`.                                                             | 0.1H         |
| 16  | Integración de `PaginacionHistorial` con `searchParams` de Next.js.                                                          | 0.1H         |
| 17  | Creación del componente `ModalDetalleTutoria` (estructura base).                                                             | 0.1H         |
| 18  | Implementación de apertura y cierre de `ModalDetalleTutoria`.                                                                | 0.1H         |
| 19  | Manejo de estado para `tutoriaId` seleccionada.                                                                              | 0.1H         |
| 20  | Carga de datos de detalle de tutoría en `ModalDetalleTutoria`.                                                               | 0.2H         |
| 21  | Renderizado de datos de detalle en `ModalDetalleTutoria`.                                                                    | 0.2H         |
| 22  | Renderizado de etiqueta de estado en `ModalDetalleTutoria`.                                                                  | 0.1H         |
| 23  | Implementación de botón "Cerrar" en `ModalDetalleTutoria`.                                                                   | 0.1H         |
| 24  | Deshabilitar o no renderizar `FiltrosHistorial` y `BotonCalificar`.                                                          | 0.1H         |
| 25  | Integración `fetchHistorialAction` con backend real.                                                                         | 0.1H         |
| 26  | Integración `fetchDetalleAction` con backend real.                                                                           | 0.1H         |
| 27  | Comprobar carga inicial (solo completadas/inasistencia) y funcionamiento de la paginación.                                   | 0.5H         |
| 28  | Validar modales de detalle en modo lectura para sesiones completadas y con inasistencia.                                     | 0.25H        |
| 29  | Crear entidad `Review` y establecer relación `OneToOne` con `Tutorial` para soportar calificaciones y comentarios            | 1H           |
| 30  | Definir `HistorialQueryParamsDto` con validaciones de paginación y `TutoriaHistorialListDTO` / `TutoriaDetalleDTO`           | 1H           |
| 31  | Implementar endpoints `GET /tutorias/historial` y `GET /tutorias/:id` en `TutoriasController` con `JwtAuthGuard`             | 0.5H         |
| 32  | Implementar `TutoriasService.findHistorialByStudent()` usando `QueryBuilder` con filtros de estado, `studentId` y paginación | 2H           |
| 33  | Implementar `TutoriasService.findOneTutoriaDetalle()` con carga de relaciones `Review`, `Tutor` y validación de propiedad    | 1H           |
| 34  | Registrar entidad `Review` en `TutoriasModule` y crear script de seed con datos de historial y reseñas                       | 0.5H         |

**Total:** 9.75 Effort Hours

---

### Nro. HU10 Título: Dejar reseña a tutor

| Sección                 | Descripción                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 13 SP                                                                                                    |
| **Historia de Usuario** | Como estudiante, quiero dejar una reseña a un tutor para compartir mi experiencia con otros estudiantes. |

#### Criterios de aceptación HU10

| **Escenario**                                                           | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Apertura de Modal de Calificación desde Tarjeta (Integración HU-40)** | **Dado** que el estudiante visualiza una tutoría "Completada" en su pantalla 'Historial de Tutorías',<br> **cuando** hace clic en el botón oscuro 'Calificar' directamente en la tarjeta,<br> **entonces** se despliega la ventana modal "Califica tu tutoría" con 5 estrellas vacías, el campo opcional de comentario ("0/300") y el botón "Enviar Reseña" deshabilitado (gris).                                                                              |
| **Apertura de Detalle de Tutoría Completada (Integración HU-40)**       | **Dado** que el estudiante hace clic sobre el área general de una tarjeta "Completada",<br> **cuando** se abre el modal 'Detalle de la Tutoría',<br> **entonces** se muestran los datos de la sesión y, en la parte inferior junto al botón "Cerrar", se visualiza el botón oscuro interactivo "Calificar".                                                                                                                                                    |
| **Apertura de Modal de Calificación desde Detalle**                     | **Dado** que el estudiante se encuentra dentro del modal 'Detalle de la Tutoría' de una sesión completada,<br> **cuando** hace clic en el botón 'Calificar',<br> **entonces** se superpone el modal "Califica tu tutoría" bloqueando la vista anterior, con las 5 estrellas vacías, el campo de comentario opcional y el botón "Enviar Reseña" deshabilitado.                                                                                                  |
| **Botón Enviar Reseña Deshabilitado sin Estrellas**                     | **Dado** que el estudiante se encuentra en el modal "Califica tu tutoría",<br> **cuando** ingresa texto en el campo opcional de comentario pero no selecciona ninguna estrella,<br> **entonces** el botón "Enviar Reseña" permanece deshabilitado.                                                                                                                                                                                                             |
| **Habilitación de Botón de Envío**                                      | **Dado** que el estudiante se encuentra en el modal "Califica tu tutoría",<br> **cuando** hace clic para seleccionar de 1 a 5 estrellas,<br> **entonces** el botón "Enviar Reseña" cambia visualmente a estado habilitado e interactuable.                                                                                                                                                                                                                     |
| **Validación Límite de Caracteres en Comentario**                       | **Dado** que el estudiante ingresa texto en el campo opcional de comentario,<br> **cuando** alcanza los 300 caracteres permitidos,<br> **entonces** el sistema restringe el ingreso de texto adicional, indicando en el contador "300/300".                                                                                                                                                                                                                    |
| **Envío de Reseña con Comentario (Integración HU-43)**                  | **Dado** que el estudiante está en el modal "Califica tu tutoría" con estrellas seleccionadas y un comentario ingresado,<br> **cuando** hace clic en el botón "Enviar Reseña",<br> **entonces** el modal se cierra, se muestra el mensaje temporal exacto: "Reseña enviada. Gracias por calificar tu tutoría." y la tarjeta en el historial se actualiza mostrando la sección "TU CALIFICACIÓN" con las estrellas y el texto. El botón "Calificar" desaparece. |
| **Envío de Reseña sin Comentario (Integración HU-43)**                  | **Dado** que el estudiante está en el modal "Califica tu tutoría" con estrellas seleccionadas pero deja el campo de comentario vacío,<br> **cuando** hace clic en "Enviar Reseña",<br> **entonces** el sistema procesa el envío correctamente, mostrando el mensaje temporal exacto: "Reseña enviada. Gracias por calificar tu tutoría." y actualizando la tarjeta solo con la representación de las estrellas.                                                |
| **Cancelación de Reseña**                                               | **Dado** que el estudiante visualiza el modal "Califica tu tutoría",<br> **cuando** hace clic en el botón "Cancelar",<br> **entonces** el modal se cierra sin guardar información, regresando al estudiante a la vista exacta donde se encontraba (tarjeta o detalle).                                                                                                                                                                                         |
| **Visualización de Detalle de Tutoría Calificada**                      | **Dado** que el estudiante hace clic sobre una tarjeta que ya fue calificada en su 'Historial de Tutorías',<br> **cuando** se abre el modal 'Detalle de la Tutoría',<br> **entonces** el modal muestra la información estática y una sección inferior "Tu Reseña" con las estrellas y el texto exacto ingresado. Solo el botón "Cerrar" está habilitado.                                                                                                       |
| **Cerrar Detalle de Tutoría Calificada**                                | **Dado** que el estudiante visualiza el modal 'Detalle de la Tutoría' de una sesión calificada,<br> **cuando** hace clic en el botón 'Cerrar',<br> **entonces** el modal se cierra y el usuario regresa al listado principal.                                                                                                                                                                                                                                  |

#### Tareas HU10

| No. | Tarea                                                                                                                             | Effort-Hours |
| --- | --------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seeds para datos de `Tutoría` y `Review`.                                                                             | 0.2H         |
| 2   | Implementación del componente `StarRatingInput`.                                                                                  | 0.3H         |
| 3   | Implementación del componente `ComentarioTextArea` con validación.                                                                | 0.3H         |
| 4   | Maquetación y lógica de estado del `ModalCalificarTutoría`.                                                                       | 0.4H         |
| 5   | Implementación del Server Action `submitReviewAction` con seed data.                                                              | 0.3H         |
| 6   | Adaptación de `TutoríaCard` (botón 'Calificar' y apertura de modales).                                                            | 0.3H         |
| 7   | Desarrollo de `SecciónTuReseña` y su integración en `ModalDetalleTutoría`.                                                        | 0.3H         |
| 8   | Implementación del Server Action `getTutoriaDetailsAction` con seed data.                                                         | 0.3H         |
| 9   | Integración de `submitReviewAction` en `ModalCalificarTutoría` y manejo de feedback.                                              | 0.2H         |
| 10  | Integración de `getTutoriaDetailsAction` en `ModalDetalleTutoría` y manejo de estado.                                             | 0.2H         |
| 11  | Tareas de cierre: Manejo de `CancelarButton` y `CerrarButton` en modales.                                                         | 0.2H         |
| 12  | Integración final con backend: Descomentar `fetch` en Server Actions.                                                             | 0.3H         |
| 13  | Verificar apertura del modal "Califica tu tutoría" desde tarjeta y desde el detalle.                                              | 0.25H        |
| 14  | Comprobar habilitación del botón enviar por estrellas y validación del límite (300 caracteres).                                   | 0.5H         |
| 15  | Validar el envío exitoso de la reseña (con/sin comentario) y actualización de la tarjeta.                                         | 1H           |
| 16  | Crear entidad `Review` y establecer relación `OneToOne` con `Tutorial` y relaciones `ManyToOne` con `Student` y `Tutor`           | 1.5H         |
| 17  | Definir `CreateReviewDto` con validaciones (1-5 estrellas, 300 caracteres) y actualizar `TutoriaDetalleDTO`                       | 1H           |
| 18  | Crear endpoint `POST /api/reviews` en `ReviewsController` con extracción de `studentId` desde el token JWT                        | 0.5H         |
| 19  | Implementar `ReviewsService.create()` con validaciones de propiedad del estudiante, estado `COMPLETED` y prevención de duplicidad | 2H           |
| 20  | Refactorizar `TutoriasService.findOneTutoriaDetalle()` para cargar la relación `review` y agregar método `linkReviewToTutorial()` | 0.5H         |
| 21  | Registrar `ReviewsModule` y generar seed de datos para pruebas de historial con tutorías calificadas y no calificadas             | 0.5H         |

**Total:** 11.05 Effort Hours

---

### Nro. HU22 Título: Ver reseñas sobre el tutor

| Sección                 | Descripción                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5 SP                                                                                                       |
| **Historia de Usuario** | Como estudiante, quiero ver las reseñas sobre un tutor para tomar una decisión informada antes de agendar. |

#### Criterios de aceptación HU22

| **Escenario**                                        | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Vista Inicial de Reseñas (Integración HU-10)**     | **Dado** que el estudiante se desplaza a la sección 'Reseñas de Estudiantes' dentro de la pantalla de detalle de oferta del tutor,<br> **cuando** el sistema carga la sección,<br> **entonces** visualiza el consolidado general de calificaciones, el gráfico de barras porcentuales, las tres métricas del tutor, y un listado de un máximo de 3 reseñas individuales (con avatar, nombre, fecha, estrellas, título de la oferta de la tutoría a la cual asistió el estudiante y comentario). |
| **Carga de Reseñas Adicionales (Integración HU-10)** | **Dado** que el estudiante se encuentra en la sección 'Reseñas de Estudiantes' y existen más de 3 reseñas en total para ese tutor,<br> **cuando** hace clic en el botón inferior 'Ver más reseñas',<br> **entonces** la lista se expande cargando comentarios adicionales hacia abajo, y el texto contador (ej. "Mostrando 3 de 8 reseñas") se actualiza dinámicamente. El botón permanece visible si hay más reseñas por mostrar o desaparece si se alcanzó el total.                          |

#### Tareas HU22

| No. | Tarea                                                                                                                                                         | Effort-Hours |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para `PaginatedReviewsResponse`.                                                                                                             | 0.3H         |
| 2   | Implementación de Server Actions (`fetchTutorReviews` helper, `LoadReviewsAction`, `UpdateReviewsAction`) con seed.                                           | 0.5H         |
| 3   | Maquetación de la sección 'Reseñas de Estudiantes' (incluye `ReviewSection`, `RatingSummaryDisplay` con promedio y total, `ReviewListDisplay`, `ReviewCard`). | 0.7H         |
| 4   | Implementación del gráfico de barras de distribución de estrellas en `RatingSummaryDisplay`.                                                                  | 0.3H         |
| 5   | Implementación de `PaginationControls` (botón "Ver más reseñas", texto contador y lógica de visibilidad).                                                     | 0.5H         |
| 6   | Integración de `ReviewSection` con Server Actions y manejo de estado local para reseñas.                                                                      | 0.6H         |
| 7   | Integración con backend real (descomentar `fetch` en Server Actions).                                                                                         | 0.3H         |
| 8   | Verificar consolidado, gráficos y lista inicial de reseñas (mostrando título de oferta de la tutoría).                                                        | 0.5H         |
| 9   | Probar botón "Ver más reseñas", carga de nuevos comentarios y actualización de contadores.                                                                    | 0.5H         |
| 10  | Definir entidades `Tutorial`, `Review`, `Student`, `Tutor`, `Subject` y enums de estado/modalidad con relaciones TypeORM                                      | 1.5H         |
| 11  | Crear DTOs para contratos de historial, detalles y reseñas con validaciones `class-validator` y `class-transformer`                                           | 1H           |
| 12  | Implementar endpoints en `TutorialsController` y `ReviewsController` con `JwtAuthGuard` y decoradores de Swagger                                              | 0.5H         |
| 13  | Implementar `TutorialsService` para gestión de historial (tutor/estudiante) y visualización de detalles con carga de relaciones                               | 1.5H         |
| 14  | Desarrollar lógica de actualización de estados (`completar`, `inasistencia`) con validación de reglas de negocio y propiedad                                  | 0.5H         |
| 15  | Implementar `ReviewsService` para persistencia de reseñas y cálculo de resumen de calificaciones (promedio y distribución)                                    | 1H           |

**Total:** 10.20 Effort Hours

---

### Resumen del Sprint Backlog


| **Historia de usuario** | **Título**                            | **Story Points (SP)** | **Effort-Hours** |
| ----------------------- | ------------------------------------- | --------------------- | ---------------- |
| HU39                    | Ver historial de tutorías impartidas  | 5 SP                  | 10.05H           |
| HU43                    | Registrar la tutoría completada       | 5 SP                  | 9.70H            |
| HU48                    | Registrar inasistencia del estudiante | 5 SP                  | 8.10H            |
| HU40                    | Ver historial de tutorías recibidas   | 5 SP                  | 9.75H            |
| HU10                    | Dejar reseña a tutor                  | 13 SP                 | 11.05H           |
| HU22                    | Ver reseñas sobre el tutor            | 5 SP                  | 10.20H           |
| **Suma total de SP**    |                                       | **38 SP**             | **58.85H**       |
