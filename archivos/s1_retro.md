# Informe de Insights Scrum – Sprint 1 – Sprint Retrospective

### 1. Resumen Ejecutivo

El equipo ha concluido su primer Sprint demostrando una base sólida en los valores de Scrum, particularmente en apertura, coraje y respeto. Durante la Retrospectiva, evidenciaron un alto nivel de transparencia al abordar bloqueos técnicos (limitaciones de herramientas) y problemas de capacidad personal sin buscar culpables. La sesión cumplió con el propósito del empirismo: inspeccionaron un cuello de botella severo en su flujo de diseño (Figma) y adaptaron su proceso colaborativamente hacia una nueva fuente de verdad (Magic Patterns). Sin embargo, se detectaron anti-patrones tempranos relacionados con la comprensión de los Criterios de Aceptación y riesgos emergentes por el uso de Inteligencia Artificial ("alucinaciones") que provocaron retrabajo en la fase de pruebas.

<img src="archivos/s1_retro.png" alt="Product Backlog detallado, estimado y refinado" width="750">

### 2. Insights Principales

### Insight 1: Seguridad psicológica como habilitador de la transparencia

- **Descripción:** Un miembro del equipo admitió abiertamente que sus problemas personales causaron una pérdida de tres días de trabajo, asumiendo la responsabilidad sin excusas. El facilitador y el equipo manejaron la situación con empatía, categorizándolo como "circunstancial".

- **Evidencia observada:** Estefano declara: _"soy yo el que mismo me puse a mí mismo como error... por dificultades más que todo familiares, no pude solventar. Entonces hice que se perdieron 3 días."_

- **Impacto en el equipo/proyecto:** Fomenta un entorno donde los impedimentos reales se visibilizan de inmediato, evitando la ocultación de retrasos que podrían poner en riesgo el Incremento.

- **Recomendación ágil:** Mantener esta cultura. El Scrum Master debe asegurar que en futuros Sprints, si ocurren ausencias, el equipo tenga prácticas de autoorganización (como _swarming_ o programación en parejas) para mitigar el impacto del factor de ausencia individual ("Bus Factor").


### Insight 2: Anti-patrón en la definición de "Terminado" (DoD) y Criterios de Aceptación

- **Descripción:** Los desarrolladores están escribiendo código (o generándolo vía IA) sin una revisión profunda o comprensión de los Criterios de Aceptación, lo que resulta en pruebas fallidas al llegar a QA/Testing.

- **Evidencia observada:** Anthony menciona: _"cuando David reportaba... que no pasaban los test, entonces como que se evidenciaba que no se habían validado, no se habían revisado los criterios como tal... quizá fue alguna alucinación de la IA."_

- **Impacto en el equipo/proyecto:** Genera desperdicio (retrabajo), falsos positivos en el avance del Sprint y cuellos de botella en la etapa de pruebas.

- **Recomendación ágil:** Implementar la práctica de los "Tres Amigos" (Negocio/PO, Desarrollo y Testing) durante el Refinamiento o en la Sprint Planning para asegurar que los Criterios de Aceptación se entiendan _antes_ de escribir una sola línea de código.


### Insight 3: El impacto en cascada de los cambios de herramientas

- **Descripción:** Al decidir cambiar la herramienta principal de prototipado para evitar costos, el equipo demostró madurez al analizar cómo este cambio afectaría "aguas abajo" (downstream) a los desarrolladores y a QA.

- **Evidencia observada:** Al proponer usar Magic Patterns, David (QA) y José (Dev) advirtieron: _"cambia algunas cosas... el nombre de las pantallas... y también el mapa navegacional... utilizo los nombres de las pantallas de Figma para realizar eso"_.

- **Impacto en el equipo/proyecto:** Evitó que la solución de un problema (Discovery) se convirtiera en un bloqueador para otros (Dev/QA).

- **Recomendación ágil:** Formalizar el acuerdo. Si se va a crear un mapa navegacional y nombrar pantallas manualmente, esto debe incluirse temporalmente en la Definición de Listo (Definition of Ready - DoR) para que las Historias de Usuario puedan entrar al siguiente Sprint sin ambigüedades.

### Insight 4: Adaptabilidad del flujo de trabajo por encima de las herramientas

- **Descripción:** El equipo vivió el primer valor del Manifiesto Ágil: "Individuos e interacciones sobre procesos y herramientas". Al chocar con el límite freemium de un plugin, pivotaron su fuente de verdad hacia la IA generadora.

- **Evidencia observada:** Votación y acuerdo unánime para utilizar _Magic Patterns_ como fuente principal, reemplazando el flujo idealizado de Figma. José también menciona que pivotó de _Builder.io_ a _Copilot_ por problemas similares de créditos.

- **Impacto en el equipo/proyecto:** Mantiene la velocidad del equipo sin incurrir en bloqueos burocráticos o financieros.

- **Recomendación ágil:** Monitorear el costo operativo ("overhead" manual) de esta decisión en el Sprint 2. Si el trabajo manual de mapear pantallas reduce significativamente la velocidad, se debe reconsiderar la inversión en la herramienta adecuada.

### Insight 5: Liderazgo y facilitación directiva (Madurez inicial)

- **Descripción:** El evento fluye bien, pero depende fuertemente de la dirección del facilitador (Julio Cesar), quien instruye cada paso, agrupa las tarjetas, propone tiempos e incluso sugiere las soluciones antes de la votación.

- **Evidencia observada:** Julio dirige todo el ritmo: _"vamos a votar de los 5 votos... agruparle, no es cierto... quiero que pongan al menos uno, al menos 2 o 3 formas de hacer diferente..."_

- **Impacto en el equipo/proyecto:** Garantiza que la ceremonia cumpla su propósito técnico, pero limita la autoorganización pura del equipo de desarrollo.

- **Recomendación ágil:** Para los próximos Sprints, el Scrum Master debe adoptar gradualmente una postura de "coach" y hacer preguntas poderosas, permitiendo que el equipo agrupe sus propios problemas y proponga soluciones sin tanta intervención directiva.

### 3. Patrones Detectados

- **Bloqueos por herramientas de terceros (IA/Plugins):** Es un patrón repetitivo. Tanto Diseño (Figma limit) como Frontend (_Builder.io_ limit) se detuvieron por falta de créditos o restricciones de suscripción.

- **Excelente comunicación Inter-componentes:** Existe un patrón positivo de validación rápida ("correos de aprobación de Agile Testing", "comunicación entre Discovery y Devs"). El equipo no trabaja en silos cerrados.

- **Riesgo de delegación excesiva a la IA:** El patrón de confiar ciegamente en la IA generativa ("alucinaciones al desarrollar", "salidas que no se apegan al prototipo") está emergiendo como la principal causa de fallos en la calidad técnica.

### 4. Evaluación de Madurez Scrum

| Dimensión | Valoración | Justificación |
| :--- | :--- | :--- |
| **Transparencia** | **Alta** | Los impedimentos (técnicos y humanos) se visibilizan sin temor. Se habla abiertamente de lo que no funciona. |
| **Inspección** | **Alta** | El equipo analizó a fondo el problema del diseño, entendiendo no solo el error local, sino cómo impacta a todo el flujo de valor. |
| **Adaptación** | **Media-Alta** | Lograron pivotar su herramienta de trabajo mediante acuerdos concretos, aunque la solución añade carga manual. |
| **Autoorganización** | **Media** | Excelente diálogo, pero alta dependencia del facilitador para estructurar la conversación y guiar la toma de decisiones. |
| **Colaboración** | **Alta** | Roles distintos (QA, Dev, Design) dialogaron para encontrar un punto medio que beneficie al producto. |
| **Orientación a valor** | **Media** | La discusión se centró fuertemente en herramientas y flujos (normal en el Sprint 1). Aún falta madurez para discutir el valor entregado al usuario final. |

### 5. Riesgos Identificados

| Riesgo                                               | Evidencia en la Transcripción                                                                     | Consecuencia Potencial                                                                                       |
| :--------------------------------------------------- | :------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------- |
| **1. Calidad degradada por Alucinaciones de IA**     | "no cumplían los criterios... quizá fue alguna alucinación de la IA al momento de desarrollar"    | Incremento rechazado en la Sprint Review, acumulación de deuda técnica, pérdida de tiempo en Testing.        |
| **2. Pérdida de Trazabilidad en el Diseño**          | Al abandonar Figma interactivo: "necesitaría el nombre a las capturas... y el mapa navegacional". | Si el mapeo manual falla, los desarrolladores construirán flujos huérfanos o desconectados, rompiendo la UX. |
| **3. Dependencia de herramientas de cuota limitada** | "se me agotaba los créditos rapidísimo... me quedaba un día entero muerto" (José).                | Cuellos de botella impredecibles. Los desarrolladores quedarán inactivos ("idle") en medio del Sprint.       |

### 6. Oportunidades de Mejora (Priorizadas para el Sprint 2)

1.  **Refuerzo de Criterios de Aceptación (Proceso):** El equipo de desarrollo debe hacer un "Check" obligatorio de los Criterios de Aceptación _antes_ de enviar la tarea a la columna de Testing. No se debe asumir que el código generado por IA cumple con las reglas de negocio automáticamente.

2.  **Estandarización del "Handoff" de Diseño (Comunicación):** Ya que se acordó usar _Magic Patterns_ directamente, Sebastián (Discovery) debe establecer un estándar inmediato de nomenclatura y un formato para el mapa navegacional (ej. un esquema simple en Miro o un documento Markdown) para que David y José no se bloqueen.

3.  **Auditoría de Herramientas IA (Técnica):** Hacer un inventario rápido de las herramientas de IA que usa el equipo y sus límites (Figma, Copilot, Magic Patterns). Si una herramienta gratuita detiene el desarrollo ("me quedaba un día entero muerto"), el costo del retraso es mayor que el costo de la suscripción. Escalar este riesgo a los Stakeholders si es necesario.

### 7. Conclusión General

Para tratarse del Sprint 1, el equipo muestra una salud organizacional y una cultura ágil excepcionalmente buenas. La presencia de seguridad psicológica es su mayor activo, lo que les permite hacer que el empirismo (inspección y adaptación) funcione en la práctica y no solo en la teoría. Su capacidad para resolver colaborativamente un impedimento severo en su cadena de herramientas demuestra alineación.

El desafío principal para los próximos Sprints será **gestionar la relación del equipo con la Inteligencia Artificial**. Actualmente, están sufriendo anti-patrones donde la IA dicta la calidad (alucinaciones) y el ritmo (créditos limitados). El equipo debe madurar desde ser _consumidores pasivos_ de IA hacia ser _ingenieros críticos_, asegurando que el marco Scrum (específicamente la revisión rigurosa de Criterios de Aceptación y la Definición de Terminado) actúe como red de seguridad contra el código defectuoso generado automáticamente.
