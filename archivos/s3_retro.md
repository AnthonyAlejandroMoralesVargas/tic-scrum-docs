# Informe de Insights Scrum – Sprint 3 – Sprint Retrospective

### 1. Resumen Ejecutivo

El equipo ha llegado a un punto de inflexión en el Sprint 3, evidenciando una fuerte dicotomía entre un excelente nivel de colaboración técnica y serios desafíos en disciplina de equipo y alineación con el producto. Por un lado, han consolidado prácticas avanzadas de agilidad como el _Swarming_ (trabajo en enjambre), lo que demuestra madurez en la resolución colaborativa de problemas técnicos. Por otro lado, la excesiva dependencia de herramientas de Inteligencia Artificial sin un marco de control riguroso está generando deuda técnica, _scope creep_ (desviación del alcance) y ruptura de contratos de integración entre el Frontend y el Backend.

A nivel cultural, este Sprint marcó un hito crítico debido a un comportamiento inaceptable (la expulsión deliberada de un miembro durante la sesión). Sin embargo, la intervención directiva y firme del Scrum Master Proxy para detener la reunión, exigir responsabilidad y forzar una disculpa pública fue una demostración magistral de defensa de los Valores de Scrum (Respeto, Apertura y Coraje), protegiendo la seguridad psicológica del equipo de manera efectiva.

### 2. Insights Principales

### Insight 1: Defensa activa de los Valores Scrum y Seguridad Psicológica

- **Descripción:** Un miembro (Emilio) expulsó a otro (Estefano) de la reunión. El Scrum Master (Anthony) aplicó un "Stop the Line", deteniendo la ceremonia hasta que el responsable admitiera su falta y se disculpara.

- **Evidencia observada:** Anthony: _"No va a seguir la reunión hasta que la persona que lo hizo... le pida una disculpa a Stefano... el tiempo que todos estamos dedicando se debe respetar y no por una malcriadez vamos aquí a estar 1 hora."_ Emilio: _"Yo fui, disculpas con todos y en especial a Estefano."_

- **Impacto en el equipo/proyecto:** Restaura la confianza inmediatamente. Evita que un comportamiento tóxico se normalice, lo cual destruiría la transparencia y la colaboración futura.

- **Recomendación ágil:** Formalizar este evento en los _Working Agreements_ (Acuerdos de Trabajo) del equipo. El respeto en los eventos de Scrum no es negociable; deben quedar por escrito las normas de comportamiento para sesiones virtuales.

### Insight 2: Anti-patrón de desarrollo: La IA como "Product Owner en la sombra"

- **Descripción:** El equipo está delegando en la IA la generación de código sin proveerle el contexto de las Reglas de Negocio. Esto resulta en una aplicación que compila y funciona a nivel de software, pero falla a nivel de producto. Adicionalmente, la IA está creando funcionalidades no solicitadas (_Scope Creep_).

- **Evidencia observada:** Estefano: _"muchas veces no se cumplían las reglas de negocio... existía en un momento del desarrollo."_ Sebastián: _"cuando se solicita a la IA que genere... hace de más y en cierto punto eso también puede llegar a afectar a futuro."_

- **Impacto en el equipo/proyecto:** Genera un Incremento que no entrega valor real, aumenta la complejidad del código innecesariamente (Deuda Técnica por sobreingeniería) y requiere retrabajo.

- **Recomendación ágil:** Incorporar en la _Definición de Terminado (DoD)_ un criterio estricto de validación humana: "El código generado ha sido auditado contra los Criterios de Aceptación originales y no contiene lógica extra no solicitada".

### Insight 3: Ruptura de contratos de integración (Silos entre Front y Back)\*\*

- **Descripción:** A pesar de reportar "buena comunicación", en la práctica, el Backend está cambiando la estructura y nombres de los endpoints sin notificar al Frontend, rompiendo los acuerdos iniciales del Sprint.

- **Evidencia observada:** José: _"aparecieron endpoints que no estaban establecidos como tal en el acuerdo... ya sea porque tenían otros nombres o porque realizaban otra funcionalidad."_

- **Impacto en el equipo/proyecto:** Genera cuellos de botella severos en la etapa de integración, obligando al Frontend a reescribir código y poniendo en riesgo el Sprint Goal.

- **Recomendación ágil:** Promover un enfoque _API-First_. Los contratos de endpoints deben definirse y "congelarse" durante la Sprint Planning. Si la IA (o un Dev) sugiere un cambio en el endpoint durante el Sprint, este debe ser negociado con el Frontend antes de fusionar el código (_merge_).

### \*\*Insight 4: Consolidación de la práctica de _Swarming_ (Trabajo en Enjambre)

- **Descripción:** Como aspecto altamente positivo, el equipo ha superado los problemas de aislamiento de Sprints anteriores y ahora se agrupa para apoyar componentes bloqueados.

- **Evidencia observada:** Aportes en la columna continuar: _"Trabajo en equipo y apoyo en cada componente"_, _"Trabajo en enjambre para solucionar errores"_.

- **Impacto en el equipo/proyecto:** Mejora el _Lead Time_ (tiempo de entrega) de las Historias de Usuario, reduce bloqueos prolongados y fomenta la propiedad colectiva del producto.

- **Recomendación ágil:** Seguir visualizando este esfuerzo cruzado en el tablero Kanban/Scrum para asegurar que el trabajo de apoyo se contabiliza en la capacidad real del equipo y no se vuelve trabajo invisible.

### Insight 5: Ausencia de trazabilidad en las decisiones de diseño

- **Descripción:** Se realizan cambios menores en el prototipo que no quedan documentados o comunicados adecuadamente al resto del equipo.

- **Evidencia observada:** Tarjeta reportada: _"cambios en el prototipo pequeños pero que no tienen trazabilidad en algunos cambios."_

- **Impacto en el equipo/proyecto:** Los desarrolladores pueden estar construyendo sobre versiones desactualizadas de diseño, lo que genera inconsistencias visuales y funcionales al final del Sprint.

- **Recomendación ágil:** Establecer un proceso de _Design Handoff_ claro. Cualquier alteración al diseño durante el Sprint debe comunicarse en la Daily Scrum y etiquetarse en el ticket correspondiente en Azure Boards.

### 3. Patrones Detectados

- **Delegación ciega a la tecnología:** Se repite el patrón de confiar en que la IA resolverá problemas de arquitectura y lógica, sin darle los límites ("guardrails") necesarios (Reglas de negocio).

- **Desconexión asíncrona:** Aunque hay apoyo reactivo (_swarming_), falta comunicación proactiva sobre cambios técnicos (endpoints, diseño) que afectan a otros componentes.

- **Intervenciones de liderazgo emergente:** El Scrum Master Proxy está asumiendo una postura muy fuerte como guardián del proceso y la cultura, lo cual es muy necesario en el nivel actual de madurez del equipo.

### 4. Evaluación de Madurez Scrum

| Dimensión               | Valoración       | Justificación                                                                                                                                                                         |
| :---------------------- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Transparencia**       | **Alta**         | Los problemas graves (incumplimiento de reglas, cambios de API, mala conducta) salieron a la luz rápidamente y se discutieron de frente.                                              |
| **Inspección**          | **Alta**         | El equipo comprendió _por qué_ la aplicación fallaba lógicamente: detectaron que el problema era el _input_ a la IA (falta de contexto), no la IA en sí.                              |
| **Adaptación**          | **Media - Alta** | Generaron compromisos claros y accionables (alimentar a la IA con los documentos de negocio).                                                                                         |
| **Autoorganización**    | **Media**        | Siguen dependiendo de que el Scrum Master sea quien administre, centralice y _"mantenga actualizados y disponibles los documentos"_ de reglas de negocio.                             |
| **Colaboración**        | **Alta**         | La adopción del _Swarming_ es una señal de alta madurez colaborativa técnica.                                                                                                         |
| **Orientación a valor** | **Media**        | El equipo comienza a darse cuenta de que el código que compila no sirve si no cumple con las "Reglas de Negocio". Están en transición de un enfoque de entrega a un enfoque de valor. |

### 5. Riesgos Identificados

| Riesgo                                             | Evidencia en la Transcripción                                                         | Consecuencia Potencial                                                                                                 |
| :------------------------------------------------- | :------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| **1. _Scope Creep_ (Corrupción del Alcance)**      | "La IA... hace de más y en cierto punto eso también puede llegar a afectar a futuro." | Incremento inflado, aumento de superficie de errores, dificultad para mantener el código a largo plazo.                |
| **2. Fractura de la Seguridad Psicológica**        | "Quién lo expulsó a Stefano... por una malcriadez."                                   | Aunque fue gestionado, si este tipo de actitudes subyace, los miembros dejarán de colaborar por miedo o resentimiento. |
| **3. Cuellos de botella por falta de integración** | "Aparecieron endpoints que no estaban establecidos."                                  | Frontend inoperante al final del Sprint; fracaso en la entrega del Incremento unificado en la Review.                  |

### 6. Oportunidades de Mejora (Priorizadas para próximos Sprints)

1.  **Ingeniería de Prompts Basada en Producto (Inmediato):** Ejecutar el acuerdo de la Retro: Crear una plantilla de _Prompt_ estándar para todo el equipo de desarrollo que obligue a inyectar las reglas de negocio, los Criterios de Aceptación y el alcance de la HU _antes_ de solicitar código a la IA.

2.  **Acuerdos de Integración Estrictos (Corto plazo):** El Backend y Frontend deben establecer un "Pacto de Sangre" sobre los contratos de API. Si un endpoint necesita cambiar, debe haber una conversación síncrona (breve) entre José (Front) y Emilio (Back) antes de ejecutar el cambio.

3.  **Redacción de _Working Agreements_ (Corto plazo):** El Scrum Master debe facilitar una breve sesión (puede ser de 15 minutos) para que el equipo documente 5-6 reglas básicas de convivencia y respeto profesional para el trabajo remoto y las ceremonias.

### 7. Conclusión General

El equipo está atravesando los "dolores de crecimiento" típicos de la fase _Storming_ del modelo de Tuckman. Poseen habilidades técnicas y capacidad de autoorganización para ayudarse mutuamente (_Swarming_), pero están luchando contra el caos que genera el uso desestructurado de Inteligencia Artificial. La IA está amplificando la falta de comunicación entre silos (cambios de diseño no avisados, cambios de endpoints no negociados).

El gran logro de esta sesión no fue técnico, sino cultural. La firmeza del Scrum Master al defender a un miembro del equipo sentó un precedente invaluable sobre el Respeto y la Transparencia. Si el equipo logra disciplinar el uso de sus herramientas IA (forzando el contexto de negocio) de la misma manera que disciplinaron su comportamiento en la llamada, su eficiencia y orientación a valor darán un salto cualitativo enorme en el próximo Sprint.
