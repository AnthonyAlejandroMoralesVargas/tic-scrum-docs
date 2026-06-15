# Informe de Insights Scrum – Sprint 1 – Sprint Review

### 1. Resumen Ejecutivo

El equipo ha finalizado su primer Sprint demostrando un Incremento funcional que cumple con el Sprint Goal ("Publicar y encontrar ofertas de tutoría"). La dinámica de la Sprint Review evidenció un alto nivel de compromiso por parte de los _Stakeholders_, quienes interactuaron directamente con el producto, validando su comportamiento y aportando un fuerte enfoque en la experiencia de usuario (UX) y la interfaz (UI).

Desde la perspectiva ágil, se observa un equipo con una base sólida de transparencia y un Scrum Master que ejerce su rol de facilitador y protector del alcance de manera efectiva. El pilar del empirismo (transparencia, inspección y adaptación) estuvo plenamente presente: los _Stakeholders_ reconocieron que decisiones de diseño aprobadas previamente en prototipos no funcionaban en el producto real, y el equipo acordó iterar sobre ellas sin fricción. Como punto de atención, existe una fuerte tendencia a convertir la sesión en un taller de diseño y expectativas prematuras sobre el aumento de la velocidad del equipo (Velocity) debido al uso de Inteligencia Artificial.

---

### 2. Insights Principales

### Insight 1: Protección efectiva del alcance y segmentación (Slicing) de Historias de Usuario.

- **Descripción:** El Scrum Master demostró madurez al defender el alcance del Sprint frente a la expectativa de un _Stakeholder_ sobre funcionalidades ausentes (filtros). Se evidenció una correcta aplicación del _Vertical Slicing_ (dividir historias grandes en partes entregables).

- **Evidencia observada:** Julio preguntó por los filtros laterales. Anthony (SM) respondió: _"No se contemplaron porque salían del alcance de la historia de usuario... para la historia de usuario, pues se hacía muy grande. Entonces no les contemplamos todavía... están en el backlog"_.

- **Impacto en el equipo/proyecto:** Evita el _scope creep_ (corrupción del alcance), protege la sostenibilidad del ritmo de trabajo del equipo y garantiza que se entregue valor continuo sin cuellos de botella.

- **Recomendación ágil:** Continuar con esta práctica. Para futuras Reviews, el Product Owner o Scrum Master debe presentar brevemente el Product Backlog actualizado al inicio o final de la sesión para gestionar expectativas visualmente.

### Insight 2: Empirismo en acción (Inspección y Adaptación genuinas).

- **Descripción:** Se detectó un anti-patrón común resuelto de forma ágil: la falacia de que "lo aprobado en diseño no se cambia". Al inspeccionar el Incremento, los stakeholders notaron problemas de usabilidad (colores, layout de 2 columnas). En lugar de defender el diseño original a toda costa, se aceptó la necesidad de iterar.

- **Evidencia observada:** Carlos menciona: _"Yo sé que les pedimos así, o sea, aprobamos y todo eso, pero hay el chance de... hacer cambios, porque ya vemos cómo está el resultado, cómo está el producto"_.

- **Impacto en el equipo/proyecto:** Fomenta una cultura de seguridad psicológica e iteración basada en valor real y no en contratos o aprobaciones pasadas.

- **Recomendación ágil:** Formalizar esta adaptación. El rediseño no debe tratarse como un _bug_, sino como una nueva historia de usuario o un _Spike_ (Prueba de concepto / A/B testing) priorizado para el siguiente Sprint.

### Insight 3: Riesgo de hiper-focalización en micro-diseño durante la Review.

- **Descripción:** Gran parte del _timebox_ de la reunión se consumió discutiendo interacciones a nivel de píxel (el comportamiento del _placeholder_ vs. el valor por defecto en el campo de precio).

- **Evidencia observada:** Minutos continuos de debate entre Julio, Carlos y David sobre si el campo debe tener un cero, quedarse vacío, o mostrar el texto en rojo/gris.

- **Impacto en el equipo/proyecto:** Si bien el feedback de UI/UX es valioso, debatir micro-interacciones en la Review puede restar tiempo para discutir el valor de negocio general, métricas, adopción de usuarios o la revisión del _Product Backlog_.

- **Recomendación ágil:** El Scrum Master debe facilitar y aplicar _timeboxing_. Cuando el debate se vuelve muy granular, sugerir: _"Tomamos nota de este hallazgo de usabilidad para refinarlo asíncronamente con el equipo de UI/UX y continuamos con el flujo principal"_.

### Insight 4: Expectativas de velocidad (Velocity) externas no calibradas.

- **Descripción:** Un _Stakeholder_ asumió explícitamente que la velocidad del equipo debe aumentar debido al uso de herramientas de Inteligencia Artificial, presionando sutilmente sobre la capacidad de entrega.

- **Evidencia observada:** Julio: _"Se asume que si es que ustedes hacen con ya hacen más HUs... sin inteligencia artificial, no... se asume que se debe incrementar la velocidad de desarrollo"_. Anthony responde prudentemente que se basan en el histórico y evaluarán tras el Sprint 1.

- **Impacto en el equipo/proyecto:** Alto riesgo de generar presión indebida. La _Velocity_ es una métrica interna de capacidad y previsibilidad del equipo, no un KPI de rendimiento que deba inflarse artificialmente.

- **Recomendación ágil:** El Scrum Master debe educar a los _Stakeholders_ sobre métricas ágiles. La IA puede mejorar la eficiencia técnica, pero la velocidad en puntos de historia se normaliza con el tiempo. Es mejor medir el valor entregado (Outcomes) que la cantidad de historias (Outputs).

### Insight 5: Demostración en entornos mixtos (Riesgo en la Definition of Done).

- **Descripción:** Durante la demostración técnica, se evidenció que parte de lo mostrado corría en un entorno local (`localhost`).

- **Evidencia observada:** Julio: _"Ya y la otra curiosidad es porque salen aquí en localhost y en el otro en el servidor"_. David: _"Sí, me equivoqué de link"_.

- **Impacto en el equipo/proyecto:** Aunque en este caso fue un error de enlace, en Scrum el Incremento debe cumplir con la Definición de Terminado (DoD), lo cual implica que debe ser demostrado en un entorno integrado (Staging/Producción), garantizando que es potencialmente entregable.

- **Recomendación ágil:** Asegurar como acuerdo de equipo que las demostraciones en la Review se hagan estrictamente desde el entorno de _Staging/Producción_ para asegurar la transparencia técnica del Incremento.

---

### 3. Patrones Detectados

- **Micro-management visual de los Stakeholders:** Enfoque profundo en el detalle visual (colores de fuente, placeholders) sobre el comportamiento de negocio.

- **Comunicación Segura y Transparente:** No hay barreras defensivas. Cuando se señala un error (link equivocado, diseño poco amigable), el equipo de desarrollo (David/Anthony) lo acepta sin excusas, mostrando madurez.

- **Defensa asertiva del marco de trabajo:** El Scrum Master interviene para justificar decisiones de alcance basándose en la capacidad del equipo y el tamaño de las historias (_slicing_).

---

### 4. Evaluación de Madurez Scrum

| Dimensión               | Valoración | Justificación                                                                                                                       |
| :---------------------- | :--------: | :---------------------------------------------------------------------------------------------------------------------------------- |
| **Transparencia**       |  **Alta**  | El equipo muestra el estado real del producto, los errores de entorno y admite cuando algo quedó fuera del alcance para el Backlog. |
| **Inspección**          |  **Alta**  | Los stakeholders revisan activamente el incremento en tiempo real, solicitando pruebas en vivo (ej. "ponle 1 USD").                 |
| **Adaptación**          |  **Alta**  | Rápido consenso para descartar una vista de tarjetas aprobada previamente al notar que es confusa, proponiendo un _A/B testing_.    |
| **Autoorganización**    | **Media**  | Los desarrolladores presentan el producto, pero dependen fuertemente del SM para responder preguntas sobre alcance y procesos.      |
| **Colaboración**        |  **Alta**  | Diálogo fluido y constructivo entre el equipo técnico, diseño (Sebastián) y los stakeholders.                                       |
| **Orientación a valor** |  **Alta**  | Todo el debate se centró en cómo el estudiante y el tutor van a entender y usar la interfaz, priorizando al usuario final.          |

---

### 5. Riesgos Identificados

| Riesgo                                  | Evidencia                                                                                                                 | Consecuencia potencial                                                                                                                                  |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Corrupción del propósito del evento** | Demasiado tiempo invertido en debatir el color de un texto o el comportamiento de un campo vacío.                         | La Sprint Review pierde su enfoque estratégico y se convierte en una sesión técnica de UI/UX, descuidando el estado del Backlog.                        |
| **Presión por Velocity irreal**         | Comentario del Stakeholder asumiendo que la IA debe inflar automáticamente la velocidad de entrega en Puntos de Historia. | Desmotivación del equipo, pérdida de calidad (acumulación de deuda técnica) para cumplir expectativas externas, o inflación artificial de estimaciones. |
| **Fricción en la Definition of Done**   | Presentar el producto desde `localhost`.                                                                                  | Riesgo de que el Incremento no esté realmente integrado ni listo para release, generando falsas expectativas.                                           |

---

### 6. Oportunidades de Mejora

1. **Estandarizar el entorno de Review:** Acordar que el Incremento solo se considera "Terminado" y se demuestra si está desplegado en un servidor de pruebas/producción. (Acción para la Retrospective).

2. **Timeboxing en feedback de UX/UI:** El SM debe implementar una regla de "Capturar y Diferir" (Capture and Defer) durante la Review. Anotar los detalles visuales para refinarlos después, manteniendo la fluidez de la demostración.

3. **Manejo de métricas con Stakeholders:** En el próximo evento, el SM debe presentar la _Velocity_ real obtenida y educar a los stakeholders sobre el uso de la IA enfocado en la reducción de deuda técnica y calidad, no solo en "entregar más puntos".

4. **Validación temprana de prototipos:** Dado que el diseño de 2 columnas falló en producción a nivel cognitivo, involucrar a los stakeholders en validaciones de wireframes/prototipos de alta fidelidad _antes_ del Sprint Planning para mitigar desperdicio de desarrollo.

---

### 7. Conclusión General

El equipo presenta un **estado ágil inicial muy saludable para ser el Sprint 1**. Destaca la valentía para mostrar software funcional con total transparencia y la excelente disposición de los stakeholders para adaptar sus propias decisiones previas al ver el producto real. El Scrum Master actúa como un verdadero escudo protector del alcance y promotor del empirismo. La principal evolución requerida para los próximos Sprints es elevar el nivel estratégico de la Review (hablar más sobre el mercado, impacto y backlog) limitando los debates de micro-diseño, y establecer fronteras claras sobre la expectativa de aumento de productividad impulsada por herramientas de IA.
