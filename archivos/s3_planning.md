# Sprint 3 – Sprint Planning

## 1. Sprint Goal

Gestionar solicitudes de tutorías y consultar agenda de tutorías.

## 2. Capacidad del Equipo (Effort-Hours)

| Person    | Days Available (Less Personal Time) | Days for Other Scrum Activities | Hours per Day | Available Effort-Hours |
| --------- | ----------------------------------- | ------------------------------- | ------------- | ---------------------- |
| David     | 11                                  | 7                               | 2 a 3         | 8 a 12                 |
| Emilio    | 11                                  | 4                               | 1 a 3         | 7 a 21                 |
| José      | 11                                  | 4                               | 1 a 3         | 7 a 21                 |
| Sebastián | 11                                  | 8                               | 2 a 3         | 6 a 9                  |
| Estefano  | 11                                  | 7                               | 2 a 3         | 8 a 12                 |
| Anthony   | 11                                  | 5                               | 2 a 3         | 12 a 18                |
| **Total** |                                     |                                 |               | **48 a 93**            |

## 3. Sprint Backlog

### Nro. HU06 Título: Enviar solicitud de tutoría

| Sección                 | Descripción                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| **Estimación**          | 13                                                                     |
| **Historia de Usuario** | Como estudiante, quiero enviar una solicitud para agendar una tutoría. |

#### Criterios de aceptación HU06

| **Escenario**                                           | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bloqueo por Horario No Seleccionado**                 | **Dado** que el estudiante se encuentra autenticado y en la pantalla de Detalle de Oferta de una tutoría.<br> **cuando** no ha seleccionado ningún chip de horario en la sección "Disponibilidad Semanal".<br> **entonces** el botón "Solicitar Tutoría" se muestra en un estado visual deshabilitado, impidiendo la interacción del usuario para abrir el modal de solicitud.                                                                                                                                                                                                                 |
| **Bloqueo por Solicitud Previa**                        | **Dado** que el estudiante se encuentra en la pantalla de Detalle de Oferta y ya tiene una solicitud activa previa para el horario de las "14:00" del día "Miércoles".<br> **cuando** hace clic en el chip del horario "14:00" en la fila del "Miércoles" dentro de la sección "Disponibilidad Semanal".<br> **entonces** el botón "Solicitar Tutoría" no se habilita y el sistema visualiza inmediatamente una alerta inferior con el texto exacto: "Horario ya solicitado. Ya tienes una solicitud activa para Miércoles 14:00."                                                             |
| **Abrir Modal Solicitar Tutoría (Una Modalidad)**       | **Dado** que el estudiante se encuentra en la pantalla de Detalle de Oferta de una tutoría con una única modalidad configurada y ha seleccionado el horario "Lunes 9 mar · 14:00".<br> **cuando** hace clic en el botón "Solicitar Tutoría".<br> **entonces** se superpone el modal "Solicitar Tutoría" mostrando la foto y nombre del tutor, el chip de "Horarios seleccionados", el campo de texto "Mensaje para el tutor \*" con el contador "0/500", el botón "Cancelar" y el botón "Enviar Solicitud". No se visualiza selector de modalidad.                                             |
| **Abrir Modal Solicitar Tutoría (Dual Modalidad)**      | **Dado** que el estudiante se encuentra en la pantalla de Detalle de Oferta de una tutoría con modalidades "Virtual/Presencial" configuradas y ha seleccionado el horario "Lunes 9 mar · 14:00".<br> **cuando** hace clic en el botón "Solicitar Tutoría".<br> **entonces** se superpone el modal "Solicitar Tutoría" mostrando la información del tutor, los "Horarios seleccionados", la sección obligatoria "Modalidad _" con los botones "Virtual" y "Presencial", el campo de texto "Mensaje para el tutor _" con el contador "0/500", el botón "Cancelar" y el botón "Enviar Solicitud". |
| **Solicitud Exitosa (Una Modalidad)**                   | **Dado** que el estudiante se encuentra en el modal "Solicitar Tutoría" (sin selector de modalidad) tras haber seleccionado horarios disponibles.<br> **cuando** ingresa en el campo de texto "Mensaje para el tutor \*" el texto: "Requiero ayuda urgente con este tema para mi examen." y hace clic en "Enviar Solicitud".<br> **entonces** el modal se cierra y se visualiza en la pantalla principal una notificación de éxito con el texto exacto: "¡Solicitud enviada! 1 horario propuesto. El tutor revisará tu solicitud pronto."                                                      |
| **Mensaje Obligatorio (Una Modalidad)**                 | **Dado** que el estudiante se encuentra en el modal "Solicitar Tutoría" (sin selector de modalidad).<br> **cuando** deja el campo de texto "Mensaje para el tutor _" completamente vacío y hace clic en "Enviar Solicitud".<br> **entonces** el sistema impide el envío, el borde del campo de texto "Mensaje para el tutor _" cambia a color rojo y justo debajo se muestra el mensaje de error exacto: "El mensaje es obligatorio."                                                                                                                                                          |
| **Modalidad Obligatoria (Dual)**                        | **Dado** que el estudiante se encuentra en el modal "Solicitar Tutoría" con las opciones de modalidad "Virtual/Presencial" visibles.<br> **cuando** deja la sección "Modalidad _" sin seleccionar, ingresa en el campo de texto "Mensaje para el tutor _" el texto: "Necesito repasar integrales." y hace clic en "Enviar Solicitud".<br> **entonces** el sistema impide el envío y justo debajo de los botones de selección "Virtual" y "Presencial" se muestra el mensaje de error exacto en color rojo: "Selecciona la modalidad".                                                          |
| **Solicitud Exitosa (Dual Modalidad)**                  | **Dado** que el estudiante se encuentra en el modal "Solicitar Tutoría" con las opciones de modalidad "Virtual/Presencial" visibles.<br> **cuando** selecciona el botón "Virtual" en la sección "Modalidad _", ingresa en el campo de texto "Mensaje para el tutor _" el texto: "Necesito repasar integrales." y hace clic en "Enviar Solicitud".<br> **entonces** el modal se cierra y se visualiza una notificación de éxito con el texto exacto: "¡Solicitud enviada! 1 horario propuesto. El tutor revisará tu solicitud pronto."                                                          |
| **Mensaje Obligatorio (Dual - Modalidad Seleccionada)** | **Dado** que el estudiante se encuentra en el modal "Solicitar Tutoría" con las opciones de modalidad "Virtual/Presencial" visibles.<br> **cuando** selecciona el botón "Presencial" en la sección "Modalidad _", deja el campo de texto "Mensaje para el tutor _" completamente vacío y hace clic en "Enviar Solicitud".<br> **entonces** el sistema impide el envío, el borde del campo de texto "Mensaje para el tutor \*" cambia a color rojo y justo debajo se muestra el mensaje de error exacto: "El mensaje es obligatorio."                                                           |
| **Mensaje Y Modalidad Obligatorios (Dual)**             | **Dado** que el estudiante se encuentra en el modal "Solicitar Tutoría" con las opciones de modalidad "Virtual/Presencial" visibles.<br> **cuando** deja la sección "Modalidad _" sin seleccionar, deja el campo de texto "Mensaje para el tutor _" vacío y hace clic en "Enviar Solicitud".<br> **entonces** el sistema impide el envío, debajo de los botones de selección se muestra en rojo "Selecciona la modalidad", y el borde del campo de texto "Mensaje para el tutor \*" cambia a color rojo mostrando debajo "El mensaje es obligatorio."                                          |
| **Bloqueo por Límite Máximo de Caracteres en Mensaje**  | **Dado** que el estudiante se encuentra en el modal "Solicitar Tutoría".<br> **cuando** ingresa en el campo de texto "Mensaje para el tutor \*" el texto: "A" repetido 501 veces sin espacios.<br> **entonces** el sistema bloquea el ingreso adicional de texto, el contador inferior muestra exactamente "500/500" y no se permite sobrepasar este límite visual ni funcionalmente al teclear.                                                                                                                                                                                               |

#### Tareas HU06

| No. | Tarea                                                                                                                           | Effort-Hours |
| --- | ------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para la entidad `Oferta` (para `DetalleOfertaPage`)                                                            | 0.2H         |
| 2   | Creación de seed para la respuesta de `verificarSolicitudPreviaAction`                                                          | 0.2H         |
| 3   | Creación de seed para la respuesta de `enviarSolicitudTutoriaAction`                                                            | 0.2H         |
| 4   | Implementación de `DetalleOfertaPage` (maquetación y carga inicial de datos)                                                    | 0.2H         |
| 5   | Implementación de `ChipHorario` y su lógica de selección                                                                        | 0.2H         |
| 6   | Lógica `validarSeleccionHorario` y estado de `BotonSolicitarTutoria`                                                            | 0.2H         |
| 7   | Implementación de `AlertaSolicitudPrevia`                                                                                       | 0.2H         |
| 8   | Implementación de `verificarSolicitudPreviaAction` con seed data                                                                | 0.2H         |
| 9   | Maquetación base de `ModalSolicitarTutoria`                                                                                     | 0.2H         |
| 10  | Implementación de `InputMensaje` con contador y límite de caracteres                                                            | 0.2H         |
| 11  | Implementación condicional de `SelectorModalidad`                                                                               | 0.2H         |
| 12  | Implementación de botones `BotonEnviarSolicitud` y `BotonCancelar` en el modal                                                  | 0.2H         |
| 13  | Implementación de `MensajeErrorForm` para errores de validación en el modal                                                     | 0.2H         |
| 14  | Lógica de `abrirModalSolicitud` y manejo de estado del modal                                                                    | 0.2H         |
| 15  | Validaciones frontend en `ModalSolicitarTutoria` (Zod/React Hook Form)                                                          | 0.2H         |
| 16  | Implementación de `enviarSolicitudTutoriaAction` con seed data                                                                  | 0.3H         |
| 17  | Implementación de `NotificacionExito`                                                                                           | 0.3H         |
| 18  | Integración `GET /api/ofertas/:id`                                                                                              | 0.3H         |
| 19  | Integración `POST /api/solicitudes/verificar-previa`                                                                            | 0.3H         |
| 20  | Integración `POST /api/solicitudes`                                                                                             | 0.3H         |
| 21  | Implementar entidad `SolicitudEntity` con `SolicitudEstado` y DTO base `HorarioSolicitadoDto` con validaciones regex            | 1H           |
| 22  | Crear endpoint `GET /api/ofertas/:id` y definir `OfertaDetailResponseDto` con sub-DTOs de Tutor y Horarios                      | 1.5H         |
| 23  | Implementar `OfertasService.findById()` con carga de relaciones y mapeo mediante `plainToClass`                                 | 1H           |
| 24  | Implementar lógica de búsqueda en `SolicitudesService.verificarSolicitudPrevia()` y su endpoint POST en `SolicitudesController` | 1H           |
| 25  | Implementar `SolicitudesService.create()` con validación de modalidad (dual vs única) y endpoint `POST /api/solicitudes`        | 1.5H         |
| 26  | Verificar envío exitoso de la solicitud (modalidades única y dual).                                                             | 1H           |
| 27  | Comprobar validaciones del modal (horarios cruzados, campos obligatorios y límite de caracteres).                               | 1H           |

**Total:** 12.50 Effort Hours

---

### Nro. HU09 Título: Ver solicitudes recibidas

| Sección                 | Descripción                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5                                                                                                                           |
| **Historia de Usuario** | Como tutor, quiero ver las solicitudes de tutoría que he recibido para enterarme de los estudiantes que necesitan mi ayuda. |

#### Criterios de aceptación HU09

| **Escenario**                            | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visualización Inicial de Pendientes**  | **Dado** que el usuario tutor se encuentra autenticado en el sistema y tiene en su base de datos al menos una solicitud dirigida a él en estado "Pendiente".<br>**cuando** hace clic en la opción "Bandeja" en la barra de navegación superior.<br>**entonces** el sistema carga la pantalla principal de la Bandeja de Entrada. La barra superior muestra el indicador de '3 pendientes'. La pestaña 'Pendientes (3)' se muestra activa (fondo oscuro, texto blanco), mientras que la pestaña 'Expiradas (14)' se muestra inactiva. Se listan las solicitudes en formato de tabla (ESTUDIANTE, MATERIA, FECHA/HORA, MENSAJE, ESTADO) mostrando filas colapsadas con el tag de estado 'Pendiente' (texto naranja, fondo claro) e ícono de flecha hacia abajo a la derecha. |
| **Visualización Inicial sin Pendientes** | **Dado** que el usuario tutor se encuentra autenticado en el sistema y NO tiene ninguna solicitud en estado "Pendiente".<br>**cuando** hace clic en la opción "Bandeja" en la barra de navegación superior.<br>**entonces** el sistema carga la pantalla de Bandeja de Entrada. El indicador global muestra '0 pendientes'. La pestaña 'Pendientes (0)' se muestra activa. Las cabeceras de la tabla se ocultan y en el área central de la pantalla se visualiza el texto exacto: "No hay solicitudes pendientes.".                                                                                                                                                                                                                                                        |
| **Visualización Inicial de Expiradas**   | **Dado** que el tutor se encuentra en la pantalla de Bandeja de Entrada y el sistema registra solicitudes que superaron el tiempo límite pasando a estado "Expirada".<br>**cuando** hace clic en la pestaña 'Expiradas (14)'.<br>**entonces** la pestaña 'Expiradas (14)' se vuelve activa (fondo oscuro, texto blanco). Se visualizan las cabeceras de la tabla y se lista la información de las solicitudes expiradas con el tag de estado 'Expirada' (texto rojo). Estas filas NO presentan ícono de flecha hacia abajo.                                                                                                                                                                                                                                                |
| **Visualización Inicial sin Expiradas**  | **Dado** que el tutor se encuentra en la pantalla de Bandeja de Entrada y NO existen solicitudes en estado "Expirada" en el sistema.<br>**cuando** hace clic en la pestaña 'Expiradas (0)'.<br>**entonces** la pestaña 'Expiradas (0)' se vuelve activa. Las cabeceras de la tabla se ocultan y en el área central de la pantalla se visualiza el texto exacto: "No hay solicitudes expiradas.".                                                                                                                                                                                                                                                                                                                                                                           |
| **Cambio a Pestaña Pendientes**          | **Dado** que el tutor se encuentra en la pantalla de Bandeja de Entrada con la pestaña 'Expiradas' actualmente activa, y el sistema registra solicitudes en estado "Pendiente".<br>**cuando** hace clic en la pestaña 'Pendientes (3)'.<br>**entonces** la interfaz actualiza su vista, marcando 'Pendientes (3)' como activa (fondo oscuro, texto blanco) y mostrando nuevamente las cabeceras de la tabla junto con la lista de filas de solicitudes en estado 'Pendiente' colapsadas con sus respectivas flechas hacia abajo.                                                                                                                                                                                                                                           |
| **Desplegar Solicitud Pendiente**        | **Dado** que el tutor se encuentra en la pantalla de Bandeja de Entrada visualizando la pestaña 'Pendientes (3)' y observa la fila colapsada de la solicitud de 'Valeria Sánchez'.<br>**cuando** hace clic en el ícono de flecha hacia abajo de la fila correspondiente a 'Valeria Sánchez'.<br>**entonces** la fila seleccionada se expande verticalmente. Debajo de la información base aparecen los detalles: ícono y texto de modalidad 'Virtual', precio '$10/h', y el bloque 'MENSAJE DEL ESTUDIANTE' con el texto completo. El ícono de flecha de la fila cambia apuntando hacia arriba.                                                                                                                                                                            |
| **Colapsar Solicitud Pendiente**         | **Dado** que el tutor se encuentra en la pantalla de Bandeja de Entrada, pestaña 'Pendientes (3)', y la fila de la solicitud de 'Valeria Sánchez' se encuentra actualmente expandida mostrando el mensaje completo.<br>**cuando** hace clic en el ícono de flecha hacia arriba de la fila de 'Valeria Sánchez'.<br>**entonces** la fila seleccionada se contrae. Se ocultan los detalles de modalidad, precio y el mensaje completo. La fila vuelve a su estado de resumen inicial con la flecha apuntando hacia abajo.                                                                                                                                                                                                                                                    |

#### Tareas HU09

| No. | Tarea                                                                                                                     | Effort-Hours |
| --- | ------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para `GlobalCountsDto`.                                                                                  | 0.5H         |
| 2   | Creación de seed para `PaginatedSolicitudesDto` (estado PENDIENTE).                                                       | 0.5H         |
| 3   | Creación de seed para `PaginatedSolicitudesDto` (estado EXPIRADA).                                                        | 0.5H         |
| 4   | Creación del componente reutilizable `StatusTag`.                                                                         | 0.5H         |
| 5   | Implementación de Server Action `fetchInitialDataAction` con seed.                                                        | 1.0H         |
| 6   | Implementación de Server Action `getSolicitudesAction` con seed.                                                          | 1.0H         |
| 7   | Estructura y maquetación de la página `BandejaEntradaPage`.                                                               | 2.0H         |
| 8   | Implementación e integración de `GlobalPendingCount` en `NavBar`.                                                         | 0.5H         |
| 9   | Estructura del `TabsComponent` con pestañas Pendientes y Expiradas.                                                       | 1.5H         |
| 10  | Estilización de pestañas y manejo de estado `activeTab`.                                                                  | 0.5H         |
| 11  | Implementación del manejo de cambio de pestaña (`onTabChange`).                                                           | 1.0H         |
| 12  | Estructura base de `SolicitudesTable` y cabeceras condicionales.                                                          | 1.0H         |
| 13  | Implementación del componente `NoRequestsMessage`.                                                                        | 0.5H         |
| 14  | Implementación del componente `SolicitudRowCollapsed`.                                                                    | 1.5H         |
| 15  | Implementación de `SolicitudRowExpanded` para solicitudes PENDIENTE.                                                      | 1.5H         |
| 16  | Implementación de `SolicitudRowExpanded` para solicitudes EXPIRADA.                                                       | 1.5H         |
| 17  | Gestión del estado de expansión/colapso de filas en tabla.                                                                | 0.5H         |
| 18  | Implementación del componente `PaginationComponent` (placeholder).                                                        | 0.5H         |
| 19  | Integración de `fetchInitialDataAction` con backend real.                                                                 | 0.5H         |
| 20  | Integración de `getSolicitudesAction` con backend real.                                                                   | 0.5H         |
| 21  | Actualizar `SolicitudEntity` y enum `SolicitudEstado` con los campos `materia`, `precio` y nuevos estados de bandeja      | 0.5H         |
| 22  | Definir DTOs de contrato: `FilterParamsDto`, `GlobalCountsDto`, `SolicitudDetailsResponseDto` y `PaginatedSolicitudesDto` | 1H           |
| 23  | Crear endpoints `GET /api/solicitudes` y `GET /api/solicitudes/counts` en `SolicitudesController` con `TutorAuthGuard`    | 1H           |
| 24  | Implementar `SolicitudesService.getCountsByStatus()` para obtener conteos agrupados por estado para el tutor              | 1H           |
| 25  | Implementar `SolicitudesService.getFiltered()` con paginación TypeORM, joins con `OfertaEntity` y formateo de respuesta   | 2H           |
| 26  | Registrar `SolicitudesRepository` y `OfertasRepository` en el módulo de solicitudes                                       | 0.5H         |
| 27  | Verificar navegación, estados vacíos y actualización de contadores en "Pendientes" y "Expiradas".                         | 0.5H         |
| 28  | Probar el despliegue/colapso de tarjetas y visibilidad de botones según la pestaña.                                       | 0.5H         |

**Total:** 24.50 Effort Hours

---

### Nro. HU33 Título: Ver solicitudes de tutoría enviadas

| Sección                 | Descripción                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5                                                                                                  |
| **Historia de Usuario** | Como estudiante, quiero ver las solicitudes que he enviado para saber qué servicios he solicitado. |

#### Criterios de aceptación HU33

| **Escenario**                       | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visualización Filtro Todas**      | **Dado** que el estudiante se encuentra autenticado y navega a la pantalla principal de Mis Solicitudes.<br> **cuando** hace clic en la pestaña superior "Todas (16)".<br> **entonces** la pestaña seleccionada cambia a un estado activo (fondo oscuro, texto blanco). En el área de contenido, el sistema renderiza una lista de tarjetas que combina visualmente solicitudes en estado Pendiente y Expirada. Cada tarjeta muestra de forma obligatoria el avatar, materia, tutor, fecha/hora, modalidad, precio, y la respectiva etiqueta de estado en la esquina superior derecha.                                               |
| **Visualización Filtro Pendientes** | **Dado** que el estudiante se encuentra en la pantalla de Mis Solicitudes.<br> **cuando** hace clic en la pestaña "Pendientes (1)".<br> **entonces** la pestaña seleccionada cambia a estado activo. El sistema filtra la lista principal y renderiza únicamente las tarjetas correspondientes a solicitudes en curso. En todas las tarjetas visibles, la esquina superior derecha contiene el tag "Pendiente" (texto naranja, ícono de reloj, fondo naranja claro).                                                                                                                                                                 |
| **Visualización Filtro Expiradas**  | **Dado** que el estudiante se encuentra en la pantalla de Mis Solicitudes.<br> **cuando** hace clic en la pestaña "Expiradas (6)".<br> **entonces** la pestaña seleccionada cambia a estado activo. El sistema filtra la lista principal y renderiza únicamente las tarjetas que superaron la regla de tiempo. Visualmente, todas las tarjetas mostradas presentan una franja lateral izquierda color rojo y en la esquina superior derecha contienen el tag "Expirada" (texto rojo, ícono de reloj, fondo rojo claro).                                                                                                              |
| **Ver Detalle Solicitud Pendiente** | **Dado** que el estudiante se encuentra en la vista de Mis Solicitudes y visualiza en su lista una tarjeta con el tag de estado "Pendiente".<br> **cuando** hace clic sobre cualquier parte de esa tarjeta de solicitud.<br> **entonces** el sistema superpone en la pantalla el modal "Detalle de la Solicitud". El modal despliega el resumen del tutor, el bloque informativo de la tutoría, y el recuadro "TU MENSAJE" con el texto original enviado. En la parte inferior, se muestra únicamente el botón "Cerrar" (no se visualiza opción para cancelar).                                                                      |
| **Ver Detalle Solicitud Expirada**  | **Dado** que el estudiante se encuentra en la vista de Mis Solicitudes y visualiza en su lista una tarjeta con el tag de estado "Expirada".<br> **cuando** hace clic sobre cualquier parte de esa tarjeta de solicitud.<br> **entonces** el sistema superpone el modal "Detalle de la Solicitud". En la cabecera del modal se visualiza el tag "Expirada" (rojo). El modal opera en modo solo lectura, mostrando la información base de la tutoría solicitada. En la parte inferior únicamente se muestra el botón "Cerrar".                                                                                                         |
| **Mostrar Paginación**              | **Dado** que el estudiante navega a la pantalla de Mis Solicitudes y hace clic en una pestaña (ej: "Todas (16)") cuyo contador numérico indica que existen más de 5 registros asociados.<br> **cuando** la aplicación termina de cargar y renderizar la lista inicial de las primeras 5 tarjetas.<br> **entonces** el sistema renderiza automáticamente en la parte inferior de la lista (debajo de la última tarjeta visible) un control de paginación numérico compuesto por flechas de navegación y números de página (ej. `< 1 2 3 4 >`), donde el número de la página activa se muestra resaltado dentro de un recuadro oscuro. |

#### Tareas HU33

| No. | Tarea                                                                                                                     | Effort-Hours |
| --- | ------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de DTOs y Seeds para listado y detalle de solicitudes.                                                           | 0.2H         |
| 2   | Maquetación de `MisSolicitudesPage` y estado de filtros/paginación.                                                       | 0.2H         |
| 3   | Implementación de `SolicitudFilterTabs` con estados y eventos.                                                            | 0.2H         |
| 4   | Implementación de `SolicitudCard` con datos y tags de estado.                                                             | 0.2H         |
| 5   | Implementación de `SolicitudList` para renderizar tarjetas.                                                               | 0.2H         |
| 6   | Implementación de `PaginationComponent` con lógica y eventos.                                                             | 0.2H         |
| 7   | Server Action: `getSolicitudesAction` con seed data.                                                                      | 0.2H         |
| 8   | Integración de `MisSolicitudesPage` con `getSolicitudesAction`.                                                           | 0.2H         |
| 9   | Maquetación base de `DetalleSolicitudModal` y elementos comunes.                                                          | 0.2H         |
| 10  | Implementación de `DetalleSolicitudModal` para estado "Pendiente".                                                        | 0.2H         |
| 11  | Implementación de `DetalleSolicitudModal` para estado "Aceptada".                                                         | 0.2H         |
| 12  | Implementación de `DetalleSolicitudModal` para estado "Rechazada".                                                        | 0.2H         |
| 13  | Implementación de `DetalleSolicitudModal` para estado "Expirada".                                                         | 0.2H         |
| 14  | Server Action: `getSolicitudDetailAction` con seed data.                                                                  | 0.2H         |
| 15  | Integración de `SolicitudCard` y `DetalleSolicitudModal`.                                                                 | 0.2H         |
| 16  | Server Action: `cancelarSolicitudAction` con seed data.                                                                   | 0.3H         |
| 17  | Integración de `DetalleSolicitudModal` con `cancelarSolicitudAction`.                                                     | 0.3H         |
| 18  | Integración con Backend: `getSolicitudesAction`.                                                                          | 0.3H         |
| 19  | Integración con Backend: `getSolicitudDetailAction`.                                                                      | 0.3H         |
| 20  | Integración con Backend: `cancelarSolicitudAction`.                                                                       | 0.3H         |
| 21  | Definir `SolicitudStatus` enum y `SolicitudEntity` con relaciones a `User` (Tutor/Student) y `Subject`                    | 1H           |
| 22  | Definir DTOs de contrato: `SolicitudListParams`, `PaginatedSolicitudListDto`, `SolicitudDetailDto` y `CancelSolicitudDto` | 1.5H         |
| 23  | Implementar `SolicitudesController` con endpoints GET/PATCH y protección via `JwtAuthGuard`                               | 0.5H         |
| 24  | Implementar `SolicitudesService.findAll()` con `QueryBuilder` para filtrado por estados y paginación                      | 1.5H         |
| 25  | Implementar `SolicitudesService.findById()` con validación de propiedad y mapeo condicional de campos según estado        | 1H           |
| 26  | Implementar `SolicitudesService.cancel()` con validación de reglas de negocio para estados permitidos                     | 0.5H         |
| 27  | Comprobar carga de tarjetas, filtros por estado y correcto funcionamiento de la paginación.                               | 0.5H         |
| 28  | Verificar apertura, visualización de datos y cierre del modal "Detalle de la Solicitud".                                  | 0.5H         |

**Total:** 11.50 Effort Hours

---

### Nro. HU08 Título: Aceptar solicitud de tutoría

| Sección                 | Descripción                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| **Estimación**          | 5                                                                                      |
| **Historia de Usuario** | Como tutor, quiero aceptar una solicitud para confirmar el agendamiento de la tutoría. |

#### Criterios de aceptación HU08

| **Escenario**                                        | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :--------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Abrir Modal Confirmar Tutoría (Virtual)**          | **Dado** que el tutor se encuentra en la pantalla de Bandeja de Entrada y ha desplegado los detalles de una solicitud pendiente con modalidad 'Virtual'.<br> **cuando** hace clic en el botón "Aceptar".<br> **entonces** se superpone el modal "Confirmar Tutoría" mostrando el recuadro informativo con "Modalidad elegida: Virtual", el campo de texto obligatorio "Enlace de la reunión \*" y los botones inferiores "Cancelar" y "Confirmar".                                                                                                                      |
| **Abrir Modal Confirmar Tutoría (Presencial)**       | **Dado** que el tutor se encuentra en la pantalla de Bandeja de Entrada y ha desplegado los detalles de una solicitud pendiente con modalidad 'Presencial'.<br> **cuando** hace clic en el botón "Aceptar".<br> **entonces** se superpone el modal "Confirmar Tutoría" mostrando el recuadro informativo con "Modalidad elegida: Presencial", el campo de texto obligatorio "Lugar de encuentro \*" con el contador "0/100" y los botones inferiores "Cancelar" y "Confirmar".                                                                                          |
| **Aceptación de Tutoría Virtual Exitosa**            | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" tras presionar el botón "Aceptar" en una solicitud de modalidad 'Virtual'.<br> **cuando** ingresa en el campo de texto "Enlace de la reunión \*" el texto: "https://zoom.us/j/123456789" y hace clic en el botón "Confirmar".<br> **entonces** la ventana modal se cierra. El sistema procesa la aceptación, cambiando internamente el estado a "Aceptada". En la vista base, la solicitud aceptada se elimina de la pestaña "Pendientes" y el contador numérico de "Pendientes" se decrementa en 1. |
| **Bloqueo Enlace de Reunión Obligatorio**            | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" de una solicitud de modalidad 'Virtual'.<br> **cuando** deja el campo de texto "Enlace de la reunión \*" completamente vacío y hace clic en el botón "Confirmar".<br> **entonces** el sistema impide la confirmación y el modal permanece abierto en pantalla. Inmediatamente debajo del campo de texto de enlace, se renderiza el mensaje de error exacto en rojo: "El enlace de reunión es obligatorio.".                                                                                          |
| **Bloqueo Enlace de Reunión URL Inválida**           | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" de una solicitud de modalidad 'Virtual'.<br> **cuando** ingresa en el campo de texto "Enlace de la reunión \*" el texto: "zoom.us/j/1234" y hace clic en el botón "Confirmar".<br> **entonces** el sistema impide la confirmación y el modal permanece abierto en pantalla. Inmediatamente debajo del campo de texto de enlace, se renderiza el mensaje de error exacto en rojo: "Ingresa una URL válida (debe comenzar con https:// o http://).".                                                   |
| **Cancelación de Modal de Confirmación Virtual**     | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" de una solicitud de modalidad 'Virtual'.<br> **cuando** hace clic en el botón "Cancelar" situado en la parte inferior izquierda del modal.<br> **entonces** la ventana modal se cierra inmediatamente descartando la información ingresada. La pantalla base de Bandeja de Entrada permanece inalterada, manteniendo la solicitud original en estado "Pendiente" y la fila completamente desplegada.                                                                                                 |
| **Aceptación de Tutoría Presencial Exitosa**         | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" tras presionar el botón "Aceptar" en una solicitud de modalidad 'Presencial'.<br> **cuando** ingresa en el campo de texto "Lugar de encuentro \*" el texto: "Edificio H, Aula 205, Campus Principal" y hace clic en el botón "Confirmar".<br> **entonces** la ventana modal se cierra. El sistema procesa la aceptación, la solicitud se elimina de la pestaña "Pendientes" y el contador numérico de "Pendientes" se decrementa en 1.                                                               |
| **Bloqueo Lugar de Encuentro Obligatorio**           | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" de una solicitud de modalidad 'Presencial'.<br> **cuando** deja el campo de texto "Lugar de encuentro \*" completamente vacío y hace clic en el botón "Confirmar".<br> **entonces** el sistema impide la confirmación y el modal permanece abierto en pantalla. Inmediatamente debajo del campo de texto de lugar, se renderiza el mensaje de error exacto en rojo: "El lugar de encuentro es obligatorio.".                                                                                         |
| **Bloqueo Lugar de Encuentro Mínimo Caracteres**     | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" de una solicitud de modalidad 'Presencial'.<br> **cuando** ingresa en el campo de texto "Lugar de encuentro \*" el texto: "Aula 1" y hace clic en el botón "Confirmar".<br> **entonces** el sistema impide la confirmación y el modal permanece abierto en pantalla. Inmediatamente debajo del campo de texto de lugar, se renderiza el mensaje de error exacto en rojo: "Mínimo 10 caracteres para el lugar.".                                                                                      |
| **Bloqueo por Límite Máximo de Caracteres en Lugar** | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" de una solicitud de modalidad 'Presencial'.<br> **cuando** ingresa en el campo de texto "Lugar de encuentro \*" el texto: "B" repetido 101 veces sin espacios.<br> **entonces** el sistema bloquea el ingreso adicional de texto, el contador inferior muestra exactamente "100/100" y no se permite sobrepasar este límite visual ni funcionalmente.                                                                                                                                                |
| **Cancelación de Modal de Confirmación Presencial**  | **Dado** que el tutor se encuentra en el modal "Confirmar Tutoría" de una solicitud de modalidad 'Presencial'.<br> **cuando** hace clic en el botón "Cancelar" situado en la parte inferior izquierda del modal.<br> **entonces** la ventana modal se cierra inmediatamente descartando la información. La pantalla base de Bandeja de Entrada permanece inalterada, manteniendo la solicitud original en estado "Pendiente" y la fila completamente desplegada.                                                                                                        |

#### Tareas HU08

| No. | Tarea                                                                                                                    | Effort-Hours |
| --- | ------------------------------------------------------------------------------------------------------------------------ | ------------ |
| 1   | Creación de seed para datos de tutorías.                                                                                 | 0.5H         |
| 2   | Modificación de SolicitudTutoriaCard para añadir botón 'Aceptar'.                                                        | 0.5H         |
| 3   | Creación de componente ConfirmarTutoriaModal (estructura base).                                                          | 0.5H         |
| 4   | Implementación de campo 'Enlace de la reunión' para modalidad 'Virtual' en ConfirmarTutoriaModal.                        | 0.5H         |
| 5   | Implementación de campo 'Lugar de encuentro' con contador para modalidad 'Presencial' en ConfirmarTutoriaModal.          | 0.5H         |
| 6   | Implementación de lógica de apertura y cierre del ConfirmarTutoriaModal.                                                 | 0.5H         |
| 7   | Implementación de Server Action 'confirmarTutoriaAction' con validación Zod y seed data.                                 | 0.5H         |
| 8   | Integración de ConfirmarTutoriaModal con 'confirmarTutoriaAction' y manejo de errores/estados de carga.                  | 0.5H         |
| 9   | Integración final de 'confirmarTutoriaAction' con el backend real (descomentar fetch).                                   | 0.5H         |
| 10  | Definir `ConfirmarSolicitudDto` con validaciones condicionales (`@ValidateIf`) para modalidades Virtual/Presencial       | 1H           |
| 11  | Crear endpoint `PUT /api/solicitudes/:id/confirm` en `SolicitudesController` con validación de coincidencia de ID        | 0.5H         |
| 12  | Implementar `IsSolicitudOwnerGuard` para verificar que el tutor autenticado es el propietario de la solicitud            | 1H           |
| 13  | Implementar lógica de negocio en `SolicitudesService.confirm()` incluyendo validación de estado PENDIENTE y persistencia | 2H           |
| 14  | Actualizar `SolicitudEntity` con campos `acceptedMeetingLocation` y `acceptedMeetingLink` y registrar repositorios       | 0.5H         |
| 15  | Verificar apertura del modal y la aceptación exitosa de tutorías (Virtual y Presencial).                                 | 1H           |
| 16  | Comprobar validaciones de campos del modal y cancelación de la acción.                                                   | 0.5H         |

**Total:** 11.00 Effort Hours

---

### Nro. HU23 Título: Rechazar solicitud de tutoría

| Sección                 | Descripción                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5                                                                                                   |
| **Historia de Usuario** | Como tutor, quiero rechazar una solicitud para descartar las tutorías que no me convienen impartir. |

#### Criterios de aceptación HU23

| **Escenario**                                                         | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Abrir Modal Rechazar Solicitud**                                    | **Dado** que el tutor se encuentra en la pantalla de Bandeja de Entrada y ha desplegado la fila de una solicitud en estado 'Pendiente'.<br> **cuando** hace clic en el botón "Rechazar" (fondo blanco).<br> **entonces** se despliega el modal "Rechazar Solicitud" mostrando el texto "Selecciona un motivo para ayudarle a entender la situación.", los cuatro radio buttons deseleccionados ("Imprevisto personal", "Conflicto de horarios con otra tutoría", "Enfermedad", "Otro"), el botón "Confirmar Rechazo" deshabilitado y el botón "Cancelar" habilitado.                                                     |
| **Rechazo con Motivo Predefinido Exitoso**                            | **Dado** que el tutor se encuentra en el modal "Rechazar Solicitud" para una solicitud en estado 'Pendiente'.<br> **cuando** hace clic en el radio button "Conflicto de horarios con otra tutoría" y hace clic en el botón "Confirmar Rechazo".<br> **entonces** el sistema procesa el rechazo, la ventana modal desaparece y se visualiza una alerta inferior azul con el texto exacto: "Solicitud rechazada". En la vista principal, la solicitud es removida de la pestaña "Pendientes" y su contador numérico se reduce en 1.                                                                                        |
| **Rechazo con Motivo 'Otro' (sin comentario) Exitoso**                | **Dado** que el tutor se encuentra en el modal "Rechazar Solicitud" para una solicitud en estado 'Pendiente'.<br> **cuando** hace clic en el radio button "Otro" (lo que expande el modal mostrando el campo de comentario), deja el campo "Comentario adicional (opcional)" completamente vacío, y hace clic en el botón "Confirmar Rechazo".<br> **entonces** el sistema procesa el rechazo, la ventana modal desaparece y se visualiza una alerta inferior azul con el texto exacto: "Solicitud rechazada". La solicitud es removida de la pestaña "Pendientes" actualizando su contador.                             |
| **Rechazo con Motivo 'Otro' (con comentario) Exitoso**                | **Dado** que el tutor se encuentra en el modal "Rechazar Solicitud" para una solicitud en estado 'Pendiente'.<br> **cuando** hace clic en el radio button "Otro", ingresa en el campo "Comentario adicional (opcional)" el texto: "No podré atender esta semana debido a un cruce de horarios.", y hace clic en el botón "Confirmar Rechazo".<br> **entonces** el sistema procesa el rechazo guardando el texto ingresado, la ventana modal desaparece y se visualiza una alerta inferior azul con el texto exacto: "Solicitud rechazada". La solicitud es removida de la pestaña "Pendientes" actualizando su contador. |
| **Bloqueo por Límite Máximo de Caracteres en Comentario**             | **Dado** que el tutor se encuentra en el modal "Rechazar Solicitud" y ha seleccionado el radio button "Otro".<br> **cuando** ingresa en el campo de texto "Comentario adicional (opcional)" el texto: "C" repetido 301 veces sin espacios.<br> **entonces** el sistema bloquea el ingreso adicional de texto, el contador inferior muestra exactamente "300/300" y no se permite sobrepasar este límite visual ni funcionalmente.                                                                                                                                                                                        |
| **Cancelar Rechazo (con motivo predefinido seleccionado)**            | **Dado** que el tutor se encuentra en el modal "Rechazar Solicitud" de una solicitud pendiente.<br> **cuando** hace clic en el radio button "Imprevisto personal" y seguidamente hace clic en el botón "Cancelar" ubicado en la parte inferior izquierda del modal.<br> **entonces** el sistema interrumpe la acción y la ventana modal se cierra inmediatamente. La pantalla base permanece inalterada, la solicitud continúa visible en la pestaña "Pendientes", la fila sigue desplegada y los contadores numéricos no sufren alteraciones.                                                                           |
| **Cancelar Rechazo (con motivo 'Otro' seleccionado, sin comentario)** | **Dado** que el tutor se encuentra en el modal "Rechazar Solicitud" con el radio button "Otro" previamente seleccionado.<br> **cuando** deja el campo de texto "Comentario adicional (opcional)" vacío y hace clic en el botón "Cancelar".<br> **entonces** el sistema interrumpe la acción y la ventana modal expandida se cierra inmediatamente. La pantalla base permanece inalterada y los contadores no sufren alteraciones.                                                                                                                                                                                        |
| **Cancelar Rechazo (con motivo 'Otro' seleccionado, con comentario)** | **Dado** que el tutor se encuentra en el modal "Rechazar Solicitud" con el radio button "Otro" previamente seleccionado.<br> **cuando** ingresa en el campo de texto "Comentario adicional (opcional)" el texto: "Revisar agenda", y hace clic en el botón "Cancelar".<br> **entonces** el sistema interrumpe la acción descartando el texto escrito y la ventana modal se cierra inmediatamente. La pantalla base permanece inalterada y los contadores no sufren alteraciones.                                                                                                                                         |

#### Tareas HU23

| No. | Tarea                                                                                                                                     | Effort-Hours |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para la respuesta de una solicitud rechazada.                                                                            | 0.5H         |
| 2   | Implementación del botón "Rechazar" en `SolicitudTutoríaCard`.                                                                            | 0.5H         |
| 3   | Estructura y maquetación inicial del modal "Rechazar Solicitud".                                                                          | 1H           |
| 4   | Implementación de radio buttons de motivo y campo "Otro" condicional.                                                                     | 2H           |
| 5   | Implementación de validaciones Zod y React Hook Form para el modal.                                                                       | 2.5H         |
| 6   | Implementación de contador y bloqueo de caracteres en campo de comentario.                                                                | 1H           |
| 7   | Implementación de Server Action `rechazarSolicitudAction` (con seed).                                                                     | 2H           |
| 8   | Manejo de estados y submit del formulario del modal.                                                                                      | 1H           |
| 9   | Asegurar la revalidación y actualización de la UI en `BandejaEntradaPage`.                                                                | 0.5H         |
| 10  | Integración con backend de `rechazarSolicitudAction` (descomentar fetch).                                                                 | 0.5H         |
| 11  | Manejo de errores visuales para la acción de rechazo.                                                                                     | 1H           |
| 12  | Definir enum `RejectionReason` y actualizar `SolicitudEntity` con los campos `rejectionReason`, `rejectionComment` y `respondedAt`        | 0.5H         |
| 13  | Definir `RejectSolicitudDto` con validaciones de `class-validator` (máximo 300 caracteres para comentario)                                | 0.5H         |
| 14  | Crear endpoint `PATCH /api/solicitudes/:id/reject` en `SolicitudesController` con protección `JwtAuthGuard` y `TutorAuthGuard`            | 0.5H         |
| 15  | Implementar lógica de negocio en `SolicitudesService.reject()` con validación de estado `PENDIENTE` y verificación de propiedad (tutorId) | 2H           |
| 16  | Registrar el repositorio `Solicitud` y configurar la inyección de dependencias en `SolicitudesModule`                                     | 0.5H         |
| 17  | Verificar el rechazo exitoso de solicitudes (motivos predefinidos y "Otro") y alertas.                                                    | 0.5H         |
| 18  | Comprobar validaciones del comentario, límite de caracteres y cancelación del modal.                                                      | 0.5H         |

**Total:** 17.50 Effort Hours

---

### Nro. HU15 Título: Ver tutorías agendadas del tutor

| Sección                 | Descripción                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| **Estimación**          | 8                                                                                                   |
| **Historia de Usuario** | Como tutor, quiero ver mis tutorías agendadas para recordar cuando tengo que impartir las tutorías. |

#### Criterios de aceptación HU15

| **Escenario**                                | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Navegación a Mi Agenda**                   | **Dado** que el tutor se encuentra autenticado operando en la plataforma PoliTutorias.<br> **cuando** ubica el cursor y hace clic sobre el enlace "Mi Agenda" en la barra de navegación global superior.<br> **entonces** el sistema enruta y carga la vista principal de la agenda. Se visualiza el título "Mi Agenda" y el subtítulo "Calendario de sesiones confirmadas". El enlace "Mi Agenda" en el menú superior queda marcado con un resaltado amarillo indicando la ubicación activa. La vista se divide en dos columnas: la izquierda muestra el calendario mensual con indicadores textuales en los días agendados, y la columna derecha (panel lateral) muestra el resumen "ESTE MES" informando el conteo total y listando en tarjetas las tutorías futuras en orden cronológico separadas por días.                 |
| **Actualizar Panel al Seleccionar Día**      | **Dado** que el tutor se encuentra en la pantalla de Mi Agenda observando el calendario mensual con datos cargados, donde se evidencian días específicos que contienen etiquetas de sesiones confirmadas.<br> **cuando** el tutor posiciona el cursor y hace clic sobre el cuadro numérico correspondiente a un día específico en el calendario.<br> **entonces** el panel lateral derecho reacciona a la selección e inmediatamente actualiza su cabecera para mostrar la fecha específica seleccionada junto al recuento de sesiones de ese día. El bloque de tarjetas "ESTE MES" se desplaza hacia abajo y en la parte superior del panel se renderiza la tarjeta resumen del día seleccionado (con fondo amarillo claro, borde resaltado y el texto "Toca para ver detalles →").                                             |
| **Ver Detalle Tutoría Virtual Pendiente**    | **Dado** que el tutor se encuentra en la pantalla de Mi Agenda, interactúa con el calendario seleccionando un día y el panel derecho visualiza la tarjeta resumen de una tutoría confirmada cuya modalidad es "Virtual".<br> **cuando** hace clic sobre la tarjeta resumen de la sesión en el panel lateral derecho.<br> **entonces** el sistema bloquea la vista de fondo y abre el modal "Detalles de la Sesión". El contenido del modal renderiza obligatoriamente la información del estudiante asociado, y un bloque titulado "ENLACE" que presenta la URL en color azul. Adicionalmente, se muestran los bloques de la materia (fecha, hora, modalidad y precio) y el "MENSAJE DEL ESTUDIANTE". La botonera inferior del modal despliega únicamente el botón "Cerrar" a la derecha (no se visualiza opción para cancelar). |
| **Ver Detalle Tutoría Presencial Pendiente** | **Dado** que el tutor se encuentra en la pantalla de Mi Agenda, interactúa con el calendario seleccionando un día y el panel derecho visualiza la tarjeta resumen de una tutoría confirmada cuya modalidad es "Presencial".<br> **cuando** hace clic sobre la tarjeta resumen de la sesión en el panel lateral derecho.<br> **entonces** el sistema abre el modal "Detalles de la Sesión". El contenido estructural difiere renderizando la información del estudiante asociado y un bloque específico titulado "LUGAR" (acompañado de un ícono de ubicación) que expone la dirección física del encuentro. Los bloques de materia (marcando 'Presencial') y mensaje se mantienen. La botonera inferior del modal despliega únicamente el botón "Cerrar" a la derecha.                                                           |
| **Cerrar Detalle Tutoría Pendiente**         | **Dado** que el tutor se encuentra interactuando con el modal "Detalles de la Sesión" de una tutoría futura.<br> **cuando** hace clic en el botón "Cerrar" en la esquina inferior derecha o en el ícono "X" en la esquina superior derecha del modal.<br> **entonces** la acción de cerrado se ejecuta, el modal desaparece de la vista y la pantalla principal de Mi Agenda recupera el foco conservando el día previamente seleccionado en el calendario y la vista del panel derecho intacta.                                                                                                                                                                                                                                                                                                                                 |

#### Tareas HU15

| No. | Tarea                                                                                                                                                       | Effort-Hours |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed data para `InitialAgendaData`, `SelectedDayInfo`, y `SessionDetailDTO`.                                                                    | 0.3H         |
| 2   | Implementación de utilidad `getTutorIdFromSession`.                                                                                                         | 0.3H         |
| 3   | Implementación de `NavigationBar` (enlace 'Mi Agenda' y resaltado) y `MiAgendaPage` (estructura principal y títulos).                                       | 0.3H         |
| 4   | Implementación de `CalendarComponent` (estructura mensual, `DayCell` con indicadores, navegación) y `ThisMonthSummary` (conteo y `SessionCard`s iniciales). | 0.4H         |
| 5   | Implementación de Server Action `fetchAgendaInitialData` con seed data.                                                                                     | 0.4H         |
| 6   | Integración de `MiAgendaPage` con `fetchAgendaInitialData` para renderizar el calendario y el resumen mensual inicial.                                      | 0.4H         |
| 7   | Implementación de `selectDayHandler` en `DayCell`, Server Action `fetchDaySessions` con seed, y actualización de `RightPanel`.                              | 0.4H         |
| 8   | Implementación de `openSessionDetailsHandler` en `SessionCard`, Server Action `fetchSessionDetails` con seed, y `SessionDetailModal`.                       | 0.4H         |
| 9   | Implementación de `closeModalHandler` y `cancelTutoriaHandler` en `SessionDetailModal`.                                                                     | 0.4H         |
| 10  | Integración con backend real: Descomentar `fetchAgendaInitialData`.                                                                                         | 0.4H         |
| 11  | Integración con backend real: Descomentar `fetchDaySessions`.                                                                                               | 0.4H         |
| 12  | Integración con backend real: Descomentar `fetchSessionDetails`.                                                                                            | 0.4H         |
| 13  | Actualizar enum `SolicitudStatus` y `SolicitudEntity` añadiendo el campo `completedAt` para el control de sesiones                                          | 0.5H         |
| 14  | Definir DTOs de contrato: `InitialAgendaData`, `SelectedDayInfo`, `SessionDetailDTO` y sub-DTOs de calendario                                               | 1.5H         |
| 15  | Crear `AgendaController` con endpoints `GET /api/tutor/agenda/:year/:month` y `GET /api/tutor/agenda/sessions/day`                                          | 0.5H         |
| 16  | Implementar `AgendaService.getMonthlyAgendaData()` con lógica de filtrado por fechas y mapeo de `SolicitudEntity`                                           | 1.5H         |
| 17  | Implementar `SessionsService.getDetails()` incluyendo lógica condicional para determinar estado `PENDING`/`COMPLETED`                                       | 1H           |
| 18  | Crear `IsSessionOwnerGuard` y registrarlo en `SessionsController` para restringir el acceso a tutorías ajenas                                               | 0.5H         |
| 19  | Verificar vista de "Mi Agenda", renderización del calendario y actualización del panel lateral.                                                             | 0.5H         |
| 20  | Probar apertura, datos mostrados (Virtual/Presencial) y cierre del modal "Detalles de la Sesión".                                                           | 0.5H         |

**Total:** 11.00 Effort Hours

---

## Resumen del Sprint Backlog

---

### Resumen de Tareas y Horas de Esfuerzo

| **Historia de usuario (HUXX)**            | **Suma Total de Effort-Hours** |
| :---------------------------------------- | :----------------------------- |
| HU06                                      | 12.50H                         |
| HU09                                      | 24.50H                         |
| HU33                                      | 11.50H                         |
| HU08                                      | 11.00H                         |
| HU23                                      | 17.50H                         |
| HU15                                      | 11.00H                         |
| **Total Sum of effort – Hours Estimates** | 88H                            |


| Historia de usuario  | Título                              | Story Points (SP) |
| -------------------- | ----------------------------------- | ----------------- |
| HU06                 | Enviar solicitud de tutoría         | 13                |
| HU09                 | Ver solicitudes recibidas           | 5                 |
| HU33                 | Ver solicitudes de tutoría enviadas | 5                 |
| HU08                 | Aceptar solicitud de tutoría        | 5                 |
| HU23                 | Rechazar solicitud de tutoría       | 5                 |
| HU15                 | Ver tutorías agendadas del tutor    | 8                 |
| **Suma total de SP** |                                     | **41**            |
