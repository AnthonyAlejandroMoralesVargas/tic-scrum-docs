# Informe de Insights Scrum – Sprint 4 – Sprint Review

### 1. Resumen Ejecutivo

La Sprint Review del Sprint 4 marcó el cierre funcional del Release 1 (MVP). El equipo demostró un Incremento sólido y alineado con el Sprint Goal ("Finalizar tutorías y registrar reseñas"), evidenciando una excelente preparación técnica para sortear restricciones de tiempo del sistema durante la demo. El ciclo de retroalimentación se completó exitosamente, incorporando ajustes de UX/UI solicitados en el Sprint 3.

Sin embargo, el evento pivotó rápidamente de una revisión puramente funcional a una profunda auditoría de madurez del producto (Release Management). Se evidenció un choque de perspectivas: el equipo de desarrollo operaba bajo un _mindset_ técnico y de "proyecto" (enfocado en CI/CD, Vercel, AWS), mientras que los stakeholders exigieron un _mindset_ de "producto comercial" (empaquetado, handover y despliegue agnóstico). Esta sesión fue crucial para identificar que la actual _Definition of Done (DoD)_ no contempla la viabilidad de entrega al cliente final.

<img src="archivos/s4_retro.png" alt="Product Backlog detallado, estimado y refinado" width="750">

---

### 2. Insights Principales

### Insight 1: Brecha entre la visión Técnica (Output) y la Comercial (Outcome/Handover).

- **Descripción:** Al ser cuestionados sobre cómo entregarían el producto a un cliente, el equipo técnico (Estefano) recurrió a justificar la arquitectura (Next.js, AWS, pipelines, Vercel). El Stakeholder (Carlos) tuvo que iterar varias veces para que el equipo comprendiera que el cliente no compra _pipelines_, compra un producto instalable.

- **Evidencia observada:** Estefano justifica: _"los pipelines son los que construyen como tal el entorno... construimos con Yarn Build"_. Carlos responde: _"Olvídense de que a ustedes no les van a permitir entrar a la empresa... ¿qué entregan ustedes?"_

- **Impacto en el equipo/proyecto:** Refleja un anti-patrón común donde el equipo se enamora de la solución técnica pero pierde de vista el modelo de negocio o la estrategia de _Release_. Si el producto no se puede entregar, el valor de negocio es cero.

- **Recomendación ágil:** Realizar un taller de _Product Discovery / Product Vision_ para alinear al equipo sobre quién es el cliente final y cómo interactuará con el artefacto entregable.

### Insight 2: Evolución necesaria de la Definition of Done (DoD).

- **Descripción:** Para el equipo, el trabajo estaba "Terminado" porque funcionaba en sus entornos de nube. Sin embargo, para los Stakeholders, el incremento no es potencialmente entregable (_Potentially Shippable_) sin un manual de despliegue en producción agnóstico.

- **Evidencia observada:** Carlos indica: _"debe haber una documentación que me diga, bueno, coge esta carpeta, ponga acá... crea la base de datos"_.

- **Impacto en el equipo/proyecto:** Altera los criterios de aceptación a nivel de Release. El equipo descubre un nuevo requisito no funcional crítico al final del ciclo.

- **Recomendación ágil:** Actualizar inmediatamente la _Definition of Done_ a nivel de Release para incluir: "Manual de despliegue para cliente final redactado y validado por un tercero".

### Insight 3: Proactividad y anticipación en la demostración (Empirismo facilitado).

- **Descripción:** El desarrollador (David) demostró proactividad al preparar datos específicos un día antes para poder saltarse las restricciones temporales del sistema durante la demostración en vivo.

- **Evidencia observada:** David menciona: _"Esta la dejé creada ayer... por eso pude hacerla ahora... así no tendríamos que esperar el día y hora para que salga"_.

- **Impacto en el equipo/proyecto:** Mantiene la fluidez del evento Scrum, respetando el _timebox_ y permitiendo a los stakeholders inspeccionar el flujo completo sin bloqueos técnicos derivados de las propias reglas de negocio.

- **Recomendación ágil:** Estandarizar esta práctica. Crear un _script de demo_ o un conjunto de _Seed Data_ automatizado para que cualquier miembro del equipo pueda hacer demostraciones E2E sin depender de preparaciones manuales.

### Insight 4: Liderazgo emergente y especialización técnica visible.

- **Descripción:** Durante la sesión, la defensa de la arquitectura y el despliegue fue asumida inmediatamente por Estefano, mientras que David manejó la demostración funcional. El Scrum Master (Anthony) orquestó y clarificó los acuerdos finales.

- **Evidencia observada:** Estefano toma la palabra espontáneamente para explicar detalladamente el uso de AWS, S3 y Vercel cuando el Stakeholder cuestiona el hosting.

- **Impacto en el equipo/proyecto:** Demuestra un equipo autoorganizado donde los miembros asumen el liderazgo según su área de mayor competencia (Frontend/Backend/DevOps), respondiendo directamente sin necesidad de que el Scrum Master actúe como intermediario técnico.

- **Recomendación ágil:** Fomentar este nivel de empoderamiento, pero asegurar mediante _Pair Programming_ o sesiones de _Knowledge Sharing_ que la arquitectura no se convierta en un silo de conocimiento exclusivo de Estefano.

### Insight 5: Cierre asertivo y alineación de expectativas por el Scrum Master.

- **Descripción:** Tras un largo debate técnico-comercial, el Scrum Master intervino de manera precisa para resumir el requerimiento del Stakeholder en una tarea accionable y acotada, cerrando la brecha de comunicación.

- **Evidencia observada:** Anthony: _"Ya listo, profe, entonces sería como básicamente un manual para que ellos lo puedan poner en sus propios servidores, independientemente de cuáles sean..."._ Carlos: _"Exactamente"_.

- **Impacto en el equipo/proyecto:** Evita que el equipo asuma una tarea técnica titánica (como reescribir la arquitectura) y enfoca el esfuerzo en lo que realmente aporta valor (la documentación de _handover_).

- **Recomendación ágil:** Excelente intervención del SM. Debe asegurarse de que esta tarea se descomponga e ingrese al tablero como parte del cierre del Release.

---

### 3. Patrones Detectados

- **De "Software" a "Producto":** A lo largo de los 4 Sprints, las revisiones pasaron de corregir píxeles y validaciones (Sprint 1), a afinar reglas de negocio (Sprints 2 y 3), hasta llegar al debate sobre viabilidad comercial y portabilidad (Sprint 4). Es un patrón de madurez excelente.

- **Resolución sistémica de Deuda Técnica:** El equipo inicia consistentemente sus presentaciones mostrando cómo resolvieron los _feedbacks_ de la Review anterior, consolidando un patrón robusto de mejora continua.

- **Silo de perspectiva técnica:** Los desarrolladores tienden a justificar decisiones de negocio basándose exclusivamente en la facilidad de desarrollo o integración (ej. usar Vercel por su afinidad con Next.js), obviando temporalmente el requerimiento de infraestructura del cliente.

---

### 4. Evaluación de Madurez Scrum

| Dimensión               | Valoración | Justificación                                                                                                                                                          |
| :---------------------- | :--------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Transparencia**       |  **Alta**  | El equipo fue totalmente honesto sobre las limitaciones de su arquitectura actual para ser desplegada _On-Premise_ (servidores locales).                               |
| **Inspección**          |  **Alta**  | Los Stakeholders auditaron no solo las funcionalidades visibles, sino el modelo subyacente de entrega continua.                                                        |
| **Adaptación**          |  **Alta**  | El equipo aceptó el reto de crear un manual agnóstico de despliegue, cambiando su paradigma de entrega.                                                                |
| **Autoorganización**    |  **Alta**  | Diversos miembros del equipo respondieron directamente a los retos de los stakeholders sin pasar por un líder jerárquico.                                              |
| **Colaboración**        |  **Alta**  | El debate sobre el despliegue fue intenso pero respetuoso, enfocado en buscar el mejor modelo de negocio.                                                              |
| **Orientación a valor** | **Media**  | Aunque el valor de usuario final está cubierto (funcionalidades completas), el equipo perdió temporalmente de vista el valor comercial del "empaquetado del producto". |

---

### 5. Riesgos Identificados

| Riesgo                                             | Evidencia                                                                                                          | Consecuencia potencial                                                                                                                                                                  |
| :------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Fricción en el _Handover_ (Entrega al cliente)** | La aplicación depende fuertemente de servicios PaaS (Vercel) y SaaS/IaaS (AWS). No hay documentación _On-Premise_. | Si un cliente (ej. la Universidad) requiere alojarlo internamente por políticas de seguridad, el producto no podrá ser entregado o requerirá un costoso refactoring de infraestructura. |
| **Prueba de concepto fallida (UX de Instalación)** | Carlos sugiere hacer que un externo instale la app basándose en los README actuales.                               | Es altamente probable que un desarrollador externo no logre levantar el proyecto sin asistencia, evidenciando una falta de empaquetado del MVP.                                         |

---

### 6. Oportunidades de Mejora

1.  **Ejecutar el "Experimento del Usuario Ciego":** Tomar literalmente el consejo del Stakeholder. Seleccionar a un estudiante o profesional de TI externo al equipo, darle el repositorio y la nueva documentación, y medir el tiempo y los bloqueos que tiene para levantar el entorno de producción.

2.  **Containerización Total (Dockerización):** Si aún no está hecho, el equipo debería considerar crear un archivo `docker-compose` que levante el Front-end, Back-end y Base de datos localmente con un solo comando. Esto simplifica el manual de instalación en un 90%.

3.  **Transición fluida a la Retrospectiva:** Aprovechar el momentum generado por esta charla de arquitectura para que la Sprint Retrospective se enfoque en responder: _"¿Cómo podemos construir con una mentalidad más orientada al cliente final y no solo a la nube de desarrollo?"_

---

### 7. Conclusión General

El equipo ha concluido el desarrollo del MVP (Release 1) demostrando una capacidad técnica formidable, cumplimiento total de los objetivos de los Sprints y una adaptación excepcional al _feedback_ de usabilidad a lo largo del tiempo.

Sin embargo, esta Sprint Review destapó la "última milla" de la agilidad a nivel corporativo: **el Release Management y el Handover comercial**. El equipo descubrió que tener un software funcional en la nube no equivale a tener un producto empaquetado y listo para la venta/entrega. La madurez ágil del equipo se pondrá a prueba en su capacidad para pivotar rápidamente, documentar el despliegue y asegurar que el Incremento sea verdaderamente _Shippable_ (entregable) en cualquier entorno que el negocio demande. El Scrum Master ha demostrado un excelente control facilitador, y el equipo está listo para enfrentar retos de escalabilidad y operaciones.
