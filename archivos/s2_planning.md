# Sprint 2 – Sprint Planning

## 1. Sprint Goal

Conocer al tutor y filtrar las ofertas.

## 2. Capacidad del Equipo (Effort-Hours)

| Person    | Days Available (Less Personal Time) | Days for Other Scrum Activities | Hours per Day | Available Effort-Hours |
| --------- | ----------------------------------- | ------------------------------- | ------------- | ---------------------- |
| David     | 11                                  | 7                               | 2 a 3         | 8 a 12                 |
| Emilio    | 11                                  | 5                               | 3 a 4         | 18 a 24                |
| José      | 11                                  | 5                               | 3 a 4         | 18 a 24                |
| Sebastián | 11                                  | 8                               | 2 a 3         | 6 a 9                  |
| Estefano  | 11                                  | 6                               | 1 a 2         | 5 a 10                 |
| Anthony   | 11                                  | 5                               | 1 a 2         | 6 a 12                 |
| **Total** |                                     |                                 |               | **61 a 91**            |

## 3. Sprint Backlog

### Nro. HU34 Título: Registrar información personal de tutor

| Sección                 | Descripción                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| **Estimación**          | 5 SP                                                                                         |
| **Historia de Usuario** | Como tutor, quiero registrar información personal para generar confianza en los estudiantes. |

#### Criterios de aceptación HU34

| Escenario                                                      | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Registro exitoso de Datos Básicos**                          | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil<br>**cuando** ingresa su fotografía, en el campo 'Nombre Completo': 'Daniela Castro', ingresa en el campo 'Número de WhatsApp': '593991234567', selecciona en el dropdown 'Facultad': 'FIS - Sistemas', selecciona en el dropdown 'Semestre Actual': '4° Semestre', ingresa en el campo 'Biografía Corta': 'Tengo 5 años de experiencia en desarrollo de software y disfruto enseñar algoritmos.', y hace clic en el botón 'Siguiente Disponibilidad'<br>**entonces** el sistema redirige a '2 Disponibilidad' resaltado, el título 'Define tu Horario', el subtítulo 'Selecciona los bloques horarios en los que puedes dar clases', una cuadrícula con encabezados ('Lun' a 'Dom', '7:00' a '20:00') y el botón 'Siguiente Perfil Profesional'. |
| **Validación de campos obligatorios vacíos**                   | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil" <br>**cuando** deja los campos 'Nombre Completo', 'Número de WhatsApp', 'Facultad', 'Semestre Actual', y 'Biografía Corta' vacíos, y hace clic en el botón 'Siguiente Disponibilidad'<br>**entonces** el sistema permanece en la pantalla, muestra el mensaje de error 'El nombre es obligatorio' debajo de 'Nombre Completo', el mensaje de error 'El número de WhatsApp es obligatorio' debajo de 'Número de WhatsApp', el mensaje de error 'Selecciona tu facultad' debajo del dropdown 'Facultad', el mensaje de error 'Selecciona tu semestre' debajo del dropdown 'Semestre Actual', y el mensaje de error 'La biografía es obligatoria' debajo de 'Biografía Corta'.                                                                      |
| **Validación de Nombre Completo - Mínimo de caracteres**       | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil" <br>**cuando** ingresa en el campo 'Nombre Completo': 'Jo', y hace clic en el botón 'Siguiente Disponibilidad'<br>**entonces** el sistema permanece en la pantalla y muestra el mensaje en rojo 'Mínimo 3 caracteres' debajo de 'Nombre Completo'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Validación de Nombre Completo - Máximo de caracteres**       | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil" <br>**cuando** ingresa en el campo 'Nombre Completo' 'Este es un nombre muy largo que definitivamente excede los sesenta caracteres para una prueba de longitud máxima' que excede los 60 caracteres <br>**entonces** el sistema limita el ingreso a 60 caracteres, muestra el contador '60/60' debajo del campo 'Nombre Completo', y no permite más digitación ni pegar texto.                                                                                                                                                                                                                                                                                                                                                                  |
| **Validación de Nombre Completo - Caracteres no permitidos**   | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil" <br>**cuando** intenta ingresar números o caracteres especiales (ej: 'Juan123$' o 'María@!') en el campo 'Nombre Completo', y hace clic en el botón 'Siguiente Disponibilidad'<br>**entonces** el sistema bloquea el ingreso, y los caracteres no permitidos (números y especiales) no aparecen en la pantalla, permitiendo solo letras y espacios.                                                                                                                                                                                                                                                                                                                                                                                              |
| **Validación de Número de WhatsApp - Mínimo de dígitos**       | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil" <br>**cuando** ingresa en el campo 'Número de WhatsApp' un número con menos de 10 dígitos (ej: '593991234'), y hace clic en el botón 'Siguiente Disponibilidad'<br>**entonces** el sistema permanece en la pantalla y muestra el mensaje en rojo 'Ingresa un número válido (10-13 dígitos)' debajo del campo 'Número de WhatsApp'.                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Validación de Número de WhatsApp - Máximo de dígitos**       | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil" <br>**cuando** ingresa en el campo 'Número de WhatsApp' un número con más de 13 dígitos (ej: '59399123456789'), y hace clic en el botón 'Siguiente Disponibilidad'<br>**entonces** el sistema permanece en la pantalla y muestra el mensaje en rojo 'Ingresa un número válido (10-13 dígitos)' debajo del campo 'Número de WhatsApp'.                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Validación de Número de WhatsApp - Caracteres no numéricos** | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil" <br>**cuando** intenta ingresar letras o caracteres especiales (ej: '593abcd123' o '593-99123') en el campo 'Número de WhatsApp', y hace clic en el botón 'Siguiente Disponibilidad'<br>**entonces** el sistema bloquea el ingreso, y las letras y caracteres especiales no aparecen en la pantalla, permitiendo solo números.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Validación de Biografía Corta - Mínimo de caracteres**       | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil" <br>**cuando** ingresa en el campo 'Biografía Corta' un texto con menos de 20 caracteres (ej: 'Soy un tutor nuevo.'), y hace clic en el botón 'Siguiente Disponibilidad'<br>**entonces** el sistema permanece en la pantalla y muestra el mensaje en rojo 'Mínimo 20 caracteres' debajo de 'Biografía Corta'.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Validación de Biografía Corta - Máximo de caracteres**       | **Dado** que el tutor se encuentra en la interfaz de "Completa tu Perfil"<br>**cuando** ingresa en el campo 'Biografía Corta' 'Este es un texto de biografía muy extenso diseñado específicamente para superar el límite de trescientos caracteres y comprobar que el sistema bloquea correctamente cualquier intento de ingreso adicional una vez alcanzado el tope máximo permitido por el contador' que excede los 300 caracteres<br>**entonces** el sistema limita el ingreso a 300 caracteres, muestra el contador '300/300' debajo del campo 'Biografía Corta', y no permite más digitación ni pegar texto.                                                                                                                                                                                                          |

#### Tareas HU34

| No. | Tarea                                                                                                                                                 | Effort-Hours |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Preparación de seeds para dropdowns y simulación de API.                                                                                              | 0.2H         |
| 2   | Maquetación de la página `RegistrarTutorPage` y estructura del `FormularioDatosBasicos`.                                                              | 0.6H         |
| 3   | Implementación de campos de entrada (`InputFieldNombre`, `InputFieldWhatsapp`, `TextareaBiografia`) con reglas de UI.                                 | 0.5H         |
| 4   | Implementación de componentes Dropdown (`Facultad`, `Semestre Actual`).                                                                               | 0.3H         |
| 5   | Configuración de validaciones del lado del cliente con React Hook Form/Zod.                                                                           | 0.5H         |
| 6   | Implementación de `registrarDatosBasicosAction` (Server Action) con seed data y validaciones iniciales.                                               | 0.5H         |
| 7   | Manejo de la respuesta del Server Action y lógica de redirección/error.                                                                               | 0.4H         |
| 8   | Integración final de `registrarDatosBasicosAction` con el backend real.                                                                               | 0.2H         |
| 9   | Implementar entidad `TutorEntity` con sus columnas y relaciones (userId, validaciones de dominio).                                                    | 1H           |
| 10  | Definir DTO `RegistrarDatosBasicosDto` con todas las validaciones de `class-validator` y enums.                                                       | 1H           |
| 11  | Crear endpoint `POST /tutor/datos-basicos` en `TutorController` con `JwtAuthGuard` y extracción de `userId`.                                          | 1H           |
| 12  | Implementar lógica de `upsert` (crear/actualizar) para tutor en `TutorService.registrarDatosBasicos`.                                                 | 1.5H         |
| 13  | Verificar el registro exitoso de Datos Básicos                                                                                                        | 0.5H         |
| 14  | Probar las alertas de validación de campos obligatorios vacíos                                                                                        | 0.5H         |
| 15  | Comprobar los límites de caracteres, bloqueo numérico, bloqueo de letras en "Nombre Completo" "Número de WhatsApp" y "Biografía Corta" respectivamene | 0.5H         |

**Total:** 9.20 Effort Hours

---

### Nro. HU41 Título: Registrar mi disponibilidad

| Sección                 | Descripción                                                                                                             |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5 SP                                                                                                                    |
| **Historia de Usuario** | Como tutor, quiero registrar mi disponibilidad para que los estudiantes conozcan cuándo pueden solicitar mis servicios. |

#### Criterios de aceptación HU41

| Escenario                                                | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Bloqueo sin selección de horario**                     | **Dado** que el tutor se encuentra en la interfaz de "Define tu Horario" <br>**cuando** no ha seleccionado ningún bloque de horario en la cuadrícula y hace clic en el botón 'Siguiente Perfil Profesional'<br>**entonces** el sistema bloquea la navegación y muestra el texto rojo 'Selecciona al menos un horario disponible' encima de la cuadrícula.                                                                                                                                        |
| **Selección de bloques horarios**                        | **Dado** que el tutor se encuentra en la interfaz de "Define tu Horario" <br>**cuando** hace clic en un bloque de horario en la cuadrícula Lun a 09:00 <br>**entonces** el bloque horario seleccionado cambia visualmente de color blanco a azul oscuro y muestra un ícono '✓' blanco en el centro, y aparece el texto verde centrado sobre la cuadrícula: '✓ 1 horario seleccionado'.                                                                                                           |
| **Avance a Perfil Profesional con horario seleccionado** | **Dado** que el tutor se encuentra en la interfaz de "Define tu Horario" y ha seleccionado al menos un bloque de horario Mar a las 10:00<br>**cuando** hace clic en el botón 'Siguiente Perfil Profesional'<br>**entonces** el sistema redirige '3 Perfil Profesional' resaltado, el título 'Detalles Profesionales', el subtítulo 'Añade tu experiencia y materias para destacar', y el botón 'Finalizar Registro'.                                                                             |
| **Deselección de bloques horarios**                      | **Dado** que el tutor se encuentra en la interfaz de "Define tu Horario" y tiene bloques de horario previamente seleccionados ej: 'Mié de 11:00' y 'Mié de 12:00', mostrando '✓ 2 horarios seleccionados')<br>**cuando** vuelve a hacer clic en un bloque horario ya marcado (ej: 'Miércoles 11:00')<br>**entonces** el bloque horario vuelve a ser blanco, el ícono '✓' desaparece, y el contador superior verde disminuye su número en tiempo real (ej: mostrando '✓ 1 horario seleccionado'). |
| **Navegabilidad hacia atrás: Del Paso 2 al 1**           | **Dado** que el tutor se encuentra en la interfaz de "Define tu Horario" <br>**cuando** hace clic en el botón inferior izquierdo de '← Atrás Datos Básicos' o en el paso '1 Datos Básicos' del menú superior<br>**entonces** el sistema redirige a la pantalla del Paso 1, conservando intacta toda la información previamente ingresada por el usuario en los campos.                                                                                                                           |

#### Tareas HU41

| No. | Tarea                                                                                                                            | Effort-Hours |
| --- | -------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para respuesta de registro de disponibilidad.                                                                   | 0.1H         |
| 2   | Maquetación de la página `DefineHorarioPage` y estructura del layout.                                                            | 0.3H         |
| 3   | Implementación del componente `HorarioGrid` (maquetación inicial estática).                                                      | 0.3H         |
| 4   | Implementación de la lógica de selección/deselección de bloques en `HorarioGrid`.                                                | 0.2H         |
| 5   | Implementación del contador de horarios seleccionados en `HorarioGrid`.                                                          | 0.4H         |
| 6   | Implementación de Server Action `guardarDisponibilidadAction` con seed data.                                                     | 0.3H         |
| 7   | Integración de `HorarioGrid` con `guardarDisponibilidadAction` y manejo de error de validación.                                  | 0.5H         |
| 8   | Implementación de la navegación hacia atrás y enlace de stepper.                                                                 | 1H           |
| 9   | Integración con backend real: Descomentar `fetch` en `guardarDisponibilidadAction`.                                              | 0.1H         |
| 10  | Implementar entidad `AvailabilityEntity` con columnas, tipos y el índice único por tutor, día y hora.                            | 1H           |
| 11  | Definir DTOs `CreateAvailabilityDto` y `AvailabilityBlockDto` con todas las validaciones de `class-validator`.                   | 1H           |
| 12  | Implementar endpoint `POST /disponibilidad` en `DisponibilidadController` con `JwtAuthGuard` y extracción del `userId`.          | 1H           |
| 13  | Implementar lógica de negocio en `DisponibilidadService.save` para eliminar disponibilidad existente y registrar nuevos bloques. | 1.5H         |
| 14  | Verificar el bloqueo de navegación al no seleccionar ningún horario                                                              | 0.25H        |
| 15  | Probar la correcta selección, deselección y actualización del contador de horas                                                  | 0.5H         |
| 16  | Comprobar el avance al Paso 3 y la navegabilidad hacia atrás (Paso 1)                                                            | 0.25H        |

**Total:** 8.70 Effort Hours

---

### Nro. HU42 Título: Registrar información académica

| Sección                 | Descripción                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 5 SP                                                                                                                 |
| **Historia de Usuario** | Como tutor, quiero registrar información académica para que los estudiantes se enteren cuáles son mis conocimientos. |

#### Criterios de aceptación HU42

| Escenario                                      | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ignorar Guardar Experiencia Vacía**          | **Dado** que el tutor se encuentra en la interfaz de "Detalles Profesionales" y ha abierto el modal de 'Nueva Experiencia' (al hacer clic en '+ Añadir Experiencia')<br>**cuando** deja todos los campos del modal 'Nueva Experiencia' (ej. Puesto, Institución, Fechas) vacíos y hace clic en el botón 'Guardar' dentro del modal<br>**entonces** la acción de guardar se ignora silenciosamente, no aparece ningún mensaje de error, y el modal 'Nueva Experiencia' permanece en pantalla. |
| **Validar Formato de Fecha MM/AAAA**           | **Dado** que el tutor se encuentra en la interfaz de "Detalles Profesionales" en el campo "Nueva Experiencia" y está ingresando fechas en un campo de 'Fecha Inicio' o 'Fecha Fin'<br>**cuando** ingresa una fecha en el formato MM/AAAA (ej: '03/2024')<br>**entonces** el sistema valida y mantiene el formato de la fecha (ej: '03/2024').                                                                                                                                                |
| **Bloquear Caracteres No-Numéricos en Fecha**  | **Dado** que el tutor se encuentra en la interfaz de "Detalles Profesionales"y está ingresando fechas en un campo de experiencia (ej: 'Fecha Inicio' o 'Fecha Fin')<br>**cuando** intenta ingresar Hola en los campos de fecha o intenta ingresar algo distinto a 'Presente' en 'Fecha Fin'<br>**entonces** el sistema bloquea el ingreso, y las letras y signos no se muestran, permitiendo solo números. En el campo 'Fecha Fin', permite la palabra exacta 'Presente'.                    |
| **Validar Máximo Caracteres en Fecha**         | **Dado** que el tutor se encuentra en la interfaz de "Detalles Profesionales" y está ingresando una fecha en un campo de experiencia (ej: 'Fecha Inicio' o 'Fecha Fin')<br>**cuando** ingresa la fecha '12/20255' que excede los 7 caracteres del formato MM/AAAA <br>**entonces** el sistema muestra el mensaje de error en rojo 'Máximo 7 caracteres' debajo del campo de fecha.                                                                                                           |
| **Añadir Materia como Etiqueta**               | **Dado** que el tutor se encuentra en la interfaz de "Detalles Profesionales" y está en la sección para añadir materias<br>**cuando** ingresa 'Cálculo' en el campo 'Escribe una Materia(Ej. Cálculo, Física...)' y hace clic en el botón '+ Agregar'<br>**entonces** el sistema limpia el campo de texto y crea un elemento visual (etiqueta o 'pill') de color celeste claro con el texto de la materia (ej: 'Cálculo') y una 'x' a la derecha que permite eliminar.                       |
| **Finalización Exitosa del Registro**          | **Dado** que el tutor se encuentra en la interfaz de "Detalles Profesionales" y ha completado los pasos anteriores<br>**cuando** hace clic en el botón 'Finalizar Registro' (habiendo llenado o dejado vacíos los campos opcionales)<br>**entonces** el sistema finaliza el proceso sin errores y muestra una pantalla con el mensaje "¡Perfil creado! Ahora puedes publicar tus ofertas de tutorías."                                                                                       |
| **Navegabilidad hacia atrás: Del Paso 3 al 2** | **Dado** que el tutor se encuentra en la interfaz de "Detalles Profesionales" <br>**cuando** hace clic en el botón inferior izquierdo de '← Atrás Disponibilidad' o en el paso '2 Disponibilidad' del menú superior<br>**entonces** el sistema redirige a la pantalla del Paso 2, conservando intactos todos los bloques horarios previamente seleccionados en la cuadrícula.                                                                                                                |

#### Tareas HU42

| No. | Tarea                                                                                                              | Effort-Hours |
| --- | ------------------------------------------------------------------------------------------------------------------ | ------------ |
| 1   | Creación de seed para ExperienciaDto.                                                                              | 0.1H         |
| 2   | Creación de seed para PerfilProfesionalDto.                                                                        | 0.1H         |
| 3   | Implementación de la página `PaginaDetallesProfesionales` (layout principal y navegación).                         | 0.4H         |
| 4   | Creación del componente `FormDetallesProfesionales` (contenedor del formulario y estado local).                    | 0.5H         |
| 5   | Implementación del componente `ModalNuevaExperiencia` (UI del modal).                                              | 0.4H         |
| 6   | Implementación del componente `InputExperiencia` (campos Puesto e Institución).                                    | 0.2H         |
| 7   | Implementación del componente `InputFechaExperiencia` y lógica `handleDateInputFormat`.                            | 0.4H         |
| 8   | Implementación de la utilidad `clientValidarFecha` y renderizado de `MensajeErrorFecha`.                           | 0.4H         |
| 9   | Lógica client-side `actionValidarCamposExperiencia` para CA1.                                                      | 0.1H         |
| 10  | Implementación de Server Action `actionGuardarExperiencia` con seed data.                                          | 0.4H         |
| 11  | Renderizado de la lista de experiencias añadidas en `FormDetallesProfesionales`.                                   | 0.2H         |
| 12  | Implementación de los componentes `InputMateria` y `BotonAgregarMateria`.                                          | 0.3H         |
| 13  | Lógica client-side `actionAgregarMateria` para añadir y gestionar materias (CA5).                                  | 0.3H         |
| 14  | Implementación del componente `EtiquetaMateria` (visualización y eliminación de tags).                             | 0.2H         |
| 15  | Implementación del componente `BotonFinalizarRegistro`.                                                            | 0.1H         |
| 16  | Implementación de Server Action `actionFinalizarRegistro` con seed data y redirección.                             | 0.5H         |
| 17  | Implementación de la página `PantallaRegistroExitoso`.                                                             | 0.3H         |
| 18  | Implementación de botones y lógica de navegación hacia atrás (CA7).                                                | 0.3H         |
| 19  | Integración con backend para `actionGuardarExperiencia` (descomentar fetch).                                       | 0.1H         |
| 20  | Integración con backend para `actionFinalizarRegistro` (descomentar fetch).                                        | 0.1H         |
| 21  | Implementar entidad `ExperienciaEntity` con sus columnas (incluyendo `tutorId`).                                   | 0.5H         |
| 22  | Implementar entidad `PerfilProfesionalEntity` con sus columnas (`tutorId` único y `materias` como `simple-array`). | 0.5H         |
| 23  | Definir DTOs `ExperienciaDto` y `PerfilProfesionalDto` con validaciones de `class-validator` y anidamiento.        | 1.5H         |
| 24  | Crear endpoint `POST /experiencias` en `ExperienciasController` y lógica de creación en `ExperienciasService.add`. | 2.5H         |
| 25  | Crear endpoint `POST /perfil/finalizar` en `PerfilController` con `JwtAuthGuard` y extracción del `userId`.        | 1H           |
| 26  | Implementar lógica de `upsert` para el perfil en `PerfilService.finalizar` (manejo de `materias` y persistencia).  | 1.5H         |
| 27  | Verificar funcionamiento del campo Experiencia: formato (MM/AAAA) y límites de caracteres                          | 0.5H         |
| 28  | Verificar la creación visual de las etiquetas al añadir "Materias"                                                 | 0.25H        |
| 29  | Comprobar navegabilidad hacia el Paso 2 y finalización exitosa                                                     | 0.5H         |

**Total:** 14.15 Effort Hours

---

### Nro. HU07 Título: Consultar mi disponibilidad

| Sección                 | Descripción                                                                                   |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| **Estimación**          | 3 SP                                                                                          |
| **Historia de Usuario** | Como tutor, quiero ver mi horario para revisar qué horas tengo libres para impartir tutorías. |

#### Criterios de aceptación HU07

| **Escenario**                           | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :-------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visualización de Horario Registrado** | **Dado** que el tutor tiene disponibilidad registrada previamente en el sistema, <br> **cuando** accede a la interfaz 'Gestionar Disponibilidad', <br> **entonces** la pantalla carga correctamente mostrando en la cabecera el texto 'Volver al Panel' a la izquierda y el logo 'Poli Tutorías' a la derecha. El título 'Gestionar Disponibilidad', la descripción 'Haz clic en los horarios que tienes disponibles para ofrecer tutorías.' y la sub-descripción 'Tu horario se mostrará en la zona horaria local (GMT-5).' son visibles. Se muestra el contador '✓ 4 horarios seleccionados' en color verde. La cuadrícula de horarios desde las 7:00 hasta las 20:00 con las columnas 'HORA', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom' presenta los bloques 'Lun 12:00', 'Mar 12:00', 'Lun 19:00' y 'Mar 19:00' resaltados con un checkmark blanco sobre fondo oscuro, indicando su selección. Los botones 'Cancelar' y 'Guardar Cambios' están visibles pero deshabilitados. |
| **Navegación a Panel de Control**       | **Dado** que el tutor se encuentra en la interfaz 'Gestionar Disponibilidad', <br> **cuando** hace clic en el enlace 'Volver al Panel', <br> **entonces** es redirigido a la pantalla del Dashboard Tutor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Tareas HU07

| No. | Tarea                                                                                                                                         | Effort-Hours |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para datos iniciales de disponibilidad del tutor.                                                                            | 0.1H         |
| 2   | Implementación de Server Action `getServerAvailability` con seed data.                                                                        | 0.3H         |
| 3   | Estructura y maquetación de la página `GestionarDisponibilidadPage`.                                                                          | 0.4H         |
| 4   | Implementación del componente `HorarioDisponibilidadGrid`.                                                                                    | 0.7H         |
| 5   | Configuración de navegación del `Header` a `DashboardTutorPage`.                                                                              | 0.1H         |
| 6   | Integración de `getServerAvailability` con el backend real.                                                                                   | 0.1H         |
| 7   | Implementar endpoint `GET /tutor/:tutorId/disponibilidad` en `DisponibilidadController` con `JwtAuthGuard` y lógica de autorización de tutor. | 2H           |
| 8   | Implementar lógica de consulta y mapeo en `DisponibilidadService.findTutorAvailability` para `SlotDto[]`.                                     | 1.5H         |
| 9   | Verificar la correcta carga de la cuadrícula en modo "Solo lectura"                                                                           | 0.5H         |

**Total:** 5.70 Effort Hours

---

### Nro. HU32 Título: Ver detalles de la oferta

| Sección                 | Descripción                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| **Estimación**          | 3 SP                                                                                      |
| **Historia de Usuario** | Como estudiante, quiero ver los detalles de una oferta para tomar una decisión informada. |

#### Criterios de aceptación HU32

| **Escenario**                           | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :-------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visualización de Detalles de Oferta** | **Dado** que el estudiante está en la sección de búsqueda de tutorías <br> **cuando** hace clic en una tarjeta de oferta <br> **entonces** se carga la información detallada de la oferta, mostrando en la cabecera el botón 'Volver' a la izquierda y el logo 'PoliTutorias' a la derecha. La sección principal muestra el icono de libro junto al título de la materia 'Cálculo Vectorial', la modalidad 'Virtual y Presencial', una descripción de la clase, las 'Categorías' con los tags 'Matemática' y 'Formación Básica', y la 'Disponibilidad Semanal' con los horarios para Lunes de 14:00 a 15:00, Miércoles de 14:00 a 15:00 y Viernes de 09:00 a 10:00. En el panel lateral, se visualiza el 'Precio por hora' de $10. |
| **Regreso a la Lista de Ofertas**       | **Dado** que el estudiante está visualizando los detalles de una oferta de tutoría <br> **cuando** hace clic en el botón 'Volver' en la cabecera superior izquierda <br> **entonces** es redirigido a la pantalla principal de listado de ofertas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Tareas HU32

| No. | Tarea                                                                                                                        | Effort-Hours |
| --- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para `DetallesOfertaDto` con datos de ejemplo.                                                              | 0.1H         |
| 2   | Implementación de la página `DetallesOfertaPage` (Server Component).                                                         | 1H           |
| 3   | Creación y maquetación del `HeaderComponent` (botón 'Volver' y logo).                                                        | 0.7H         |
| 4   | Creación y maquetación del `OfferInfoSection` (detalles de la oferta principal).                                             | 0.8H         |
| 5   | Creación y maquetación del `PricingContactSection` (solo precio por hora).                                                   | 0.3H         |
| 6   | Implementación de la lógica de navegación para el botón 'Volver'.                                                            | 0.1H         |
| 7   | Implementación de la función `getOfferDetails` (Server Component fetch con seed data).                                       | 0.5H         |
| 8   | Integración de `getOfferDetails` con el endpoint real del backend.                                                           | 0.2H         |
| 9   | Crear entidades `Offer`, `OfferCategory`, `OfferAvailability` para TypeORM con sus columnas y relaciones.                    | 1H           |
| 10  | Crear entidades `Tutor`, `ExperienciaEntity`, `MateriaEntity` para TypeORM con sus columnas y relaciones.                    | 1H           |
| 11  | Definir `DetallesOfertaDto` y sus DTOs anidados. Implementar `OffersController.findOne` con `ParseUUIDPipe` y Swagger.       | 1.5H         |
| 12  | Implementar la lógica completa en `OffersService.findOne` para consultar todas las entidades y mapear a `DetallesOfertaDto`. | 1.5H         |
| 13  | Probar la correcta visualización del Detalle de la Oferta y la funcionalidad del botón "Volver"                              | 0.5H         |

**Total:** 9.20 Effort Hours

---

### Nro. HU05 Título: Ver información sobre el tutor

| Sección                 | Descripción                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| **Estimación**          | 3 SP                                                                                     |
| **Historia de Usuario** | Como estudiante, quiero ver la información del tutor para saber que conocimientos tiene. |

#### Criterios de aceptación HU05

| **Escenario**                         | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Visualización de Perfil del Tutor** | **Dado** que el estudiante está en la interfaz de Detalle de la Oferta <br> **cuando** revisa la información del tutor <br> **entonces** se muestran las secciones 'Sobre el Tutor' y 'Experiencia'.<br>En la sección 'Sobre el Tutor', se visualiza la imagen de perfil del tutor, su nombre (ej: 'Juan Pérez'), su información académica (ej: 'FIM - Mecánica ☁️ 9° Semestre', su descripción bibliográfica (ej: 'Soy un apasionado por la mecánica y las matemáticas aplicadas...') y las materias que domina listadas como tags (ej: 'Cálculo Vectorial', 'Física I', 'Estática', 'Dinámica', 'Termodinámica').<br>En la sección 'Experiencia', se muestran las entradas de historial con el rol, institución/lugar y fechas (ej: 'Ayudante de Cátedra - Estática, EPN, Facultad de Mecánica, 2024 — Presente' y 'Tutor Particular - Cálculo y Física, Independiente, 2023 — Presente'). |

#### Tareas HU05

| No. | Tarea                                                                                                                                                                                                                                                         | Effort-Hours |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de tipos de datos (`OfferDetails`, `TutorProfile`, `ExperienceEntry`) para el frontend.                                                                                                                                                              | 0.1H         |
| 2   | Creación de seed para `OfferDetailsDto` (incluye tutor y experiencias).                                                                                                                                                                                       | 0.1H         |
| 3   | Implementación de Server Action `getOfferDetailsAction` con seed data.                                                                                                                                                                                        | 0.5H         |
| 4   | Maquetación de la página `OfferDetailPage` (`app/offers/[id]/page.tsx`).                                                                                                                                                                                      | 0.7H         |
| 5   | Implementación del componente `TutorInfoSection` (sección "Sobre el Tutor").                                                                                                                                                                                  | 0.3H         |
| 6   | Implementación del componente `TutorProfileCard` (imagen, nombre, info académica, rating).                                                                                                                                                                    | 0.2H         |
| 7   | Implementación del componente `TutorBiographyDisplay` (descripción bibliográfica).                                                                                                                                                                            | 0.2H         |
| 8   | Implementación del componente `SubjectTagsList` (materias dominadas como tags).                                                                                                                                                                               | 0.3H         |
| 9   | Implementación del componente `TutorExperienceSection` (sección "Experiencia").                                                                                                                                                                               | 0.3H         |
| 10  | Implementación del componente `ExperienceEntryCard` (entrada individual de experiencia).                                                                                                                                                                      | 0.2H         |
| 11  | Manejo de estados de carga, error y "oferta no encontrada" en `OfferDetailPage`.                                                                                                                                                                              | 0.2H         |
| 12  | Integración de `getOfferDetailsAction` con el backend real.                                                                                                                                                                                                   | 0.5H         |
| 13  | Refinar `TutorEntity` (añadir `profileImageUrl`) y actualizar `ExperienciaEntity` (ajustar tipos de fechas y renombrar campos) y definir DTOs de respuesta anidados (`OfferDetailsDto`, `TutorDetailsDto`, `TutorExperienceItemDto`, `TutorSubjectsItemDto`). | 1.5H         |
| 14  | Implementar la lógica completa en `OffersService.findOne` para consultar todas las entidades relacionadas (`Offer`, `Tutor`, `ExperienciaEntity`, `MateriaEntity`) y mapear a `OfferDetailsDto`.                                                              | 1.5H         |
| 15  | Actualizar `OffersController.findOne` para retornar `OfferDetailsDto` y añadir documentación Swagger.                                                                                                                                                         | 0.5H         |
| 16  | Verificar la carga correcta de los bloques "Sobre el Tutor" y "Experiencia"                                                                                                                                                                                   | 0.25H        |

**Total:** 7.35 Effort Hours

---

### Nro. HU27 Título: Filtrar ofertas por precio

| Sección                 | Descripción                                                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 8 SP                                                                                                            |
| **Historia de Usuario** | Como estudiante, quiero filtrar las ofertas por precio para encontrar opciones que se ajusten a mi presupuesto. |

#### Criterios de aceptación HU27

| **Escenario**                           | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                      |
| :-------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Filtrado Exitoso por Precio**         | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría" con ofertas disponibles, <br> **cuando** ajusta el slider de "Precio" a un rango (ej: de '$5.00' a '$20.00') que contiene ofertas, <br> **entonces** el listado de ofertas se actualiza mostrando solo las que están dentro del rango de precio seleccionado y el slider refleja los valores de '$5.00' a '$20.00'. |
| **Filtrado Sin Coincidencias**          | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría" con ofertas disponibles, <br> **cuando** ajusta el slider de "Precio" a un rango (ej: de '$1' a '$4') que no contiene ofertas, <br> **entonces** la lista de ofertas se vacía y se muestra el mensaje 'No se encontraron ofertas. Intenta ajustar tus filtros de búsqueda.'.                                        |
| **Visualización de Etiqueta de Precio** | **Dado** que el estudiante ha filtrado las ofertas por un rango de precio (ej: '$8 - $16')<br>**cuando** visualiza la parte superior del listado de ofertas<br>**entonces** el sistema muestra una etiqueta verde claro con el texto del rango y una 'x' (ej: '$8 - $16 x'), junto con el botón 'Limpiar todos'.                                                                                     |
| **Remoción de Filtro de Precio**        | **Dado** que el estudiante tiene activo el filtro de precio y visualiza la etiqueta correspondiente (ej: '$8 - $16 x')<br>**cuando** hace clic en la 'x' de la etiqueta o en el botón 'Limpiar todos'<br>**entonces** el filtro de precio se elimina, la etiqueta desaparece y el listado se actualiza mostrando las ofertas sin este filtro.                                                        |

#### Tareas HU27

| No. | Tarea                                                                                                                               | Effort-Hours |
| --- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para OfertasResult.                                                                                                | 0.1H         |
| 2   | Maquetación inicial de EncuentraTuTutoriaPage y creación de ClientOffersWrapper.                                                    | 0.4H         |
| 3   | Implementación de PrecioFilterComponent (slider UI y estado local).                                                                 | 0.5H         |
| 4   | Implementación de Server Action `filtrarOfertasAction` con seed data y validación básica.                                           | 0.3H         |
| 5   | Conexión de `PrecioFilterComponent` con `filtrarOfertasAction` y actualización de estado en `ClientOffersWrapper`.                  | 0.5H         |
| 6   | Desarrollo de `OfertasListComponent` y `NoOffersMessageComponent` dentro de `ClientOffersWrapper`.                                  | 0.3H         |
| 7   | Integración final de `filtrarOfertasAction` con backend real.                                                                       | 0.1H         |
| 8   | Implementar entidades `TutorEntity` y `OfertaEntity` con sus columnas (incluyendo `precio` decimal) y la relación `ManyToOne`.      | 1H           |
| 9   | Definir DTOs `FilterQueryParams` (validación de entrada) y `OfertasResultDto` (formato de respuesta).                               | 0.5H         |
| 10  | Implementar endpoint `GET /api/ofertas` en `OfertasController` con `ValidationPipe` y documentación Swagger.                        | 1H           |
| 11  | Implementar lógica de filtrado de ofertas en `OfertasService.findFilteredOfertas` con condiciones `WHERE` dinámicas usando TypeORM. | 1H           |
| 12  | Probar la actualización del listado al ajustar el slider de Precio con resultados                                                   | 0.5H         |
| 13  | Verificar que se muestre el mensaje de lista vacía en rangos de Precio sin coincidencias                                            | 0.25H        |

**Total:** 6.45 Effort Hours

---

### Nro. HU26 Título: Filtrar ofertas por modalidad

| Sección                 | Descripción                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 3 SP                                                                                                              |
| **Historia de Usuario** | Como estudiante, quiero filtrar las ofertas por modalidad para encontrar un tutor que se ajuste a mi preferencia. |

#### Criterios de aceptación HU26

| **Escenario**                              | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                      |
| :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Filtrar por Todas las Modalidades**      | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría" y existen ofertas disponibles <br> **cuando** hace clic en el botón filtro 'Todas' en la sección 'Modalidad' <br> **entonces** el listado de ofertas se muestra sin restricción de modalidad y el botón 'Todas' aparece visualmente resaltado.                                                                      |
| **Filtrar por Modalidad Presencial**       | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría" y existen ofertas disponibles con diferentes modalidades <br> **cuando** hace clic en el botón filtro 'Presencial' en la sección 'Modalidad' <br> **entonces** el listado de ofertas se actualiza mostrando aquellas que tienen las modalidades 'Presencial' y 'Ambos', y excluye las ofertas únicamente 'Virtual'. |
| **Filtrar por Modalidad Virtual**          | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría" y existen ofertas disponibles con diferentes modalidades <br> **cuando** hace clic en el botón filtro 'Virtual' en la sección 'Modalidad' <br> **entonces** el listado de ofertas se actualiza mostrando aquellas que tienen las modalidades 'Virtual' y 'Ambos', y excluye las ofertas únicamente 'Presencial'.    |
| **Filtrar por Modalidad Ambos**            | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría" y existen ofertas disponibles con modalidad 'Ambos' <br> **cuando** hace clic en el botón filtro 'Ambos' en la sección 'Modalidad' <br> **entonces** el listado de ofertas se actualiza mostrando únicamente las ofertas que tienen la modalidad 'Ambos'.                                                           |
| **Visualización de Etiqueta de Modalidad** | **Dado** que el estudiante ha filtrado las ofertas por una modalidad (ej: 'Virtual')<br>**cuando** visualiza la parte superior del listado de ofertas<br>**entonces** el sistema muestra una etiqueta morada claro con el texto de la modalidad y una 'x' (ej: 'Virtual x'), junto con el botón 'Limpiar todos'.                                                                                     |
| **Remoción de Filtro de Modalidad**        | **Dado** que el estudiante tiene activo el filtro de modalidad y visualiza la etiqueta correspondiente (ej: 'Virtual x')<br>**cuando** hace clic en la 'x' de la etiqueta o en el botón 'Limpiar todos'<br>**entonces** el filtro de modalidad se elimina, la etiqueta desaparece y el listado se actualiza mostrando las ofertas sin este filtro.                                                   |

#### Tareas HU26

| No. | Tarea                                                                                                                             | Effort-Hours |
| --- | --------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para datos iniciales de ofertas.                                                                                 | 0.1H         |
| 2   | Creación del componente `FilterButton` (botón individual para modalidad).                                                         | 0.2H         |
| 3   | Implementación del Server Action `filterOfertasAction` con seed data.                                                             | 0.4H         |
| 4   | Implementación de la carga inicial de ofertas en `EncuentraTutoriaPage`.                                                          | 0.3H         |
| 5   | Creación del componente `OfertasList` para mostrar las ofertas.                                                                   | 0.3H         |
| 6   | Implementación del componente `ModalidadFilter` (UI y lógica de filtrado).                                                        | 0.7H         |
| 7   | Integración de `EncuentraTutoriaPage` con `ModalidadFilter`.                                                                      | 0.2H         |
| 8   | Integración con backend (descomentar fetch en `filterOfertasAction`).                                                             | 0.1H         |
| 9   | Implementar entidades `TutorEntity` y `OfertaEntity` con sus columnas, relaciones y enum para modalidad.                          | 1H           |
| 10  | Definir `OfertaDto` (con `TutorBasicDto` anidado) y `OfertasListResponseDto` para la respuesta de la API.                         | 1H           |
| 11  | Crear endpoint `GET /api/ofertas` en `OfertasController` con `ValidationPipe`, documentación Swagger y mapeo a DTOs de respuesta. | 0.5H         |
| 12  | Implementar lógica de filtrado por modalidad en `OfertasService.getFilteredOfertas` usando TypeORM `In` y cargando relaciones.    | 1.5H         |
| 13  | Probar el filtro de listado con todas las opciones                                                                                | 0.5H         |

**Total:** 6.80 Effort Hours

---

### Nro. HU16 Título: Filtrar ofertas por disponibilidad

| Sección                 | Descripción                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Estimación**          | 3 SP                                                                                                                 |
| **Historia de Usuario** | Como estudiante, quiero filtrar las ofertas por disponibilidad para encontrar tutorías que se adapten a mis tiempos. |

#### Criterios de aceptación HU16

| **Escenario**                                   | **Descripción**                                                                                                                                                                                                                                                                                                                                               |
| :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Visualización Inicial sin Filtro**            | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría"<br>**cuando** no selecciona ningún día de la semana en la sección "Disponibilidad"<br>**entonces** el sistema muestra todas las ofertas de la base de datos sin restricciones de día.                                                                                        |
| **Filtrado Exitoso por Día**                    | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría" con ofertas disponibles para el día seleccionado<br>**cuando** selecciona el día 'Mar' en la sección "Disponibilidad"<br>**entonces** el botón 'Mar' aparece resaltado y la lista de ofertas se filtra mostrando únicamente las que tienen disponibilidad ese día.           |
| **Sin Ofertas para el Día Seleccionado**        | **Dado** que el estudiante se encuentra en la interfaz de "Encuentra tu Tutoría" pero no existen ofertas disponibles para el día seleccionado<br>**cuando** selecciona el día 'Dom' en la sección "Disponibilidad"<br>**entonces** la lista de ofertas se vacía y se muestra el mensaje "No se encontraron ofertas. Intenta ajustar tus filtros de búsqueda". |
| **Visualización de Etiqueta de Disponibilidad** | **Dado** que el estudiante ha filtrado las ofertas seleccionando un día de disponibilidad (ej: 'Mié')<br>**cuando** visualiza la parte superior del listado de ofertas<br>**entonces** el sistema muestra una etiqueta naranja claro con el texto del día y una 'x' (ej: 'Mié x'), junto con el botón 'Limpiar todos'.                                        |
| **Remoción de Filtro de Disponibilidad**        | **Dado** que el estudiante tiene activo el filtro de disponibilidad y visualiza la etiqueta correspondiente (ej: 'Mié x')<br>**cuando** hace clic en la 'x' de la etiqueta o en el botón 'Limpiar todos'<br>**entonces** el filtro de disponibilidad se elimina, la etiqueta desaparece y el listado se actualiza mostrando las ofertas sin este filtro.      |

#### Tareas HU16

| No. | Tarea                                                                                                                                   | Effort-Hours |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 1   | Creación de seed para ofertas con disponibilidad.                                                                                       | 0.10H        |
| 2   | Implementación del Server Action `filterOfertasAction` con seed.                                                                        | 0.5H         |
| 3   | Creación de `EncuentraTuTutoriaPage` (Server Component).                                                                                | 0.3H         |
| 4   | Creación de `OffersSearchWrapper` (Client Component).                                                                                   | 1H           |
| 5   | Implementación del componente `DisponibilidadFilter` (estructura).                                                                      | 0.3H         |
| 6   | Implementación del componente `OfertasList` para mostrar ofertas.                                                                       | 0.3H         |
| 7   | Implementación del componente `NoOffersMessage`.                                                                                        | 0.1H         |
| 8   | Implementación del estado de selección y resaltado en `Filter`.                                                                         | 0.2H         |
| 9   | Conexión de `DisponibilidadFilter` y `OfertasList` con `Action`.                                                                        | 1H           |
| 10  | Renderizado condicional del `NoOffersMessage` en `OfertasList`.                                                                         | 0.1H         |
| 11  | Integración de `filterOfertasAction` con el backend real.                                                                               | 0.1H         |
| 12  | Implementar entidad `OfertaDisponibilidadEntity` con sus columnas y el enum `WeekDay`.                                                  | 0.5H         |
| 13  | Refinar `TutorEntity` y `OfertaEntity` para incluir la relación con `OfertaDisponibilidadEntity` (OneToMany).                           | 1H           |
| 14  | Definir DTOs `OfertaQueryParams`, `TutorBasicInfoDto`, `OfferAvailabilityItemDto`, `OfertaDto`, y `OfertasResponseDto`.                 | 1.5H         |
| 15  | Implementar endpoint `GET /api/ofertas` en `OfertasController` con `ValidationPipe`, documentación Swagger y mapeo a DTOs de respuesta. | 1.5H         |
| 16  | Implementar lógica de filtrado en `OfertasService.findAll` usando `createQueryBuilder` para un `JOIN` con `OfertaDisponibilidadEntity`. | 1.5H         |
| 17  | Verificar el filtrado correcto de la lista al seleccionar días específicos de disponibilidad                                            | 0.5H         |
| 18  | Comprobar que aparezca el mensaje de error cuando se selecciona un día sin tutorías                                                     | 0.25H        |

**Total:** 10.75 Effort Hours

---

## Resumen del Sprint Backlog

---

### Resumen de Tareas y Horas de Esfuerzo

| **Historia de usuario (HUXX)**            | **Suma Total de Effort-Hours** |
| :---------------------------------------- | :----------------------------- |
| HU34                                      | 9.20H                          |
| HU41                                      | 8.70H                          |
| HU42                                      | 14.15H                         |
| HU07                                      | 5.70H                          |
| HU32                                      | 9.20H                          |
| HU05                                      | 7.35H                          |
| HU27                                      | 6.45H                          |
| HU26                                      | 6.80H                          |
| HU16                                      | 10.75H                         |
| **Total Sum of effort – Hours Estimates** | 78.30H                         |


| Historia de usuario  | Título                                  | Story Points (SP) |
| -------------------- | --------------------------------------- | ----------------- |
| HU34                 | Registrar información personal de tutor | 5 SP              |
| HU41                 | Registrar mi disponibilidad             | 5 SP              |
| HU42                 | Registrar información académica         | 5 SP              |
| HU07                 | Consultar mi disponibilidad             | 3 SP              |
| HU32                 | Ver detalles de la oferta               | 3 SP              |
| HU05                 | Ver información sobre el tutor          | 3 SP              |
| HU27                 | Filtrar ofertas por precio              | 8 SP              |
| HU26                 | Filtrar ofertas por modalidad           | 3 SP              |
| HU16                 | Filtrar ofertas por disponibilidad      | 3 SP              |
| **Suma total de SP** |                                         | **38**            |
