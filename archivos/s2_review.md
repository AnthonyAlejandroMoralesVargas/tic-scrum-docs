# Informe de Insights Scrum – Sprint 2 – Sprint Review

### 1. Resumen Ejecutivo

El equipo ha ejecutado una Sprint Review altamente efectiva, demostrando un Incremento completamente funcional que cumple a cabalidad con el Sprint Goal ("Conocer al tutor y filtrar las ofertas"). La demostración evidenció un flujo de valor claro desde la perspectiva de ambos usuarios (tutor y estudiante), permitiendo a los _Stakeholders_ inspeccionar el software real, lo que derivó en hallazgos valiosos sobre la usabilidad y la detección en vivo de un defecto de navegación (desaparición del _header_).

El aspecto más destacable de este ciclo es la evidente maduración del equipo en la gestión de límites y la protección del Sprint. El Scrum Master demostró un liderazgo excepcional al evitar la corrupción del alcance (_scope creep_), negándose a incluir cambios estéticos no planificados a mitad del Sprint y gestionándolos correctamente hacia el Product Backlog para el Sprint 3. Esta acción marca una clara evolución respecto a iteraciones anteriores y fortalece la previsibilidad del equipo.

<img src="archivos/s2_retro.png" alt="Product Backlog detallado, estimado y refinado" width="750">

---

### 2. Insights Principales

### Insight 1: Protección rigurosa del límite del Sprint (Anti-Scope Creep).

- **Descripción:** El Scrum Master intervino proactivamente para explicar por qué las mejoras visuales derivadas del A/B testing del Sprint 1 no se implementaron en este ciclo. El equipo aprendió de errores pasados y protegió su plan.

- **Evidencia observada:** Anthony (SM) menciona: _"no se volvió a cometer el error del anterior release de aceptar cosas que no estaban planificadas... lo que ya se hizo en el A/B testing... se está incluyendo para el sprint número 3."_

- **Impacto en el equipo/proyecto:** Altamente positivo. Garantiza un ritmo sostenible (_sustainable pace_), evita la sobrecarga del equipo de desarrollo, asegura la entrega del Sprint Goal y educa a los stakeholders sobre el respeto a la planificación ágil.

- **Recomendación ágil:** Reconocer y celebrar esta decisión en la Retrospective. Continuar utilizando la técnica de diferir requerimientos ("Capture and Defer") hacia el Product Backlog para mantener la integridad de futuros Sprints.

### Insight 2: Empirismo activo y validación en vivo.

- **Descripción:** Los stakeholders no fueron espectadores pasivos; solicitaron interactuar con flujos específicos del software, lo que permitió identificar un comportamiento anómalo en la interfaz en tiempo real.

- **Evidencia observada:** Carlos pide: _"me gustaría, podrías entrar a uno de los cursos... En la parte superior, si viste que desapareció el usuario"_.

- **Impacto en el equipo/proyecto:** Valida el propósito central de la Sprint Review: la inspección del Incremento. Descubrir esto ahora y no en producción ahorra costos y mejora la calidad del producto final.

- **Recomendación ágil:** Fomentar que en futuras Reviews sean los propios stakeholders quienes tomen el control del teclado/ratón (o pedirles que guíen paso a paso la navegación) para aumentar aún más la empatía con la experiencia del usuario final.

### Insight 3: Enfoque orientado a Valor de Negocio (Sprint Goal).

- **Descripción:** La sesión inició estableciendo el contexto comercial, en lugar de enumerar un listado de tareas técnicas o tickets de Jira completados.

- **Evidencia observada:** Anthony abre la sesión diciendo: _"Quiero empezar mencionando el objetivo comercial de este sprint número 2, que era conocer al tutor y filtrar las ofertas"_.

- **Impacto en el equipo/proyecto:** Mantiene a la audiencia (desarrolladores y negocio) alineada sobre el "por qué" se construyó el Incremento, facilitando que el _feedback_ se centre en el cumplimiento de ese objetivo.

- **Recomendación ágil:** Mantener esta práctica. Añadir, si es posible, métricas de éxito esperadas (ej. "esperamos que con estos filtros el tiempo de búsqueda se reduzca").

### Insight 4: Correcta clasificación del trabajo (Bug vs. Nueva Funcionalidad).

- **Descripción:** Al detectarse el problema visual con el usuario en el encabezado, hubo consenso inmediato sobre la naturaleza técnica del hallazgo, evitando inflar el Backlog con historias de usuario innecesarias.

- **Evidencia observada:** Julio: _"Ese sería más que una historia de usuario, sería un bug"_. Anthony: _"Claro. Claro que en el header se siga manteniendo el nombre..."_.

- **Impacto en el equipo/proyecto:** Mantiene la higiene del Product Backlog y asegura que la métrica de velocidad (_Velocity_) no se distorsione al estimar correcciones de defectos inyectados en el mismo _release_.

- **Recomendación ágil:** Ingresar inmediatamente el bug al Backlog y priorizarlo en la cima del Sprint Backlog del Sprint 3 para resolver la deuda técnica antes de crear nuevas funcionalidades sobre ella.

### Insight 5: Sincronización Diseño-Desarrollo (Dual-Track Agile emergente).

- **Descripción:** Se evidencia que el trabajo de diseño/UX (los prototipos de Sebastián) ocurre en paralelo y se aprueba durante el Sprint actual para ser desarrollado en el siguiente.

- **Evidencia observada:** Anthony: _"justamente como el prototipo ya se aprobó durante el Sprint 2... se está incluyendo para el sprint número 3"_.

- **Impacto en el equipo/proyecto:** Crea un flujo de trabajo saludable donde los desarrolladores siempre tienen historias de usuario "Ready" (con diseño claro) al momento de iniciar la Sprint Planning.

- **Recomendación ágil:** Formalizar este modelo operativo (_Dual-track Agile_). Asegurar que el "Discovery" (diseño/prototipos) termine consistentemente unos días antes de la Planning del siguiente Sprint para permitir un correcto refinamiento.

---

### 3. Patrones Detectados

- **Fronteras claras del marco de trabajo:** Patrón positivo donde el equipo prioriza terminar lo comprometido sobre introducir nuevas variables mid-sprint.

- **Inspección minuciosa de UI:** Al igual que en el Sprint 1, los stakeholders tienen un ojo muy agudo para los detalles de interfaz (layouts, headers).

- **Delegación efectiva:** El Scrum Master facilita y abre la sesión, pero el Developer (David) es dueño del producto técnico y lidera la demostración con seguridad.

---

### 4. Evaluación de Madurez Scrum

| Dimensión               | Valoración | Justificación                                                                                                                    |
| :---------------------- | :--------: | :------------------------------------------------------------------------------------------------------------------------------- |
| **Transparencia**       |  **Alta**  | Se mostró software real y funcional. No se ocultó el _bug_ descubierto durante la demo.                                          |
| **Inspección**          |  **Alta**  | Stakeholders solicitaron acciones específicas en vivo para probar casos de uso particulares.                                     |
| **Adaptación**          |  **Alta**  | Las mejoras estéticas previas no se ignoraron, pero se adaptó el Backlog (para el Sprint 3) en lugar de forzar el Sprint actual. |
| **Autoorganización**    |  **Alta**  | Transición fluida entre roles (SM enmarca, Dev demuestra, Stakeholder retroalimenta). El equipo demuestra autonomía técnica.     |
| **Colaboración**        |  **Alta**  | Diálogo constructivo ante el descubrimiento de un defecto; no hubo búsqueda de culpables, sino enfoque en la solución.           |
| **Orientación a valor** |  **Alta**  | La narrativa del evento giró en torno al "objetivo comercial" y a la resolución de problemas reales del usuario.                 |

---

### 5. Riesgos Identificados

| Riesgo                                            | Evidencia                                                                                                      | Consecuencia potencial                                                                                                                                        |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Regresión visual en componentes globales** | El usuario desaparece del menú superior al entrar al detalle de un curso.                                                | Pérdida de contexto para el usuario final, degradación de la experiencia de navegación (UX).                                                                             |
| **Acumulación de rediseños pendientes**      | Existen pantallas y tarjetas del A/B test del Sprint 1 pendientes, sumadas a nuevos prototipos aprobados en el Sprint 2. | Posible cuello de botella en el Sprint 3 si la capacidad del equipo no es suficiente para abordar nueva funcionalidad funcional _y_ la refactorización visual acumulada. |

---

### 6. Oportunidades de Mejora

1.  **Pruebas de regresión visual básicas:** Considerar la implementación de pruebas automatizadas simples (ej. Cypress o Playwright) que verifiquen la persistencia de componentes globales (como el _header_ o _footer_) durante la navegación, para evitar que estos bugs lleguen a la Review.

2.  **Gestión de la capacidad en la Planning:** Para el Sprint 3, el Scrum Master debe ayudar al Product Owner a balancear cuidadosamente la capacidad técnica entre el desarrollo de las nuevas funcionalidades (_solicitud de tutorías_) y el pago de la deuda técnica visual (_bug del header y refactorización de tarjetas a horizontal_).

3.  **Definition of Ready (DoR):** Formalizar que para que una historia de usuario entre al Sprint, su prototipo UI/UX debe haber sido aprobado por los stakeholders _antes_ del Sprint Planning, oficializando la buena práctica que ya están empezando a ejecutar.

---

### 7. Conclusión General

El equipo ha dado un salto cualitativo evidente en su madurez ágil en comparación con iteraciones pasadas. La decisión táctica del Scrum Master de defender el límite del Sprint frente a la tentación de alterar el código en respuesta al _A/B testing_ demuestra una profunda comprensión de la sostenibilidad técnica y los principios de Scrum. El equipo actúa de forma **proactiva**, maneja un empirismo real y mantiene un diálogo de alto nivel comercial con los stakeholders. El estado de salud ágil es excelente; el desafío inmediato será orquestar la integración del rediseño acumulado en el próximo Sprint sin comprometer la velocidad de entrega de nuevo valor de negocio.
