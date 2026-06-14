# Informe de Insights Scrum – Sprint 3 – Sprint Review

### 1. Resumen Ejecutivo

La Sprint Review del Sprint 3 evidencia un equipo maduro, enfocado en el valor y con un ritmo de entrega predecible. El Incremento demostró el cumplimiento del Sprint Goal ("Gestionar las solicitudes de tutorías y consultar la agenda"), mostrando flujos complejos bidireccionales (estudiante-tutor) y evidenciando que la deuda técnica visual de Sprints anteriores fue saldada con éxito. Los _Stakeholders_ mostraron alta satisfacción y confianza en el trabajo del equipo.

Un hito destacable en esta sesión fue la revelación de la adopción de herramientas de Inteligencia Artificial combinadas con _Playwright_ para la automatización de pruebas, lo cual demuestra un alto nivel de innovación y autoorganización por parte de los desarrolladores. La conversación final giró de manera saludable hacia la planificación de la capacidad para el Sprint final y la definición de expectativas claras para la entrega del Producto Mínimo Viable (MVP).

---

### 2. Insights Principales

### Insight 1: Cierre efectivo de ciclos de retroalimentación (Deuda Técnica).

- **Descripción:** El equipo no solo construyó nuevas funcionalidades, sino que integró y demostró las correcciones solicitadas en Sprints anteriores, cerrando el ciclo de _feedback_ de manera transparente.

- **Evidencia observada:** Anthony: _"Algunas necesidades urgentes que nacieron de la sprint review pasada fue el estilo de las tarjetas... y la segunda necesidad urgente fue el estilo del header..."_

- **Impacto en el equipo/proyecto:** Aumenta masivamente la confianza de los stakeholders al ver que sus observaciones no caen en un "agujero negro", sino que se gestionan, priorizan y entregan, fortaleciendo el pilar de la adaptación.

- **Recomendación ágil:** Mantener esta práctica de iniciar las demostraciones mencionando brevemente la deuda técnica o los hallazgos resueltos de sesiones pasadas.

### Insight 2: Innovación técnica proactiva (IA + Automatización de Pruebas).

- **Descripción:** El equipo de desarrollo ha adoptado un enfoque moderno y eficiente para el _Quality Assurance_ (QA). Al enfrentar refactorizaciones frecuentes de UI, están utilizando _prompts_ de IA para actualizar rápidamente sus scripts de _Playwright_.

- **Evidencia observada:** David: _"le doy un prompt al Playwright y se va actualizando todo. De hecho, es más sencillo ahora enfocarme en los nuevos y dejar los antiguos para ver si siguen pasando o hay algún fallo"_.

- **Impacto en el equipo/proyecto:** Reduce drásticamente el trabajo manual de pruebas de regresión, mitigando el riesgo de que la calidad disminuya a medida que el sistema crece. Demuestra una alta madurez técnica y autoorganización.

- **Recomendación ágil:** Documentar brevemente esta práctica en la _Definition of Done_ o como un estándar del equipo para que el conocimiento no dependa solo de un desarrollador, sino que sea replicable por todos.

### Insight 3: Transparencia y autonomía en el cálculo de la capacidad.

- **Descripción:** Ante la incertidumbre de trabajar en días de feriado para incluir funcionalidades extra (cancelación de tutorías), el SM consultó abiertamente sobre la viabilidad. El Stakeholder (Julio) reforzó correctamente la autonomía del equipo sobre su propia capacidad.

- **Evidencia observada:** Anthony: _"quería ver si por capacidad de horas de esfuerzo nos puede que ingresen, pero me estaban preguntando... si los días de feriado el equipo quería trabajar"_. Julio responde: _"Todo ya depende de ustedes... Scrum te dice básicamente que pongas los días que vas a trabajar"_.

- **Impacto en el equipo/proyecto:** Refuerza el empoderamiento del equipo de desarrollo (_self-management_). Evita compromisos irreales (_over-commitment_) y protege el ritmo sostenible de trabajo.

- **Recomendación ágil:** El SM debe facilitar una votación rápida o consenso asíncrono con los desarrolladores antes de la Planning del Sprint 4. No se debe presionar al equipo para trabajar en feriados; si la capacidad se reduce, el alcance del Sprint debe reducirse proporcionalmente.

### Insight 4: Expectativas claras para el "Release Review" (Validación de MVP).

- **Descripción:** El Stakeholder (Julio) aprovechó la sesión para establecer las expectativas de la próxima y última revisión, diferenciando una demostración de "nuevas funcionalidades" de una prueba completa de negocio (End-to-End).

- **Evidencia observada:** Julio: _"vamos a ver que están entregando un mínimo producto viable... Es como hacer una prueba end to end... ya cargándole data, ya no van a ponerle con datos aleatorios, sino ya van a hacer flujos completos"_.

- **Impacto en el equipo/proyecto:** Alinea el enfoque del equipo para el Sprint 4. Ya no solo se trata de terminar tareas, sino de asegurar la integración total, coherencia de datos y estabilidad del sistema como un todo.

- **Recomendación ágil:** El equipo debe crear una historia de usuario o tarea técnica específica en el Sprint 4 denominada "Preparación del Entorno E2E y Sembrado de Datos (Seed Data)" para asegurar que la demostración del MVP sea impecable.

### Insight 5: Ausencia de cuellos de botella evidentes.

- **Descripción:** La sesión fluyó rápidamente. A diferencia de Sprints anteriores donde había debates largos sobre _placeholders_ o _layouts_, en este Sprint el producto final coincidió plenamente con las expectativas.

- **Evidencia observada:** Julio: _"De acuerdo, va bastante bien, le veo bastante bien"_. Carlos: _"No, Julito, pero bien"_.

- **Impacto en el equipo/proyecto:** Indica que el refinamiento (Product Backlog Refinement) y la alineación previa a través del diseño/prototipado están funcionando excepcionalmente bien.

- **Recomendación ágil:** Celebrar este hito en la _Sprint Retrospective_. Mantener la rigurosidad en los criterios de aceptación que permitió esta entrega sin fricciones.

---

### 3. Patrones Detectados

- **Demostraciones guiadas por reglas de negocio:** El desarrollador (David) no solo hace clic, sino que explica verbalmente las restricciones (ej. _"el sistema no dejará solicitar en otro horario"_, _"expiran 4 horas antes"_). Esto demuestra una profunda comprensión funcional, no solo técnica.

- **Liderazgo facilitador del Scrum Master:** Anthony conecta cada evento. Abre la sesión recordando las decisiones de la sesión pasada e inicia la transición hacia el Sprint Planning al final de la Review.

---

### 4. Evaluación de Madurez Scrum

| Dimensión               | Valoración | Justificación                                                                                                                |
| :---------------------- | :--------: | :--------------------------------------------------------------------------------------------------------------------------- |
| **Transparencia**       |  **Alta**  | El equipo demuestra explícitamente tanto el "camino feliz" como las restricciones (reglas de negocio que bloquean acciones). |
| **Inspección**          |  **Alta**  | Los Stakeholders evalúan el incremento y constatan que sus sugerencias previas fueron implementadas correctamente.           |
| **Adaptación**          |  **Alta**  | La incorporación de herramientas IA para QA refleja una excelente adaptación técnica para sostener la velocidad y calidad.   |
| **Autoorganización**    |  **Alta**  | El equipo cuestiona su propia capacidad de cara a un feriado, demostrando responsabilidad sobre su ritmo de trabajo.         |
| **Colaboración**        |  **Alta**  | Sincronía total entre el SM que presenta el contexto comercial y el Developer que ejecuta la demostración técnica.           |
| **Orientación a valor** |  **Alta**  | La conversación se centra en la entrega del MVP y en preparar el sistema para flujos de valor completos (End-to-End).        |

---

### 5. Riesgos Identificados

| Riesgo                                            | Evidencia                                                                                                      | Consecuencia potencial                                                                                                                                        |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sobrecarga en el Sprint Final (Crunch Time)**   | El SM duda sobre si la capacidad alcanza para las historias de "cancelación", planteando trabajar en feriados. | Riesgo de introducir _bugs_ de última hora, _burnout_ del equipo o llegar a la demostración del MVP con un producto inestable.                                |
| **Falta de preparación de datos para la Release** | Julio solicita que para la próxima sesión se utilicen flujos completos "sin datos aleatorios".                 | Si no se planifica tiempo específico para poblar la base de datos con escenarios reales, la presentación final del MVP puede verse poco profesional o fallar. |

---

### 6. Oportunidades de Mejora

1.  **Protección de la Capacidad (Sprint Planning):** El SM debe asegurarse de que no se incluyan historias de "cancelación" si matemáticamente no caben en los días hábiles del Sprint. Es preferible un MVP robusto con menos alcance que uno inestable con más funcionalidades.

2.  **Planificación de la _Release Review_:** En lugar de preparar solo "diapositivas", el equipo debe definir un "Guión de Demostración" (_Demo Script_). Este guión debe recorrer a un usuario (Estudiante A) buscando a un Tutor (Tutor B), agendando, aceptando, completando y validando todo el ciclo de vida sin saltos bruscos.

3.  **Cross-Training en QA:** Asegurar que la técnica de usar IA para actualizar _Playwright_ sea compartida con otros miembros del equipo (ej. José o Emilio) para que la calidad no dependa de una sola persona (_Silo de conocimiento_).

---

### 7. Conclusión General

El equipo se encuentra en un estado de **alta madurez y cohesión**. Han dominado el ciclo de retroalimentación, tomando críticas de Sprints anteriores y convirtiéndolas en software funcional de alta calidad. La automatización de pruebas con IA es un indicador sobresaliente de mejora continua técnica. De cara al último Sprint del Release, el mayor desafío del Scrum Master será puramente de gestión de riesgos: evitar la sobrecarga del equipo por la presión del cierre y garantizar que el sistema esté pulido, con datos reales, para la demostración End-to-End del Producto Mínimo Viable.
